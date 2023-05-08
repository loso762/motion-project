import {baseComponent} from "./base.js";

export class VideoComponent extends baseComponent<HTMLElement> {
  constructor(title: string, src: string) {
    super(`<div class="video">
            <iframe width="250" height="250" class="video__thumnail"></iframe>
            <p class="video__title"></p>
          </div>`);

    const iframe = this.element.querySelector(".video__thumnail")! as HTMLVideoElement;
    iframe.src = this.convertEmbeddedUrl(src);

    const titleElement = this.element.querySelector(".video__title")! as HTMLParagraphElement;
    titleElement.textContent = title;
  }

  private convertEmbeddedUrl(url: string) {
    const regExp = /[^/]*$/;
    const match = url.match(regExp);

    const videioId = match || undefined;
    if (videioId) {
      return `https://www.youtube.com/embed/${videioId}`;
    } else {
      return url;
    }
  }
}
