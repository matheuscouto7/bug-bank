/// <reference types="cypress" />

export default {
    clicarCadastrar() {
        cy.contains('Cadastrar').click({force: true})
    },

    validarMensagemErroEmail(message) {
        cy.get(':nth-child(2) > .input__warging')
        .should('have.text', message)
    },
    validarMesangemErroSenha(message){
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging')
        .should('have.text', message)
    },
    validarMensagemSucesso() {
        cy.get('#modalText').should('be.visible')
        cy.get('#btnCloseModal').click({force: true})
        

    },
    clicarDnv(){
        cy.contains('Cadastrar').click({force: true})
        cy.get('#btnCloseModal').click({force: true})
    },

    preencheEmail(email){
        cy.get(':nth-child(2) > .input__default').type(email, {force: true})
    },

    preencheNome(name) {
        cy.get(':nth-child(3) > .input__default').type(name, {force: true})
    },

    preencheSenha(senha){
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(senha, {force: true})
    }, 

    confirmarSenha(senha) {
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(senha, {force: true})
    },
    btnSaldo(){
        cy.get('#toggleAddBalance').click({force: true})
    }


}