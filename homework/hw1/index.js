// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  handleGreetingClick: function () {
    greeting.style.color = colors[0];
  },
  handleContextMenu: function (event) {
    event.preventDefault();
    greeting.style.color = colors[1];
    greeting.innerText = "That was right click";
  },
  handleMouseEnter: function () {
    greeting.style.color = colors[2];
    greeting.innerText = "The mouse is here";
  },
  handleMouseLeave: function () {
    greeting.style.color = colors[3];
    greeting.innerText = "The mouse is gone";
  },
  handleWindowResize: function () {
    greeting.style.color = colors[4];
    greeting.innerText = "You just resized";
  },
};

const greeting = document.querySelector("h2");

greeting.addEventListener("click", superEventHandler.handleGreetingClick);
greeting.addEventListener("contextmenu", superEventHandler.handleContextMenu);
greeting.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
greeting.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
