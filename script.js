const navToggle=document.querySelector(".nav-toggle");
const links=document.querySelector(".nav-items");
navToggle.addEventListener("click", ()=>{
    toggleNavbar()
})
 const toggleNavbar=()=>{
    links.classList.toggle('show-links')
   if(links.classList== 'show-links'){
       navToggle.classList.toggle('close')
   }
 }