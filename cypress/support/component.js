import '@cypress/code-coverage/support.js';
import './commands.js';

import { mount } from 'cypress/react18';

Cypress.Commands.add('mount', mount);