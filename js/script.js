function openNav() {
    // document.getElementsByClassName("sidepanel").style.width = "250px";
    document.getElementById("sidepanel--id").style.width = "250px";
    document.getElementById("open-btn").style.display = "none";
    document.getElementById("close-btn").style.display = "block";
    // document.getElementById("main").style.marginLeft = "250px";
    }

function closeNav() {
    // document.getElementsByClassName("sidepanel").style.width = "0px";
    document.getElementById("sidepanel--id").style.width = "0px";
    // document.getElementById("main").style.marginLeft = "0";
    document.getElementById("close-btn").style.display = "none";
    document.getElementById("open-btn").style.display = "block";
    }

function openMenu() {
    var dropdown = document.getElementsByClassName("sidepanel__dropdown-links");
    

    console.log("openmenu function reached")

    for (var i = 0; i < dropdown.length; i++) {
        console.log("for loop reached")
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } 
            else {
            dropdownContent.style.display = "block";
        }
    });
}
}