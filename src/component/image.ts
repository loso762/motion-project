import {baseComponent} from "./base.js";

export class imageComponent extends baseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(
      `<div class="image">
        <figure figure class= "image__holder">
          <img class="image__thumnail" width="250" height="250"> 
          <figurecaption class="image__title"></figurecaption>
        </figure >
      </div>`
    );

    const imageElement = this.element.querySelector(".image__thumnail")! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(".image__title")!;
    titleElement.textContent = title;
  }
}
