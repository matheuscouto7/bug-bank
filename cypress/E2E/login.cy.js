/// <reference types="cypress" />

import commum_pages from "../support/pages/commum_pages"
import cadastros_page from "../support/pages/cadastros_page"
import login_page from "../support/pages/login_page"
import { faker } from '@faker-js/faker'


describe('Login com sucesso', () => {

    beforeEach('Login com sucesso', () => {
        commum_pages.acessarLogin()
})

  it('Login com sucesso', () => {

    const name = faker.person.fullName()
    const senha = faker.internet.password()
    const email  = faker.internet.email()

    cadastros_page.preencheEmail(email)
    cadastros_page.preencheNome(name)
    cadastros_page.preencheSenha(senha)
    cadastros_page.confirmarSenha(senha)
    cadastros_page.btnSaldo()
    cadastros_page.clicarCadastrar()
    cadastros_page.validarMensagemSucesso()
    cadastros_page.clicarDnv()

    login_page.campoEmail(email)
    login_page.campoSenha(senha)
    login_page.btnAcessar()
    
})
    
})  