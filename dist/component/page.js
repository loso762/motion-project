export class PageComponent {
    constructor() {
        this.page = document.createElement("ul");
        this.page.className = "page";
        this.page.textContent = "HI";
    }
    attachTo(parent, position = "afterbegin") {
        parent.insertAdjacentElement(position, this.page);
    }
}
