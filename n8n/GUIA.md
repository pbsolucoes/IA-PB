# Fase 2: ligar o agente nos canais com o n8n

> ⏸️ **PAUSADO** (20/11/2026): sem orçamento para novas assinaturas no momento. Retomar quando houver.

> **n8n** (fala-se "n-eight-n") é uma ferramenta visual: você monta a automação ligando blocos, como um fluxograma. Não precisa programar.
> Vamos fazer esta fase **juntas**, passo a passo, numa próxima sessão.

## O que você vai precisar criar (contas)

| Conta | Para quê | Custo |
|---|---|---|
| **n8n Cloud** (n8n.io) ou n8n instalado num servidor | Rodar as automações | Plano pago no Cloud; há teste grátis. ✏️ Confira o preço atual no site, eu não tenho como confirmar o valor de hoje. |
| **Console da Anthropic** (console.anthropic.com) | Chave de API do Claude (o "cérebro" do agente) | Cobrança por uso |
| **Meta for Developers** + Instagram como **conta profissional** ligada a uma Página do Facebook | Receber e responder o Direct | A API do Instagram não cobra por mensagem, mas o app passa por revisão da Meta |
| Gmail (você já tem) | Rascunhos de e-mail | Grátis |

> ⚠️ **Nunca cole chaves de API (senhas) no chat nem no GitHub.** Elas ficam só dentro do n8n, no menu *Credentials*.

## Os 3 fluxos (workflows)

### Fluxo A: chat do site (começamos por este, é o mais fácil)
```
[Chat Trigger] → [AI Agent] ← (Modelo Claude + Memória da conversa)
                     │
                     ├─ status "escalar" → [Enviar alerta para a Priscila]
                     └─ resposta → [Cliente]
```
O n8n gera um código pronto para colar no site (o widget de chat). Vamos aplicar as cores da marca: bronze `#AB7646`, espresso `#2A211D` e marfim `#FDF9F5`.

### Fluxo B: Instagram Direct
```
[Webhook da Meta] → [AI Agent] → [API do Instagram: responder]
                                   └─ escalar → alerta + parar o robô naquela conversa
```

### Fluxo C: e-mail
```
[Gmail: novo e-mail] → [AI Agent] → [Gmail: criar RASCUNHO] → Priscila revisa e envia
```

## De onde o agente lê as instruções

Cada fluxo baixa os arquivos deste repositório do GitHub (nó *HTTP Request* ou *GitHub*):
- `agentes/atendimento/agente-atendimento.md` → System Message
- `conhecimento/*.md` → base de conhecimento

Assim você edita só aqui no GitHub e todos os canais atualizam juntos.

## Checklist antes de ligar para clientes reais

- [ ] `conhecimento/servicos.md` preenchido
- [ ] Os 12 testes de `agentes/atendimento/testes.md` passaram
- [ ] Alerta de escalonamento chegando para a Priscila
- [ ] Botão "Falar com a Priscila" visível no chat do site
- [ ] Política de privacidade publicada no site
