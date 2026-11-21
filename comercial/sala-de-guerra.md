# Sala de guerra comercial: rodada dos agentes

> Roteiro que o Claude segue em **cada rodada** (agendada às 7h30 e às 16h30, dias úteis, horário de Brasília; tarefa agendada "Sala de guerra: rodada dos agentes", ou quando a Priscila pedir "rode as tarefas da sala").
> O quadro fica na **Central Real**: https://claude.ai/artifact/V4iscT42YcEDt1qyi4BKNS
> 🔒 Este arquivo fica no repositório **público**: ele só descreve o processo. **Nunca** copie aqui nomes, empresas ou textos das tarefas.

## Onde estão os dados (banco da Central Real, via ferramenta `ArtifactData`)
| Caminho | O que é |
|---|---|
| `tarefas/<id>` | Uma tarefa. Campos: `titulo`, `tipo` (`prospeccao` · `followup` · `diagnostico` · `conteudo`), `agente`, `canal`, `contato` (nome), `empresa`, `detalhes` (contexto da Priscila), `prazo` (AAAA-MM-DD), `status` (`fazer` · `andamento` · `aprovar` · `feito`), `resultado` (entrega do agente), `proxima` (próximo passo), `ajuste` (pedido de ajuste da Priscila), `criado`, `atualizado`, `por`. |
| `sala/status` | Resumo da última rodada: `ultima_rodada` (data ISO), `resumo` (1 frase), `proxima` (texto). |
| `eventos/<id>` | Funil real (abordagem, resposta, diagnóstico, proposta, contrato). **Só a Priscila registra.** O agente não cria eventos. |

## Passo a passo de uma rodada
1. Ler `tarefas` com `status = fazer` (consulta `query`, `where status == fazer`).
2. Para cada tarefa (no máximo 10 por rodada, as de prazo mais próximo primeiro):
   1. Marcar `status: andamento` (com `if_version`).
   2. Executar com o agente certo, lendo antes as instruções dele em `.claude/agents/`:

      | Tipo | Agente | Entrega em `resultado` |
      |---|---|---|
      | `prospeccao` | `comercial-prospeccao` | 1 mensagem de primeira abordagem para o canal da tarefa (Instagram ou LinkedIn), pronta para colar. Se houver `ajuste`, refazer seguindo o pedido. |
      | `followup` | `comercial-prospeccao` | 1 mensagem de follow-up, curta e respeitosa. |
      | `diagnostico` | `comercial-prospeccao` (roteiro) e `redator-propostas` (quando a Priscila já fez a conversa e pôs as anotações em `detalhes`) | Roteiro da conversa de diagnóstico **ou** rascunho da proposta. Sem preço, se não estiver em `conhecimento/`. |
      | `conteudo` | `social-media`, `redator-copy` e, se precisar de imagem, `designer-pecas` | Legenda/post pronto. Se fizer peça, salvar o PNG no repositório e no Canva (`marca/canva.md`) e citar o nome do arquivo. |
   3. Gravar `resultado`, `proxima` (o que a Priscila faz agora, em 1 linha), `status: aprovar`, `atualizado` (agora) e `por: agente`. Apagar `ajuste` se ele já foi atendido.
3. Gravar `sala/status` com `ultima_rodada` (agora), `resumo` (ex.: "3 tarefas prontas para aprovar") e `proxima` ("próxima rodada às 16h30").
4. Se não houver tarefa em `fazer`, só atualizar `sala/status` ("Nenhuma tarefa nova").

## Regras (não negociáveis)
- **Os agentes nunca enviam mensagens**, não postam e não marcam reuniões. Tudo vai para **Para você aprovar**. Quem envia é a Priscila.
- **Uma mensagem por pessoa.** Não criar sequências automáticas.
- **Nunca inventar** preço, prazo, case, número ou serviço. Usar só `conhecimento/`. Se faltar informação, escrever em `proxima` o que a Priscila precisa responder.
- **Nunca citar nomes de clientes** (atuais ou antigos) nas mensagens.
- **Saúde:** seguir `padroes/saude-compliance.md`.
- **LGPD:** usar só nome e empresa. Se uma tarefa tiver telefone, e-mail, CPF ou dado de saúde, não usar esse dado e avisar em `proxima` para a Priscila apagar.
- **Não escrever nada das tarefas no repositório** (ele é público) nem em commits.
- Não mudar tarefas em `aprovar` ou `feito`. Não apagar tarefas.
- O agente não consegue pesquisar pessoas no Instagram nem no LinkedIn: trabalha com o que a Priscila escreveu na tarefa.

## Limites da rodada agendada
- A rodada automática roda numa sessão nova, **sem os conectores** (Canva, Google Agenda). Peças para o Canva e marcações na agenda ficam para quando a Priscila abrir o Claude; a rodada anota isso em `proxima`.
