# Regras de saúde: segurança, conselhos profissionais e LGPD

> Orientação de boas práticas, **não é parecer jurídico**. Antes do primeiro contrato com clínica, valide este arquivo e o contrato com um advogado especializado em direito da saúde e LGPD.
> Legenda: ✅ = norma que existe e foi citada corretamente; 🔎 = confirmar o número e o texto atual da norma antes de usar em contrato ou material de venda.

## 1. Segurança do paciente (regra nº 1, acima de tudo)

| Situação | O que o agente faz |
|---|---|
| Pergunta sobre sintoma, remédio, dose, resultado de exame | Não responde. "Essa orientação precisa ser dada pelo profissional. Posso agendar uma consulta ou passar para a equipe." |
| Sinais de emergência (dor no peito, falta de ar, desmaio, sangramento intenso, convulsão, AVC, etc.) | Responde **na hora**: "Isso pode ser uma emergência. Ligue agora para o **SAMU 192** ou vá ao pronto-socorro mais próximo." Avisa a clínica. Não continua o agendamento. |
| Fala de suicídio, autolesão ou desespero | Acolhe sem julgar, informa o **CVV 188** (ligação gratuita, 24h) e o SAMU 192 em caso de risco imediato. Avisa a clínica **imediatamente**. ✅ |
| Paciente menor de idade | Conversa com o responsável legal. |

## 2. LGPD: dado de saúde é dado sensível

- ✅ A LGPD (Lei 13.709/2018) classifica dado referente à saúde como **dado pessoal sensível** (art. 5º, II), com regras mais rígidas de tratamento (art. 11).
- **Papéis:** a **clínica é a controladora** (decide sobre os dados). A **PB Soluções é a operadora** (trata os dados em nome da clínica). As ferramentas (Meta/WhatsApp, n8n, Anthropic) são **suboperadoras**. Isso precisa constar em contrato, num **acordo de tratamento de dados** (em inglês, DPA).
- O agente pede **o mínimo**: nome, telefone, data de nascimento (se a clínica exigir), convênio. **Não** pede a descrição dos sintomas pelo WhatsApp; quem coleta isso é a equipe da clínica.
- Conversas guardadas pelo menor tempo necessário. ✏️ Definir com cada clínica (vai na ficha).
- Pedido de acesso ou exclusão de dados → encaminhado à clínica (é ela quem responde, como controladora).

## 3. Sigilo e ética dos conselhos

| Segmento | Conselho | Pontos que afetam o agente |
|---|---|---|
| Médico | CFM | ✅ Sigilo profissional (Código de Ética Médica). ✅ Publicidade médica: Resolução CFM nº 2.336/2023. O agente de captação **não** promete resultado, não usa "antes e depois" e não oferece desconto como chamariz. 🔎 confirmar os detalhes de cada item na resolução. |
| Psicologia | CFP | ✅ Sigilo (Código de Ética do Psicólogo). 🔎 Atendimento online regido por resolução própria do CFP; o agente só agenda, nunca faz acolhimento terapêutico. |
| Odontologia | CFO | ✅ Código de Ética Odontológica. 🔎 Regras de publicidade odontológica: confirmar a resolução vigente do CFO antes de criar mensagens de captação. |
| Hospital / casa de saúde | CFM + vigilância sanitária | Mesmas regras médicas; atenção a internação e urgência, que sempre vão para humano. |

Regra prática: **mensagens de captação (agente 2) passam pela aprovação do responsável técnico da clínica** antes de serem usadas.

## 4. WhatsApp (canal principal das clínicas)

- ✅ É preciso usar a **WhatsApp Business Platform (API oficial)**, e não o aplicativo comum, para automatizar.
- ✅ Fora da janela de 24h desde a última mensagem do paciente, só é possível enviar **modelos de mensagem aprovados pela Meta** (ex.: confirmação de consulta, lembrete de retorno).
- ✅ Mensagens de reativação ou promoção exigem que o paciente tenha **aceitado receber** (opt-in) e precisam oferecer opção de **sair** (opt-out).
- ✏️ Custo por mensagem: varia por categoria e país. Confira a tabela atual da Meta; não tenho como confirmar o valor de hoje.

## 5. Transparência de IA (padrão americano adotado)

Toda conversa começa com "assistente virtual (IA) da Clínica X". O paciente pode pedir um humano a qualquer momento.
