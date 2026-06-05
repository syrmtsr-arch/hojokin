const pptxgen = require("C:/Users/syrmt/AppData/Roaming/npm/node_modules/pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "石川県・北陸スタートアップ支援制度ガイド 2026年度版";

// カラーパレット
const C = {
  navy:    "1A3A5C",
  navyDk: "0F2338",
  teal:    "0D7C8C",
  tealLt: "12A5BA",
  gold:    "F5A623",
  white:   "FFFFFF",
  offWht:  "F4F7FA",
  gray:    "64748B",
  grayLt:  "E2EBF4",
  red:     "DC2626",
  green:   "16A34A",
};

const makeShadow = () => ({ type: "outer", color: "000000", blur: 8, offset: 3, angle: 135, opacity: 0.12 });

// ============================================================
// スライド1: タイトル
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.navyDk };

  // 背景装飾（右側の大きな円）
  s.addShape(pres.shapes.OVAL, { x: 6.5, y: -1.5, w: 6, h: 6, fill: { color: C.navy }, line: { color: C.navy } });
  s.addShape(pres.shapes.OVAL, { x: 7.5, y: -0.5, w: 4, h: 4, fill: { color: C.teal, transparency: 60 }, line: { color: C.teal, transparency: 60 } });

  // 金のアクセントバー
  s.addShape(pres.shapes.RECTANGLE, { x: 0.55, y: 1.5, w: 0.08, h: 2.6, fill: { color: C.gold }, line: { color: C.gold } });

  // タイトル
  s.addText("石川県・北陸\nスタートアップ支援制度ガイド", {
    x: 0.7, y: 1.4, w: 7.5, h: 2.0,
    fontSize: 32, bold: true, color: C.white,
    fontFace: "Meiryo", align: "left", valign: "top", margin: 0,
  });

  s.addText("2026年度版", {
    x: 0.7, y: 3.35, w: 4, h: 0.45,
    fontSize: 16, color: C.gold, fontFace: "Meiryo", align: "left", margin: 0,
  });

  s.addText("TENJO KANAZAWA 創業支援メンバー向け資料", {
    x: 0.7, y: 3.9, w: 7, h: 0.4,
    fontSize: 11, color: "AABCCE", fontFace: "Meiryo", align: "left", margin: 0,
  });

  // 右下の制度数バッジ
  s.addShape(pres.shapes.OVAL, { x: 7.8, y: 3.6, w: 1.8, h: 1.8, fill: { color: C.gold }, line: { color: C.gold } });
  s.addText("60+", { x: 7.8, y: 3.75, w: 1.8, h: 0.6, fontSize: 28, bold: true, color: C.navyDk, fontFace: "Meiryo", align: "center", margin: 0 });
  s.addText("件の制度を収録", { x: 7.6, y: 4.3, w: 2.2, h: 0.4, fontSize: 9, color: C.navyDk, fontFace: "Meiryo", align: "center", margin: 0 });

  // 作成日
  s.addText("作成：2026年6月5日", {
    x: 0.5, y: 5.2, w: 4, h: 0.3,
    fontSize: 9, color: "6A8BAA", fontFace: "Meiryo", align: "left", margin: 0,
  });
}

// ============================================================
// ヘルパー: コンテンツスライドのヘッダー
// ============================================================
function addHeader(s, title, sub) {
  s.background = { color: C.offWht };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.75, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText(title, { x: 0.35, y: 0, w: 8, h: 0.75, fontSize: 20, bold: true, color: C.white, fontFace: "Meiryo", valign: "middle", margin: 0 });
  if (sub) {
    s.addText(sub, { x: 0, y: 0.75, w: 10, h: 0.35, fontSize: 11, color: C.gray, fontFace: "Meiryo", align: "center", valign: "middle", margin: 0 });
  }
}

