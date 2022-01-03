const form = document.querySelector('form');
const userName = document.querySelector('#user-name');
const passWord = document.querySelector('#password');
const showAlert = document.querySelector('.show-alert');

form.addEventListener('submit', function(e) {

  if (userName.value !== "" && passWord.value !== "") {

    const loading = document.querySelector('.loading');
    loading.style.display = 'flex';

    setTimeout(() => {
      loading.style.display = 'none';
    }, 3500);
    
    
  } else {
    showAlert.style.display = 'block';
    showAlert.innerHTML = `<p>Please fill in all fields.</p>`;

    setTimeout(() => {
      showAlert.style.display = 'none';
    }, 3000);
    
  }

  // Clear Fields
  clearField();
  
  
  
 
  e.preventDefault();
})


function clearField() {
  userName.value = '';
  passWord.value = '';
}