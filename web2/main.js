// const MyHeading= document.querySelector('h1');
// MyHeading.textContent= 'hello world'

// alert('heading has changed')
// function ClickButton(){
//    alert('button clicked')
// }

// const button= document.querySelector('button')
// button.addEventListener('onclick', ClickButton())


let p = true
const img = document.getElementById('MyImage')
img.addEventListener("click", function(){
    if(p==true){
      img.src = "./img/img2.jpg";
      p=false
    }else if(p==false){
        img.src ="./img/Logo.png"
        p=true
    }
})




function MyPrompt(){
    let asker = prompt('Please enter your name', )
    if(asker.split(" ").length>0){
        document.getElementById("h20").innerHTML = 
        "Welcome" + " "  +  asker + "!" + " " + "How u doing?"
        
    }

}

