# Casos de Teste (Test Cases) — Automation Exercise

| Metadados do Documento | Detalhes |
| :--- | :--- | :--- |
| **Projeto / Produto** | Automation Exercise (E-commerce Web & API) |
| **Plano de Testes Vinculado** | `docs/test-plan.md` |
| **Ferramenta de Gestão** | TestRail |
| **Autor (QA)** | Victor Eduardo Sousa Silva |

---

### CT-01 | Validar cadastro de novo usuário com dados válidos

* **Módulo:** Autenticação
* **Prioridade:** Alta
* **Tipo de Teste:** Funcional (Positivo)
* **Técnica Aplicada:** Partição de Equivalência (Classe Válida: dados obrigatórios em formato válido)
* **Pré-condições:**
  * Usuário está acessando a página https://automationexercise.com/login

#### Cenário BDD (Gherkin)
```gherkin
Funcionalidade: Inscrição na AutomationExercise
  Como um visitante do e-commerce
  Quero cadastrar meu e-mail na tela de cadastro
  Para realizar compras

  Cenário: Cadastro completo de novo usuário com dados válidos
  Dado que o usuário acessou a página de Login e Cadastro ("/login")
  Quando ele informa um nome e um e-mail inédito na seção "New User Signup!"
  E clica no botão "Signup"
  E preenche todos os campos obrigatórios de informações da conta e endereço
  E clica no botão "Create Account"
  Então o sistema deve exibir a mensagem "ACCOUNT CREATED!"
  E disponibilizar o botão "Continue" para acessar a conta autenticado
```

---

### CT-02 | Validar cadastro de novo usuário com formato de e-mail inválido

* **Módulo:** Autenticação
* **Prioridade:** Alta
* **Tipo de Teste:** Funcional (Negativo)
* **Técnica Aplicada:** Partição de Equivalência (Classe inválida: dados obrigatórios em formato inválido)
* **Pré-condições:**
  * Usuário está acessando a página https://automationexercise.com/login

#### Cenário BDD (Gherkin)
```gherkin
Funcionalidade: Inscrição na AutomationExercise
  Como um visitante do e-commerce
  Quero cadastrar meu e-mail na tela de cadastro
  Para realizar compras

  Cenário: Cadastro completo de novo usuário com formato de e-mail inválido
  Dado que o usuário acessou a página de Login e Cadastro ("/login")
  Quando ele informa um nome e um e-mail inválido inédito na seção "New User Signup!"
  E clica no botão "Signup"
  Então o sistema deve impedir o avanço para a próxima etapa
  E exibir uma mensagem de validação solicitando um endereço de e-mail válido
```

---

### CT-03 | Validar login com senha inválida

* **Módulo:** Autenticação
* **Prioridade:** Alta
* **Tipo de Teste:** Funcional (Negativo)
* **Técnica Aplicada:** Partição de Equivalência (Classe inválida: dados obrigatórios em formato inválido)
* **Pré-condições:**
  * Usuário está acessando a página https://automationexercise.com/login

#### Cenário BDD (Gherkin)
```gherkin
Funcionalidade: Login na AutomationExercise
  Como um visitante do e-commerce
  Quero fazer login na minha conta
  Para realizar compras

  Cenário: Login do usuário com formato de senha inválido
  Dado que o usuário acessou a página de Login ("/login")
  Quando ele informa um e-mail e um senha inválida na seção "login"
  E clica no botão "Sign"
  Então o sistema deve impedir o avanço para a próxima etapa
  E exibir uma mensagem de validação informando que a senha é inválida
```

---

### CT-04 | Validar cadastro de e-mail já existente

* **Módulo:** Autenticação
* **Prioridade:** Alta
* **Tipo de Teste:** Funcional (Negativo)
* **Técnica Aplicada:** Partição de Equivalência (Classe inválida: dados obrigatórios em formato inválido)
* **Pré-condições:**
  * Usuário está acessando a página https://automationexercise.com/login

#### Cenário BDD (Gherkin)
```gherkin
Funcionalidade: Inscrição na AutomationExercise
  Como um visitante do e-commerce
  Quero cadastrar meu e-mail na tela de cadastro
  Para realizar compras

  Cenário: Cadastro completo de novo usuário com formato de e-mail já existente no banco de dados
  Dado que o usuário acessou a página de Login e Cadastro ("/login")
  Quando ele informa um nome e um e-mail válido inédito na seção "New User Signup!"
  E clica no botão "Signup"
  Então o sistema deve impedir o avanço para a próxima etapa
  E exibir uma mensagem de validação solicitando um endereço de e-mail novo
```


  