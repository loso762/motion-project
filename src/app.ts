import {imageComponent} from "./component/image.js";
import {noteComponent} from "./component/note.js";
import {PageComponent} from "./component/page.js";
import {todoComponent} from "./component/todo.js";
import {VideoComponent} from "./component/video.js";

const ImgBtn: HTMLButtonElement = document.querySelector("#newImage")!;

class App {
  private page: PageComponent;

  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new imageComponent("title", "https://picsum.photos/250/250");
    image.attachTo(appRoot);

    const video = new VideoComponent("utube", "https://youtu.be/Kjq10TNm14k?t=4");
    video.attachTo(appRoot);

    const todo = new todoComponent("할일", "취업하기");
    todo.attachTo(appRoot);

    const note = new noteComponent("메모", "5/7일 카카오브레인 지원서 마무리");
    note.attachTo(appRoot);
  }
}

new App(document.querySelector(".document")! as HTMLElement);

ImgBtn.addEventListener("click", () => {});
