# 石川県スタートアップ支援制度ガイド — ファイル一式

最終更新：2026年6月5日

---

## ファイル構成

| ファイル | 内容 |
|---|---|
| `subsidy-calendar-2026.md` | **メインカレンダー**。月別の締切一覧、通年制度、相談窓口など |
| `subsidy-database-ishikawa-startup-2026.md` | ISICO・石川県・国の制度データベース（詳細条件あり） |
| `subsidy-database-municipalities-2026.md` | 石川県内市町村別の制度データベース |
| `subsidy-presentation-source.md` | スライド（PPTX）の構成と元データ |
| `subsidy_pptx.js` | PPTXを自動生成するNode.jsスクリプト |

---

## カレンダーを読むだけなら

`subsidy-calendar-2026.md` を開いてください。Obsidian・VS Code・NotionなどのMarkdownビューアで読めます。

---

## PPTXを（再）生成するには

Node.js と pptxgenjs が必要です。

```bash
# pptxgenjsのインストール（初回のみ）
npm install -g pptxgenjs

# スクリプト実行
node subsidy_pptx.js
```

出力先：`C:\Users\syrmt\Downloads\石川県スタートアップ支援制度ガイド_2026.pptx`

出力先パスを変えたい場合は `subsidy_pptx.js` の末尾 `outPath` を編集してください。

---

## 内容を更新するには

1. `subsidy-calendar-2026.md` または各データベースファイルを編集
2. `subsidy-presentation-source.md` のスライド構成に反映
3. `subsidy_pptx.js` の該当箇所を修正してスクリプトを再実行

---

## ⚠️ 直近の締切

**2026年6月12日（金）16時** — 以下7制度が同日締切

- 成長戦略ファンド DX/GX研究開発（最大3,000万円・補助率2/3）
- のとスタ補助金（最大1,000万円/年・補助率3/4）
- スタートアップ創出支援 アクセラレーション枠（最大500万円・補助率3/4）
- 成長戦略ファンド 国プロFS（最大500万円・全額補助）
- 新商品・新サービス開発支援助成金（最大300万円）
- 成長戦略ファンド FS（最大200万円・全額補助）
- スタートアップ創出支援 F/S枠（最大100万円・全額補助）
