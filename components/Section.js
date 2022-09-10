export default class Section {
  constructor({ items, renderer }, selectorСontainer) {
    this._items = items;
    this._renderer = renderer;

    this._selectorСontainer = selectorСontainer;
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(cardElement) {
    this._selectorСontainer.prepend(cardElement);
  }
}
