/// <reference types="cypress" />

export default {

        campoEmail(email){
            cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type(email, {force: true})
    },
        campoSenha(senha){
            cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(senha, {force: true})
        }, 
        btnAcessar(){
            cy.get('.otUnI').click({force: true})
            cy.get('.home__Footer-sc-1auj767-16 > .home__Text-sc-1auj767-9').should('be.visible').should('have.text', 'Obrigado por escolher o nosso banco')
        
        }
}