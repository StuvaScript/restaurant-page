import pageMain from "./page-main.js";
import pageAbout from "./page-about.js";
import pageFood from "./page-food.js";
import pageReserve from "./page-reserve";
import "./normalize.css";
import "./style.css";

pageMain();

function component() {
  pageAbout();

  function removeElements() {
    const picky = document.querySelectorAll("main > *:not(:first-child)");
    for (const el of picky) {
      el.remove();
    }
  }

  document
    .querySelector(".sidebar > ul")
    .addEventListener("click", function (e) {
      const idx = [...this.children].indexOf(e.target);

      switch (idx) {
        case 0:
          removeElements();
          pageAbout();
          break;
        case 1:
          removeElements();
          pageFood();
          break;
        case 2:
          removeElements();
          pageReserve();
          break;
      }
    });
}

component();

// Make sure to change your devtool in webpack.config.js to something more
// production friendly when you finish this project
