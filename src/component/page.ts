import {baseComponent} from "./base.js";
export class PageComponent extends baseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page"></ul>');
  }
}
