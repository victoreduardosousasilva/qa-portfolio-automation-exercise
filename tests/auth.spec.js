// tests/auth.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test.describe('Módulo de Autenticação — Automation Exercise', () => {
  test('CT-01 | Deve cadastrar um novo usuário com dados válidos e excluir a conta ao final', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dynamicEmail = `victor.qa.${Date.now()}@teste.com`;

    const newUser = {
      name: 'Victor QA Automation',
      email: dynamicEmail,
      password: 'Password@2026',
      day: '15',
      month: 'May',
      year: '1997',
      firstName: 'Victor',
      lastName: 'Silva',
      company: 'QA Engineering Lab',
      address: 'Rua dos Testes Automatizados, 100',
      country: 'United States',
      state: 'California',
      city: 'Los Angeles',
      zipcode: '90001',
      mobileNumber: '11999999999'
    };

    await loginPage.goto();
    await loginPage.startSignup(newUser.name, newUser.email);
    await loginPage.fillAccountAndAddressDetails(newUser);

    // Valida criação da conta
    await expect(loginPage.accountCreatedTitle).toHaveText('Account Created!');
    await loginPage.continueButton.click();

    // Valida sessão autenticada no cabeçalho
    await expect(loginPage.loggedInAsText).toContainText(newUser.name);

    // Higienização de dados (Teardown): exclui a conta criada
    await loginPage.deleteAccount();
    await expect(loginPage.accountDeletedTitle).toHaveText('Account Deleted!');
    await loginPage.continueButton.click();
  });

  test('CT-03 | Deve exibir mensagem de erro ao tentar login com credenciais inválidas', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('email.invalido.qa@teste.com', 'SenhaIncorreta999');

    await expect(loginPage.loginErrorMessage).toBeVisible();
    await expect(loginPage.loginErrorMessage).toHaveText('Your email or password is incorrect!');
  });
});