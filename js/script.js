// JavaScriptファイル
function updateRightContentMargin() {
    const leftContent = document.getElementById('left-content');
    const rightContent = document.getElementById('right-content');
  
    const leftWidth = leftContent.offsetWidth;
    const totalWidth = window.innerWidth;
    const rightWidth = totalWidth - leftWidth;
  
    rightContent.style.width = `${rightWidth}px`;
    rightContent.style.marginLeft = `${leftWidth}px`;
}

// ページロード時に実行
window.addEventListener('load', updateRightContentMargin);

// ウィンドウリサイズ時に実行
window.addEventListener('resize', updateRightContentMargin);

window.onload = function() {
    const fontSlider = document.getElementById('font-slider');
    const variableFont = document.getElementById('variable-font');
  
    fontSlider.addEventListener('input', function() {
      variableFont.style.fontWeight = fontSlider.value;
    });
}