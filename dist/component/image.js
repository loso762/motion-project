import { baseComponent } from "./base.js";
export class imageComponent extends baseComponent {
    constructor(title, url) {
        super(`<section class="image">
        <figure figure class= "image__holder">
          <img class="image__thumnail"> 
          <figurecaption class="image__title"></figurecaption>
        </figure >
      </section>`);
        const imageElement = this.element.querySelector(".image__thumnail");
        imageElement.src = url;
        imageElement.alt = title;
        const titleElement = this.element.querySelector(".image__title");
        titleElement.textContent = title;
    }
}
