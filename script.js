const controls = document.querySelectorAll('.control');
let correrItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;
controls.forEach(control =>{
     control.addEventListener('click', ()=>{
         const esquerda = control.classList.contains('esquerda')
        
        if(esquerda){
             correrItem -= 1;
        
        } else {
             correrItem += 1;
        }
        if(correrItem >= maxItems){
            correrItem = 0;
        }
       if(correrItem < 0){
             correrItem = maxItems - 1;
        }
        items.forEach(item =>{
             item.classList.remove('correrItem')
        });
       items[correrItem].scrollIntoView({
            inline:"center",
            behavior:"smooth"
        });
        items[correrItem].classList.add("correrItem")
    });
})