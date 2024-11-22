import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import SignUp from '../../pages/Sign up';


describe('Тести компоненту SignUp', () => {
  beforeEach(() => {
      cy.mount(
          <MemoryRouter>
              <SignUp />
          </MemoryRouter>
      );
  });

  it('повинен завантажити сторінку коректно', () => {
      cy.get('input[placeholder="Enter your name"]').should('be.visible');
      cy.get('input[placeholder="Email"]').should('be.visible');
      cy.get('input[placeholder="Password"]').should('be.visible');
      cy.get('button[type="submit"]').should('be.visible');
  });

  it('повинен зареєструвати нового користувача та перенаправити на головну сторінку', () => {
      cy.get('input[placeholder="Enter your name"]').type('Test User');
      cy.get('input[placeholder="Email"]').type('tesuser@gmai.com');
      cy.get('input[placeholder="Password"]').type('Ppp111');
      cy.get('button[type="submit"]').click();
      
      cy.url().should('include', '/discover'); 
  });

});
