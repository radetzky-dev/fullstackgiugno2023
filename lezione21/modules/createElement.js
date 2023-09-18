class CreateAnyElement {
  constructor({ elementType, id, elementText = "" }) {
    this.elementType = elementType;
    this.id = id;
    this.elementText = elementText;
  }

  createElement() {
    let elementName = document.createElement(this.elementType);
    elementName.setAttribute("id", this.id);
    elementName.innerHTML = this.elementText;
    document.body.appendChild(elementName);
  }
}

export { CreateAnyElement };
