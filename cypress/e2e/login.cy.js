/// <reference types="cypress" />
import { login } from "../support/Pages/loginPage";
import { productsPage } from "../support/Pages/inventory";
describe("Test del login", () => {
  it("Login exitoso", () => {
    cy.visit("/");
    cy.get(login.loginInput).type(`standard_user`);
    cy.get(login.passInput).type(`secret_sauce`);
    cy.get(login.loginBtn).click();
    cy.url().should("include", "/inventory.html");
    cy.get(productsPage.productsContainer).should("exist");
  });
});