// カード描画ヘルパー
function addCard(s, x, y, w, h, opts = {}) {
  s.addShape(pres.shapes.RECTANGLE, {
    x, y, w, h,
    fill: { color: opts.fill || C.white },
    line: { color: opts.border || C.grayLt, pt: 1 },
    shadow: makeShadow(),
  });
  if (opts.accent) {
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.07, h, fill: { color: opts.accent }, line: { color: opts.accent } });
  }
}

// ============================================================
// スライド2: 目次
// ============================================================
{
  const s = pres.addSlide();
  addHeader(s, "本日の目次", "");

  const items = [
    { num: "01", title: "⚠️ 今すぐ申請！6月12日締切の制度",  color: C.red },
    { num: "02", title: "補助金・助成金 規模別一覧",           color: C.teal },
    { num: "03", title: "創業ステージ別おすすめ制度",           color: C.navy },
    { num: "04", title: "無料で使える相談窓口・施設",           color: C.green },
    { num: "05", title: "市町村別 主要補助金マップ",            color: C.teal },
    { num: "06", title: "年間カレンダー",                       color: C.gold },
  ];

  items.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.8;
    const y = 1.2 + row * 1.3;
    addCard(s, x, y, 4.5, 1.1, { accent: item.color });
    s.addText(item.num, { x: x + 0.2, y: y + 0.1, w: 0.6, h: 0.9, fontSize: 22, bold: true, color: item.color, fontFace: "Meiryo", valign: "middle", margin: 0 });
    s.addText(item.title, { x: x + 0.85, y: y + 0.15, w: 3.5, h: 0.8, fontSize: 13, bold: true, color: C.navy, fontFace: "Meiryo", valign: "middle", margin: 0 });
  });
}

// ============================================================
// スライド3: 6月12日締切
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: "FEF2F2" };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.75, fill: { color: C.red }, line: { color: C.red } });
  s.addText("⚠️ 今すぐ申請！6月12日（金）16時 締切", {
    x: 0.3, y: 0, w: 9.4, h: 0.75, fontSize: 19, bold: true, color: C.white, fontFace: "Meiryo", valign: "middle", margin: 0,
  });
  s.addText("以下の制度はすべて2026年6月12日が締切です。お急ぎください。", {
    x: 0.3, y: 0.8, w: 9.4, h: 0.35, fontSize: 11, color: C.red, fontFace: "Meiryo", margin: 0,
  });

  const urgents = [
    { name: "成長戦略ファンド DX/GX研究開発", amt: "最大3,000万円", rate: "補助率2/3", note: "2者以上連携体・県内企業が代表" },
    { name: "のとスタ補助金", amt: "最大3,000万円", rate: "補助率3/4", note: "能登での実証事業（3年で計9,000万円）" },
    { name: "スタートアップ創出 アクセラ枠", amt: "最大500万円", rate: "補助率3/4", note: "起業後10年以内・県内登記" },
    { name: "成長戦略ファンド 国プロFS", amt: "最大500万円", rate: "全額補助", note: "国の競争的資金獲得を目指す企業" },
    { name: "新商品・新サービス開発支援助成金", amt: "最大300万円", rate: "補助率2/3", note: "地域資源活用・社会課題解決" },
    { name: "成長戦略ファンド FS", amt: "最大200万円", rate: "全額補助", note: "単独企業も可・事業化可能性調査" },
    { name: "スタートアップ創出 F/S枠", amt: "最大100万円", rate: "全額補助", note: "起業5年以内または起業予定者" },
  ];

  urgents.forEach((u, i) => {
    const y = 1.25 + i * 0.58;
    addCard(s, 0.3, y, 9.4, 0.52, { accent: C.red, fill: C.white });
    s.addText(u.name, { x: 0.55, y: y + 0.04, w: 3.8, h: 0.44, fontSize: 11, bold: true, color: C.navy, fontFace: "Meiryo", valign: "middle", margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x: 4.4, y: y + 0.1, w: 1.6, h: 0.32, fill: { color: C.red }, line: { color: C.red } });
    s.addText(u.amt, { x: 4.4, y: y + 0.1, w: 1.6, h: 0.32, fontSize: 10, bold: true, color: C.white, fontFace: "Meiryo", align: "center", valign: "middle", margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x: 6.1, y: y + 0.1, w: 1.2, h: 0.32, fill: { color: C.teal }, line: { color: C.teal } });
    s.addText(u.rate, { x: 6.1, y: y + 0.1, w: 1.2, h: 0.32, fontSize: 9, bold: true, color: C.white, fontFace: "Meiryo", align: "center", valign: "middle", margin: 0 });
    s.addText(u.note, { x: 7.4, y: y + 0.1, w: 2.2, h: 0.32, fontSize: 8.5, color: C.gray, fontFace: "Meiryo", valign: "middle", margin: 0 });
  });
}

