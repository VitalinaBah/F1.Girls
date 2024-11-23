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

    it('рендерить заголовок з класом title і текстом "F1 Women Academy"', () => {
        cy.get(`.${styles.title}`).should('exist').and('have.text', 'F1 Women Academy');
    });

    it('рендерить контейнер з класом mainContainer', () => {
        cy.get(`.${styles.mainContainer}`).should('exist');
    });

    it('рендерить описовий текст у контейнері context', () => {
        cy.get(`.${styles.context}`).should('exist').and('contain.text', 'Explore the F1 Women Academy');
    });

    it('рендерить кнопку "Learn More" з посиланням на Wikipedia', () => {
        cy.get(`.${styles.learnMoreButton}`)
            .should('exist')
            .and('have.text', 'Learn More')
            .parent('a')
            .should('have.attr', 'href', 'https://en.wikipedia.org/wiki/F1_Academy');
    });
});
