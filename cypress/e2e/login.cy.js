/// <reference types="cypress" />
import { login } from "../support/Pages/loginPage";
import { productsPage } from "../support/Pages/inventory";
import { sucess_user } from "../fixtures/usuarios.json";
import { user_inexistente } from "../fixtures/usuarios.json";

describe("Test del login", () => {
  it("Login exitoso", () => {
    cy.visit("/");
    login.login(sucess_user.usuario, sucess_user.password);
    cy.url().should("include", "/inventory.html");
    cy.get(productsPage.productsContainer).should("exist");
  });
  it("Login inexistente", () => {
    cy.visit("/");
    login.login(user_inexistente.usuario, user_inexistente.password);
    cy.get(login.errorMessage).should("exist");
  });
});
