# Departamentos da PB Soluções IA

> **Dois tipos de agente:** os **internos** (que tocam a PB Soluções IA, departamentos 1 a 6) e os **produtos** (que a PB Soluções IA implanta nas clínicas, linha 0).

Cada departamento tem **agentes** (IA que executa) e um **dono humano** (quem aprova). No começo, o dono de todos é a Priscila.

| # | Departamento | O que faz | Agentes previstos | Status |
|---|---|---|---|---|
| 0 | **Produtos (Linha Saúde)** | Os agentes que a PB Soluções IA **vende** para clínicas | Agendamento, Captação/retorno, NPS, Glosas (`produtos/saude/`) | ✅ Modelos prontos |
| 1 | **Atendimento (Cliente)** | Primeiro contato, dúvidas, agendamento de conversa | Agente de Atendimento (Instagram, site, e-mail) | ✅ Fase 1: em construção |
| 2 | **Growth (Vendas)** | Qualificar contatos e acompanhar quem não respondeu | Qualificador de leads, agente de follow-up | ⏳ |
| 3 | **Receita (Propostas)** | Montar propostas na identidade da marca | Redator de propostas (usa a skill `pb-servicos-brand`) | ⏳ |
| 4 | **Finanças** | Cobranças, fluxo de caixa, relatórios | Assistente financeiro | ⏳ |
| 5 | **Jurídico** | Contratos, NDAs, LGPD | Revisor de contratos (usa as skills `legal:*`) | ⏳ |
| 6 | **Marketing (Conteúdo)** | Posts, newsletter, campanhas | Diretor de conteúdo (usa as skills de marketing) | ⏳ |

## Como os departamentos se conversam

```
Cliente ──▶ ATENDIMENTO ──(lead qualificado)──▶ GROWTH ──(quer proposta)──▶ RECEITA
                │                                                         │
                └──(caso sensível / reclamação)──▶ PRISCILA ◀──(aprovar)───┘
```

**Regra:** nenhum agente fecha contrato, dá desconto ou promete prazo. Quem faz isso é sempre a Priscila.
