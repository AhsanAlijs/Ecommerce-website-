



const form = document.querySelector('#form');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const repassword = document.querySelector('#re-password');
const uploadPhoto = document.querySelector('#upload-photo')
const icons = document.querySelector('#icon')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = `${fname.value} ${lname.value}`

    try {
        if (password.value !== repassword.value) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
                
              });
            
        }
        
    } catch (error) {
        console.log(error);
    }finally{

    }
    
})



















const icon = document.querySelector('.icon');
const menu = document.querySelector('nav');

icon.addEventListener('click', () => {
    menu.classList.toggle('showData');
    if (menu.classList.contains('showData')) {
        document.getElementById('bar').className = "fa-solid fa-xmark";
    } else {
        document.getElementById('bar').className = "fa-solid fa-bars";
    }
    // console.log(menu);
});