// ============================================================
// スライド4: 補助金規模別一覧
// ============================================================
{
  const s = pres.addSlide();
  addHeader(s, "補助金・助成金 規模別一覧", "金額の大きい順");

  const grants = [
    { tier: "3億円", name: "Go-Tech事業（大型研究開発枠）", body: "中小機構", note: "大学連携・3年間支援。次回は2027年2月頃公募", color: "7C3AED" },
    { tier: "3,000万円", name: "成長戦略ファンド DX/GX研究開発", body: "ISICO", note: "★6/12締切　2者以上の連携体", color: C.red },
    { tier: "3,000万円", name: "のとスタ補助金（年1,000万×3年）", body: "石川県", note: "★6/12締切　能登での実証事業", color: C.red },
    { tier: "1億円/年", name: "Go-Tech事業（通常枠）", body: "中小機構", note: "大学連携・3年合計9,750万。次回2027年2月頃", color: "7C3AED" },
    { tier: "500万円", name: "スタートアップ創出 アクセラ枠", body: "ISICO", note: "★6/12締切　起業後10年以内", color: C.red },
    { tier: "500万円", name: "国プロFS", body: "ISICO", note: "★6/12締切　全額補助", color: C.red },
    { tier: "500万円", name: "羽咋市創業等応援補助金", body: "羽咋市", note: "若者・転入・まちなか立地で加算", color: C.teal },
    { tier: "300万円", name: "新商品・新サービス開発支援助成金", body: "ISICO", note: "★6/12締切　地域資源活用・社会課題解決", color: C.red },
  ];

  grants.forEach((g, i) => {
    const y = 1.15 + i * 0.54;
    addCard(s, 0.3, y, 9.4, 0.48, { accent: g.color, fill: i % 2 === 0 ? C.white : C.offWht });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: y + 0.08, w: 1.5, h: 0.32, fill: { color: g.color }, line: { color: g.color } });
    s.addText(g.tier, { x: 0.5, y: y + 0.08, w: 1.5, h: 0.32, fontSize: 11, bold: true, color: C.white, fontFace: "Meiryo", align: "center", valign: "middle", margin: 0 });
    s.addText(g.name, { x: 2.15, y: y + 0.04, w: 4.8, h: 0.4, fontSize: 11, bold: true, color: C.navy, fontFace: "Meiryo", valign: "middle", margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x: 7.0, y: y + 0.1, w: 0.8, h: 0.28, fill: { color: C.grayLt }, line: { color: C.grayLt } });
    s.addText(g.body, { x: 7.0, y: y + 0.1, w: 0.8, h: 0.28, fontSize: 8, color: C.navy, fontFace: "Meiryo", align: "center", valign: "middle", margin: 0 });
    s.addText(g.note, { x: 7.85, y: y + 0.1, w: 1.8, h: 0.28, fontSize: 7.5, color: C.gray, fontFace: "Meiryo", valign: "middle", margin: 0 });
  });

  s.addText("★ = 6月12日締切", { x: 8.2, y: 5.25, w: 1.7, h: 0.25, fontSize: 8, color: C.red, fontFace: "Meiryo", align: "right", margin: 0 });
}

