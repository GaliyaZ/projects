const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
let color = '';

//console.log(localStorage.getItem('themeMode'));

function imageMode (color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function darkMode() {
  document.documentElement.setAttribute('data-theme', 'dark');
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  color = 'dark';
  imageMode(color);
}

function lightMode() {
  document.documentElement.setAttribute('data-theme', 'light');
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  color = 'light';
  imageMode(color);
}

function switchTheme(event) {
  //console.log(event.target.checked);
  if (event.target.checked) {
    localStorage.setItem('themeMode', 'dark');
    darkMode();
  } else {
    localStorage.setItem('themeMode', 'light');
    lightMode();
  }
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('themeMode');
if (currentTheme === 'dark') {
  toggleSwitch.checked = true;
  darkMode();
} else {
  lightMode();
}