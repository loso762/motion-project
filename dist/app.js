import { imageComponent } from "./component/image.js";
import { noteComponent } from "./component/note.js";
import { PageComponent, pageItemComponent } from "./component/page.js";
import { todoComponent } from "./component/todo.js";
import { VideoComponent } from "./component/video.js";
const ImgBtn = document.querySelector("#newImage");
class App {
    constructor(appRoot) {
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
new App(document.querySelector(".document"));
ImgBtn.addEventListener("click", () => { });
