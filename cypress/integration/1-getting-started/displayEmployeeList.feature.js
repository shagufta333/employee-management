describe('Display list of employees', () => {
    beforeEach(() => {
      cy.visit('/')
    });
    it('display a header', () => {
      cy.get('#header').should('contain', 'Employee List')
    });
});