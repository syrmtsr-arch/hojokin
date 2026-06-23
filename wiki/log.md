# Wiki 操作ログ

## [2026-06-23] update | HTMLガイド全体に公式ページへのリンクを追加

- ユーザー依頼「それぞれの補助金・助成金・公募の関連ページのリンクをつけることはできる？」に対応し、対象範囲を「HTMLガイド全体」とユーザーに確認のうえ実施
- raw/inbox/subsidy-guide-2026.html の7スライド（s4規模別一覧・s5ステージ別・s6相談窓口・s7市町村別・s8カレンダー・s9国の補助金・s11内部メモ）に、計約68件の公式ページ／一覧ページへのリンク（`.prog-link`クラス）を追加
- URLはraw/inbox/subsidy-database-ishikawa-startup-2026.md・subsidy-calendar-2026.md・webapp/subsidies.jsonの既存調査データから突き合わせ。推測でURLを作成せず、不明な項目（羽咋市創業等応援補助金、各市町村の一部制度、ITビジネスプラザ武蔵等）はリンクなしのまま残した
- 一覧ページへのリンクにはtitle属性で「一覧」である旨を明記

- ユーザー指摘「3枚目のページ（締切間近の制度一覧）は不要では？すでに終わった補助金の情報ばかりで意味がない」に対応
- raw/inbox/subsidy-guide-2026.html のスライド3（id="s3"）を削除。内容は自動化設備投資準備補助金1件のみが現役で、残り8件は締切済みの一覧で実用性が低かった
- ナビゲーション（toc-nav）・目次（toc-grid）の番号を1つずつ詰めて再採番。未使用になったCSS（.urgent-*, .badge-*, #s3）も削除
- 自動化設備投資準備補助金（6/26締切）の情報自体はスライド10（まとめ）に既存の記載があるため情報損失なし

- ユーザー依頼「創業期に限らなくていいので、内部メモとしているものも本文に付け加える形で、本文を構成しなおして」に対応
- raw/inbox/note-article-draft.mdのタイトル・導入文を「起業・事業拡大」向けに広げ、これまで内部メモ（HTMLガイドのスライド11）にのみ記載していた制度を本文に統合
  - 金額順リストに「NEDO DTSU/GX事業（5〜25億円・見込み）」「中小企業成長加速化補助金（上限5億円・見込み）」「新事業進出・ものづくり補助金統合新制度（見込み）」「研究開発型公募（SBIR等）の概要」を新規セクションとして追加
  - ステージ別セクションに「規模拡大期・事業会社連携を目指す方へ」を新設
  - 年間カレンダー・まとめセクションにも上記制度の締切・見込み時期を反映
- 「⚠️見込み・未確定」の制度は本文中でもその旨を明記（事実と推測の区別を維持）

## [2026-06-23] update | 国の補助金・助成金・研究開発型公募を新規調査・追加（JST早暁プログラム等5件）

- ユーザー依頼「国の補助金・助成金、研究開発の公募を探してほしい」に対応し、jGrants・ミラサポplus・SBIR制度ポータル・NEDO・JST・中小企業庁の公募情報を調査
- 既存トラッキングに含まれていない新規5件を発見・追加
  - **JST 大学発新産業創出基金事業 早暁プログラム第3期**（2026年4月10日〜7月13日正午・**現在公募中・確度高**）：大学等の技術シーズで起業を目指す個人向け
  - 中小企業成長加速化補助金（3次公募・夏頃見込み）：⚠️見込み情報・対象規模大きくスタートアップには不向き
  - 新事業進出・ものづくり補助金（統合新制度・6月頃見込み）：⚠️見込み情報・既存ものづくり補助金との統合可能性
  - NEDO ディープテック・スタートアップ支援基金（DTSU）／GX事業（6月以降予告）：⚠️見込み情報・レイターステージ向け
  - NEDO NEP開拓コース（例年1〜2月下旬）：⚠️見込み情報・次回時期要再確認
- 確度に応じて「✅現在公募中」「⚠️予告・見込み段階（要確認）」を明示して記載
- 更新したページ：
  - raw/inbox/subsidy-database-ishikawa-startup-2026.md（【国の研究開発型公募（SBIR等）】セクションに新規サブセクションを追加）→ wiki/sources/に同期
  - raw/inbox/subsidy-calendar-2026.md（国の補助金テーブル・URLリストに追加）→ wiki/sources/に同期
  - webapp/subsidies.json（新規5件を追加、source_note更新）
  - raw/inbox/subsidy-guide-2026.html（スライド11「内部メモ」に✅現在公募中／⚠️予告見込みセクションを追加）

## [2026-06-23] update | 補助金情報を再確認（起業支援金が締切済みに移行、自動化設備投資準備補助金6/26締切が直近の注目点）

- Web検索・ISICO公式ページ等で6/15時点からの変化を確認。主要制度は実質変化なしだが、以下を更新
  - 起業支援金（いしかわ移住支援事業・令和8年度）：6月15日締切が経過し「本日締切」→「締切済み」に変更
  - 自動化設備投資準備補助金（6月26日締切）：前年度（令和7年度）実績として上限100万円・補助率2/3を確認（令和8年度の正式な金額・補助率は未確認のため要継続フォロー）
  - 中小企業省力化投資補助金（第7回）・いしかわアクセラレーター（R8）・三谷ビジネスコンテスト2026・地域連携若者起業家支援（下期）：いずれも変化なし
