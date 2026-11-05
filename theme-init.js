// 最初の描画の前に、設定で選んだテーマ（ライト／ダーク）を html に付ける（ちらつき防止）。
// キーと属性は src/app/theme.ts と同じにする。
try {
  var t = localStorage.getItem('gastropass-theme')
  if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t)
} catch (e) {
  // 保存領域が使えない環境では端末の設定に従う
}
