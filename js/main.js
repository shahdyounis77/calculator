let input_display=document.getElementById('display')
let dark=document.querySelector('.dark')
let input=document.querySelectorAll('.number')
let input_equal=document.querySelector('.equal')
let input_clear=document.querySelector('.clear')
let dark_mode=document.querySelector('.fa-moon')
let container=document.querySelector('.container')
let input_all=document.querySelectorAll('input')
let input_array=[]
let input_after_del=[]
    for(let i=0;i<input.length;i++){
        input[i].addEventListener('click',function(){
            input_display.value+=input[i].value
            input_array.push(input_display.value)
            

        })
 
    }



input_equal.addEventListener('click',function(){
   input_display.value=eval(input_display.value)
})
input_clear.addEventListener('click',function(){
    input_display.value=""
})

dark_mode.style.background="white"

dark_mode.addEventListener('click',function(){
   if(dark_mode.style.background=="white"){
    dark_mode.style.background="black"
    dark_mode.style.color="white"
    container.style.background="#432e14"
    dark.style.background="#432e14"
    for(let i=0;i<input_all.length;i++){
        input_all[i].style.background="black"
         input_all[i].style.color="white"
    }
    
   
   }
   else{
    dark_mode.style.background="white"
        dark_mode.style.background="white"
        dark_mode.style.color="#8a99a5"
        container.style.background="#c2b3a4"
        dark.style.background="#c2b3a4"
        for(let i=0;i<input_all.length;i++){
            input_all[i].style.background="#e2d3d3"
             input_all[i].style.color="black"
        }
   }
})



