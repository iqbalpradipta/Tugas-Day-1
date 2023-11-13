let iconOpen = false;

function iconBar() {
  let iconBar = document.getElementById("nav-hamburger")

  if(!iconOpen){
    iconBar.style.display = "flex"
    iconOpen = true
  }else {
    iconBar.style.display = "none"
    iconOpen= false
  }

}
