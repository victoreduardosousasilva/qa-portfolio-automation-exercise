# Plano de Testes (Test Plan) — Automation Exercise

| Metadados do Documento | Detalhes |
| :--- | :--- |
| **Projeto / Produto** | Automation Exercise (E-commerce Web & API) |
| **URL do Ambiente** | https://automationexercise.com/ |
| **Autor (QA)** | Victor Eduardo Sousa Silva |
| **Versão** | 1.0 |
| **Status** | Aprovado |

---

## 1. Objetivo e Visão Geral

Validar a funcionalidade, usabilidade, navegação, validações e permissões de acesso das aplicações automationexercise. Desta forma garantimos a cobertura de teste do fluxo principal do sistema, que vai do usuario fazer login/registro no site, selecionar o produto, até a fase final da compra/checkout.

---

## 2. Escopo de Testes

### 2.1. Dentro do Escopo (In-Scope)

* **Módulo de Autenticação e Cadastro:** criação de conta, login válido/inválido, exclusão de conta
* **Módulo de Produtos:** Seleção de itens para o carrinho, quantidade de itens, preços corretos
* **Módulo de Checkout:** Carrinho, soma dos produtos, finalização da compra

### 2.2. Fora do Escopo (Out-of-Scope)

* **Propagandas/Anúncios externos:** Não será testado as propagandas do site, pois não interfere no fluxo principal do sistema
* **Imagens dos produtos:** Náo será feito testes UI/visuais dos produtos para saber se a imagem esta adequada ou não, pois focaremos apenas no fluxo principal

---

## 3. Estratégia e Abordagem de Testes

### 3.1. Tipos e Níveis de Teste

* **Testes Funcionais Manuais:** Sera aplicado atraves de casos de testes elaborados no TestRail
* **Testes de Navegação:** Sera aplicado atraves de casos de testes elaborados no TestRail
* **Testes E2E:** Sera aplicado usando a ferramenta Playwright
* **Testes API:** Será aplicado usando a ferramenta Postman
* **Testes de autenticação:** Será aplicado atraves de validacoes de dados
* **Cenários positivos e negativos:** Sera aplicado para validar o comportamento do sistema
* **Integração entre funcionalidades da aplicação, quando aplicável:** itens adicionados no catálogo refletindo valores corretos no carrinho e no resumo do checkout


### 3.2. Ambiente e Matriz de Compatibilidade

* **Sistema Operacional:** Windows 11
* **Navegadores:** Google Chrome (versão atual)
* **Ferramentas de Apoio:** Jira, TestRail, Postman, Playwright, Git/GitHub, VScode

---

## 4. Análise de Riscos e Plano de Mitigação

| ID | Risco Identificado | Probabilidade | Impacto | Plano de Mitigação / Contingência |
| :--- | :--- | :---: | :---: | :--- |
| **R-01** | Instabilidade ou lentidão do ambiente público | Alta | Alto | Executar testes automatizados fora dos horários de pico e implementar esperas explícitas (auto-waiting) no Playwright. |
| **R-02** | Duplicidade de dados | Média | Alto | Gerar e-mails dinâmicos com timestamp ou bibliotecas como Faker (ex: victor.qa+20261120@teste.com) e excluir a conta ao final do fluxo. |
| **R-03** | Pop-ups de anúncios invalidando cliques na tela | Alta | Baixo | Documentar como comportamento externo conhecido e configurar bloqueio/tratamento de rotas de anúncios na automação. |

---

## 5. Critérios de Entrada e Saída (Entry & Exit Criteria)

### 5.1. Critérios de Entrada (Para iniciar os testes)
* Plano de Testes aprovado
* Ambiente automationexercise.com acessível (HTTP 200)
* Ferramentas configuradas
* Casos de teste modelados e revisados no TestRail


### 5.2. Critérios de Saída (Para aprovar a entrega)
* 100% dos casos de teste críticos executados
* Taxa de aprovação mínima de 80% nos fluxos secundários
* Todos os defeitos encontrados devidamente reportados no Jira com evidências.
* 0 bugs de severidade Blocker ou Crítica abertos

---

## 6. Entregáveis de QA

* Plano de Testes (`docs/test-plan.md`)
* Todos os casos de teste Web planejados terem sido executados
* Os resultados dos testes foram registrados no TestRail.
* Os defeitos identificados terem sido reportados no Jira.
* Os defeitos do TestRail estão vinculados às respectivas issues no Jira.
* As estatísticas de execução de testes e defeitos estão documentadas no Resumo dos Testes.
* Ter coberto todos os cenarios planejados no Postman.
* Ter feito a automacao do fluxo completo pelo Playwright.
* Toda a documentacao planejada versionada no GitHub.