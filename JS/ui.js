class UI {
  static displayBooks() {
    
  }

  static validateForm() {
    const inputFields = [...document.querySelectorAll("input")]
    inputFields.every(inputField => inputField.trim().length > 2)
  }
  static addBook() {

  }
  static removeBook() {

  }
  
}