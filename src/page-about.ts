import interiorImg from "./pictures/pexels-arthouse-studio-4344544.jpg";
import eatingImg from "./pictures/pexels-helena-lopes-696218.jpg";
import cookingImg from "./pictures/pexels-araz-yurtseven-13739759.jpg";
import fishImg from "./pictures/pexels-алекке-блажин-11244934.jpg";
import fireImg from "./pictures/johnathan-macedo-4NQEvxW2_4w-unsplash.jpg";
import type { InnerObjectType } from "./types/types";

export default function pageAbout(): {
  innerObject: Omit<
    InnerObjectType,
    "createHeader" | "createFooter" | "makeTodaysDate"
  >;
} {
  const innerObject: Omit<
    InnerObjectType,
    "createHeader" | "createFooter" | "makeTodaysDate"
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
      const newElement: HTMLElement = document.createElement(element);
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
      this.div = this.manipulateDOM("div", "", "feature", "main");
      this.img = this.manipulateDOM(
        "img",
        "",
        "interior-img",
        ".feature",
        "src",
        interiorImg,
        "alt",
        "Interior of restaurant."
      );
      this.div = this.manipulateDOM("div", "", "info", ".feature");
      this.div = this.manipulateDOM("div", "", "para-div", ".info");
      this.p = this.manipulateDOM("p", this.longText.p1, "", ".para-div");
      this.br = this.manipulateDOM("br", "", "", ".para-div");
      this.p = this.manipulateDOM("p", this.longText.p2, "", ".para-div");
      this.img = this.manipulateDOM(
        "img",
        "",
        "eating-img",
        ".feature",
        "src",
        eatingImg,
        "alt",
        "People eating."
      );
      this.img = this.manipulateDOM(
        "img",
        "",
        "cooking-img",
        ".feature",
        "src",
        cookingImg,
        "alt",
        "Cooking food over fire."
      );
      this.img = this.manipulateDOM(
        "img",
        "",
        "fish-img",
        ".feature",
        "src",
        fishImg,
        "alt",
        "Fish head food."
      );
      this.img = this.manipulateDOM(
        "img",
        "",
        "fire-img",
        "main",
        "src",
        fireImg,
        "alt",
        "Chef cooking with fire."
      );
    },
    longText: {
      p1: "Doggo ipsum borkf puggo noodle horse heckin good boys long water shoob, heckin good boys and girls very jealous pupper very taste wow. Pupper boof aqua doggo lotsa pats very good spot pupper much ruin diet very good spot boof super chub, such treat borkdrive blop the neighborhood pupper yapper wrinkler shooberino. Pats woofer smol borking doggo with a long snoot for pats wrinkler lotsa pats most angery pupper I have ever seen, ur givin me a spook.",
      p2: "Bork h*ck heckin good boys and girls doing me a frighten doggorino adorable doggo, many pats aqua doggo doge pats clouds ruff, sub woofer lotsa pats very hand that feed shibe noodle horse. Fat boi wrinkler what a nice floof he made many woofs very taste wow, the neighborhood pupper long water shoob blop, noodle horse very taste wow very good spot. Blop you are doing me a frighten he made many woofs blep big ol tungg ruff very hand that feed.",
    },
  };

  innerObject.init();

  return { innerObject };
}
