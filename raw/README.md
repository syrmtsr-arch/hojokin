# 石川県スタートアップ支援制度ガイド — ファイル一式

最終更新：2026年6月12日

---

## ファイル構成

| ファイル | 内容 |
|---|---|
| `subsidy-calendar-2026.md` | **メインカレンダー**。月別の締切一覧、通年制度、相談窓口など |
| `subsidy-database-ishikawa-startup-2026.md` | ISICO・石川県・国の制度データベース（詳細条件あり） |
| `subsidy-database-municipalities-2026.md` | 石川県内市町村別の制度データベース |
| `subsidy-guide-2026.html` | **成果物HTML**（プレゼン形式のガイド本体） |
| `subsidy-presentation-source.md` | HTMLガイドのスライド構成・元データ |
| `subsidy_pptx.js` | （旧）PPTX生成スクリプト。現在は使用していません |

`webapp/` フォルダには、このデータをWebアプリとして表示する `index.html` と `subsidies.json` があります。

---

## Webアプリ（公開版）

以下のURLで誰でも閲覧できます。

**https://syrmtsr-arch.github.io/hojokin/**

- ホスティング：GitHub Pages（リポジトリ `syrmtsr-arch/hojokin`）
- デプロイ方法：`webapp/**` を `master` ブランチにpushすると、GitHub Actions（`.github/workflows/deploy-pages.yml`）が自動でビルド・公開
- 手動で再デプロイしたい場合：`gh workflow run deploy-pages.yml --repo syrmtsr-arch/hojokin`
- Pages設定：リポジトリの Settings → Pages → Build and deployment → Source は「GitHub Actions」

---

## カレンダーを読むだけなら

`subsidy-calendar-2026.md` を開いてください。Obsidian・VS Code・NotionなどのMarkdownビューアで読めます。

プレゼン形式で見たい場合は `subsidy-guide-2026.html` をブラウザで開いてください。

---

## 内容を更新するには

Claude（このリポジトリのAIアシスタント）に「カレンダーを更新して」「補助金情報を最新化して」のように依頼してください。チャットで依頼するたびに、Claudeが以下を行います。

1. ISICOや各補助金の公式サイトをWeb検索で確認し、締切・採択件数・公募状況の変更点をチェック
2. 変更があれば次の3つに反映
   - `subsidy-calendar-2026.md` / `subsidy-database-ishikawa-startup-2026.md`（元データ）
   - `subsidy-guide-2026.html`（`#s8` のガントチャート部分・更新日表示など）
   - `webapp/subsidies.json`（deadline/status/note/updated）
3. **情報に変更があった場合**、`note-article-draft.md`（note.com掲載用記事）も最新情報に合わせて書き直す
4. `wiki/log.md`に作業記録を追記、`wiki/sources/`配下の対応ページにも反映

PPTXは現在生成していません。

定期的に自動でチェックしてほしい場合は、Claude Codeの`/schedule`機能でクラウド側の定期実行エージェントを設定できます。

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
