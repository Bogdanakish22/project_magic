import "../css/header.module.css";

const burger = document.getElementById('burger');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');

burger.addEventListener('click', () => {
  sideMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('active');
});


const modal = document.getElementById('nameModal');
const saveBtn = document.getElementById('saveNameBtn');
const nameInput = document.getElementById('nameInput');
const greetingBtn = document.querySelector('.greeting-btn');


window.addEventListener('DOMContentLoaded', () => {
  const savedName = localStorage.getItem('userName');
  if (savedName) {
    greetingBtn.textContent = `Вітаю, ${savedName}!`;
  } else {
    modal.style.display = 'flex';
  }
});


saveBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) {
      localStorage.setItem('userName', name);
      greetingBtn.textContent = `Вітаю, ${name}!`;
      modal.style.display = 'none';
    }
  });
  