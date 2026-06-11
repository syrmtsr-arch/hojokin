# Wiki 操作ログ

## [2026-06-12] update | 定期巡回URL一覧にSBIR・省庁・自治体公募サイトを追加

- [[subsidy-calendar-2026]]（wiki/sources・raw/inbox両方）の「定期巡回URL一覧」に以下を追加
  - ISICO 補助金・公募情報一覧、金沢市 補助金・助成金一覧
  - SBIR制度ポータル（内閣府）、ミラサポplus、jGrants、中小企業庁予算・公募案内、NEDO公募情報、JST公募情報
- 今後の「補助金情報を更新して」依頼時はこれらも巡回対象に含める

## [2026-06-12] update | note記事の毎月更新方針・構成を決定

- ユーザーと協議し、note記事（毎月更新）の構成テンプレートを確定
  - ①今月の最重要トピック／②今月〜来月が動きどきの制度／③準備しておきたい制度／④毎月テーマを変えるミニ特集（①〜③からのピックアップ、テーマ非該当でも①〜③は必ず網羅）／⑤相談CTA
  - 各制度紹介の必須項目（対象・金額・補助率・公募期間・「こんな人向け」・リンク）
- 情報収集対象を拡張：補助金・助成金に加え、SBIR等の研究開発型公募、中央省庁・自治体の公募情報も毎月チェック対象に追加
- 更新したページ：wiki/synthesis/note-article-improvement-2026.md

## [2026-06-12] ingest | TENJO KANAZAWA note記事シリーズ「補助金情報」（2026年）

- インジェスト元：`raw/inbox/` の note記事3本（2026-02-05 / 2026-04-07 / 2026-06-10公開）
- 作成したページ：
  - wiki/sources/tenjo-note-articles-2026.md
  - wiki/entities/tenjo-kanazawa.md
  - wiki/synthesis/note-article-improvement-2026.md（改善方針・検討中）
- 更新したページ：wiki/index.md
- ユーザーより「アルバイトスタッフが書いており内容として役に立っていない」とのフィードバックあり。改善方針はsynthesisページで継続検討

## [2026-06-11] update | 補助金情報をWeb検索で確認・更新

- 公式サイト・Web検索で以下を確認
  - のとスタ補助金・新商品/サービス助成金・スタートアップ創出支援事業（F/S・アクセラレーション両枠）：いずれも公募中で、6月12日16時締切に変更・延長なしを確認
  - 起業支援金（移住支援）・三谷ビジネスコンテスト・いしかわアクセラレータープログラム：令和8年度の公募は引き続き未発表（要継続フォロー）
  - 中小企業省力化投資補助金（第7回）：6/5公開の公募要領内容に変更なし
- 更新したページ：
  - raw/inbox/subsidy-database-ishikawa-startup-2026.md（→ wiki/sources/にも反映）
  - raw/inbox/subsidy-calendar-2026.md（→ wiki/sources/にも反映）
  - raw/inbox/subsidy-guide-2026.html（更新日表示）
  - webapp/subsidies.json（updated・source_note）

## [2026-06-08] update | 補助金情報をWeb検索で確認・更新

- 公式サイト・Web検索で以下を確認し、`raw/inbox/`および`wiki/sources/`の該当ファイルを更新
  - のとスタ補助金・新商品/サービス助成金・スタートアップ創出支援事業：公募期間（4/20または5/18〜6/12）を公式サイトで再確認（変更なし）。スタートアップ創出支援はF/S枠5件程度・アクセラレーション枠3件程度の採択予定件数を追記
  - 起業支援金（移住支援）：令和7年度公募実績（締切2025/5/30）を確認したが、**令和8年度の公募はまだ未発表**（要継続フォロー）
  - 中小企業省力化投資補助金：第7回公募要領が2026年6月5日公開。申請受付7月上旬・締切7月下旬・採択発表11月中旬（予定）に確定。GビズIDプライム必須等の変更点を追記
  - 三谷ビジネスコンテスト・いしかわアクセラレータープログラム：2026年度の公募は引き続き未発表（変更なし）
- 更新したページ：
  - raw/inbox/subsidy-database-ishikawa-startup-2026.md（→ wiki/sources/にも反映）
  - raw/inbox/subsidy-calendar-2026.md（→ wiki/sources/にも反映）

## [2026-06-05] ingest | 石川県スタートアップ支援制度データベース（初回）

- インジェスト元：`raw/inbox/`（7ファイル）
- 処理対象：subsidy-calendar-2026.md / subsidy-database-ishikawa-startup-2026.md / subsidy-database-municipalities-2026.md
- スキップ：subsidy_pptx.js（スクリプト）/ subsidy-guide-2026.html（生成済み出力）/ subsidy-presentation-source.md（スライド構成メタデータ）/ note-article-draft.md（生成済み出力）
- 作成したページ：
  - wiki/sources/subsidy-calendar-2026.md
  - wiki/sources/subsidy-database-ishikawa-startup-2026.md
  - wiki/sources/subsidy-database-municipalities-2026.md
  - wiki/entities/isico.md
  - wiki/entities/kanazawa-city.md
  - wiki/concepts/startup-support-ecosystem-ishikawa.md
  - wiki/overview.md
  - wiki/index.md
  - wiki/log.md（このファイル）
