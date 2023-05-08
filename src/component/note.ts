import {baseComponent} from "./base.js";

export class noteComponent extends baseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(
      `<section class="note">
        <h1 class="note__title"></h1>
        <p class="note__body"></p>
      </section>`
    );

    const titleElement = this.element.querySelector(".note__title")! as HTMLHeadElement;
    titleElement.textContent = title;

    const bodyElement = this.element.querySelector(".note__body")! as HTMLParagraphElement;
    bodyElement.textContent = body;
  }
}
