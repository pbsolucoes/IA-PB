---
name: marcar-diagnostico
description: Marca a conversa de diagnóstico da gestão (30 a 40 min, Google Meet) na agenda falecom@pbservicos.com.br da PB Soluções IA. Use quando a Priscila disser "marca o diagnóstico com [nome] na [data e hora]", "agenda uma conversa com…", "remarca o diagnóstico de…" ou "quais horários tenho livres para diagnóstico?".
---

# Marcar diagnóstico da gestão

Marca, remarca ou consulta horários da **conversa de diagnóstico da gestão** na agenda da PB Soluções IA. Fale com a Priscila em português simples.

## Configuração fixa
| Item | Valor |
|---|---|
| Agenda | `falecom@pbservicos.com.br` (fuso America/Sao_Paulo) |
| Duração padrão | **40 minutos** (a conversa dura de 30 a 40 min) |
| Link | Google Meet criado automaticamente (`addGoogleMeetUrl: true`) |
| Horário de atendimento | segunda a sexta, 9h às 18h (✏️ ajustar se a Priscila mudar) |
| Lembretes | e-mail 24 h antes + aviso 30 min antes |
| Título | `Diagnóstico da gestão · [Nome] ([Empresa])` |
| Visibilidade | privada |

## Passo a passo

### 1. Juntar os dados
Preciso de: **nome**, **empresa**, **data e hora**. Opcional: **e-mail** da pessoa (para ela receber o convite com o link do Meet) e uma frase sobre o desafio dela.
- Se faltar data ou hora: rode `suggest_time` na agenda falecom (40 min, 9h–18h, sem fim de semana) e ofereça **3 opções**.
- Se faltar o e-mail: avise que, sem e-mail, o convite não chega à pessoa e a Priscila precisa mandar o link do Meet pelo Direct/WhatsApp.

### 2. Conferir conflito
Rode `list_events` na agenda falecom no dia pedido. Se houver evento no mesmo horário, avise e sugira os horários livres mais próximos.

### 3. Mostrar o resumo e PEDIR CONFIRMAÇÃO (obrigatório)
Antes de criar qualquer evento, mostre:
```
📅 Diagnóstico da gestão · [Nome] ([Empresa])
🗓️ [dia da semana], [dd/mm] às [hh:mm] até [hh:mm] (Brasília)
🎥 Google Meet (link criado automaticamente)
✉️ Convite para: [e-mail] (ou: "sem e-mail — você envia o link")
Posso criar?
```
**Só crie depois de um "sim" da Priscila.** Nunca crie, remarque ou apague evento sem essa confirmação na mesma conversa.

### 4. Criar o evento
`create_event` com:
- `calendarId`: `falecom@pbservicos.com.br`
- `summary`: título do padrão acima
- `startTime` / `endTime`: horário local, sem fuso no texto (a agenda já é de São Paulo)
- `addGoogleMeetUrl`: `true`
- `attendees`: o e-mail da pessoa (se houver)
- `overrideReminders`: e-mail 1440 min + popup 30 min
- `visibility`: `private`
- `description`:
```
Conversa de diagnóstico da gestão (30 a 40 min) com a PB Soluções IA.

Para aproveitar melhor, pense em:
• Como funciona um dia típico na sua empresa
• Onde a equipe está mais sobrecarregada
• Quais números você acompanha hoje

Priscila Blandy Dias · PB Soluções IA
```

### 5. Depois de criar
Responda com o dia, a hora e o **link do Meet**, e entregue uma mensagem pronta para a Priscila mandar no Direct/LinkedIn:
```
Combinado, [Nome]! Nossa conversa está marcada para [dia], [dd/mm], às [hh:mm] (horário de Brasília), pelo Google Meet: [link]. Até lá!
```
Lembre a Priscila de atualizar o funil (etapa "Diagnóstico marcado").

## Remarcar ou cancelar
Encontre o evento com `list_events` (`fullText` com o nome da pessoa), mostre o que vai mudar e **peça confirmação** antes de alterar ou apagar.

## Privacidade (LGPD)
- Nome, e-mail e empresa do lead ficam **só na agenda**. **Nunca** grave dados de leads neste repositório (ele é público).
- Na descrição do evento, não registre informações sensíveis (saúde, finanças pessoais).
