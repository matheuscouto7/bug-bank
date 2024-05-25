/// <reference types="cypress" />

import commum_pages from "../support/pages/commum_pages"
import cadastros_page from "../support/pages/cadastros_page"
import { faker } from '@faker-js/faker'

describe('Cadastro de Usuario', () => {
    
    beforeEach('Acessar cadastro de usuarios', () => {
        commum_pages.acessarCadastroUsuario()
        
})
    it('Campo e-mail vazio', () => {
        cadastros_page.clicarCadastrar()
        cadastros_page.validarMensagemErroEmail('É campo obrigatório')
})

    it('Campo senha obrigatório', () => {
        cadastros_page.preencheEmail()
        cadastros_page.clicarCadastrar()
        cadastros_page.validarMesangemErroSenha('É campo obrigatório')
        
})

    it.only('Cadastro com sucesso', () => {

        const name = faker.person.fullName()
        const senha = faker.internet.password()
        const email  = faker.internet.email()

        cadastros_page.preencheEmail(email)
        cadastros_page.preencheNome(name)
        cadastros_page.preencheSenha(senha)
        cadastros_page.confirmarSenha(senha)
        cadastros_page.clicarCadastrar()
        cadastros_page.validarMensagemSucesso()
    })

   

})