class Login {
  constructor() {
    this.loginInput = "#user-name";
    this.passInput = "#password";
    this.loginBtn = "#login-button";
    this.errorMessage = ".error-message-container h3";
  }

  login(username, password) {
    // aca iría las instrucciones
    cy.get(this.loginInput).type(username);
    cy.get(this.passInput).type(password);
    cy.get(this.loginBtn).click();
  }
}

export const login = new Login();
