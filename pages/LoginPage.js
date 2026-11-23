// pages/LoginPage.js
export class LoginPage {
  constructor(page) {
    this.page = page;

    // Seção Inicial: New User Signup (/login)
    this.signupNameInput = page.locator('input[data-qa="signup-name"]');
    this.signupEmailInput = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');

    // Seção Inicial: Login to your account (/login)
    this.loginEmailInput = page.locator('input[data-qa="login-email"]');
    this.loginPasswordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.loginErrorMessage = page.locator('form[action="/login"] p');

    // Formulário Completo de Cadastro (/signup)
    this.titleMrRadio = page.locator('#id_gender1');
    this.passwordInput = page.locator('input[data-qa="password"]');
    this.daysSelect = page.locator('select[data-qa="days"]');
    this.monthsSelect = page.locator('select[data-qa="months"]');
    this.yearsSelect = page.locator('select[data-qa="years"]');

    // Dados de Endereço (/signup)
    this.firstNameInput = page.locator('input[data-qa="first_name"]');
    this.lastNameInput = page.locator('input[data-qa="last_name"]');
    this.companyInput = page.locator('input[data-qa="company"]');
    this.address1Input = page.locator('input[data-qa="address"]');
    this.countrySelect = page.locator('select[data-qa="country"]');
    this.stateInput = page.locator('input[data-qa="state"]');
    this.cityInput = page.locator('input[data-qa="city"]');
    this.zipcodeInput = page.locator('input[data-qa="zipcode"]');
    this.mobileNumberInput = page.locator('input[data-qa="mobile_number"]');
    this.createAccountButton = page.locator('button[data-qa="create-account"]');

    // Confirmação e Limpeza de Massa (Teardown)
    this.accountCreatedTitle = page.locator('h2[data-qa="account-created"]');
    this.continueButton = page.locator('a[data-qa="continue-button"]');
    this.loggedInAsText = page.locator('a:has-text("Logged in as")');
    this.deleteAccountLink = page.locator('a[href="/delete_account"]');
    this.accountDeletedTitle = page.locator('h2[data-qa="account-deleted"]');
  }

  async goto() {
    // Mitigação R-03: Bloqueia scripts de anúncios externos
    await this.page.route('**/*', (route) => {
      const url = route.request().url();
      if (url.includes('doubleclick.net') || url.includes('googlesyndication.com')) {
        return route.abort();
      }
      return route.continue();
    });

    await this.page.goto('https://automationexercise.com/login');
  }

  async startSignup(name, email) {
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }

  async fillAccountAndAddressDetails(userData) {
    await this.titleMrRadio.check();
    await this.passwordInput.fill(userData.password);
    await this.daysSelect.selectOption(userData.day);
    await this.monthsSelect.selectOption(userData.month);
    await this.yearsSelect.selectOption(userData.year);

    await this.firstNameInput.fill(userData.firstName);
    await this.lastNameInput.fill(userData.lastName);
    await this.companyInput.fill(userData.company);
    await this.address1Input.fill(userData.address);
    await this.countrySelect.selectOption(userData.country);
    await this.stateInput.fill(userData.state);
    await this.cityInput.fill(userData.city);
    await this.zipcodeInput.fill(userData.zipcode);
    await this.mobileNumberInput.fill(userData.mobileNumber);

    await this.createAccountButton.click();
  }

  async login(email, password) {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
    await this.loginButton.click();
  }

  async deleteAccount() {
    await this.deleteAccountLink.click();
  }
}