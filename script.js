const email = document.querySelector('#email');
const container = document.querySelector('.container');
const success_submit = document.querySelector('.success-submit');
const subscribeBtn = document.querySelector('#subscribe');
const dismissBtn = document.querySelector('#dismiss');
let isValidEmail = false;

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const feedbackElement = document.querySelector('#error')

  if(regex.test(email.value)) {
    feedbackElement.innerHTML = '';
    email.classList.remove('error-state');
    isValidEmail = true;
  } else {
    feedbackElement.innerHTML = 'Valid Email required';
    email.classList.add('error-state');
    isValidEmail = false;
  }
}

email.addEventListener('input', (e) => {
  validateEmail(email);
})

subscribeBtn.addEventListener('click', (e) => {
  validateEmail(email);

  if(isValidEmail == true) {
    container.classList.add('hide');
    success_submit.classList.remove('hide');
  } else {
    container.classList.remove('hide');
    success_submit.classList.add('hide');
  }
})

dismissBtn.addEventListener('click', (e) => {
  container.classList.remove('hide');
  success_submit.classList.add('hide')
})