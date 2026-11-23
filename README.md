# 🧪 QA Portfolio — Automation Exercise (E2E Web & REST API)

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Jira](https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white)
![TestRail](https://img.shields.io/badge/TestRail-65C179?style=for-the-badge&logo=testrail&logoColor=white)

Projeto prático de **Quality Assurance** desenvolvido sobre a plataforma [Automation Exercise](https://automationexercise.com/), simulando o fluxo real de trabalho em um ambiente ágil (**Scrum**). O repositório cobre o ciclo completo de garantia de qualidade: planejamento estratégico, modelagem de cenários em BDD, execução manual, gestão de defeitos com rastreabilidade, testes automatizados de API REST e automação End-to-End (E2E) com arquitetura **Page Object Model (POM)**.

---

## 🎯 Objetivos do Projeto

* Aplicar boas práticas de engenharia de testes baseadas no syllabus **ISTQB CTFL**.
* Estruturar documentação de QA clara, auditável e orientada a riscos.
* Validar contratos e regras de negócio na camada de **API REST** antes e durante os testes de interface.
* Construir uma suíte de automação **E2E resiliente e sustentável**, isolando seletores e ações por meio do padrão **Page Object Model (POM)**.
* Garantir independência e repetibilidade dos testes através de massa de dados dinâmica e limpeza pós-execução (*teardown*).

---

## 📁 Arquitetura do Repositório

```text
qa-portfolio-automation-exercise/
├── api-tests/
│   └── automation-exercise-api.postman_collection.json   # Coleção Postman com assertions automatizadas
├── docs/
│   ├── evidences/                                        # Capturas de tela dos defeitos encontrados
│   ├── bug-reports.md                                    # Relatórios detalhados de bugs (Jira / TestRail)
│   ├── test-cases.md                                     # Cenários estruturados em BDD (Gherkin)
│   └── test-plan.md                                      # Estratégia, escopo, critérios e matriz de riscos
├── pages/
│   ├── LoginPage.js                                      # Page Object: Autenticação, Cadastro e Teardown
│   └── ProductsPage.js                                   # Page Object: Catálogo, Busca e Carrinho
├── tests/
│   ├── auth.spec.js                                      # Testes E2E de Cadastro, Login e Exclusão de Conta
│   └── ecommerce-flow.spec.js                            # Testes E2E de Busca de Produtos e Carrinho
├── playwright.config.js                                  # Configurações globais do Playwright
└── package.json                                          # Dependências e scripts do projeto
```

---

## 🔍 Entregas por Etapa do Ciclo de QA

### 1. Planejamento e Análise de Riscos (`docs/test-plan.md`)
* Definição de escopo funcional (Web) e não funcional/contrato (API).
* Critérios de entrada e saída (*Entry/Exit Criteria*) e métricas de cobertura.
* **Mitigação de Riscos Técnicos:**
  * **R-02 (Colisão de Massa de Dados):** Uso de timestamps (`Date.now()`) na geração de e-mails e exclusão automática da conta ao final do fluxo de cadastro.
  * **R-03 (Flakiness por Anúncios Externos):** Interceptação de rede (`page.route`) bloqueando scripts de terceiros (`doubleclick.net`, `googlesyndication.com`) que interferem na estabilidade dos cliques.

### 2. Modelagem BDD & Execução Manual (`docs/test-cases.md`)
* **9 casos de teste (`CT-01` a `CT-09`)** escritos em **Gherkin** (`Dado / Quando / Então`).
* Aplicação de técnicas de caixa-preta: **Partição de Equivalência** e **Análise de Valor Limite** (validação de quantidades mínimas, negativas e extremas no carrinho).
* Gestão de suítes e rastreabilidade via **TestRail** e **Jira**.

### 3. Gestão de Defeitos (`docs/bug-reports.md`)
* Documentação completa de defeitos reais encontrados na aplicação (`QPAE-1` a `QPAE-3`), contendo passos para reprodução, resultado esperado vs. atual, severidade, prioridade e evidências visuais em `docs/evidences/`.

### 4. Testes de API REST (`api-tests/`)
* Coleção automatizada no **Postman** cobrindo fluxos positivos e negativos nos endpoints `/productsList`, `/searchProduct` e `/verifyLogin`.
* Scripts **Post-response** em JavaScript (`pm.test` / `pm.expect`) validando tanto o protocolo HTTP quanto o contrato JSON interno (`responseCode` e `message`).

### 5. Automação E2E Web (`pages/` & `tests/`)
* Arquitetura **Page Object Model (POM)** em JavaScript (ES Modules), separando a camada de interface da lógica de asserção.
* Cobertura automatizada para cadastro completo com exclusão de conta (`CT-01`), login com credenciais inválidas (`CT-03`) e busca + adição de produto ao carrinho (`CT-06`).

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
* [Node.js](https://nodejs.org/) (v18 ou superior)
* [Git](https://git-scm.com/)
* [Postman](https://www.postman.com/) *(opcional, para importar e rodar a coleção de API)*

### Passo a Passo (Testes E2E com Playwright)

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/victoreduardosousasilva/qa-portfolio-automation-exercise.git](https://github.com/victoreduardosousasilva/qa-portfolio-automation-exercise.git)
   cd qa-portfolio-automation-exercise
   ```

2. **Instale as dependências do projeto:**
   ```bash
   npm install
   ```

3. **Instale os navegadores do Playwright:**
   ```bash
   npx playwright install
   ```

4. **Execute a suíte de testes E2E:**
   * Modo headless (padrão):
     ```bash
     npx playwright test
     ```
   * Modo visual (acompanhando o navegador):
     ```bash
     npx playwright test --headed
     ```

5. **Abra o relatório HTML de execução:**
   ```bash
   npx playwright show-report
   ```

### Executando os Testes de API (Postman)
1. Abra o **Postman** e clique em **Import**.
2. Selecione o arquivo `api-tests/automation-exercise-api.postman_collection.json`.
3. Configure a variável `baseUrl` com o valor `https://automationexercise.com/api` e execute pelo **Collection Runner**.

---

## 👤 Autor

**Victor Eduardo Sousa Silva**  

* **LinkedIn:** [linkedin.com/in/victoreduardosousasilva](https://www.linkedin.com/in/victoreduardosousasilva)
* **GitHub:** [github.com/victoreduardosousasilva](https://github.com/victoreduardosousasilva)
