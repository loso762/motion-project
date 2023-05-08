// import {PageComponent} from "./component/page.js";

// class App {
//   private readonly page: PageComponent;

//   constructor(appRoot: HTMLElement) {
//     this.page = new PageComponent();
//     this.page.attachTo(appRoot);
//   }
// }

// new App(document.querySelector(".document")! as HTMLElement);

import {PageComponent} from "./component/page.js";

class App {
  private page: PageComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }
}

new App(document.querySelector(".document")! as HTMLElement);