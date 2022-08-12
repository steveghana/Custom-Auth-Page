let containier = document.querySelector('.fullbox')
let signup = document.querySelector('.signup')
let signin = document.querySelector('.signin')
signup.addEventListener('click',()=>{
    containier.classList.add('animate')
} )

signin.addEventListener('click',()=>{
    containier.classList.remove('animate')
} )
