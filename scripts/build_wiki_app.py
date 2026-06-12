#!/usr/bin/env python3
"""wiki/ 配下のMarkdownページを webapp/wiki/content.json にまとめる。

ingestや更新でwikiページを追加・編集した後に実行すること:
    python scripts/build_wiki_app.py
"""
import json
import re
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WIKI = ROOT / "wiki"
OUT = ROOT / "webapp" / "wiki" / "content.json"

TYPE_LABELS = {
    "overview": "概要",
    "source": "ソース要約",
    "entity": "エンティティ",
    "concept": "概念",
    "synthesis": "分析・考察",
    "log": "更新履歴",
}

FRONTMATTER_RE = re.compile(r"^---\n(.*?)\n---\n(.*)$", re.DOTALL)


def parse_list(value):
    value = value.strip()
    if value.startswith("[") and value.endswith("]"):
        inner = value[1:-1].strip()
        if not inner:
            return []
        return [v.strip().strip('"').strip("'") for v in inner.split(",")]
    return []


def parse_frontmatter(text):
    m = FRONTMATTER_RE.match(text)
    if not m:
        return {}, text
    raw, body = m.group(1), m.group(2)
    meta = {}
    lines = raw.split("\n")
    i = 0
    while i < len(lines):
        line = lines[i]
        if not line.strip() or line.startswith("#"):
            i += 1
            continue
        if ":" in line:
            key, _, value = line.partition(":")
            key = key.strip()
            value = value.strip()
            if value == "" and i + 1 < len(lines) and lines[i + 1].lstrip().startswith("-"):
                items = []
                j = i + 1
                while j < len(lines) and lines[j].lstrip().startswith("-"):
                    items.append(lines[j].lstrip()[1:].strip().strip('"').strip("'"))
                    j += 1
                meta[key] = items
                i = j
                continue
            if value.startswith("[") and value.endswith("]"):
                meta[key] = parse_list(value)
            else:
                meta[key] = value.strip('"').strip("'")
        i += 1
    return meta, body.strip() + "\n"


def collect():
    pages = []

    for path in sorted(WIKI.glob("**/*.md")):
        rel = path.relative_to(WIKI)
        if rel.name == "index.md":
            continue

        text = path.read_text(encoding="utf-8")

        if rel.name == "log.md":
            pages.append({
                "id": "log",
                "type": "log",
                "title": "更新履歴",
                "tags": [],
                "updated": "",
                "sources": [],
                "content": text,
            })
            continue

        meta, body = parse_frontmatter(text)
        page_id = path.stem
        pages.append({
            "id": page_id,
            "type": meta.get("type", "page"),
            "title": meta.get("title", page_id),
            "tags": meta.get("tags", []) if isinstance(meta.get("tags", []), list) else [],
            "updated": meta.get("updated", ""),
            "sources": meta.get("sources", []) if isinstance(meta.get("sources", []), list) else [],
            "content": body,
        })

    return pages


def main():
    pages = collect()
    data = {
        "generated": date.today().isoformat(),
        "typeLabels": TYPE_LABELS,
        "pages": pages,
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"wrote {OUT} ({len(pages)} pages)")


if __name__ == "__main__":
    main()
