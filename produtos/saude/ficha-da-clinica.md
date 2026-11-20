# Ficha da clínica (questionário de implantação)

> Preenchida **na implantação**, junto com a clínica. Cada resposta vira uma variável `{{ }}` dentro dos modelos de agente.
> Uma cópia por cliente: `clientes/<nome-da-clinica>/ficha.md` (pasta privada; veja a observação no final).

## A. Identificação
- `{{clinica_nome}}`: nome como o paciente conhece
- `{{segmento}}`: médica | saúde mental | odontologia | hospital
- `{{responsavel_tecnico}}`: nome e registro (CRM / CRP / CRO), quem aprova as mensagens
- `{{contato_humano}}`: quem recebe os escalonamentos (nome + WhatsApp interno)
- `{{endereco}}` · `{{como_chegar}}` · `{{estacionamento}}`

## B. Agenda
- `{{sistema_agenda}}`: qual software a clínica usa? (ex.: Feegow, iClinic, ProDoctor, Clinicorp, Google Agenda, planilha). 🔎 Verificar se tem API ou integração. Se não tiver, o agente cria uma **solicitação** e a recepção confirma.
- `{{profissionais}}`: nome, especialidade, dias e horários, duração da consulta
- `{{horario_funcionamento}}`
- `{{regra_cancelamento}}`: com quantas horas de antecedência
- `{{preparo_exames}}`: texto aprovado pela clínica para cada exame

## C. Convênios e valores
- `{{convenios_aceitos}}`: lista
- `{{particular_valores}}`: o agente informa? sim / não (se não, "a recepção informa")
- `{{formas_pagamento}}`

## D. Mensagens (aprovadas pelo responsável técnico)
- `{{saudacao}}`: primeira mensagem
- `{{texto_confirmacao}}` · `{{texto_lembrete_retorno}}` · `{{texto_nps}}`
- `{{opt_in}}`: como a clínica registra que o paciente aceitou receber mensagens

## E. Privacidade
- `{{prazo_retencao}}`: por quanto tempo guardar as conversas
- `{{politica_privacidade_url}}`
- `{{dpa_assinado}}`: acordo de tratamento de dados assinado? (obrigatório antes de ligar)

## F. Agentes contratados
- [ ] 1 Agendamento + confirmação  - [ ] 2 Captação e retorno  - [ ] 3 NPS  - [ ] 4 Glosas

---
⚠️ **Dados de clientes não ficam neste repositório.** Fichas preenchidas contêm dados das clínicas; guarde-as numa pasta privada (ex.: Google Drive) ou num repositório **privado** separado.
