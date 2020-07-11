document.querySelectorAll('.nav-link').forEach(el=>{
    el.addEventListener('click',()=>{
        if(window.innerWidth < 815){
            console.log(document.getElementById('nav-check').checked = false)
            
        }
       
        
    })
   
})
