const menuBtn=document.querySelector('.fa-bars');
let menuOpen=false;
 menuBtn.addEventListener('click', ()=>{
if(!menuOpen) {
    menuBtn.classList.add('[open');
    menuOpen=true;
} else{
    menuBtn.classList.remove('open');
    menuOpen=false;
}
 })
 var  currentDate;
 var d=new Date();
      var newdate=new Date(currentDate)
 document.getElementById('date').innerText=newdate;
 console.log(currentDate)
      