
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
console.log(cercle)