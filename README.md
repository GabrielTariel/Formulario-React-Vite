# 📝 Formulário de Cadastro Semântico com Validação

> Link do projeto online: https://formulario-react-vite.vercel.app/

Este é um projeto de formulário de cadastro (Nome, E-mail, Usuário e Senha) desenvolvido para o meu portfólio de Front-end. O foco principal foi criar uma interface extremamente limpa, com foco em componentização reutilizável, acessibilidade e validação de dados nativa do React.

---

## 🚀 Tecnologias Utilizadas

* **React** (com [Vite ou Next.js - deixe apenas o que você usou])
* **JavaScript (ES6+)**
* **CSS3** (Estilização minimalista e modular)

---

## 🧠 O que eu pratiquei neste projeto?

* **Componentização Avançada:** Criação de componentes genéricos e reutilizáveis como `CampoDeFormulario`, `Label`, `CampoDeEntrada` e `Botao`, aplicando o conceito de composição.
* **Componentes Controlados (`useState`):** Manipulação de um único estado estruturado em objeto para gerenciar de forma dinâmica múltiplos inputs através de uma única função (`handleChange`).
* **Acessibilidade (A11y):** Uso correto de tags semânticas do HTML, como `<fieldset>` e `<legend>` para agrupar seções lógicas ("Informações Pessoais" e "Segurança"), além da vinculação correta de `htmlFor` e `id` para leitores de tela.
* **Lógica de Validação Nativa:** Verificação em tempo real de requisitos de segurança (mínimo de 6 caracteres na senha e validação se as senhas coincidem), com renderização condicional de mensagens de erro amigáveis na interface (UX).

---

## 🛠️ Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/GabrielTariel/Formulario-React-Vite
