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

document.getElementById("closeGreeting").addEventListener("click", function () {
  document.getElementById("nameModal").style.display = "none";
});



saveBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) {
      localStorage.setItem('userName', name);
      greetingBtn.textContent = `Вітаю, ${name}!`;
      modal.style.display = 'none';
    }
  });
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
  



  document.querySelectorAll('.dropdown').forEach(drop => {
    const menu = drop.querySelector('.dropdown-menu');
  
    menu.querySelectorAll('li').forEach(li => {
      li.addEventListener('mouseenter', () => {
        menu.querySelectorAll('li').forEach(item => item.classList.remove('active'));
        li.classList.add('active');
      });
    });
  });
  





  const themeToggle = document.getElementById('themeToggle');

  themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme', themeToggle.checked);
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    themeToggle.checked = document.body.classList.contains('dark-theme');
  });
  

// drop
//   const dropdownItems = document.querySelectorAll('.dropdown-menu li a');
// const gameSections = document.querySelectorAll('.game-section');

// dropdownItems.forEach(item => {
//   item.addEventListener('click', (e) => {
//     e.preventDefault();

//     const text = item.textContent.trim();

//     let selectedType = '';
//     switch (text) {
//       case 'Числовий':
//         selectedType = 'numeric';
//         break;
//       case 'Графічний':
//         selectedType = 'graphic';
//         break;
//       case 'Ознайомчий':
//         selectedType = 'intro';
//         break;
//     }

//     gameSections.forEach(section => {
//       const sectionType = section.getAttribute('data-type');
//       section.style.display = (sectionType === selectedType) ? 'block' : 'none';
//     });
//   });
// });


const filterLinks = document.querySelectorAll('.dropdown-menu a');
const sections = document.querySelectorAll('[data-type]');

filterLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const selectedType = link.dataset.filter;

    sections.forEach(section => {
      section.style.display = section.dataset.type === selectedType ? 'block' : 'none';
    });
  });
});
