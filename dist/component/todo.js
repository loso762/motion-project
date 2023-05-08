import { baseComponent } from "./base.js";
export class todoComponent extends baseComponent {
    constructor(title, body) {
        super(`<section class="todo">
        <h1 class="todo__title"></h1>
        <input type="checkbox" class="todo__checkbox">
      </section>`);
        const titleElement = this.element.querySelector(".todo__title");
        titleElement.textContent = title;
        const bodyElement = this.element.querySelector(".todo__checkbox");
        bodyElement.insertAdjacentText("afterend", body);
    }
}
