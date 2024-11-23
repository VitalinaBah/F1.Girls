import { mount } from 'cypress/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Main from './Main';
import styles from './Main.css';

describe('<Main />', () => {
    it('рендерить головний контейнер з класом main', () => {
        mount(
            <MemoryRouter>
                <Main />
            </MemoryRouter>
        );
        cy.get(`.${styles.main}`).should('exist');
    });

    it('рендерить заголовок з текстом "For girls with passion for speed"', () => {
        mount(
            <MemoryRouter>
                <Main />
            </MemoryRouter>
        );
        cy.contains('h1', 'For girls with passion for speed').should('exist');
    });

    it('рендерить кнопку з класом joinButton', () => {
        mount(
            <MemoryRouter>
                <Main />
            </MemoryRouter>
        );
        cy.get(`.${styles.joinButton}`).should('exist');
    });

    it('рендерить зображення з класом imgStyles', () => {
        mount(
            <MemoryRouter>
                <Main />
            </MemoryRouter>
        );
        cy.get(`.${styles.imgStyles}`).should('exist');
    });
});
