const burgerMenuButton=document.getElementById('open-menu');
const closeMenu=document.getElementById('close-menu');


const containerMenu=document.getElementById('media-container');

burgerMenuButton.addEventListener('click', ()=>{
	containerMenu.classList.add('is-open');
	});

closeMenu.addEventListener('click', ()=>{
	containerMenu.classList.remove('is-open');
});