- 更新したページ：
  - raw/inbox/subsidy-calendar-2026.md（updated日付・締切済みセクションを更新）→ wiki/sources/subsidy-calendar-2026.md に同期
  - raw/inbox/subsidy-database-ishikawa-startup-2026.md（起業支援金の備考更新・ログ追記）→ wiki/sources/subsidy-database-ishikawa-startup-2026.md に同期
  - webapp/subsidies.json（起業支援金のstatus/note更新、自動化設備投資準備補助金のnote更新、updated日付・source_note更新）
  - raw/inbox/subsidy-guide-2026.html（更新日表示、スライド3・8・10のステータスを「締切済み」に更新）
  - raw/inbox/note-article-draft.md（年間カレンダー・まとめセクションの日付・締切状況を更新）

## [2026-06-15] update | SBIR等・大学連携情報をwebapp/HTMLガイドに反映

- データベースに新設した「【国の研究開発型公募（SBIR等）】」（6件・すべて締切済み・来年度参考）と「【大学・研究機関連携・アカデミア向け公募】」（Y-tec、関西エネルギー・リサイクル科学研究振興財団）を、webapp/subsidies.jsonとHTMLガイドにも反映
- 更新したページ：
  - webapp/subsidies.json（新規8件を追加。カテゴリ「国の研究開発型公募（SBIR等）」「大学・研究機関連携」を新設し、フィルタに自動反映。source_noteも更新）
  - raw/inbox/subsidy-guide-2026.html（新規スライド `#s11`「【内部メモ】国の研究開発型公募（SBIR等）・大学連携情報」を追加。目次（toc-card 07）・ナビゲーションにもリンクを追加）

## [2026-06-15] update | 補助金カレンダーを最新化（6/12締切7件→締切済み、新規6/15締切を発見）

- Web検索・ISICO公式ページで最新状況を確認し、以下を更新
  - 2026年6月12日締切だった7制度（のとスタ補助金・新商品/新サービス開発支援助成金・成長戦略ファンド DX/GX・FS・国プロFS・スタートアップ創出支援 F/S枠・アクセラレーション枠）はすべて締切済みに変更。次回公募は未発表
  - 【新規発見・要対応】起業支援金（いしかわ移住支援事業・令和8年度）が2026年4月1日から公募中で、**締切は本日2026年6月15日17時必着**であることを確認（対象地域は東京圏に拡大）。「通年・随時」扱いから「本日締切」に変更
- 更新したページ：
  - raw/inbox/subsidy-database-ishikawa-startup-2026.md（→ wiki/sources/subsidy-database-ishikawa-startup-2026.md にも反映）
  - raw/inbox/subsidy-calendar-2026.md（→ wiki/sources/subsidy-calendar-2026.md にも反映）
  - raw/inbox/subsidy-guide-2026.html（ガントチャート・「今すぐ申請」スライド・規模別一覧・ステージ別おすすめ・まとめ・更新日表示を更新）
  - webapp/subsidies.json（7制度を締切済みに変更、起業支援金を本日締切として追加・更新）
  - raw/inbox/note-article-draft.md（年間カレンダー・まとめのアクション項目を更新）
- 【フォローアップ】SBIR制度ポータルでSBIR系・中央省庁の研究開発型公募6件（NEDO・JST・国交省・防衛装備庁・環境省）を確認したが、いずれも締切済み（最終は環境省「環境スタートアップ研究開発支援事業」6/15）。今期は対応不可のため「【国の研究開発型公募（SBIR等）】」セクションを新設し記録のみ。**来年同時期（2027年3〜6月頃）に同枠の再公募有無を再確認すること**
- 【運用ルール追加】本カレンダー・データベースはTENJO内部（支援機関）向けのため、起業家向けより広く情報を収録する方針に変更。JST産学官連携メールマガジン等で届く大学・研究機関向け公募・連携情報も「【大学・研究機関連携・アカデミア向け公募】」セクションに記録する（`raw/README.md`にルール追記）。2026-06-15号より「日ASEAN Y-tec（2026年度）」「関西エネルギー・リサイクル科学研究振興財団 助成事業」を記録

## [2026-06-12] update | Wikiビューア（webapp/wiki/）を新規作成

- 既存の補助金ナビ・作業マニュアルとは別の新規Webアプリとして、wiki全ページ（overview/sources/entities/concepts/synthesis/log）を閲覧できるサイドバー付きビューアを作成
- `scripts/build_wiki_app.py`：wiki/*.mdのフロントマターと本文を`webapp/wiki/content.json`にまとめるビルドスクリプトを新規作成（wiki更新後に再実行する運用をCLAUDE.mdに追記）
- `webapp/wiki/index.html`：カテゴリ別ナビ・全文検索・[[wikilink]]解決・被リンク表示を備えたビューア
- `webapp/index.html`・`webapp/manual.html`に新Wikiへの相互リンクを追加
- `wiki/entities/kanazawa-city.md`のtitleの誤字（창業→創業）を修正
- GitHub Pagesの既存デプロイ（`webapp/`全体を公開）に相乗りするため、ワークフロー変更は不要

## [2026-06-12] update | スタッフ向け作業マニュアルを作成

- バイトスタッフへのリポジトリ共有（pushなし・パブリック閲覧前提）に向けて、`STAFF_MANUAL.md` / `STAFF_MANUAL.html` をリポジトリルートに作成
- 内容：プロジェクトのclone/pull手順、Claude Codeでの開き方、`raw/inbox/subsidy-guide-2026.html`での補助金情報閲覧方法、note記事下書きの作成手順（構成テンプレート・必須項目・Markdownの開き方）、トラブルシューティング
- wiki配下のページではないため`wiki/index.md`の対象外（リポジトリ直下のドキュメントとして管理）

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
