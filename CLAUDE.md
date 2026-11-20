# Contexto para o Claude

- Dona: Priscila Blandy Dias, fundadora da **PB Soluções** (antes chamada PB Serviços; redes sociais em reformulação; nunca escreva "Administrativos & Marketing"). Base: Rio de Janeiro, Brasil.
- Ela **quase não fala inglês**. Fale com ela sempre em **português**, com explicações simples, e traduza termos técnicos na primeira vez que aparecerem.
- Objetivo: estruturar a empresa em **departamentos operados por agentes de IA**, com Priscila no papel de CEO.
- Padrão de qualidade: **boas práticas americanas** de atendimento (ela não tem empresa nos EUA). A lei que se aplica de fato é a **LGPD** (Brasil). Veja `padroes/qualidade-atendimento.md`.
- Arquitetura escolhida: as regras e o conhecimento ficam em Markdown neste repositório, e o **n8n** conecta os canais (Instagram Direct, chat do site, e-mail). O atendimento é **bilíngue (português e inglês)**.
- Marca: paleta bronze `#AB7646`, espresso `#2A211D` e marfim `#FDF9F5`; tipografia Playfair Display e Inter. Tom consultivo e direto, sem jargão vazio.
- Regra de ouro: **nunca inventar** preço, prazo, serviço, case ou número. Use só o que está em `conhecimento/`. Campos marcados com `✏️ PREENCHER` ainda não têm resposta.
- A FCX é um case de portfólio, e não um emprego atual da Priscila.
- **Foco do negócio:** vender agentes de IA para a **saúde privada de pequeno e médio porte** (clínicas médicas, saúde mental, odontologia, hospitais pequenos), no modelo implantação + mensalidade. Catálogo em `produtos/saude/`.
- Agentes de saúde: **nunca** diagnosticam, orientam tratamento ou interpretam exames; emergência → SAMU 192; crise em saúde mental → CVV 188. Regras em `padroes/saude-compliance.md`. Nenhum agente vai ao ar sem passar em `produtos/saude/testes-seguranca.md`.
- Dados de clínicas e pacientes **nunca** entram neste repositório.
