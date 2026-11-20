# Plano de Testes (Test Plan) — Automation Exercise

| Metadados do Documento | Detalhes |
| :--- | :--- |
| **Projeto / Produto** | Automation Exercise (E-commerce Web & API) |
| **URL do Ambiente** | https://automationexercise.com/ |
| **Autor (QA)** | Victor Eduardo Sousa Silva |
| **Versão** | 1.0 |
| **Status** | Em Elaboração |

---

## 1. Objetivo e Visão Geral

Validar a funcionalidade, usabilidade, navegação, validações e permissões de acesso das aplicações automationexercise. Desta forma garantimos a cobertura de teste do fluxo principal do sistema, que vai do usuario fazer login/registro no site, selecionar o produto, até a fase final da compra/chekout.

---

## 2. Escopo de Testes

### 2.1. Dentro do Escopo (In-Scope)

* **[Módulo 1]:** Cadastro e Login do usuário
* **[Módulo 2]:** Selecão de itens para o carrinho
* **[Módulo 3]:** Carrinho e Checkout até a finalização da compra

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
* **Integração entre funcionalidades da aplicação, quando aplicável:** Nao sei responder


### 3.2. Ambiente e Matriz de Compatibilidade
[Especifique em qual sistema operacional, navegadores e ferramentas os testes serão executados.]
* **Sistema Operacional:** Windows 11
* **Navegadores:** Google Chrome (versão atual)
* **Ferramentas de Apoio:** Jira, TestRail, Postman, Playwright, IA

---

## 4. Análise de Riscos e Plano de Mitigação
[Identifique pelo menos 3 riscos técnicos ou de negócio que podem impactar a qualidade ou o cronograma, classificando a probabilidade/impacto e definindo uma ação preventiva.]

| ID | Risco Identificado | Probabilidade | Impacto | Plano de Mitigação / Contingência |
| :--- | :--- | :---: | :---: | :--- |
| **R-01** | Validacao de dados nos campos de cadastro | Alta | Alto | Nao sei responder |
| **R-02** | [Descreva o risco 2] | [Alta/Média/Baixa] | [Alto/Médio/Baixo] | [Ação para evitar ou contornar] |
| **R-03** | [Descreva o risco 3] | [Alta/Média/Baixa] | [Alto/Médio/Baixo] | [Ação para evitar ou contornar] |

---

## 5. Critérios de Entrada e Saída (Entry & Exit Criteria)

### 5.1. Critérios de Entrada (Para iniciar os testes)
* [Condição 1 que deve estar satisfeita antes da execução]
* [Condição 2]

### 5.2. Critérios de Saída (Para aprovar a entrega)
* [Condição mínima de aprovação, métricas de execução e limite de bugs abertos]
* [Condição 2]

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