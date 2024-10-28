import React from 'react';

import App from './App';

describe('<App />', () => {
    it('renders', () => {
        cy.mount(<App />);
        cy.getByTestId('app').should('exist').and('be.visible');
    });
});