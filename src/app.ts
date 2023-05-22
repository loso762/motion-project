import {Component} from "./component/base";
import {imageComponent} from "./component/image.js";
import {noteComponent} from "./component/note.js";
import {Composable, PageComponent, pageItemComponent} from "./component/page.js";
import {todoComponent} from "./component/todo.js";
import {VideoComponent} from "./component/video.js";

const ImgBtn: HTMLButtonElement = document.querySelector("#newImage")!;

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(pageItemComponent);
    this.page.attachTo(appRoot);

    const image = new imageComponent("Image Title", "https://picsum.photos/250/250");
    this.page.addChild(image);

    const video = new VideoComponent("Video Title", "https://youtu.be/K3-jG52XwuQ");
    this.page.addChild(video);

    const note = new noteComponent("Note Title", "Note Body");
    this.page.addChild(note);

    const todo = new todoComponent("Todo Title", "Todo Item");
    this.page.addChild(todo);
  }
}

new App(document.querySelector(".document")! as HTMLElement);

ImgBtn.addEventListener("click", () => {});
