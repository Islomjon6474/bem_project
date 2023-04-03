const card = document.querySelector("#card");

const firstBtn = document.createElement("button");
const secondBtn = document.createElement("button");

class NewElement {
  constructor(template, text, style, events, isActive) {
    this.template = template;
    this.text = text;
    this.style = style;
    this.events = events;
    this.isActive = isActive;
  }
  render() {
    let btn = this.template;

    //CHanging the main style
    for (let i = 0; i < this.style.length; i++) {
      btn.style[this.style[i][0]] = this.style[i][1];
    }

    // The events
    for (let i = 0; i < this.events.length; i++) {
      btn.addEventListener(this.events[i][0], this.events[i][1]);
    }

    // Modifiers
    if (this.isActive) {
      btn.classList.add("card__item--active");
    }

    // CHanging the text of the element
    btn.innerHTML = this.text;
    return btn;
  }
}

let firstElem = new NewElement(
  firstBtn,
  "Islom",
  [
    ["backgroundColor", "red"],
    ["color", "white"],
  ],
  [
    [
      "mouseover",
      () => {
        alert("The element was hovered!");
      },
    ],
  ],
  true
).render();

let secondElem = new NewElement(
  secondBtn,
  "Message",
  [
    ["backgroundColor", "blue"],
    ["color", "white"],
  ],
  [
    [
      "click",
      () => {
        alert("The element was Clicked!");
      },
    ],
  ],
  false
).render();

card?.append(firstElem);
card?.append(secondElem);
