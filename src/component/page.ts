import {baseComponent, Component} from "./base.js";

export interface Composable {
  addChild(child: Component): void;
}

type SectionContainerConstructor={
  new () : SectionContainer;
}

interface SectionContainer extends Component, Composable {
  setOnCloseListner(listner:()=>void):void;
}


export class pageItemComponent extends baseComponent<HTMLElement> implements SectionContainer {
  private closeHandler?: () => void;

  constructor() {
    super(`<li class="page_item">
            <section class="page-item"></section>
            <div class="controls">
              <button class="close">&times;</button>
            </div>
          </li>`);

    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;

    closeBtn.onclick = () => {
      this.closeHandler!();
    };
  }
  addChild(child: Component) {
    const container = this.element.querySelector(".page-item")! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListner(listner: () => void) {
    this.closeHandler = listner;
  }
}

export class PageComponent extends baseComponent<HTMLUListElement> implements Composable {
  constructor(private pageItemConstructor:SectionContainerConstructor) {
    super('<ul class="page"></ul>');
  }

  addChild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListner(() => {
      item.removeFrom(this.element);
    });
  }
}
