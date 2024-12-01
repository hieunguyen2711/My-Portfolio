var button = document.getElementsByClassName("collapsible"); //Select all the buttons 

for (var i = 0; i < button.length; i++) { //Loop through each element inside the button list.
    button[i].addEventListener("click", function() {
        this.classList.toggle("active"); //Activate the active class to 
        const content = this.nextElementSibling; //Which is the next ELEMENT sibling of collapsible in DOM Tree.
        if (content.style.display === "block") { //Which is when the content is displayed
            content.style.display = "none"; //Then hide it
        } else {
            content.style.display = "block"; // If it is hidden, then unhide it when button clicked.
        }
    })
}