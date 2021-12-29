describe("Display of employee modal", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#employee-list").within(() => {
    cy.get(".employee-item").first().find(".view-button").click();
    });
  });

  it("opens up a modal when view button is clicked", () => {
    cy.get("#modal-container").should("be.visible");
  });

  it("the modal features expected content", () => {
    cy.get("#modal-container").within(() => {
      cy.get(".name").should("contain", "George Bluth");
      cy.get(".image").should("be.visible");
      cy.get(".email").should("contain", "george.bluth@reqres.in");
    });
  });
});
