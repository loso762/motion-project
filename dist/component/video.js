import { baseComponent } from "./base.js";
export class VideoComponent extends baseComponent {
    constructor(title, src) {
        super(`<section class="video">
            <iframe width="250" height="250" class="video__thumnail"></iframe>
            <p class="video__title"></p>
          </section>`);
        const iframe = this.element.querySelector(".video__thumnail");
        iframe.src = this.convertEmbeddedUrl(src);
        const titleElement = this.element.querySelector(".video__title");
        titleElement.textContent = title;
    }
    convertEmbeddedUrl(url) {
        const regExp = /[^/]*$/;
        const match = url.match(regExp);
        const videioId = match || undefined;
        if (videioId) {
            return `https://www.youtube.com/embed/${videioId}`;
        }
        else {
            return url;
        }
    }
}
