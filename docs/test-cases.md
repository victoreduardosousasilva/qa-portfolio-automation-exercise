# Casos de Teste (Test Cases) — Automation Exercise

| Metadados do Documento | Detalhes |
| :--- | :--- |
| **Projeto / Produto** | Automation Exercise (E-commerce Web & API) |
| **Plano de Testes Vinculado** | `docs/test-plan.md` |
| **Ferramenta de Gestão** | TestRail |
| **Autor (QA)** | Victor Eduardo Sousa Silva |

---

### CT-01 | Validar cadastro de novo usuário com dados válidos

* **Módulo:** Autenticação
* **Prioridade:** Alta
* **Tipo de Teste:** Funcional (Positivo)
* **Técnica Aplicada:** nao sei
* **Pré-condições:**
  * Usuário está acessando a página https://automationexercise.com/login

#### Cenário BDD (Gherkin)
```gherkin
Funcionalidade: Inscrição na AutomationExercise
  Como um visitante do e-commerce
  Quero cadastrar meu e-mail na tela de cadastro
  Para realizar compras

  Cenário: Tentativa de inscrição com e-mail em formato válido
    Dado que o usuário está na página inicial do Automation Exercise
    Quando ele preenche o campo "Your email address" com "testeqaia@uorak.com"
    E clica no botão de envio
    Então o sistema deve redirecionar para preencher o restante do formulário
    E exibir uma mensagem parabenizando após o usuario preencher todo formulario e clicar em submit.