const burgerMenuButton=document.querySelector('.sta-burger-menu');
const closeMenu=document.querySelector('.close-menu');
const closeMenuHome=document.querySelector('.close__link-1');
const closeMenuAbout=document.querySelector('.close__link-2');
const closeMenuService=document.querySelector('.close__link-3');
const closeMenuMenu=document.querySelector('.close__link-4');
const closeMenuContact=document.querySelector('.close__link-5');

const containerMenu=document.querySelector('.burger-menu-container');

// open 
burgerMenuButton.addEventListener('click', ()=>{
	containerMenu.classList.toggle('menu-is-open');
	});
// close
closeMenu.addEventListener('click', ()=>{
	containerMenu.remove('menu-is-open');
	});

closeMenuHome.addEventListener('click', ()=>{
containerMenu.remove('menu-is-open');
});
closeMenuAbout.addEventListener('click', ()=>{
containerMenu.remove('menu-is-open');
});
closeMenuService.addEventListener('click', ()=>{
containerMenu.remove('menu-is-open');
});
closeMenuMenu.addEventListener('click', ()=>{
containerMenu.remove('menu-is-open');
});
closeMenuContact.addEventListener('click', ()=>{
containerMenu.remove('menu-is-open');
});

