const menutoggle = document.getElementById('menubar');
const Navlinks =  document.querySelector('.navlinks')

menutoggle.addEventListener('click', ()=>{
    console.log("menu clicked");
    Navlinks.classList.toggle('show')
    
})