# Contexto para o Claude

- Dona: Priscila Blandy Dias, fundadora da **PB Soluções IA** (antes PB Soluções e PB Serviços; redes sociais em reformulação; nunca escreva "Administrativos & Marketing"). Base: Rio de Janeiro, Brasil.
- Ela **quase não fala inglês**. Fale com ela sempre em **português**, com explicações simples, e traduza termos técnicos na primeira vez que aparecerem.
- Objetivo: estruturar a empresa em **departamentos operados por agentes de IA**, com Priscila no papel de CEO.
- Padrão de qualidade: **boas práticas americanas** de atendimento (ela não tem empresa nos EUA). A lei que se aplica de fato é a **LGPD** (Brasil). Veja `padroes/qualidade-atendimento.md`.
- **Orçamento zero para novas assinaturas.** O n8n está **pausado**. Use só o que já existe: Claude, GitHub (inclui o GitHub Pages, grátis), Playwright (já instalado) e os apps nativos do Instagram e do LinkedIn.
- **Prioridade atual:** marketing da própria PB Soluções IA (site, redes, peças, conteúdo). Agentes internos em `.claude/agents/`: marketing (`estrategista-marca`, `redator-copy`, `designer-pecas`, `desenvolvedor-site`, `social-media`), comercial (`comercial-prospeccao`), receita (`redator-propostas`), jurídico (`juridico-contratos`) e finanças (`financeiro`). Delegue a eles. Mapa visual: `mockup/central-de-agentes.html`.
- Site: `docs/` (GitHub Pages). Peças: `pecas/fonte/*.html` → `node pecas/renderizar.js` → `pecas/png/`. Sempre faça QA visual do PNG.
- **O repositório é PÚBLICO:** nada de dados de clientes, senhas ou informações estratégicas sensíveis.
- 🔒 **Nunca citar nomes de clientes** (atuais ou da época da PB Serviços), em nenhum material. A PB Soluções IA leva as **estruturas e metodologias**, ajustadas a cada segmento.
- Atendimento ao cliente (fase futura) será bilíngue (português e inglês).
- Marca: paleta bronze `#AB7646`, espresso `#2A211D` e marfim `#FDF9F5`; tipografia Playfair Display e Inter. Tom consultivo e direto, sem jargão vazio.
- Regra de ouro: **nunca inventar** preço, prazo, serviço, case ou número. Use só o que está em `conhecimento/`. Campos marcados com `✏️ PREENCHER` ainda não têm resposta.
- **Marca ampliada (20/11/2026): PB Soluções IA.** Público: **empresários e donos de negócio de qualquer segmento** (gestão + agentes de IA, sempre começando pelo diagnóstico da gestão). A **saúde privada** é uma **especialidade**, com 4 agentes prontos para clínicas (`produtos/saude/`), no modelo implantação + mensalidade. Posicionamento em `marca/posicionamento.md`.
- Agentes de saúde: **nunca** diagnosticam, orientam tratamento ou interpretam exames; emergência → SAMU 192; crise em saúde mental → CVV 188. Regras em `padroes/saude-compliance.md`. Nenhum agente vai ao ar sem passar em `produtos/saude/testes-seguranca.md`.
- Dados de clínicas e pacientes **nunca** entram neste repositório.
- ⚖️ **Não assumir responsabilidades de terceiros.** Resultados são das organizações clientes ("participei de projetos em que..."). Atendimento em saúde, dados de pacientes (controladora), envio de guias e ferramentas de terceiros (Meta, Anthropic, sistemas) são responsabilidade da clínica ou do fornecedor. A PB Soluções IA responde só pelo que está no contrato. Tabela em `comercial/oferta-saude.md`.
- **Prospecção:** empresários e donos de negócio de **qualquer segmento**, só pelo **Instagram e LinkedIn**, uma mensagem por pessoa, enviada pela Priscila (agente `comercial-prospeccao`).
- 📅 **Agendamento:** "marca o diagnóstico com…" → skill `.claude/skills/marcar-diagnostico/` (agenda falecom@pbservicos.com.br, 40 min, Google Meet, sempre com confirmação). Conectados e testados: Canva, Google Agenda, GitHub. Gmail precisa ser reconectado.
