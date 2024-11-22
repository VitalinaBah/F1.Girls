import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Home from '../../pages/Home';


describe('Тести компоненту SignUp', () => {
  beforeEach(() => {
      cy.mount(
          <MemoryRouter>
              <Home />
          </MemoryRouter>
      );
  });

  it('повинен завантажити сторінку коректно', () => {
      cy.get('header').should('be.visible');
      cy.get('.main').should('be.visible'); 
      cy.get('.nav').should('be.visible'); 
  });

  it('повинен мати правильну навігацію', () => {
      cy.get('.nav a').contains('Home').should('have.attr', 'href', '/');
      cy.get('.nav a').contains('Discover').should('have.attr', 'href', '/discover');
      cy.get('.nav a').contains('Speed Queens').should('have.attr', 'href', '/speedQueens');
  });

  it('повинен мати кнопку для переходу до реєстрації', () => {
      cy.url().should('include', '/signUp'); 
  });

});
