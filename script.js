const navToggle=document.querySelector(".nav-toggle");
const links=document.querySelector(".nav-items");
navToggle.addEventListener("click",function(){
   console.log(links.classList.toggle('show-links'))
    // if(links.classList.contains("show-links")){
    //     links.classList.remove('show-links')
    // } else{links.classList.add('show-links')}
    // console.log(links.classList.contains("show-links"))
}) 