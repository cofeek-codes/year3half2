describe('asnwer', () => {
   it('answers the question', () => {
      cy.visit('http://localhost:4173/')
      cy.get('.btn__register').click()
      // get to `/register`
      cy.url().should('contain', '/register');
      // fill the form
      cy.get('input[placeholder="Username"]').clear().type('exampleUser');
      cy.get('input[placeholder="Email"]').clear().type('example@mail.ru');
      cy.get('input[placeholder="Password"]').clear().type('123');
      cy.get('button[type="submit"]').click();
      // check auth
      cy.get('a[href="/newquestion"]').should('exist');
      // ask a question
      cy.get('a[href="/question/1"]').click();
      cy.url().should('contain', '/question/1');
      cy.get('input[placeholder="Type here your wise suggestion"]').type('example answer');
      cy.get('button[type="submit"]').click();
      cy.contains('.au__name', 'exampleUser').should('exist');
      // logout and try to answer
      cy.get('.btn__login').click();
      cy.get('a[href="/question/1"]').click();
      cy.url().should('contain', '/question/1');
      cy.get('.question__answer__no-user').should('exist');


   })
})

