// 1. Renk üretici fonksiyon
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// 2. Gerekli DOM öğelerini seç
const changeColorBtn = document.querySelector('.change-color');
const colorValueSpan = document.querySelector('.color');
const body = document.body;

// 3. Düğmeye tıklanma olayını dinle
changeColorBtn.addEventListener('click', () => {
  const newColor = getRandomHexColor();     // Rastgele renk oluştur
  body.style.backgroundColor = newColor;    // Body arka planını güncelle
  colorValueSpan.textContent = newColor;    // Renk kodunu span içine yaz
});
