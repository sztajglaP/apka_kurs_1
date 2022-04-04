const headerInput = document.querySelector('.search');
const allLi = document.querySelectorAll('li');

const search = () => {
    let inputValue = headerInput.value.toUpperCase();
    
    allLi.forEach(el => {
        if(el.textContent.toUpperCase().indexOf(inputValue) == 0) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    })
}

headerInput.addEventListener('keyup', search);