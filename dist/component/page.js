import { baseComponent } from "./base.js";
export class pageItemComponent extends baseComponent {
    constructor() {
        super(`<li class="page_item">
            <section class="page-item"></section>
            <div class="controls">
              <button class="close">&times;</button>
            </div>
          </li>`);
        const closeBtn = this.element.querySelector(".close");
        closeBtn.onclick = () => {
            this.closeHandler();
        };
    }
    addChild(child) {
        const container = this.element.querySelector(".page-item");
        child.attachTo(container);
    }
    setOnCloseListner(listner) {
        this.closeHandler = listner;
    }
}
export class PageComponent extends baseComponent {
    constructor(pageItemConstructor) {
        super('<ul class="page"></ul>');
        this.pageItemConstructor = pageItemConstructor;
    }
    addChild(section) {
        const item = new this.pageItemConstructor();
        item.addChild(section);
        item.attachTo(this.element, "beforeend");
        item.setOnCloseListner(() => {
            item.removeFrom(this.element);
        });
    }
}