// ============================================================
// スライド5: ステージ別おすすめ
// ============================================================
{
  const s = pres.addSlide();
  addHeader(s, "創業ステージ別おすすめ制度", "あなたの状況に合った制度を選ぼう");

  const stages = [
    {
      stage: "創業前",
      color: C.teal,
      icon: "💡",
      items: ["スタートアップ創出支援 F/S枠（最大100万・全額補助）", "ISICO 創業サポートデスク（無料相談）", "金沢市 起業・経営サポートカウンター（無料）", "いしかわ創業なび（総合ポータル）", "各市町村 創業塾（無料〜5,000円）"],
    },
    {
      stage: "創業直後\n（5年以内）",
      color: C.navy,
      icon: "🚀",
      items: ["新商品・新サービス開発支援助成金（最大300万）", "スタートアップ創出支援 アクセラ枠（最大500万）", "地域連携若者起業家支援（最大200万・40歳未満）", "ISICO 専門家派遣事業（年3回・無料）", "起業支援金 移住支援（最大200万・移住者のみ）"],
    },
    {
      stage: "成長期\n（10年以内）",
      color: "7C3AED",
      icon: "📈",
      items: ["成長戦略ファンド DX/GX研究開発（最大3,000万）", "いしかわアクセラレータープログラム（伴走支援）", "Go-Tech事業（最大3億・大学連携必須）", "海外販路開拓支援（最大100万）", "TeSH GAPファンド（大学・高専発スタートアップ向け）"],
    },
  ];

  stages.forEach((st, i) => {
    const x = 0.25 + i * 3.2;
    addCard(s, x, 1.1, 3.0, 4.3, { fill: C.white });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.1, w: 3.0, h: 0.55, fill: { color: st.color }, line: { color: st.color } });
    s.addText(st.stage, { x: x + 0.1, y: 1.1, w: 2.8, h: 0.55, fontSize: 13, bold: true, color: C.white, fontFace: "Meiryo", align: "center", valign: "middle", margin: 0 });
    st.items.forEach((item, j) => {
      s.addText([
        { text: "▸ ", options: { color: st.color, bold: true } },
        { text: item, options: { color: C.navy } },
      ], { x: x + 0.15, y: 1.75 + j * 0.71, w: 2.7, h: 0.62, fontSize: 9.5, fontFace: "Meiryo", valign: "top", margin: 0 });
    });
  });
}

