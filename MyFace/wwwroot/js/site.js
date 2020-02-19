const newPostBox = document.getElementById("writeNewPost");
const newPostButton = document.getElementById("newPostButton");

newPostButton.addEventListener("click",function(event){
    console.log("i was clicked");
    newPostBox.style.display = "flex";
    event.preventDefault();
});

