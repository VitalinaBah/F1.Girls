describe('Sign Up Page', () => {
  beforeEach(() => {
      // Перехід на сторінку реєстрації перед кожним тестом
      cy.visit('/signup');
  });

  it('should display the Sign Up page with all required elements', () => {
      // Перевірка наявності логотипу
      cy.get('.logo').should('be.visible');

      // Перевірка полів введення
      cy.get('input[name="name"]').should('be.visible');
      cy.get('input[name="email"]').should('be.visible');
      cy.get('input[name="nickname"]').should('be.visible');
      cy.get('input[name="password"]').should('be.visible');

      // Перевірка дропдаунів для вибору команди та статусу
      cy.get('select[name="team"]').should('be.visible');
      cy.get('select[name="status"]').should('be.visible');

      // Перевірка наявності кнопки реєстрації
      cy.get('button[type="submit"]').should('contain', 'Sign Up');
  });

  it('should display an error for invalid email format', () => {
      // Заповнюємо поля з неправильним форматом email
      cy.get('input[name="name"]').type('Test User');
      cy.get('input[name="email"]').type('invalidemail');
      cy.get('input[name="nickname"]').type('testnickname');
      cy.get('input[name="password"]').type('password123');

      // Вибір опцій у дропдаунах
      cy.get('select[name="team"]').select('Team A');
      cy.get('select[name="status"]').select('Fan');

      // Клік на кнопку реєстрації
      cy.get('button[type="submit"]').click();

      // Перевірка повідомлення про помилку
      cy.contains('Please enter a valid email').should('be.visible');
  });

  it('should register a user successfully with valid inputs', () => {
      // Заповнення полів правильною інформацією
      cy.get('input[name="name"]').type('Valid User');
      cy.get('input[name="email"]').type('validuser@example.com');
      cy.get('input[name="nickname"]').type('validnickname');
      cy.get('input[name="password"]').type('password123');

      // Вибір опцій у дропдаунах
      cy.get('select[name="team"]').select('Team A');
      cy.get('select[name="status"]').select('Fan');

      // Клік на кнопку реєстрації
      cy.get('button[type="submit"]').click();

      // Перевірка успішної реєстрації (приклад — редірект на сторінку з повідомленням або інша ознака успіху)
      cy.url().should('include', '/home'); // заміни /home на відповідний URL після реєстрації
      cy.contains('Welcome, Valid User').should('be.visible');
  });
});
