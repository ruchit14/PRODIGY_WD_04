let winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

let player1Text = document.getElementById("left-text")
let player2Text = document.getElementById("right-text")

let winModal = document.getElementById("win-modal");
let drawModal = document.getElementById("draw-modal");
closeModal();

let boxes = Array.from(document.getElementsByClassName("box"))
let emptyBoxes = Array.from(document.getElementsByClassName("box"))
let XTurn = true;


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(XTurn){
            box.innerHTML = "X"
            XTurn = false
            checkActivePlayer()
            setTimeout(autoFillBox,2000)
        }
        // else{
        //     box.innerHTML = "O"
        //     XTurn = true
        // }
        checkEmptyBoxes();
        
        checkWin();
    })

    
})

function checkWin(){
    for(let combo of winningCombinations){
        let b1 = boxes[combo[0]].innerHTML;
        let b2 = boxes[combo[1]].innerHTML;
        let b3 = boxes[combo[2]].innerHTML;
        if(b1 != "" && b2 != "" && b3 != ""){
            if(b1==b2 && b2==b3){
                setTimeout(()=>{openModal(b1)
                    document.getElementsByClassName("container")[0].classList.add("inactive")
                },500)                
            }
        }
    }

    checkDraw()
}

function checkActivePlayer(){

    if(XTurn && !player1Text.classList.contains("active")){
        player1Text.classList.add("active")
        player2Text.classList.remove("active");
    }else if(!XTurn && player1Text.classList.contains("active")){
        player1Text.classList.remove("active")
        player2Text.classList.add("active")
    }
}


function openModal(winner){
    winModal.style.display = "flex";
    let text = document.getElementById("modal-text");
    text.innerHTML = winner + " Wins";
}

function closeModal(){
    winModal.style.display = "none";
}

function checkEmptyBoxes(){
    emptyBoxes.forEach((box)=>{
        if(box.innerHTML != ""){
            let index = emptyBoxes.indexOf(box)
            emptyBoxes.splice(index,1)
            console.log(emptyBoxes.length)
        }
    })
}

function autoFillBox(){
    checkEmptyBoxes();
    let box = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)]
    box.innerHTML = "O"
    checkWin();
    XTurn = true
    checkActivePlayer()
}

function boxStatus(boolean){
    for(i=0;i<boxes.length;i++){
        boxes[i].disabled = boolean;
    }
}

function checkDraw(){
    let flag=0;
    for(i=0;i<boxes.length;i++){
        if(boxes[i].innerHTML==""){
            flag=1;
        }
    }
    if(flag==0){
        document.getElementsByClassName("container")[0].classList.add("inactive")
        drawModal.style.display = "flex"
    }
}