const addBtn = document.querySelectorAll('.none');
const form = document.querySelectorAll('.absolut_form');
const exitBtn = document.querySelectorAll('.exit');

for (let i = 0; i < addBtn.length; i++) {
    exitBtn[i].addEventListener('click',()=>{
        form[i].style.display = "none"
    })
    addBtn[i].addEventListener('click', () => {
        form[i].style.display = "flex"
    })
}