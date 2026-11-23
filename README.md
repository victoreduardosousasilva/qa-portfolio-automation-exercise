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