// ============================================================
// スライド6: 無料相談窓口・施設
// ============================================================
{
  const s = pres.addSlide();
  addHeader(s, "無料で使える相談窓口・施設", "まずはここから！費用ゼロで使える支援");

  // 左: 相談窓口
  addCard(s, 0.3, 1.1, 4.5, 4.3, { fill: C.white, accent: C.green });
  s.addText("📞 相談窓口", { x: 0.5, y: 1.15, w: 4.1, h: 0.42, fontSize: 14, bold: true, color: C.green, fontFace: "Meiryo", valign: "middle", margin: 0 });

  const consultations = [
    { name: "ISICO 創業サポートデスク", tel: "076-267-1244", note: "創業全般・段階問わず" },
    { name: "ISICO 専門家派遣事業", tel: "076-267-1244", note: "年3回無料・診断士等派遣" },
    { name: "石川県よろず支援拠点", tel: "076-267-6711", note: "何度でも無料・経営全般" },
    { name: "金沢市 起業サポートカウンター", tel: "076-220-2204", note: "月・金曜、中小企業診断士対応" },
    { name: "金沢市 起業実践アドバイザー", tel: "076-220-2204", note: "年4回・起業5年以内" },
    { name: "ITビジネスプラザ武蔵 DX相談", tel: "076-224-6340", note: "IT・デザイン・経営" },
  ];

  consultations.forEach((c, i) => {
    const y = 1.65 + i * 0.61;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.45, y: y, w: 4.2, h: 0.54, fill: { color: i % 2 === 0 ? "F0FFF4" : C.white }, line: { color: C.grayLt, pt: 0.5 } });
    s.addText(c.name, { x: 0.55, y: y + 0.02, w: 4.0, h: 0.26, fontSize: 10, bold: true, color: C.navy, fontFace: "Meiryo", margin: 0 });
    s.addText(c.tel + "　" + c.note, { x: 0.55, y: y + 0.27, w: 4.0, h: 0.22, fontSize: 8.5, color: C.gray, fontFace: "Meiryo", margin: 0 });
  });

  // 右: インキュベーション施設
  addCard(s, 5.0, 1.1, 4.7, 4.3, { fill: C.white, accent: C.teal });
  s.addText("🏢 施設・ラボ", { x: 5.2, y: 1.15, w: 4.3, h: 0.42, fontSize: 14, bold: true, color: C.teal, fontFace: "Meiryo", valign: "middle", margin: 0 });

  const facilities = [
    { name: "いしかわクリエイトラボ", fee: "月12,000円〜（5㎡）", note: "能美市・5㎡のみ空きあり" },
    { name: "金沢未来のまち創造館", fee: "要問合せ", note: "076-280-3115・最長5年" },
    { name: "ITビジネスプラザ武蔵", fee: "要問合せ", note: "076-224-6340・最長3年" },
    { name: "七尾 創業支援館しるべ蔵", fee: "月1万円＋光熱費", note: "0767-53-8565・3年以内" },
    { name: "内灘 産業支援センターUMI＋", fee: "要問合せ", note: "レンタルオフィス6室" },
    { name: "加賀市イノベーションセンター", fee: "基本無料（共益費実費）", note: "0761-72-7833・テック向け" },
  ];

  facilities.forEach((f, i) => {
    const y = 1.65 + i * 0.61;
    s.addShape(pres.shapes.RECTANGLE, { x: 5.15, y, w: 4.4, h: 0.54, fill: { color: i % 2 === 0 ? "F0FBFF" : C.white }, line: { color: C.grayLt, pt: 0.5 } });
    s.addText(f.name, { x: 5.25, y: y + 0.02, w: 4.2, h: 0.26, fontSize: 10, bold: true, color: C.navy, fontFace: "Meiryo", margin: 0 });
    s.addText(f.fee + "　" + f.note, { x: 5.25, y: y + 0.27, w: 4.2, h: 0.22, fontSize: 8.5, color: C.gray, fontFace: "Meiryo", margin: 0 });
  });
}

