window.onload = function() {
  document.querySelector('.title').classList.add('fade-in-start');
}

const element = document.getElementById('sono1');
element.classList.add('show');


function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
  