import { mount } from 'cypress/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';
import styles from './Header.css';

describe('<Header />', () => {
    beforeEach(() => {
        mount(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
    });

    it('рендерить головний контейнер з класом header', () => {
        cy.get(`.${styles.header}`).should('exist');
    });

    it('рендерить логотип з класом logoImage', () => {
        cy.get(`.${styles.logo}`).should('exist');
    });

    it('рендерить навігаційне меню з класом nav', () => {
        cy.get(`.${styles.nav}`).should('exist');
    });

    it('рендерить посилання "Home", "Discover" та "Sign Up"', () => {
        cy.contains('a', 'Home').should('have.attr', 'href', '/');
        cy.contains('a', 'Discover').should('have.attr', 'href', '/discover');
        cy.contains('a', 'Sign Up').should('have.attr', 'href', '/signup');
    });

    it('рендерить іконку для перемикання теми з класом themeToggle', () => {
        cy.get(`.${styles.themeToggle}`).should('exist');
    });
});
