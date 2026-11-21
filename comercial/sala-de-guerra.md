# Sala de guerra comercial: rodada dos agentes

> Roteiro que o Claude segue em **cada rodada** (agendada às 7h30 e às 16h30, dias úteis, horário de Brasília; tarefa agendada "Sala de guerra: rodada dos agentes", ou quando a Priscila pedir "rode as tarefas da sala").
> O quadro fica na **Central Real**: https://claude.ai/artifact/V4iscT42YcEDt1qyi4BKNS
> 🔒 Este arquivo fica no repositório **público**: ele só descreve o processo. **Nunca** copie aqui nomes, empresas ou textos das tarefas.

## Onde estão os dados (banco da Central Real, via ferramenta `ArtifactData`)
| Caminho | O que é |
|---|---|
| `tarefas/<id>` | Uma tarefa. Campos: `titulo`, `tipo` (`pedido` · `prospeccao` · `followup` · `diagnostico` · `conteudo` · `ads` · `fluxo`), `agente`, `canal`, `contato` (nome), `empresa`, `detalhes` (contexto da Priscila), `prazo` (AAAA-MM-DD), `status` (`sugestao` · `fazer` · `andamento` · `aprovar` · `aprovado` · `feito` · `descartada`), `resultado` (entrega do agente), `proxima` (próximo passo), `ajuste` (pedido de ajuste da Priscila), `criado`, `atualizado`, `por`, `execucao` (o que fazer depois de aprovado), `execucao_feita` (o que foi feito), `pedido` (id do pedido de origem), `depende_de`. |
| `sala/status` | Resumo da última rodada: `ultima_rodada` (data ISO), `resumo` (1 frase), `proxima` (texto). |
| `sala/analise` | Análise dos resultados mostrada no topo da sala: `texto` (até 8 linhas) e `atualizado` (ISO). |
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
4. **Sugestões dos agentes.** Grave no máximo **3** tarefas novas com `status: sugestao` (aparecem em "Sugestões dos agentes"; a Priscila aceita ou descarta). Base: `campanhas/`, `redes/` (calendário), funil (`eventos`) e tarefas recentes. Não repita sugestão pendente ou descartada nos últimos 14 dias. Cada sugestão: `titulo`, `tipo`, `detalhes` (por que agora, em 1 frase), `por` (nome do agente).
5. **Análise dos resultados.** Na rodada das 16h30 de sexta, ou quando a Priscila pedir, grave `sala/analise`: números reais do funil (abordagens, respostas, diagnósticos, propostas, contratos) da semana, tarefas entregues e aprovadas, o que funcionou e 1 a 3 recomendações. Com a conta de anúncios conectada, o Lucas inclui os números dos anúncios. **Só números que existem nos dados**; se não houver dados, diga isso.
6. Gravar `sala/status` com `ultima_rodada` (agora), `resumo` (ex.: "3 tarefas prontas para aprovar") e `proxima` ("próxima rodada às 16h30").
7. Se não houver nada para fazer, só atualizar `sala/status` ("Nenhuma tarefa nova").

## Aprovou, os agentes seguem (com conectores)
- **Duas tarefas agendadas:** (1) "Sala de guerra: rodada dos agentes" (7h31 e 16h31, sessão nova, **sem** conectores): divide pedidos, cria entregas, sugestões e análise; (2) "Sala de guerra: execução das aprovadas (com conectores)" (7h52 e 16h52), que roda **na conversa principal do Claude da Priscila**, onde Canva, Gmail e Google Agenda estão conectados: executa as tarefas `aprovado`.
- Ao clicar **Aprovar** numa tarefa com `execucao`, a página aciona a tarefa (2) em 15 segundos. O botão **▶ Rodar agora** aciona a (1).
- Se a sessão sem conectores não conseguir enviar algo ao GitHub, ela guarda o rascunho no banco (`rascunhos/…`) e a execução (2) publica.

## Painel executivo (base de dados)
- Painel: https://claude.ai/artifact/WZUrduDJJPGzNNa2cgH7Wd · base `data/executivo/dias` (1 documento por dia, id `AAAA-MM-DD`) e `data/executivo/contratos`.
- Em cada execução (2), grave o dia de hoje (`set` no documento do dia): `abordagens`, `respostas`, `diagnosticos`, `propostas`, `contratos` (totais acumulados do funil `eventos`, **sem** registros de teste: `quem` ou `oque` com "teste"), `sugestoes`, `fila`, `para_aprovar`, `aprovadas_execucao`, `feitas` (contagem atual de `tarefas` por status) e `nota` (1 frase, opcional).
- Para cada evento `contrato` novo (não teste), crie um documento em `data/executivo/contratos` com `data`, `segmento`, `oferta` (o que foi fechado) e, se a Priscila informar, `implantacao` e `mensalidade` (números). Sem valor informado, deixe em branco e peça em `proxima`.
- Só números que existem nos dados. Nada de nomes de pessoas no painel.

## Ações permitidas depois da aprovação (`execucao`)
- Enviar peça pronta ao **Canva**, na pasta certa (`marca/canva.md`).
- Criar **lembrete** na agenda falecom@pbservicos.com.br para a Priscila (publicar, ligar, enviar). Convites para outras pessoas: só com confirmação explícita dela.
- Criar **rascunho** no Gmail. **Nunca enviar.**
- **Anúncios (Meta Ads), quando a conta estiver conectada:** criar campanha/conjunto/anúncio **sempre pausado**; pausar anúncio; ativar ou mudar verba **só no valor exato aprovado** pela Priscila e nunca acima do teto mensal que ela definiu.
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
