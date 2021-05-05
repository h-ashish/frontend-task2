let value = document.getElementsByTagName("DIV"); 
        for ( let i=0; i < value.length; i++){
        value[i].addEventListener ("click",() => {
            let res = 0;
            let index = value[i].style.zIndex = res;
        if (index == res) {
            value[i].style.zIndex = res + 1;
            value[i].addEventListener('click',()=>{
                value[i].style.zIndex = res -1;
            })
        }
    })    
}