import { baseComponent } from "./base.js";
export class noteComponent extends baseComponent {
    constructor(title, body) {
        super(`<section class="note">
        <h1 class="note__title"></h1>
        <p class="note__body"></p>
      </section>`);
        const titleElement = this.element.querySelector(".todo__title");
        titleElement.textContent = title;
        const bodyElement = this.element.querySelector(".note__body");
        bodyElement.textContent = body;
    }
}
