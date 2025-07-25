const btn=document.getElementsByClassName("btn");
let image= document.querySelector(".image");
const sizes= document.querySelectorAll("li")


function firstPic(){
    // if(image.src=="images/image1")
    image.src="./images/image1.jpg";
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active")
    
}

function secondPic(){
    // if(image.src=="images/image1")
    image.src="./images/image3.jpg";
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active")
    
}
// function secondPic(){
//     if(image.src=="./images/image1"){
//         image.src="./images/image3.jpg";
//         image.classList.add("image");
//         two.style.backgroundColor="rgb(72, 72, 197)"
//         one.style.backgroundColor="";
//     }

    
// }


