const switchButton = document.querySelector('.switch');

switchButton.addEventListener('click', function() {
  document.querySelector('.icon').classList.toggle('toggleSwitch');
  // document.querySelector('.icon').innerHTML = '<i class="fas fa-sun"></i>';
  document.body.classList.toggle('toggleBody');
  document.querySelector('.form').classList.toggle('toggleForm');
})