// changes display of sidebar to flex on click
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

// changes dispay of sidebar back to original none
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

// function to write out the summary text using typewriter effect JS
var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
});

typewriter
  .typeString(
    "Hello I'm <span class='summary__underline'>Matt</span> a Junior <span class='highlight'>Software Developer</span>  based in the UK."
  )
  .pauseFor(10000)
  .start();
