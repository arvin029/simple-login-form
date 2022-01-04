// const form = document.querySelector('form');
// const userName = document.querySelector('#user-name');
// const passWord = document.querySelector('#password');
// const showAlert = document.querySelector('.show-alert');

// form.addEventListener('submit', function(e) {

//   if (userName.value !== "" && passWord.value !== "") {

//     // Loading
//     document.querySelector('.loading').style.display = 'flex';
//     // Disappear after 3.5 seconds
//     setTimeout(() => {
//       document.querySelector('.loading').style.display = 'none';
//     }, 3500);
    
    
//   } else {
//     // Show alert
//     showAlert.style.display = 'block';
//     showAlert.innerHTML = `<p>Please fill in all fields.</p>`;
//     // Disappear alert after 3 seconds
//     setTimeout(() => {
//       showAlert.style.display = 'none';
//     }, 3000);
    
//   }

//   // Clear Fields
//   clearField();
  
  
  
 
//   e.preventDefault();
// })

// // clear fields
// function clearField() {
//   userName.value = '';
//   passWord.value = '';
// }