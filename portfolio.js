document.addEventListener('DOMContentLoaded', () => {
let index =0;
let p3= document.querySelector('.p3')
let phrase= p3.textContent



function afficherLettre() { 
    if(index<phrase.length){
        document.querySelector('.s1').textContent+= 
        phrase.charAt(index)
        index++;
    }else {
        clearInterval(interval)
    }
 }

 let interval = setInterval(afficherLettre,100);

let cercle =document.querySelector('.cercle')

    cercle.addEventListener('mouseout',()=>{
    cercle.classList.toggle('transform')
})


const picture = document.querySelector('.picture2')
const contain= document.querySelector('.competence-contain')
const competence= document.querySelector('.competence')
const texte= document.querySelector('.contain')
window.addEventListener('scroll',()=>{
   
    if(window.scrollY>300){
        texte.style.opacity= '1';
        texte.classList.add('show')
    }
    else{
        texte.style.opacity= '0';
        texte.classList.remove('show')
    };


    if(window.scrollY>1000){
       competence.classList.add('comp')
       competence.style.opacity= '1';
    }else{
        competence.classList.remove('comp')
        competence.style.opacity= '0';
    };


    if(window.scrollY>1100){
        contain.classList.add('cont')
        contain.style.opacity= '1';
    }else{
        contain.classList.remove('cont')
        contain.style.opacity= '0';
    };
})

const contenu=document.querySelector('.contenu');
const dev= document.querySelector('.dev');

dev.addEventListener('click', ()=>{
    
    contenu.classList.toggle('afficher')
    console.log(contenu)
})




})