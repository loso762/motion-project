import {baseComponent} from "./base.js";

export class todoComponent extends baseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(
      `<section class="todo">
        <h1 class="todo__title"></h1>
        <input type="checkbox" class="todo__checkbox">
      </section>`
    );

    const titleElement = this.element.querySelector(".todo__title")! as HTMLHeadingElement;
    titleElement.textContent = title;

    const bodyElement = this.element.querySelector(".todo__checkbox")! as HTMLInputElement;
    bodyElement.insertAdjacentText("afterend", body);
  }
}
