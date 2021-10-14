/// <reference types="cypress" />

require("cypress-plugin-tab");

describe("example to-do app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays 17 images by default", () => {
    cy.get("div[data-testid='list'] figure").should("have.length", 17);
    cy.get("div[data-testid='list'] figure")
      .first()
      .should("have.text", "What is Lorem Ipsum");
    cy.get("div[data-testid='list'] figure")
      .last()
      .should("have.text", "All this mistaken idea of denouncing");
  });

  it("click on first image and display the modal", () => {
    cy.get("div[data-testid='list'] figure").first().click();
    cy.wait(500);
    cy.get(".modal").should("have.class", "show");
    cy.get("[data-testid='description']").should(
      "contain.text",
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    );
    cy.get(".close-btn").click();
  });

  it("click on last image and display the modal", () => {
    cy.get("div[data-testid='list'] figure").last().click();
    cy.wait(500);
    cy.get(".modal").should("have.class", "show");
    cy.get("[data-testid='description']").should(
      "contain.text",
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system"
    );
    cy.get(".close-btn").click();
  });

  it("Simulate accessbility , pressing 4 tabs and click", () => {
    cy.get("div[data-testid='list'] figure").tab().tab().tab().tab().click();
    cy.wait(500);
    cy.get(".modal").should("have.class", "show");
    cy.get(".close-btn").click();
  });

  it("Simulate click Escape to close the modal", () => {
    cy.get("div[data-testid='list'] figure").tab().tab().click();
    cy.wait(500)
    cy.get(".modal").trigger('keydown', {keyCode: 27})
    cy.get(".modal").should("not.have.class", "show");
  });
});
