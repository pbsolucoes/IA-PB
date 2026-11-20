# Ideias tiradas do GitHub

Pesquisa feita em 20/11/2026. As estrelas (★) medem popularidade no momento da busca e mudam com o tempo.

| Projeto | ★ | O que aproveitamos | Por que não usamos direto |
|---|---|---|---|
| [enescingoz/awesome-n8n-templates](https://github.com/enescingoz/awesome-n8n-templates) | ~26 mil | Modelos prontos de n8n (chatbot, Gmail, Instagram, RAG). **Base da fase 2.** | É uma coleção; escolhemos e adaptamos os modelos |
| [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) | ~5,5 mil | CRM brasileiro com agentes de IA e LGPD. Referência de funil de atendimento → vendas. | Exige servidor próprio e conhecimento técnico; avaliar no departamento Growth |
| [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw) | ~31 mil | Ideia de "um agente por função", sempre ligado | Feito para uso técnico/pessoal, não para atendimento ao cliente |
| [SpillwaveSolutions/cca-exam-prep-customer-support](https://github.com/SpillwaveSolutions/cca-exam-prep-customer-support) | pequeno | Os 6 padrões de agente de suporte com Claude: **escalonamento, compliance, ferramentas, cache, contexto e passagem para humano**. Usamos isso para desenhar `escalonamento.md` e `testes.md`. | Material de estudo em Python |
| [nateherkai/advisor-tool-demo](https://github.com/nateherkai/advisor-tool-demo) | pequeno | Comparação de custo e qualidade entre modelos Claude (Haiku, Sonnet, Opus) no atendimento | Demo; usaremos a lição: modelo mais barato para triagem, mais forte para casos difíceis |

## Lições principais

1. **Instruções e conhecimento separados**: as regras mudam pouco, os serviços e preços mudam muito. Por isso existem `agentes/` e `conhecimento/` separados.
2. **Escalonamento explícito**: o agente precisa saber exatamente quando parar.
3. **Testes antes de ir ao ar**: as conversas de teste evitam que o agente invente coisas na frente do cliente.
