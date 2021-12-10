const addList = document.querySelector(".addList");

const myList = document.querySelector(".myList");

const listInput = document.querySelector("#listInput");

const aboutNav = document.querySelector("#about");

const aboutConnect = document.querySelector("#connect");


//add eventLister

addList.addEventListener("click", function(){

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
})

//addEventListener to sideNav.

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

aboutConnect.addEventListener("click", function(){

    if(hideConnect.style.display === "none"){
        hideConnect.style.display = "block";
    } else{
        hideConnect.style.display = "none";
    }
})