// ============================================================
// スライド7: 市町村別補助金
// ============================================================
{
  const s = pres.addSlide();
  addHeader(s, "市町村別 主要補助金マップ", "お住まいの自治体の制度をチェック！");

  const cities = [
    { name: "金沢市", color: C.navy, items: ["地域連携若者起業家支援：最大200万円（40歳未満）", "金沢AIビレッジ形成促進：最大700万円（ICT・クリエイター）", "金澤町家再生活用：最大550万円", "工芸品国際販路開拓：最大100万円"] },
    { name: "小松市", color: C.teal, items: ["経営モデルチェンジ支援：最大200万円", "空き店舗活用型創業支援：最大100万円", "よーいやはっすん：月次ピッチ無料"] },
    { name: "加賀市", color: "7C3AED", items: ["新規出店コンペティション：最大500万円", "新規出店支援：最大200万円（空き家活用）", "イノベーションセンター：賃料無料"] },
    { name: "羽咋市", color: C.gold, items: ["創業等応援補助金：最大200万円（若者・転入加算あり）"] },
    { name: "かほく市", color: C.green, items: ["ビジネスイノベーション補助金：最大360万円（空き家活用）"] },
    { name: "輪島市", color: C.red, items: ["起業・新規出店支援：最大300万円"] },
    { name: "珠洲市", color: "D97706", items: ["仕事場創業・拡大支援助成金：最大200万円（2/3補助）"] },
    { name: "能登町", color: C.teal, items: ["創業・継承支援事業補助金：最大250万円"] },
    { name: "穴水町", color: C.navy, items: ["創業者支援事業：最大300万円（空き家活用）"] },
    { name: "白山市", color: "059669", items: ["起業家支援補助金：最大150万円", "商店街新規出店：最大150万円（改装費）"] },
  ];

  const cols = 2;
  const colW = 4.7;
  const rowH = 1.05;
  cities.forEach((c, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = 0.2 + col * (colW + 0.2);
    const y = 1.1 + row * rowH;
    if (y + rowH > 5.5) return; // 画面外は省略
    addCard(s, x, y, colW, rowH - 0.08, { fill: C.white });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 1.1, h: rowH - 0.08, fill: { color: c.color }, line: { color: c.color } });
    s.addText(c.name, { x, y, w: 1.1, h: rowH - 0.08, fontSize: 11, bold: true, color: C.white, fontFace: "Meiryo", align: "center", valign: "middle", margin: 0 });
    c.items.forEach((item, j) => {
      s.addText("▸ " + item, { x: x + 1.15, y: y + 0.06 + j * 0.27, w: colW - 1.25, h: 0.24, fontSize: 8.5, color: C.navy, fontFace: "Meiryo", margin: 0 });
    });
  });

  s.addText("※ 全市町村の詳細は「市町村別創業支援制度データベース」を参照", {
    x: 0.3, y: 5.28, w: 9.4, h: 0.25, fontSize: 8, color: C.gray, fontFace: "Meiryo", margin: 0,
  });
}

// ============================================================
// スライド8: 年間カレンダー
// ============================================================
{
  const s = pres.addSlide();
  addHeader(s, "2026年度 申請カレンダー", "いつ、何を申請すればよいか");

  const calItems = [
    { period: "6月12日", label: "🔴 今すぐ！", items: ["ISICO 成長戦略ファンド（DX/GX・FS・国プロFS）", "スタートアップ創出支援（F/S枠・アクセラ枠）", "のとスタ補助金", "新商品・新サービス開発支援助成金"], color: C.red },
    { period: "6月26日", label: "🟠 まもなく", items: ["自動化設備投資準備補助金"], color: "EA580C" },
    { period: "7〜10月", label: "🟡 夏秋公募", items: ["三谷ビジネスコンテスト（例年7〜9月）", "石川テックプランター（10/2締切・確定）", "高校生ビジグラ（例年8〜9月）", "いしかわアクセラレーター（例年7〜8月）"], color: C.gold },
    { period: "10月", label: "🟤 秋期公募", items: ["地域連携若者起業家支援（下期）"], color: "92400E" },
    { period: "通年随時", label: "🔵 随時受付", items: ["金沢AIビレッジ・金澤町家再生活用", "海外販路開拓・工芸品国際販路", "まちの食料品店支援・出店促進各種"], color: C.teal },
    { period: "来年2月頃", label: "⚪ 次年度準備", items: ["Go-Tech事業（例年2月公募開始）"], color: C.gray },
  ];

  const cols2 = 3;
  calItems.forEach((ci, i) => {
    const col = i % cols2;
    const row = Math.floor(i / cols2);
    const x = 0.2 + col * 3.25;
    const y = 1.1 + row * 2.15;
    addCard(s, x, y, 3.1, 2.05, { fill: C.white });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 3.1, h: 0.5, fill: { color: ci.color }, line: { color: ci.color } });
    s.addText(ci.label + " " + ci.period, { x: x + 0.08, y, w: 2.95, h: 0.5, fontSize: 11, bold: true, color: C.white, fontFace: "Meiryo", valign: "middle", margin: 0 });
    ci.items.forEach((item, j) => {
      s.addText("▸ " + item, { x: x + 0.12, y: y + 0.56 + j * 0.36, w: 2.88, h: 0.33, fontSize: 9, color: C.navy, fontFace: "Meiryo", margin: 0 });
    });
  });
}

