class UI {
  static displayBooks() {
    
  }

  static validateForm(input) {
    const inputFields = [...document.querySelectorAll(input)]
    inputFields.every(inputField => inputField.trim().length > 2)
  }
  static addBook(event) {
    event.preventDefault()
  }
  static removeBook() {

  }
  
}