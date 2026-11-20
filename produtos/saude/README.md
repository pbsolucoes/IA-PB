# Linha Saúde: agentes de IA para a saúde privada (pequenas e médias)

> **O produto:** a PB Soluções implanta e opera agentes de IA para clínicas e casas de saúde, cobrando **taxa de implantação + mensalidade**.
> Cada agente é um **modelo** (escrito uma vez) + a **ficha da clínica** (preenchida para cada cliente). É assim que um mesmo agente atende várias clínicas.

```
  MODELO DO AGENTE            FICHA DA CLÍNICA              AGENTE PERSONALIZADO
  (produtos/saude/agentes) + (ficha-da-clinica.md)   =   "Assistente da Clínica X"
  regras, segurança, tom     nome, horários, convênios     pronto para o WhatsApp
```

## O pacote: 4 agentes, cada um nascido de um case seu

| # | Agente | O que faz | Case seu que comprova a experiência | Fala com |
|---|---|---|---|---|
| 1 | [**Agendamento + confirmação**](agentes/01-agendamento-confirmacao.md) | Agenda pelo WhatsApp, confirma na véspera, reaproveita horários vagos | Vila Verde: **+22% de ocupação** | Paciente |
| 2 | [**Captação e retorno**](agentes/02-captacao-retorno.md) | Lembra retornos, reativa pacientes sumidos, responde a novos contatos | Amil: **+30% da base de clientes** | Paciente |
| 3 | [**Satisfação (NPS)**](agentes/03-satisfacao-nps.md) | Pergunta a nota após a consulta e encaminha quem ficou insatisfeito | Amil: **NPS de 68 para 82** | Paciente |
| 4 | [**Faturamento / glosas**](agentes/04-faturamento-glosas.md) | Confere guias de convênio antes do envio e aponta erros | Vila Verde: **−35% de glosas**; São José: **+12% de rentabilidade** | Equipe da clínica |

> ⚠️ Os números acima são **resultados de projetos anteriores da Priscila**, não promessa de resultado do agente. Na venda, use: "em projetos anteriores, alcançamos..."

## Segmentos atendidos

Clínicas médicas · Saúde mental · Odontologia · Hospitais pequenos / casas de saúde.
As diferenças de regras entre eles estão em [`segmentos.md`](segmentos.md).

## Regras que valem para TODOS os agentes de saúde

Leia [`../../padroes/saude-compliance.md`](../../padroes/saude-compliance.md). Resumo:

1. **Nunca dá diagnóstico, nunca orienta tratamento, nunca interpreta exame.**
2. **Sinal de emergência → para tudo:** orienta ligar para o **SAMU 192** (ou ir ao pronto-socorro) e avisa a clínica.
3. **Saúde mental, risco de suicídio → CVV 188** + aviso imediato à clínica.
4. Sempre diz que é **assistente virtual (IA)** e oferece falar com a recepção.
5. Dado de saúde é **dado sensível** (LGPD): coleta o mínimo, nunca pede o motivo detalhado da consulta pelo WhatsApp.

## Arquivos

| Arquivo | O que é |
|---|---|
| `ficha-da-clinica.md` | Questionário de implantação: o que perguntar a cada clínica nova |
| `segmentos.md` | Regras específicas de cada segmento (médica, saúde mental, odonto, hospital) |
| `agentes/` | Os 4 modelos de agente |
| `testes-seguranca.md` | Testes obrigatórios antes de ligar qualquer agente numa clínica |
| `../../comercial/oferta-saude.md` | Como vender: o que entra na implantação e na mensalidade |
