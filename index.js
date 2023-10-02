const formContainer = document.querySelector('#form-container');
const homeButton = document.querySelector('#home-btn');
const textContent = document.querySelector('#text-content');

homeButton.addEventListener('click', () => {
    formContainer.classList.remove('hidden')
    textContent.classList.add('hidden')
})