// ============================================================
// スライド9: 国の補助金
// ============================================================
{
  const s = pres.addSlide();
  addHeader(s, "国の補助金（全国対象）", "石川県・市町村の制度と併用可能な場合あり");

  // 上段: 大型2件
  const bigGrants = [
    {
      name: "中小企業省力化投資補助金",
      status: "公募中",
      statusColor: C.green,
      deadline: "第7回：6月5日〜7月下旬",
      items: [
        "一般型：最大 1億円（設備導入・システム構築等）",
        "カタログ注文型：最大 1,500万円（汎用製品から選択）",
        "対象：人手不足に悩む中小企業等",
        "URL：shoryokuka.smrj.go.jp",
      ],
      color: C.green,
    },
    {
      name: "ものづくり・商業・サービス\n生産性向上促進補助金",
      status: "次回公募待ち",
      statusColor: C.gray,
      deadline: "23次締切済み・次回未定",
      items: [
        "一般型・グローバル展開型・ビジネスモデル構築型",
        "デジタル枠：DX推進に取り組む事業者向け",
        "対象：中小企業・小規模事業者",
        "問合せ：050-3821-7013",
      ],
      color: C.teal,
    },
  ];

  bigGrants.forEach((g, i) => {
    const x = 0.25 + i * 4.85;
    addCard(s, x, 1.1, 4.6, 2.35, { fill: C.white, accent: g.color });
    // ステータスバッジ
    s.addShape(pres.shapes.RECTANGLE, { x: x + 3.0, y: 1.17, w: 1.45, h: 0.3, fill: { color: g.statusColor }, line: { color: g.statusColor } });
    s.addText(g.status, { x: x + 3.0, y: 1.17, w: 1.45, h: 0.3, fontSize: 8.5, bold: true, color: C.white, fontFace: "Meiryo", align: "center", valign: "middle", margin: 0 });
    s.addText(g.name, { x: x + 0.15, y: 1.15, w: 2.8, h: 0.55, fontSize: 12, bold: true, color: C.navy, fontFace: "Meiryo", valign: "middle", margin: 0 });
    s.addText(g.deadline, { x: x + 0.15, y: 1.68, w: 4.3, h: 0.25, fontSize: 9.5, color: g.color, bold: true, fontFace: "Meiryo", margin: 0 });
    g.items.forEach((item, j) => {
      s.addText("▸ " + item, { x: x + 0.15, y: 1.97 + j * 0.35, w: 4.3, h: 0.32, fontSize: 9, color: C.navy, fontFace: "Meiryo", margin: 0 });
    });
  });

  // 下段: 残り2件
  const midGrants = [
    {
      name: "デジタル化・AI導入補助金（旧IT導入補助金）",
      status: "受付中",
      statusColor: C.green,
      deadline: "2026年3月30日〜受付中",
      items: [
        "通常枠 / インボイス枠 / セキュリティ対策推進枠",
        "複数者連携デジタル化・AI導入枠",
        "対象：中小企業・小規模事業者",
        "問合せ：0570-666-376",
      ],
      color: C.teal,
    },
    {
      name: "小規模事業者持続化補助金（一般型）",
      status: "次回未定",
      statusColor: C.red,
      deadline: "⚠️ 第16回まで終了・次回公募時期未定",
      items: [
        "販路開拓・業務効率化の取り組みを支援",
        "商工会議所・商工会経由で申請",
        "対象：小規模事業者（商業・サービス・製造等）",
        "問合せ：03-6628-4181",
      ],
      color: C.gold,
    },
  ];

  midGrants.forEach((g, i) => {
    const x = 0.25 + i * 4.85;
    const y = 3.6;
    addCard(s, x, y, 4.6, 1.85, { fill: C.white, accent: g.color });
    s.addShape(pres.shapes.RECTANGLE, { x: x + 3.0, y: y + 0.07, w: 1.45, h: 0.28, fill: { color: g.statusColor }, line: { color: g.statusColor } });
    s.addText(g.status, { x: x + 3.0, y: y + 0.07, w: 1.45, h: 0.28, fontSize: 8, bold: true, color: C.white, fontFace: "Meiryo", align: "center", valign: "middle", margin: 0 });
    s.addText(g.name, { x: x + 0.15, y: y + 0.05, w: 2.8, h: 0.46, fontSize: 10.5, bold: true, color: C.navy, fontFace: "Meiryo", valign: "middle", margin: 0 });
    s.addText(g.deadline, { x: x + 0.15, y: y + 0.5, w: 4.3, h: 0.25, fontSize: 9, color: g.color, bold: true, fontFace: "Meiryo", margin: 0 });
    g.items.forEach((item, j) => {
      s.addText("▸ " + item, { x: x + 0.15, y: y + 0.78 + j * 0.26, w: 4.3, h: 0.24, fontSize: 8.5, color: C.navy, fontFace: "Meiryo", margin: 0 });
    });
  });

  s.addText("※ 国の補助金は石川県・市町村の制度と原則併用可能ですが、同一経費への重複補助は不可。必ず各制度の公募要領を確認してください。", {
    x: 0.25, y: 5.35, w: 9.5, h: 0.22, fontSize: 7.5, color: C.gray, fontFace: "Meiryo", margin: 0,
  });
}

