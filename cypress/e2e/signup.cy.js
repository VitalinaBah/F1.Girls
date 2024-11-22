describe('Sign Up Page', () => {
  beforeEach(() => {
      // Перехід на сторінку реєстрації перед кожним тестом
      cy.visit('http://localhost:9000/#/signup');
  });

  it('should display the Sign Up page with all required elements', () => {
      // Перевірка наявності логотипу
      cy.get('[data-testid="logo"]').should('be.visible');

      // Перевірка полів введення
      cy.get('input[placeholder="Enter your name"]').should('be.visible');
      cy.get('input[placeholder="Email"]').should('be.visible');
      cy.get('input[placeholder="Password"]').should('be.visible');

      // Перевірка наявності кнопки реєстрації
      cy.get('button[type="submit"]').should('be.visible');
  });


  it('should register a user successfully with valid inputs', () => {
      // Заповнення полів правильною інформацією
      cy.get('input[placeholder="Enter your name"]').type('Valid User');
      cy.get('input[placeholder="Email"]').type('valuse@gmail.com');
      cy.get('input[placeholder="Password"]').type('password123');

      // Клік на кнопку реєстрації
      cy.get('button[type="submit"]').click();

      // Перевірка успішної реєстрації 
      cy.url().should('include', '/discover'); 
  });

  
});
