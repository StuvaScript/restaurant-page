import steakImg from "./pictures/parnis-azimi-dIbPZcftpL8-unsplash.jpg";
import riceImg from "./pictures/fried-rice-3023040_1920.jpg";
import lobsterImg from "./pictures/pexels-roman-odintsov-4553378.jpg";
import spinachImg from "./pictures/top-view-1248955_1920.jpg";
import cakeImg from "./pictures/jordane-mathieu-q8-yKQ3P7J0-unsplash.jpg";
import type { InnerObjectType } from "./types/types";

export default function pageFood(): {
  innerObject: Pick<InnerObjectType, "init" | "manipulateDOM" | "createMain">;
} {
  const innerObject: Pick<
    InnerObjectType,
    "init" | "manipulateDOM" | "createMain"
  > = {
    init(): void {
      this.createMain();
    },
    manipulateDOM(
      element,
      innerText,
      className,
      appendTo,
      ...attributes
    ): void {
      let newElement: HTMLElement = document.createElement(element);
      innerText !== "" ? (newElement.innerText = innerText) : "";
      if (className !== "") {
        const classArray = className.split(" ");
        newElement.classList.add(...classArray);
      }
      document.querySelector(appendTo).appendChild(newElement);
      if (attributes.length !== 0) {
        let sets: number = attributes.length / 2;
        let attPosition: number = 0;
        let valPosition: number = 1;
        for (let i = 0; i < sets; i++) {
          newElement.setAttribute(
            `${attributes[attPosition]}`,
            `${attributes[valPosition]}`
          );
          attPosition += 2;
          valPosition += 2;
        }
      }
    },
    createMain(): void {
      this.div = this.manipulateDOM("div", "", "food-feature", "main");
      this.div = this.manipulateDOM(
        "div",
        "",
        "food-squares box-1",
        ".food-feature"
      );
      this.img = this.manipulateDOM(
        "img",
        "",
        "fs1",
        ".box-1",
        "src",
        steakImg,
        "alt",
        "steak"
      );
      this.div = this.manipulateDOM(
        "div",
        "Rare Przewalski's Horse Steak",
        "description",
        ".box-1"
      );
      this.div = this.manipulateDOM(
        "div",
        "",
        "food-squares box-2",
        ".food-feature"
      );
      this.img = this.manipulateDOM(
        "img",
        "",
        "fs2",
        ".box-2",
        "src",
        riceImg,
        "alt",
        "rice"
      );
      this.div = this.manipulateDOM(
        "div",
        "Hillside Arsenic Seeds",
        "description",
        ".box-2"
      );
      this.div = this.manipulateDOM(
        "div",
        "",
        "food-squares box-3",
        ".food-feature"
      );
      this.img = this.manipulateDOM(
        "img",
        "",
        "fs3",
        ".box-3",
        "src",
        lobsterImg,
        "alt",
        "lobster dish"
      );
      this.div = this.manipulateDOM(
        "div",
        "Crushed-tacean",
        "description",
        ".box-3"
      );
      this.div = this.manipulateDOM(
        "div",
        "",
        "food-squares box-4",
        ".food-feature"
      );
      this.img = this.manipulateDOM(
        "img",
        "",
        "fs4",
        ".box-4",
        "src",
        spinachImg,
        "alt",
        "bowl of spinach"
      );
      this.div = this.manipulateDOM(
        "div",
        "Bowl Of Fresh Leaves",
        "description",
        ".box-4"
      );
      this.div = this.manipulateDOM(
        "div",
        "",
        "food-squares box-5",
        ".food-feature"
      );
      this.img = this.manipulateDOM(
        "img",
        "",
        "fs5",
        ".box-5",
        "src",
        cakeImg,
        "alt",
        "chocolate cake"
      );
      this.div = this.manipulateDOM(
        "div",
        "Hard Labor Derived Tiramisu",
        "description",
        ".box-5"
      );
    },
  };

  innerObject.init();

  return { innerObject };
}