// ============================================================
// スライド9: まとめ
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: C.navyDk };

  s.addShape(pres.shapes.OVAL, { x: 7, y: 2.5, w: 5, h: 5, fill: { color: C.navy }, line: { color: C.navy } });

  s.addText("まとめ", { x: 0.5, y: 0.3, w: 5, h: 0.6, fontSize: 22, bold: true, color: C.gold, fontFace: "Meiryo", margin: 0 });

  const points = [
    { emoji: "🔴", title: "6月12日までに動く", body: "ISICO・のとスタ含む7制度が同日締切。最大3,000万円の制度も。" },
    { emoji: "💬", title: "まずは無料相談を活用", body: "ISICO・よろず支援拠点・金沢市が無料で対応。費用ゼロで始められる。" },
    { emoji: "🗺️", title: "自治体制度も忘れずに", body: "加賀市500万・かほく市360万など市町村独自制度が多数存在する。" },
    { emoji: "📅", title: "年間を見通して計画する", body: "Go-Tech（来年2月）・アクセラ（夏）など次年度の準備も今から始める。" },
  ];

  points.forEach((p, i) => {
    const y = 1.05 + i * 1.1;
    addCard(s, 0.4, y, 7.2, 0.95, { fill: "1F4060", border: "3A6080" });
    s.addText(p.emoji, { x: 0.55, y: y + 0.15, w: 0.6, h: 0.6, fontSize: 22, fontFace: "Meiryo", margin: 0 });
    s.addText(p.title, { x: 1.2, y: y + 0.08, w: 6.2, h: 0.35, fontSize: 13, bold: true, color: C.gold, fontFace: "Meiryo", margin: 0 });
    s.addText(p.body, { x: 1.2, y: y + 0.43, w: 6.2, h: 0.45, fontSize: 10, color: "C8DFF0", fontFace: "Meiryo", margin: 0 });
  });

  s.addText("TENJO KANAZAWA | 創業支援制度ガイド 2026年度版", {
    x: 0, y: 5.3, w: 10, h: 0.3, fontSize: 9, color: "4A7090", fontFace: "Meiryo", align: "center", margin: 0,
  });
}

// ============================================================
// 出力
// ============================================================
const outPath = "C:/Users/syrmt/Downloads/石川県スタートアップ支援制度ガイド_2026.pptx";
pres.writeFile({ fileName: outPath }).then(() => {
  console.log("✅ 作成完了:", outPath);
}).catch(err => {
  console.error("❌ エラー:", err);
});
