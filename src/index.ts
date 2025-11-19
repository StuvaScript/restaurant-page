import pageMain from "./page-main";
import pageAbout from "./page-about";
import pageFood from "./page-food";
import pageReserve from "./page-reserve";
import "./normalize.css";
import "./style.css";

pageMain();

function component(): void {
  pageAbout();

  function removeElements() {
    const picky: NodeListOf<HTMLDivElement | HTMLImageElement> =
      document.querySelectorAll("main > *:not(:first-child)");
    for (const el of picky) {
      el.remove();
    }
  }

  document
    .querySelector(".sidebar > ul")
    .addEventListener("click", function (e) {
      const idx: number = [...this.children].indexOf(e.target);
      removeElements();

      switch (idx) {
        case 0:
          pageAbout();
          break;
        case 1:
          pageFood();
          break;
        case 2:
          pageReserve();
          break;
      }
    });
}

component();

// Make sure to change your devtool in webpack.config.js to something more
// production friendly when you finish this project
