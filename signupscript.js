function myFunction1() {
    document.getElementById("hidden1").style.display='block';
    document.getElementById("hidden2").style.display='none';
    document.getElementById("hidden3").style.display='none';
}
function myFunction2() {
    document.getElementById("hidden2").style.display='block';
    document.getElementById("hidden1").style.display='none';
    document.getElementById("hidden3").style.display='none';
}
function myFunction3() {
    document.getElementById("hidden3").style.display='block';
    document.getElementById("hidden1").style.display='none';
    document.getElementById("hidden2").style.display='none';
}
const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (nameInput.value === '' || nameInput.value == null) {
    messages.push('Name is required')
  }
  
  if (emailInput.value === '' || emailInput.value == null) {
    messages.push('Email is required')
  }
})


// let infos = [];
 // const addInfo = (ev)=>{
 // ev.preventDefault();  
 // let info = {
  //id: Date.now(),
  //nameInput: document.getElementById('name').value,
 // emailInput: document.getElementById('email').value
 // }
 // infos.push(info);
 // document.forms[0].reset();
 //localStorage.setItem('signList', JSON.stringify(infos) );
// }
// document.addEventListener('DOMContentLoaded', ()=>{
// document.getElementById('btn').addEventListener('click', addInfo);
//});