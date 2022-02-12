
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const birthday = document.querySelector('#Geburtstag');
const Gender = document.querySelector('#gender');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '' || birthday.value === '' ||  Gender.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Bitte füllen Sie alle Felder aus';
    msg.style.display = "block" ;
    setTimeout(() => msg.style.display = "none", 3000);

  } 
else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} , ${emailInput.value} , ${birthday.value} , ${Gender.value}`));
    userList.appendChild(li);
    nameInput.value = '';
    emailInput.value = '';
    birthday.value ='';
    Gender.value = ''; 
  }}