describe("Display list of employees", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("display a header", () => {
    cy.get("#header").should("contain", "Employee List");
  });

  it("displays a list with 6 items", () => {
    cy.get("#employee-list").within(() => {
      cy.get(".employee-item").should("have.length", 6);
    });
  });
  it("the list items display the expected content", () => {
    cy.get("#employee-list").within(() => {
      cy.get(".employee-item")
        .first()
        .find(".name")
        .should("contain", "George Bluth");
    });
  });
});
