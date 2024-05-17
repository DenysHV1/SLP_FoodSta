const burgerMenuButton=document.getElementById('open-menu');
const closeMenu=document.getElementById('close-menu');


// const closeMenu1=document.getElementById('close__link-1');
// const closeMenu2=document.getElementById('close__link-2');
// const closeMenu3=document.getElementById('close__link-3');
// const closeMenu4=document.getElementById('close__link-4');
// const closeMenu5=document.getElementById('close__link-5');


const containerMenu=document.getElementById('media-container');

burgerMenuButton.addEventListener('click', ()=>{
	containerMenu.classList.add('is-open');
	});

closeMenu.addEventListener('click', ()=>{
	containerMenu.classList.remove('is-open');
});

// closeMenu1.addEventListener('click', ()=>{
// 	containerMenu.classList.remove('is-open');
// });
// closeMenu2.addEventListener('click', ()=>{
// 	containerMenu.classList.remove('is-open');
// });
// closeMenu3.addEventListener('click', ()=>{
// 	containerMenu.classList.remove('is-open');
// });
// closeMenu4.addEventListener('click', ()=>{
// 	containerMenu.classList.remove('is-open');
// });
// closeMenu5.addEventListener('click', ()=>{
// 	containerMenu.classList.remove('is-open');
// });

