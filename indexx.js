const menuEmail = document.querySelector('#navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}


function cambia_de_pagina(){
  location.href ='familia.html';
}

function cambia_de_pagina1(){
  location.href ='nosotros.html';
}

function cambia_de_pagina2(){
  location.href ='admi.html';
}

function cambia_de_pagina3(){
  location.href ='laboral.html';
}

function cambia_de_pagina4(){
  location.href ='sucesorio.html';
}



const menuEmail1 = document.querySelector('#navbar-email1');
const desktopMenu1 = document.querySelector('.desktop-menu1');

menuEmail1.addEventListener('click', toggleDesktopMenu1);

function toggleDesktopMenu1() {
  desktopMenu1.classList.toggle('inactive1');
}


const menuEmail2 = document.querySelector('#navbar-email2');
const desktopMenu2 = document.querySelector('.desktop-menu2');

menuEmail2.addEventListener('click', toggleDesktopMenu2);

function toggleDesktopMenu2() {
  desktopMenu2.classList.toggle('inactive2');
}


nombre = document.querySelector("#username");
mensaje = document.querySelector("#email");

function mailpage(){
  mail = "mailto:f.garrionee@gmail.com" + document.title;
  mail += "HOLA HDP" + document.title;
  mail += "HOLAAAAAA" + location.href;
  location.href = mail;
}
