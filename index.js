//Selecting all the butons and click events.
const addList = document.querySelector(".addList");
const myList = document.querySelector(".myList");
const listInput = document.querySelector("#listInput");
const aboutNav = document.querySelector("#about");
const aboutConnect = document.querySelector("#connect");


//add eventLister

addList.addEventListener("click", eventSubmited);
 function eventSubmited (){
    //Created a new paragraph to catch user inputs
    const createParagraph = document.createElement("p");

    createParagraph.classList.add("myList");

    createParagraph.innerText = listInput.value;

    myList.appendChild(createParagraph);

    listInput.value = "";

    createParagraph.addEventListener("click", function(){

        createParagraph.style.textDecoration = "line-through";
    })
    createParagraph.addEventListener("dblclick", function(){

        myList.removeChild(createParagraph);
    })
}


//addEventListener to sideNav on page Load.

window.onload = showAbout;

const hideView = document.getElementById("hideView");

const hideConnect = document.getElementById("hideConnect");

function showAbout(){
    hideView.style.display = "none";
    hideConnect.style.display = "none";
}

aboutNav.addEventListener("click", function(){

    if(hideView.style.display === "none"){
        hideView.style.display = "block";
    } else{
        hideView.style.display = "none";
    }
})
//Add EventListers to diplace sideBar hidden text

aboutConnect.addEventListener("click", function(){

    if(hideConnect.style.display === "none"){

        hideConnect.style.display = "block";

    } else{

        hideConnect.style.display = "none";
    }
})

//Implete the enter keys on key press event.

listInput.addEventListener("keyup", function(event){

    if(event.keyCode === 13) {

        event.preventDefault();

        eventSubmited();
    }else{
        console.log("Please press the key");
    }
})