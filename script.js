function openNav() {
    document.getElementById("mysidepanel").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
    }

function closeNav() {
    document.getElementById("mysidepanel").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
    }

function openMenu() {
    var dropdown = document.getElementsByClassName("dropdown-links");
    var i;

    console.log("openmenu function reached")

    for (i = 0; i < dropdown.length; i++) {
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