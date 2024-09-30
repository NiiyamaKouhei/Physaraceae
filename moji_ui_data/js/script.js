window.onload = function() {
  const fontSlider = document.getElementById('font-slider');
  const variableFont = document.getElementById('variable-font');

  fontSlider.addEventListener('input', function() {
    variableFont.style.fontWeight = fontSlider.value;
  });
}