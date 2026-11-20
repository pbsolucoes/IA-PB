# Padrão de qualidade: boas práticas americanas + LGPD

Você escolheu seguir o **padrão de qualidade americano** sem ter empresa nos EUA. Por isso, este arquivo separa duas coisas:

- 🇧🇷 **Lei que vale para você hoje:** LGPD (a PB Soluções é uma empresa brasileira tratando dados de pessoas).
- 🇺🇸 **Boas práticas americanas:** adotadas por escolha. Algumas viram lei se um dia você atender clientes nos EUA.

> Isto é orientação de boas práticas, não parecer jurídico. Antes de abrir empresa nos EUA ou fazer marketing ativo por lá, consulte um advogado.

## 1. Transparência de IA ("AI disclosure")

| Prática | De onde vem | Como aplicamos |
|---|---|---|
| Dizer que é robô/IA | Lei da Califórnia SB 1001 (vale desde 2019 para bots usados para vender ou influenciar); lei de IA de Utah (2024); orientação da FTC contra práticas enganosas | Primeira mensagem de todo canal diz "assistente virtual (IA)". Nunca nega ser IA. |
| Não fazer afirmações exageradas | FTC (órgão de defesa do consumidor dos EUA) | Cases citados como resultados anteriores, nunca como promessa |

## 2. Sempre ter um caminho para um humano

Boa prática de mercado. Implementação: `agentes/atendimento/escalonamento.md`. O cliente pode pedir uma pessoa a qualquer momento.

## 3. E-mail (CAN-SPAM, a lei americana de e-mail comercial)

Vale para e-mail **de marketing** enviado a pessoas nos EUA:
- Identificar claramente quem envia
- Assunto que não engane
- Link ou instrução para descadastrar, atendido rápido
- Endereço físico do remetente

Na fase 1 o agente **não envia** e-mail de marketing, só responde quem escreveu. Isso fica registrado para a fase de Marketing.

## 4. Acessibilidade do chat do site (ADA / WCAG 2.1 AA)

- Contraste de texto adequado (já previsto na paleta da marca: texto Espresso sobre Marfim)
- Chat utilizável só com o teclado
- Botão "Falar com a Priscila" sempre visível

## 5. Privacidade: LGPD (lei brasileira, obrigatória)

- Coletar o **mínimo**: nome, e-mail e empresa, e só quando necessário
- Dizer **para que** o dado vai ser usado
- Atender pedido de exclusão (o agente escalona com o motivo `privacidade`)
- ✏️ PREENCHER: link da Política de Privacidade no site (se não existir, é uma tarefa para o departamento Jurídico)

## 6. Metas de tempo de resposta (SLA)

| Canal | Agente IA | Humano (escalonamento) |
|---|---|---|
| Instagram Direct | imediato | ✏️ (sugestão: até 1 dia útil) |
| Chat do site | imediato | ✏️ (sugestão: até 1 dia útil) |
| E-mail | rascunho imediato | ✏️ (sugestão: Priscila envia em até 1 dia útil) |

## 7. Melhoria contínua

- Uma vez por semana: ler 5 conversas aleatórias e anotar o que o agente errou
- Cada erro vira um ajuste na base de conhecimento ou um novo teste em `testes.md`
