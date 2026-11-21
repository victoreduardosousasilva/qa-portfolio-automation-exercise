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
* **Técnica Aplicada:** Partição de Equivalência (Classe Inválida: credencial/senha incorreta para conta existente)
* **Pré-condições:**
  * Usuário está acessando a página https://automationexercise.com/login
  * "Possuir um e-mail válido previamente cadastrado no sistema".

#### Cenário BDD (Gherkin)
```gherkin
Funcionalidade: Login na AutomationExercise
  Como um visitante do e-commerce
  Quero fazer login na minha conta
  Para realizar compras

  Cenário: Login do usuário com formato de senha inválido
  Dado que o usuário acessou a página de Login ("/login")
  Quando ele informa um e-mail e um senha inválida na seção "login"
  E clica no botão "Login"
  Então o sistema deve impedir o avanço para a próxima etapa
  E exibir uma mensagem "Your email or password is incorrect!"
```

---

### CT-04 | Validar cadastro de e-mail já existente

* **Módulo:** Autenticação
* **Prioridade:** Alta
* **Tipo de Teste:** Funcional (Negativo)
* **Técnica Aplicada:** Partição de Equivalência (Classe Inválida: e-mail já registrado na base)
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
  Quando ele informa um nome e um e-mail já existente na seção "New User Signup!"
  E clica no botão "Signup"
  Então o sistema deve impedir o avanço para a próxima etapa
  E exibir uma mensagem "Email Address already exist!"
```
### CT-05 | Validar login com dados válidos

* **Módulo:** Autenticação
* **Prioridade:** Alta
* **Tipo de Teste:** Funcional (Positivo)
* **Técnica Aplicada:** Partição de Equivalência (Classe Válida: dados obrigatórios em formato válido)
* **Pré-condições:**
  * Usuário está acessando a página https://automationexercise.com/login
  * "Possuir um e-mail válido previamente cadastrado no sistema".

#### Cenário BDD (Gherkin)
```gherkin
Funcionalidade: Login na AutomationExercise
  Como um visitante do e-commerce
  Quero fazer meu login na tela de login
  Para realizar compras

  Cenário: Efetuar Login com dados válidos
  Dado que o usuário acessou a página de Login e Cadastro ("/login")
  Quando ele informa um e-mail e senha na seção "Login"
  E clica no botão "Login"
  Então o sistema deve exibir redirecionar o usuário para página principal
```

---

### CT-06 | Validar busca de produto existente

* **Módulo:** Produtos
* **Prioridade:** Alta
* **Tipo de Teste:** Funcional (Positivo)
* **Técnica Aplicada:** Partição de Equivalência (Classe Válida: termo existente no catálogo)
* **Pré-condições:**
  * Usuário está acessando a página principal logado com uma conta existente


#### Cenário BDD (Gherkin)
```gherkin
Funcionalidade: Busca de Produtos no Catálogo
  Como um visitante do e-commerce
  Quero fazer uma busca pelo termo "Blue Top"
  Para realizar a verificação da busca

  Cenário: digitar um termo (ex: "Blue Top") no campo Search Product
  Dado que o usuário acessou a página principal de catálagos
  Quando ele digita um termo "Blue Top" no campo Search Product
  E clica no botão "pesquisar"
  Então o sistema deve exibir o produto filtrado para o usuário
```

---

### CT-07 | Validar quantidade negativa de um produto

* **Módulo:** Produtos
* **Prioridade:** Alta
* **Tipo de Teste:** Funcional (negativo)
* **Técnica Aplicada:** Análise de Valor Limite (Classe inválida: inserir um valor negativo)
* **Pré-condições:**
  * Usuário está acessando a página principal logado com uma conta existente


#### Cenário BDD (Gherkin)
```gherkin
Funcionalidade: escolher um produto e inserir uma quantidade negativa
  Como um usuário do e-commerce
  Quero fazer selecionar um produto do catalago
  Para inserir uma quantidade negativa -1

  Cenário: usuario selecionar um produto e inserir uma quantidade negativa no campo
  Dado que o usuário acessou o catalago de produtos
  Quando ele seleciona para o carrinho um produto
  E clica no campo para inserir quantidade -1 ou 0
  E clicar em "Add to cart"
  Então o sistema deve impedir o usuario de colocar um valor negativo na quantidade
```

---

### CT-08 | Validar quantidade acima do permitido ex: 1000

* **Módulo:** Produtos
* **Prioridade:** Alta
* **Tipo de Teste:** Funcional (negativo)
* **Técnica Aplicada:** Análise de Valor Limite (Classe inválida: inserir um valor acima do permitido)
* **Pré-condições:**
  * Usuário está acessando a página principal logado com uma conta existente


#### Cenário BDD (Gherkin)
```gherkin
Funcionalidade: escolher um produto e inserir maior que 999
  Como um usuário do e-commerce
  Quero fazer selecionar um produto do catalago
  Para inserir uma quantidade acima do permitido

  Cenário: usuario selecionar um produto e inserir uma quantidade 1000 no campo
  Dado que o usuário acessou o catalago de produtos
  Quando ele seleciona para o carrinho um produto
  E preenche o campo de quantidade com "1000"
  E clica em "Add to cart"
  Então o sistema deve impedir o usuario de colocar uma quantidade não disponível
```

---

### CT-09 | Validar fluxo completo de compra

* **Módulo:** Checkout
* **Prioridade:** Alta
* **Tipo de Teste:** Funcional (positivo)
* **Técnica Aplicada:** Partição de Equivalência (Classe Válida: fluxo de compra completo)
* **Pré-condições:**
  * Usuário está acessando a página principal logado com uma conta existente


#### Cenário BDD (Gherkin)
```gherkin
Funcionalidade: Validar o fluxo de compra de um produto
  Como um usuário do e-commerce
  Quero finalizar a compra de um produto no carrinho
  Para concluir meu pedido com sucesso

  Cenário: Adicionar um produto ao carrinho e efetuar a compra do produto
  Dado que o usuário adicionou um produto no carrinho
  Quando ele clica em Proceed To Checkout
  E revisa endereço e pedido
  E clica em "Place Order"
  E preenche os dados do cartão para pagamento
  E clica em "Pay and Confirm Order"
  Então o sistema deve exibir a mensagem "ORDER PLACED!"
```

