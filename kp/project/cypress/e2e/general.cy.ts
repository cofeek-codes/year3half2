describe('general', () => {
   it('registers and asks question', () => {
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
      cy.get('a[href="/newquestion"]').click();
      cy.url().should('contain', '/newquestion');
      // fill the form
      cy.get('input[placeholder="Категория"]').clear().type('javascript, web, git');
      cy.get('input[placeholder="Заголовок"]').clear().type('New question');
      cy.get('input[placeholder="Опишите проблему или вопрос"]').clear().type('some details');
      cy.get('button[type="submit"]').click();
      cy.contains('p', 'some details').should('exist');

   })
})
