const burgerMenuButton=document.getElementById('open-menu');
const closeMenu=document.getElementById('close-menu');


const closeMenu2=document.getElementById('close__link-2');
const closeMenu3=document.getElementById('close__link-3');
const closeMenu4=document.getElementById('close__link-4');
const closeMenu5=document.getElementById('close__link-5');


const containerMenu=document.getElementById('media-container');

burgerMenuButton.addEventListener('click', ()=>{
	containerMenu.classList.add('is-open');
	});

closeMenu.addEventListener('click', ()=>{
	containerMenu.classList.remove('is-open');
});


closeMenu2.addEventListener('click', ()=>{
	containerMenu.classList.remove('is-open');
});
closeMenu3.addEventListener('click', ()=>{
	containerMenu.classList.remove('is-open');
});
closeMenu4.addEventListener('click', ()=>{
	containerMenu.classList.remove('is-open');
});
closeMenu5.addEventListener('click', ()=>{
	containerMenu.classList.remove('is-open');
});



const closeModal = document.getElementById('id-close-modal');
const openModal1 = document.getElementById('open-modal1');
const openModal2 = document.getElementById('open-modal2');
const openModal3 = document.getElementById('open-modal-about');

const orderModal = document.getElementById('id-order-modal');


openModal1.addEventListener('click', ()=>{
	orderModal.classList.add('is-open');
	});

openModal2.addEventListener('click', ()=>{
	orderModal.classList.add('is-open');
	});

openModal3.addEventListener('click', ()=>{
	orderModal.classList.add('is-open');
	});

closeModal.addEventListener('click', ()=>{
	orderModal.classList.remove('is-open');
});