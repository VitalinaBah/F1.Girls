import { mount } from 'cypress/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Main from './Main';
import styles from './Main.css';

describe('<Main />', () => {
    beforeEach(() => {
        mount(
            <MemoryRouter>
                <Main />
            </MemoryRouter>
        );
    });

    it('рендерить заголовок з класом title і текстом "Discover"', () => {
        cy.get(`.${styles.title}`).should('exist').and('have.text', 'Discover');
    });

    it('рендерить підзаголовок з класом subtitle і текстом про жінок у F1', () => {
        cy.get(`.${styles.subtitle}`)
          .should('exist')
          .and('contain.text', 'Learn about the powerful impact women are making in the world of F1');
    });

    it('рендерить блок Speed Queens з правильним текстом і посиланням', () => {
        cy.get(`.${styles.redBlock}`).first()
          .should('contain.text', 'Speed Queens')
          .and('contain.text', 'Discover inspiring stories and the powerful contributions of remarkable women in Formula 1');
        cy.get(`.${styles.redBlock} .${styles.arrowContainer} a`)
          .first()
          .should('have.attr', 'href', '/speedQueens');
    });

    it('рендерить блок F1 Women Academy з правильним текстом і посиланням', () => {
        cy.get(`.${styles.redBlock}`).last()
          .should('contain.text', 'F1 Women Academy')
          .and('contain.text', 'Discover the women shaping the future of Formula 1 through the F1 Women Academy');
        cy.get(`.${styles.redBlock} .${styles.arrowContainer} a`)
          .last()
          .should('have.attr', 'href', '/f1wa');
    });

    it('рендерить зображення стрілок з класом arrow', () => {
        cy.get(`.${styles.arrow}`).should('have.length', 2); // Перевіряємо, що є 2 зображення стрілок
    });
});
