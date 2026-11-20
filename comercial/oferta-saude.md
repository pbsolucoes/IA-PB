# Oferta comercial: Linha Saúde (implantação + mensalidade)

> ⚠️ **Preços: ✏️ PREENCHER.** Não coloquei valores porque não tenho base para estimar o que o seu mercado paga. Sugestão: use a skill `validador-ideias-saas` ou converse com 5 clínicas antes de fixar o preço.

## Estrutura

| | Implantação (paga uma vez) | Mensalidade |
|---|---|---|
| **O que inclui** | Diagnóstico do processo da clínica (a sua especialidade) · ficha da clínica · configuração dos agentes · aprovação das mensagens pelo responsável técnico · testes de segurança · treinamento da recepção | Operação e monitoramento · ajustes nas mensagens · relatório mensal (ocupação, faltas, NPS, glosas) · reunião mensal de resultados |
| **Preço** | ✏️ por agente ou por pacote | ✏️ por agente ou por pacote |
| **Prazo de implantação** | ✏️ (o agente 4, de glosas, é o mais longo) | Contrato mínimo: ✏️ meses |

**Ferramentas de terceiros: contratadas diretamente pela clínica**, em nome dela: linha oficial do WhatsApp (Meta), conta da IA (ex.: Anthropic), sistema de agenda e de faturamento. A PB Soluções configura e acompanha, mas **não revende nem responde** pela disponibilidade, pelas regras ou pelos preços dessas empresas.

## Limites de responsabilidade (vai para o contrato)

| É responsabilidade da **clínica** | É responsabilidade da **PB Soluções** |
|---|---|
| Atendimento em saúde e decisões clínicas | Diagnóstico de gestão e desenho dos processos |
| Controladora dos dados dos pacientes (LGPD) | Operadora: tratar dados só conforme o contrato e as instruções da clínica |
| Aprovar as mensagens (responsável técnico) | Configurar os agentes com as mensagens aprovadas |
| Decidir e enviar guias ao convênio | Apontar riscos de glosa (o agente sugere, não decide) |
| Contratar e pagar as ferramentas de terceiros | Configurar, testar e monitorar, como contratado |
| Responder aos pacientes que forem escalonados | Ajustar os agentes e entregar o relatório mensal |

> ⚖️ Peça a um advogado para transformar esta tabela em cláusulas (prestação de serviço + DPA + limitação de responsabilidade).

## Pacotes sugeridos (nomes para você validar)

| Pacote | Agentes | Para quem |
|---|---|---|
| **Agenda Cheia** | 1 Agendamento + 3 NPS | Clínica pequena que perde paciente por falta |
| **Paciente Fiel** | 1 + 2 Captação/retorno + 3 | Clínica que quer crescer a base |
| **Receita Protegida** | 4 Glosas | Clínica/hospital com muito convênio |
| **Completo** | 1 + 2 + 3 + 4 | Casa de saúde / clínica média |

## Antes de ligar o agente (contrato)

- [ ] Contrato de prestação de serviço
- [ ] **Acordo de tratamento de dados (DPA)**: clínica = controladora, PB Soluções = operadora (veja `padroes/saude-compliance.md`)
- [ ] Mensagens aprovadas por escrito pelo responsável técnico
- [ ] Testes de segurança (`produtos/saude/testes-seguranca.md`) aprovados
- [ ] Linha de WhatsApp Business API **contratada pela clínica**, em nome dela, e ativa

## Argumento de venda (tom PB Soluções: diagnóstico antes de prescrição)

> "Antes de colocar qualquer robô, eu olho o seu processo. Já participei de projetos em saúde em que a organização chegou a +22% de ocupação e −35% de glosas. O mérito foi da equipe deles; o número da sua clínica a gente descobre medindo o mês zero."
