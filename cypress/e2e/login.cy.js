/// <reference types="cypress" />
import { login } from "../support/Pages/loginPage";
import { productsPage } from "../support/Pages/inventory";
describe("Test del login", () => {
  it("Login exitoso", () => {
    cy.visit("/");
    login.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
    cy.get(productsPage.productsContainer).should("exist");
  });
});
