// cria constantes selecionando por id
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// adiciona listener no evento click para mostrar o menu ao clicar no hambuguer
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// adiciona listener no evento click para mostrar o menu ao clicar no "x"
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

// cria constante selecionando a classe css
const navLink = document.querySelectorAll('.nav__link')

// interações com o menu
function linkAction(){
    navMenu.classList.remove('show') //função que faz o menu fechar (mesma criada acima)
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active')
        } else{
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active')
        }
    })
}

