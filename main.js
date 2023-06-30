const slider = document.getElementById('mySlider');
const price = document.getElementById('money');
const toggleBtn = document.getElementById('toggle-btn');

function applySliderBackground() {
  const min = slider.min || 0;
  const max = slider.max || 100;
  const value = ((slider.value - min) / (max - min)) * 100;
  const bg = `linear-gradient(to right, var(--Soft-Cyan) 0%, var(--Soft-Cyan) ${value}%, var(--Light-Grayish-Blue) ${value}%, var(--Light-Grayish-Blue) 100%)`;
  slider.style.background = bg;
}

function priceUpdate() {
  const value = slider.value;
  price.innerHTML = ` $ ${value}  `;
  applySliderBackground();
}

function centerSlider() {
  const min = slider.min || 0;
  const max = slider.max || 100;
  slider.value = (parseInt(min) + parseInt(max)) / 2;
  applySliderBackground();
}

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
});

slider.addEventListener('input', priceUpdate);
window.addEventListener('load', centerSlider);
