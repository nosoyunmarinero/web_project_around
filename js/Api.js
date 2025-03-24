import { Card } from "./Card.js";
import Section from "./Section.js";
import { handleCardClick } from "./utils.js";

// class
export default class Api {
  constructor(options) {
    this._options = options;
  }

  getInitialCards() {
    return fetch(`${this._options.baseUrl}/cards`, {
      headers: {
        authorization: this._options.headers.authorization,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Instancia de cards iniciales
        const cardList = new Section(
          {
            item: data,
            renderer: (item) => {
              const card = new Card(
                item,
                "#template-selector",
                handleCardClick
              );
              const cardElement = card.generateCard();
              cardList.addItem(cardElement);
            },
          },
          ".element-list__item"
        );
        cardList.renderItems();
      });
  }

  addNewCard() {
    return fetch(`${this._options.baseUrl}/cards`, {
      method: "POST",
      headers: this._options.headers,
      body: JSON.stringify({
        name: this._options.name,
        link: this._options.link,
      }),
    }).then((res) => {
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      return res.json();
    });
  }
}
