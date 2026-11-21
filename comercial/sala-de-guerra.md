# Sala de guerra comercial: rodada dos agentes

> Roteiro que o Claude segue em **cada rodada** (agendada às 7h30 e às 16h30, dias úteis, horário de Brasília; tarefa agendada "Sala de guerra: rodada dos agentes", ou quando a Priscila pedir "rode as tarefas da sala").
> O quadro fica na **Central Real**: https://claude.ai/artifact/V4iscT42YcEDt1qyi4BKNS
> 🔒 Este arquivo fica no repositório **público**: ele só descreve o processo. **Nunca** copie aqui nomes, empresas ou textos das tarefas.

## Onde estão os dados (banco da Central Real, via ferramenta `ArtifactData`)
| Caminho | O que é |
|---|---|
| `tarefas/<id>` | Uma tarefa. Campos: `titulo`, `tipo` (`pedido` · `prospeccao` · `followup` · `diagnostico` · `conteudo` · `ads` · `fluxo`), `agente`, `canal`, `contato` (nome), `empresa`, `detalhes` (contexto da Priscila), `prazo` (AAAA-MM-DD), `status` (`fazer` · `andamento` · `aprovar` · `aprovado` · `feito`), `resultado` (entrega do agente), `proxima` (próximo passo), `ajuste` (pedido de ajuste da Priscila), `criado`, `atualizado`, `por`, `execucao` (o que fazer depois de aprovado), `execucao_feita` (o que foi feito), `pedido` (id do pedido de origem), `depende_de`. |
| `sala/status` | Resumo da última rodada: `ultima_rodada` (data ISO), `resumo` (1 frase), `proxima` (texto). |
| `eventos/<id>` | Funil real (abordagem, resposta, diagnóstico, proposta, contrato). **Só a Priscila registra.** O agente não cria eventos. |

## Passo a passo de uma rodada
**Equipe e nomes:** `agentes/equipe.md`.

1. **Pedidos primeiro.** Tarefas `tipo: pedido` com `status: fazer` → use o agente `mesa-central` (Helena): ela divide o pedido em tarefas (`status: fazer`, `pedido: <id>`, `execucao` quando houver) e marca o pedido como `feito`, com o plano em `resultado`.
2. **Depois de aprovado.** Tarefas com `status: aprovado` → execute **só** o que está em `execucao` e esteja na lista de ações permitidas (abaixo). Grave `execucao_feita` (o que foi feito, com links) e `status: feito`. Se algo não puder ser feito nesta rodada (por exemplo, um conector indisponível), grave em `proxima` e deixe `status: aprovado`.
3. **Tarefas novas.** Tarefas `status: fazer` (no máximo 10 por rodada; as de prazo mais próximo primeiro; respeite `depende_de`):
   1. Marcar `status: andamento` (com `if_version`).
   2. Executar com o agente certo, lendo antes as instruções dele em `.claude/agents/`:

      | Tipo | Agente (nome) | Entrega em `resultado` |
      |---|---|---|
      | `prospeccao` | `comercial-prospeccao` (Rafael) | 1 mensagem de primeira abordagem para o canal da tarefa, pronta para colar. Se houver `ajuste`, refazer seguindo o pedido. |
      | `followup` | `comercial-prospeccao` (Rafael) | 1 mensagem de follow-up, curta e respeitosa. |
      | `diagnostico` | `comercial-prospeccao` + `redator-propostas` (Marina) | Roteiro do diagnóstico **ou** rascunho da proposta, com os valores de `conhecimento/servicos.md`. |
      | `conteudo` | `social-media` (Nina), `redator-copy` (Bia), `designer-pecas` (Theo) | Legenda/post pronto; peça em PNG no repositório (sem dados pessoais) e o nome do arquivo. Sugerir `execucao`: "enviar ao Canva + lembrete na agenda". |
      | `ads` | `trafego-ads` (Lucas) | Plano de campanha, textos do anúncio e passo a passo no Gerenciador. Verba só a que a Priscila definir. |
      | `fluxo` | `fluxos-automacao` (Davi) | Fluxo desenhado (etapas, responsáveis, onde entra a IA) e passo a passo das automações gratuitas. |
   3. Gravar `resultado`, `proxima` (o que a Priscila faz agora, em 1 linha), `execucao` (o que os agentes farão depois da aprovação, se houver), `status: aprovar`, `atualizado` (agora) e `por` (nome do agente). Apagar `ajuste` se ele já foi atendido.
4. Gravar `sala/status` com `ultima_rodada` (agora), `resumo` (ex.: "3 tarefas prontas para aprovar") e `proxima` ("próxima rodada às 16h30").
5. Se não houver nada para fazer, só atualizar `sala/status` ("Nenhuma tarefa nova").

## Ações permitidas depois da aprovação (`execucao`)
- Enviar peça pronta ao **Canva**, na pasta certa (`marca/canva.md`).
- Criar **lembrete** na agenda falecom@pbservicos.com.br para a Priscila (publicar, ligar, enviar). Convites para outras pessoas: só com confirmação explícita dela.
- Criar **rascunho** no Gmail. **Nunca enviar.**
- Atualizar a **Central de publicações** e arquivos do repositório **sem dados pessoais** (commit e push permitidos só para peças e textos de marketing).

## Regras (não negociáveis)
- **Os agentes nunca enviam mensagens nem e-mails, não publicam nas redes, não gastam verba de anúncio e não marcam reuniões com outras pessoas.** Tudo passa por **Pronto · na tua mesa**. Quem envia e publica é a Priscila.
- **Uma mensagem por pessoa.** Não criar sequências automáticas.
- **Nunca inventar** preço, prazo, case, número ou serviço. Usar só `conhecimento/`. Se faltar informação, escrever em `proxima` o que a Priscila precisa responder.
- **Nunca citar nomes de clientes** (atuais ou antigos) nas mensagens.
- **Saúde:** seguir `padroes/saude-compliance.md`.
- **LGPD:** usar só nome e empresa. Se uma tarefa tiver telefone, e-mail, CPF ou dado de saúde, não usar esse dado e avisar em `proxima` para a Priscila apagar.
- **Não escrever nada das tarefas no repositório** (ele é público) nem em commits.
- Não mudar tarefas em `aprovar` ou `feito` (só `aprovado` → `feito` pela execução). Não apagar tarefas.
- O agente não consegue pesquisar pessoas no Instagram nem no LinkedIn: trabalha com o que a Priscila escreveu na tarefa.

## Limites da rodada agendada
- A rodada automática roda numa sessão nova **sem os conectores** Canva, Gmail e Google Agenda (a organização não permite passar conectores para tarefas agendadas). Execuções que dependem deles ficam em `aprovado` com o aviso em `proxima`, e são feitas quando a Priscila abrir o Claude e disser "execute as aprovadas da sala".
