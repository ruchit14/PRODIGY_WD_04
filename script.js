let openBoxes = Array.from(document.getElementsByClassName("open-box"));
let boxes = Array.from(document.getElementsByClassName("box"))

let visitButtons = Array.from(document.getElementsByClassName("open-button"))
let closeButtons = Array.from(document.getElementsByClassName("close-button"))

let workLinks = ["Task 02/index.html","Task05/index.html","Task-03/index.html"]

closeBigBoxes()
openSmallBoxes()
function closeBigBoxes(){
    for(let i=0;i<openBoxes.length;i++){
        openBoxes[i].style.display = "none"
    }
}

function closeSmallBoxes(){
    for(let i=0;i<boxes.length;i++){
        boxes[i].style.display = "none"
    }
}

function openSmallBoxes(){
    for(let i=0;i<boxes.length;i++){
        boxes[i].style.display = "flex"
    }
}

function openWorkBox(index){
    closeBigBoxes();
    closeSmallBoxes();
    openBoxes[index].style.display = "flex"
}

let box1 = document.getElementById("box-1")
let box2 = document.getElementById("box-2")
let box3 = document.getElementById("box-3")

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        openWorkBox(index)
    })
})


visitButtons.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        window.open(workLinks[index]);
    })
})

closeButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        closeBigBoxes();
        openSmallBoxes();
    })
})



let contactButton = document.getElementById("contact-button");
let contactForm = document.getElementById("contact-form");
let contactFormContainer = document.getElementById("form-container")
contactButton.addEventListener("click",()=>{
    contactForm.classList.add("active")
    contactButton.classList.add("form-active")
    contactFormContainer.classList.add("active")
})


let aboutHead = document.getElementById("about-head")
let aboutDesc = document.getElementById("about-desc")
setInterval(()=>{
    if(window.scrollY>300 && !aboutHead.classList.contains("active")){
        aboutHead.classList.add("active")
        aboutDesc.classList.add("active")
    }
    if(window.scrollY<300 && aboutHead.classList.contains("active")){
        aboutHead.classList.remove("active")
        aboutDesc.classList.remove("active")
    }
}, 500)