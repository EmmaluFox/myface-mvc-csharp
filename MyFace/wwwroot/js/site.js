const newPostBox = document.getElementById("writeNewPost");
const newPostButton = document.getElementById("newPostButton");

newPostButton.addEventListener("click",function(event){
    newPostBox.style.display = "flex";
    event.preventDefault();
});


