"use strict";
const btns1 = document.querySelector(".btn1");
const btns2 = document.querySelectorAll(".btn2");
const btns3 = document.querySelector(".btn3");
const btnEsc = document.querySelector(".esc");
const btnAdd = document.querySelector(".add");
const modal = document.querySelector(".modal");
const pName = document.querySelector(".pName");
const title = document.querySelector(".title");
const content = document.querySelector(".content");
const ul = document.querySelector(".ul");
btns1.addEventListener("click", () => {
    modal.classList.remove("off");
    pName.innerHTML = "Url";
});
btns3.addEventListener("click", () => {
    modal.classList.remove("off");
    pName.innerHTML = "동영상 링크";
});
btns2.forEach((btn) => {
    btn.addEventListener("click", () => {
        modal.classList.remove("off");
        pName.innerHTML = "내용";
    });
});
btnEsc.addEventListener("click", () => {
    modal.classList.add("off");
});
class modalBox {
    mm1(title, content) {
        return `<li class="list"><p>${title}</p><p>${content}</p><button class="delete">✖️</button></li>`;
    }
    mm2(title, content) {
        return `<li class="list li2"><img src="${content}"></img><p>${title}</p><button class="delete">✖️</button></li>`;
    }
    mm3(title, content) {
        return `
    <li class="list li2">
      <iframe width="560" height="315" src=${content} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p>${title}</p>
      <button class="delete">✖️</button>
    </li>`;
    }
}
const list = new modalBox();
btnAdd.addEventListener("click", () => {
    if ((pName === null || pName === void 0 ? void 0 : pName.innerHTML) == "Url") {
        ul.innerHTML += list.mm2(title.value, content.value);
    }
    else if ((pName === null || pName === void 0 ? void 0 : pName.innerHTML) == "내용") {
        ul.innerHTML += list.mm1(title.value, content.value);
    }
    else {
        ul.innerHTML += list.mm3(title.value, content.value);
    }
    title.value = "";
    content.value = "";
    modal.classList.add("off");
});
// 타입에러 : "kihun"나