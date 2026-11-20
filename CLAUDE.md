# Contexto para o Claude

- Dona: Priscila Blandy Dias, fundadora da **PB Soluções** (antes chamada PB Serviços; redes sociais em reformulação; nunca escreva "Administrativos & Marketing"). Base: Rio de Janeiro, Brasil.
- Ela **quase não fala inglês**. Fale com ela sempre em **português**, com explicações simples, e traduza termos técnicos na primeira vez que aparecerem.
- Objetivo: estruturar a empresa em **departamentos operados por agentes de IA**, com Priscila no papel de CEO.
- Padrão de qualidade: **boas práticas americanas** de atendimento (ela não tem empresa nos EUA). A lei que se aplica de fato é a **LGPD** (Brasil). Veja `padroes/qualidade-atendimento.md`.
- **Orçamento zero para novas assinaturas.** O n8n está **pausado**. Use só o que já existe: Claude, GitHub (inclui o GitHub Pages, grátis), Playwright (já instalado) e os apps nativos do Instagram e do LinkedIn.
- **Prioridade atual:** marketing da própria PB Soluções (site, redes, peças, conteúdo). Agentes internos em `.claude/agents/`: marketing (`estrategista-marca`, `redator-copy`, `designer-pecas`, `desenvolvedor-site`, `social-media`), comercial (`comercial-prospeccao`), receita (`redator-propostas`), jurídico (`juridico-contratos`) e finanças (`financeiro`). Delegue a eles. Mapa visual: `mockup/central-de-agentes.html`.
- Site: `docs/` (GitHub Pages). Peças: `pecas/fonte/*.html` → `node pecas/renderizar.js` → `pecas/png/`. Sempre faça QA visual do PNG.
- **O repositório é PÚBLICO:** nada de dados de clientes, senhas ou informações estratégicas sensíveis.
- 🔒 **Nunca citar nomes de clientes** (atuais ou da época da PB Serviços), em nenhum material. A PB Soluções leva as **estruturas e metodologias**, ajustadas a cada segmento.
- Atendimento ao cliente (fase futura) será bilíngue (português e inglês).
- Marca: paleta bronze `#AB7646`, espresso `#2A211D` e marfim `#FDF9F5`; tipografia Playfair Display e Inter. Tom consultivo e direto, sem jargão vazio.
- Regra de ouro: **nunca inventar** preço, prazo, serviço, case ou número. Use só o que está em `conhecimento/`. Campos marcados com `✏️ PREENCHER` ainda não têm resposta.
- **Foco do negócio:** vender agentes de IA para a **saúde privada de pequeno e médio porte** (clínicas médicas, saúde mental, odontologia, hospitais pequenos), no modelo implantação + mensalidade. Catálogo em `produtos/saude/`.
- Agentes de saúde: **nunca** diagnosticam, orientam tratamento ou interpretam exames; emergência → SAMU 192; crise em saúde mental → CVV 188. Regras em `padroes/saude-compliance.md`. Nenhum agente vai ao ar sem passar em `produtos/saude/testes-seguranca.md`.
- Dados de clínicas e pacientes **nunca** entram neste repositório.
- ⚖️ **Não assumir responsabilidades de terceiros.** Resultados são das organizações clientes ("participei de projetos em que..."). Atendimento em saúde, dados de pacientes (controladora), envio de guias e ferramentas de terceiros (Meta, Anthropic, sistemas) são responsabilidade da clínica ou do fornecedor. A PB Soluções responde só pelo que está no contrato. Tabela em `comercial/oferta-saude.md`.
