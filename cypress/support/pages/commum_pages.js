/// <reference types="cypress" />

export default {

    acessarCadastroUsuario() {
        cy.visit('/')
            .contains('O banco com bugs e falhas do seu jeito')
            cy.contains('button', 'Registrar').click() 
    }

}