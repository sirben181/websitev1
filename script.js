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
 const myFunction=()=>{
     const moreText=document.getElementById('showmore')
     const dots=document.getElementById('dots')
     const btnMore=document.getElementById('btntxt')
     
     if( dots.style.display==='none'){
         dots.style.display='inline'
         btnMore.innerHTML='Read More'
         moreText.style.display='none'
     }else{
         dots.style.display='none'
         btnMore.innerHTML='read less'
         moreText.style.display='inline'
     }
     console.log('working')
 }
 myFunction()