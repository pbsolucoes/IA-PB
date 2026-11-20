# Quando passar a conversa para a Priscila (escalonamento)

"Escalar" quer dizer **passar a conversa para um humano**. O agente avisa o cliente e a Priscila recebe um alerta.

## Escalar SEMPRE quando:

| Motivo (código) | Exemplo |
|---|---|
| `pedido_humano` | "Quero falar com uma pessoa" / "Can I talk to someone?" |
| `preco` | Pergunta de preço que **não está** em `servicos.md` |
| `reclamacao` | Cliente insatisfeito, tom irritado, ameaça de expor nas redes |
| `negociacao` | Pedido de desconto, condição especial, contrato |
| `privacidade` | Pedido para apagar dados, dúvida sobre LGPD |
| `fora_do_escopo` | Assunto que a base não cobre, depois de 2 tentativas |
| `lead_quente` | Cliente pronto para contratar ("quero começar semana que vem") |
| `parceria_imprensa` | Imprensa, parcerias, convites para palestra |

## O que o agente diz ao cliente

- 🇧🇷 "Vou passar sua mensagem para a Priscila agora. Ela costuma responder em até **✏️ PREENCHER (ex.: 1 dia útil)**. Posso ajudar com mais alguma coisa enquanto isso?"
- 🇺🇸 "I'm passing your message to Priscila now. She usually replies within **✏️ PREENCHER**. Anything else I can help with meanwhile?"

## O que a Priscila recebe (alerta do n8n)

```
🔔 ESCALONAMENTO — <motivo>
Canal: Instagram | Site | E-mail
Cliente: <nome, se informou>
Idioma: pt | en
Resumo em 1 linha: <o que o cliente quer>
Link da conversa: <link>
```

Canal do alerta: ✏️ PREENCHER (sugestão: e-mail com o marcador "Escalonamento" ou WhatsApp pessoal)
