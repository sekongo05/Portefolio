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
const cont=document.querySelector('.contenu2');
const dev= document.querySelector('.dev');


dev.addEventListener('click', ()=>{
    contenu.classList.toggle('afficher');
    if(contenu.classList.contains('afficher')){
        cont.classList.add('forve')
} 

/* else{
    cont.classList.remove('forve')
    cont.style.display=''
} */
console.log(contenu)

})


/* const web= document.querySelector('.web');
web.addEventListener('click', ()=>{
    if(contenu.classList.contains('afficher')){
        cont.classList.add('afficher2');
        contenu.classList.remove('afficher')
    else{
     cont.classList.add('afficher2');
}
console.log(cont)

})
 */
const border= document.querySelector('body')
const body1= document.querySelector('.body1')

const img= document.querySelector('.img')
let modeActif =false;
img.addEventListener('click', ()=>{
    if(!modeActif){
        document.documentElement.style.setProperty('--color1', 'black');
        document.documentElement.style.setProperty('--color2', 'white');
        document.documentElement.style.setProperty('--principal', 'black');
        
          console.log(modeActif)
    }else{
        document.documentElement.style.removeProperty('--color1', 'black');
        document.documentElement.style.removeProperty('--color2', 'white');
        document.documentElement.style.removeProperty('--principal', 'black');
       
        console.log(modeActif)
    }
     modeActif = !modeActif;
})










const isMobile = window.matchMedia("(max-width: 480px)").matches;
if (isMobile) {
  console.log("Affichage mobile actif !");
}






















});



