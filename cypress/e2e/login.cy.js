/// <reference types="cypress" />
import { login } from "../support/Pages/loginPage";

describe("Test del login", () => {
  it("Login exitoso", () => {
    cy.visit("/");
    cy.get(login.loginInput).type(`standard_user`);
    cy.get("#password").type(`secret_sauce`);
    cy.get("#login-button").click();
  });
});
