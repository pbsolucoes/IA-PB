# Relançamento das redes: PB Soluções IA

> Plano do **social-media** para "revisar toda a rede social, algo encantador e impactante".
> Base: `marca/posicionamento.md` (gestão + IA para empresários de qualquer segmento; saúde é especialidade), `redes/perfis.md`, `redes/linha-editorial.md`, `conhecimento/empresa.md`.
> Regras: nada de número inventado, nenhum nome de cliente, sempre "diagnóstico da gestão", nenhuma promessa de resultado. Resultados de projetos são **das organizações**, em projetos com participação da Priscila.

---

## 1. Conceito: **Fio Condutor**

Um fio de bronze atravessa os 9 primeiros posts e liga diagnóstico, processo e IA: cada post é um **nó da rede**, e juntos eles formam um único painel no perfil.
Fundos em xadrez (espresso e marfim) dão ritmo à grade; o fio começa no primeiro post publicado e termina no convite para o diagnóstico da gestão.

**Por que funciona:** quem abre o perfil vê primeiro um painel inteiro, bem desenhado (impacto), e depois descobre que cada quadrado conta uma parte da história (encanto). O fio é o mesmo motivo de "rede" que já existe nas peças (`pecas/fonte/rede.js`), agora em escala maior.

### Como o fio passa pela grade (para o designer)
O fio faz um caminho em "S", sempre passando pelo centro de cada post e terminando no CTA:

```
 Linha 1 (topo)   [9 ●◄]──────[8]──────[7]
                                         │
 Linha 2          [6]──────[5 ◆]──────[4]
                   │
 Linha 3 (base)   [3]──────[2]──────[1 ●]
```
- **Começa** no post 1 (embaixo à direita) com um ponto bronze: "o começo".
- **Nó central** no post 5 (a Priscila): o ponto maior, onde a rede se encontra.
- **Termina** no post 9 (em cima à esquerda) com um ponto e uma pequena seta: o convite.
- Em cada post, o fio entra por um lado e sai pelo outro **na mesma altura** do vizinho, sempre cruzando a borda em ângulo reto (assim a ligação parece contínua mesmo com o pequeno espaço branco entre os quadrados).

### Detalhes técnicos (designer-pecas)
- **Formato de todas as peças da grade:** 1080×1350 (vertical). O Instagram mostra as miniaturas do perfil num retângulo vertical e **corta um pouco das laterais**. Por isso: textos e pontos de cruzamento do fio ficam longe das bordas laterais (margem de segurança de ~60 px em cada lado), e o fio cruza as bordas na vertical/horizontal, nunca em diagonal.
- **Painel mestre:** desenhar o fio uma única vez num arquivo de 3240×4050 (3 × 1080 por 3 × 1350) e "recortar" em 9 peças. Assim o fio casa perfeitamente.
- **Nos fundos:** fio em bronze `#AB7646` sobre espresso `#2A211D` e sobre marfim `#FDF9F5`; mesma espessura em todos.
- **Carrosséis:** só a **capa** (primeiro slide) aparece na grade, então o fio vai só na capa.
- **QA visual obrigatório:** gerar uma prévia da grade completa (`pecas/png/grade-relancamento-previa.png`), com os 9 quadrados lado a lado e cortados como no perfil, e conferir se o fio fecha.

---

## 2. Grade 3×3

**Como ler:** no perfil, o post mais novo fica em cima à esquerda. Então o **post 1** é publicado primeiro e termina **embaixo à direita**; o **post 9** é publicado por último e fica **em cima à esquerda**.
Xadrez: posts ímpares (1, 3, 5, 7, 9) = **escuro**; posts pares (2, 4, 6, 8) = **claro**.

### Visão do perfil

| | Coluna 1 | Coluna 2 | Coluna 3 |
|---|---|---|---|
| **Linha 1 (topo)** | 9 · escuro · CTA | 8 · claro · Saúde | 7 · escuro · IA com responsabilidade |
| **Linha 2** | 6 · claro · Prova | 5 · escuro · Pessoa (Priscila) | 4 · claro · Dor |
| **Linha 3 (base)** | 3 · escuro · Dor (gargalo) | 2 · claro · Manifesto | 1 · escuro · Nome novo |

### Detalhe de cada post

| Posição na grade | Ordem de publicação | Fundo | Pilar | Formato | Tema | Ideia de título (até 8 palavras) |
|---|---|---|---|---|---|---|
| Linha 3 · coluna 3 | **1** | Escuro | Pessoa | Post único | Apresentação do nome novo: a PB Serviços agora é PB Soluções IA (gestão + agentes de IA) | **"Agora somos PB Soluções IA."** |
| Linha 3 · coluna 2 | **2** | Claro | Método | Post único | Manifesto: processo bem desenhado primeiro, IA depois. Versão para empresários de qualquer segmento | **"Diagnóstico antes da tecnologia."** |
| Linha 3 · coluna 1 | **3** | Escuro | Dor | Post único | O dono como gargalo (reaproveitar o criativo aprovado `pecas/png/gargalo-ig-post.png` e a legenda de `redes/legendas-gargalo.md`) | **"Tudo passa por você?"** |
| Linha 2 · coluna 3 | **4** | Claro | Dor | Post único | Equipe sobrecarregada com tarefas manuais e repetitivas: o problema é o processo, não a equipe | **"Sua equipe trabalha muito. E tudo atrasa?"** |
| Linha 2 · coluna 2 (centro) | **5** | Escuro | Pessoa | Post único | Quem está por trás: Priscila Blandy Dias, 19 anos de carreira, 2 MBAs, PMO, Green Belt. De preferência com **foto real** da Priscila (é o nó central da rede) | **"Prazer, Priscila. Gestão antes da tecnologia."** |
| Linha 2 · coluna 1 | **6** | Claro | Prova | **Carrossel 1** | Projetos em saúde dos quais a Priscila participou, sempre como "a organização alcançou...". Só números de `conhecimento/empresa.md`, sem nome de cliente, com aviso "não é promessa" | **"O que as organizações alcançaram. Sem mágica."** |
| Linha 1 · coluna 3 | **7** | Escuro | IA com responsabilidade | Post único | Agente de IA se apresenta como IA, passa a conversa para uma pessoa na hora certa e respeita a LGPD | **"IA que diz que é IA."** |
| Linha 1 · coluna 2 | **8** | Claro | Especialidade Saúde | Post único | Para clínicas e casas de saúde: 4 agentes prontos (agendamento e confirmação, captação e retorno, satisfação/NPS, prevenção de glosas), começando pelo diagnóstico | **"Tem clínica? Temos 4 agentes prontos."** |
| Linha 1 · coluna 1 | **9** | Escuro | Método (CTA) | **Carrossel 2** | Como funciona o diagnóstico da gestão: as 3 etapas (diagnóstico, desenho do processo, agentes de IA) + convite para o WhatsApp | **"Como funciona o diagnóstico da gestão."** |

### Conteúdo sugerido dos carrosséis (para o redator)

**Carrossel 1 · Prova (post 6)** · 5 slides
1. Capa (com o fio): "O que as organizações alcançaram. Sem mágica."
2. "Uma clínica de saúde mental alcançou +22% de ocupação e −35% de perdas com glosas."
3. "Um grupo de serviços médicos: +30% de crescimento da base de clientes e NPS de 68 para 82."
4. "Uma casa de saúde: +15% de competitividade e +12% de rentabilidade."
5. "Projetos dos quais participei. O mérito é das equipes. Resultado de outra organização não é promessa: mostra onde vale olhar primeiro."
> Números conferidos em `conhecimento/empresa.md`. Na legenda, deixar claro que os projetos foram **na área da saúde** (para o empresário de outro setor não achar que foram no setor dele).

**Carrossel 2 · CTA (post 9)** · 5 slides
1. Capa (com o fim do fio e a seta): "Como funciona o diagnóstico da gestão."
2. "1. Diagnóstico: entender onde a empresa perde tempo e dinheiro."
3. "2. Desenho: arrumar o processo antes de qualquer ferramenta."
4. "3. Agentes de IA: só então a tecnologia entra para trabalhar."
5. "Quer começar? Fale comigo no WhatsApp (link na bio)."
> ✏️ PREENCHER antes de publicar: duração da primeira conversa, se é gratuita e por qual plataforma (`conhecimento/faq.md`, pergunta 4). Enquanto não houver resposta, **não citar** duração, preço ou prazo.

### Peças que já existem e onde entram
| Peça pronta | Uso no relançamento |
|---|---|
| `pecas/png/post-01-agora-pb-solucoes.png` (escuro) | Base do post 1. Precisa receber o trecho do fio. |
| `pecas/png/post-02-diagnostico.png` (claro) | Base do post 2. Precisa do fio e de texto para empresários em geral (a legenda atual fala de clínica). |
| `pecas/png/gargalo-ig-post.png` (escuro, 1080×1080) | Post 3. Reaproveitar o texto e o layout, renderizar em 1080×1350 com o trecho do fio. Se não der tempo, publicar o quadrado como está (o fio ficará desalinhado nesse ponto). |
| `pecas/png/post-03-custo-falta.png` e `post-04-glosas.png` | Ficam fora da grade. Usar no LinkedIn e nos stories de saúde. |
| `pecas/png/gargalo-story.png` | Story da semana 1 (adesivo de pergunta). |

---

## 3. Destaques (6)

| # | Nome (até 12 caracteres) | O que vai dentro |
|---|---|---|
| 1 | **Comece aqui** (11) | Quem é a PB Soluções IA, o que faz (gestão + agentes de IA), para quem é (empresários de qualquer segmento) e como falar com a Priscila (WhatsApp). |
| 2 | **Diagnóstico** (11) | As 3 etapas do diagnóstico da gestão, o manifesto "Diagnóstico antes da tecnologia" e o convite para conversar. |
| 3 | **IA segura** (9) | Como os agentes se comportam: dizem que são IA, passam para uma pessoa, respeitam a LGPD. Resposta para o medo "a IA vai atender mal o meu cliente?" (sem falar de preço). |
| 4 | **Saúde** (5) | A especialidade: os 4 agentes para clínicas e casas de saúde e as regras de segurança (nunca diagnosticam; emergência → SAMU 192). |
| 5 | **Resultados** (10) | Os slides do carrossel de prova, sempre "a organização alcançou...", com o aviso de que não é promessa. |
| 6 | **Sobre** (5) | A Priscila: trajetória, 19 anos de carreira, 2 MBAs, PMO, Green Belt; por que PB Serviços virou PB Soluções IA; bastidores. |

**Capas dos destaques:** círculo espresso com um ícone simples em bronze (pedir ao designer-pecas: 6 capas de 1080×1920 com o ícone no centro).

---

## 4. Perfil do Instagram

**Nome do perfil (em negrito, conta na busca):** `PB Soluções IA | Gestão + IA`
**Nome de usuário (@):** ✏️ escolher e conferir se está livre: `@pbsolucoesia` · `@pbsolucoes.ia` · `@pb.solucoesia`

**Bio escolhida** (versão melhorada da opção 1 de `redes/perfis.md`):
```
Gestão + agentes de IA para empresários
Diagnóstico antes da tecnologia
Especialidade em saúde | Priscila Blandy
👇 Comece pelo diagnóstico
```
**Contagem:** 138 caracteres, contando as quebras de linha (139 se o app contar o emoji 👇 como 2). Fica dentro do limite de 150.

**Por que esta:** diz o que faz e para quem (linha 1), traz o slogan (linha 2), mostra a especialidade e a pessoa por trás (linha 3) e termina com um convite que aponta para o link (linha 4).

**Link da bio:** `https://wa.me/5532991337984` (trocar pelo site quando ele estiver no ar).

**Posts fixados:** **nenhum** durante o relançamento. Fixar um post muda a ordem da grade e quebra o painel. Depois que os 9 estiverem no ar, se quiser fixar, teste antes e confira se o fio continua fechando.

---

## 5. Calendário de 3 semanas

> Instagram: segunda, quarta e sexta. LinkedIn: terça e quinta. Stories: todos os dias úteis (simples, 1 a 3 por dia).
> Regra da semana atendida: toda semana tem pelo menos 1 post de **autoridade** (método/prova) e 1 de **dor**.
> ⚠️ Durante as 3 semanas, **não publique nada no feed fora desta ordem** (nem Reels na grade), senão o painel desalinha.

### Semana 0 · sábado 21 e domingo 22/11 · Preparação
Aplicar o checklist da seção 6 (perfil, bio, destaques, arquivar posts antigos) e agendar os posts da semana 1.

### Semana 1 · 23 a 27/11 · "O nome novo"
| Dia | Rede | Post | Pilar |
|---|---|---|---|
| Seg 23/11 | Instagram | **Post 1** · "Agora somos PB Soluções IA." | Pessoa |
| Ter 24/11 | LinkedIn (perfil da Priscila) | "Mudei o nome da minha empresa. E o motivo diz mais do que o nome." (legenda pronta em `redes/legendas-lancamento.md`) | Pessoa |
| Qua 25/11 | Instagram | **Post 2** · "Diagnóstico antes da tecnologia." | Método (autoridade) |
| Qui 26/11 | LinkedIn (página da empresa) | Texto do manifesto: por que a ferramenta vem depois do processo | Método |
| Sex 27/11 | Instagram | **Post 3** · "Tudo passa por você?" (gargalo) | Dor |

**Stories da semana 1:** contagem regressiva "nome novo chegando" (adesivo de contagem); bastidor da Priscila trocando a foto do perfil; repost de cada post do feed; na sexta, `gargalo-story.png` com o adesivo de pergunta "O que só você resolve?".

### Semana 2 · 30/11 a 04/12 · "Por que isso importa"
| Dia | Rede | Post | Pilar |
|---|---|---|---|
| Seg 30/11 | Instagram | **Post 4** · "Sua equipe trabalha muito. E tudo atrasa?" | Dor |
| Ter 01/12 | LinkedIn (perfil da Priscila) | Gargalo: "O que acontece aqui quando você tira uma semana de férias?" (legenda pronta em `redes/legendas-gargalo.md` + `gargalo-linkedin.png`) | Dor |
| Qua 02/12 | Instagram | **Post 5** · "Prazer, Priscila. Gestão antes da tecnologia." | Pessoa |
| Qui 03/12 | LinkedIn (página da empresa) | "−35% de glosas": resultado de uma clínica de saúde mental, em projeto com participação da Priscila (legenda pronta + `post-04-glosas.png`) | Prova (autoridade) |
| Sex 04/12 | Instagram | **Post 6** · Carrossel "O que as organizações alcançaram." | Prova (autoridade) |

**Stories da semana 2:** enquete "Qual tarefa repetitiva mais toma o tempo da sua equipe?" (4 opções); "um dia de trabalho" da Priscila (bastidores, sem mostrar dados de cliente); caixa de perguntas "Pergunte o que quiser sobre gestão"; repost do carrossel de prova.

### Semana 3 · 07 a 11/12 · "Como a gente trabalha"
| Dia | Rede | Post | Pilar |
|---|---|---|---|
| Seg 07/12 | Instagram | **Post 7** · "IA que diz que é IA." | IA com responsabilidade |
| Ter 08/12 | LinkedIn (perfil da Priscila) | Texto: "O que um agente de IA nunca deve fazer com o seu cliente" (apresentar-se como IA, passar para uma pessoa, LGPD) | IA com responsabilidade |
| Qua 09/12 | Instagram | **Post 8** · "Tem clínica? Temos 4 agentes prontos." | Especialidade Saúde (dor da clínica) |
| Qui 10/12 | LinkedIn (página da empresa) | "Como funciona o diagnóstico da gestão": as 3 etapas + convite | Método (autoridade) |
| Sex 11/12 | Instagram | **Post 9** · Carrossel "Como funciona o diagnóstico da gestão." | Método (CTA) |

**Stories da semana 3:** quiz "Verdadeiro ou falso: a IA pode dar diagnóstico ao paciente?" (resposta: falso; os agentes de saúde nunca diagnosticam); story de saúde com `post-03-custo-falta.png` ("faça a conta da sua clínica"); na sexta, **revelação do painel**: print do perfil com os 9 posts e o texto "O fio está completo. Agora é a sua vez: comece pelo diagnóstico."

### Depois da semana 3
Para manter a grade bonita, publique o feed em **blocos de 3** (uma linha inteira por vez). A próxima linha deve começar com fundo **claro** (claro · escuro · claro), para o xadrez continuar.

---

## 6. Checklist de aplicação (passo a passo para a Priscila)

> Faça na ordem. Tempo estimado: cerca de 1h30, no fim de semana antes da semana 1. Tudo é grátis.

### Antes de começar
- [ ] Tirar um print do perfil atual do Instagram e do LinkedIn (para guardar o "antes").
- [ ] Baixar do repositório os PNGs prontos (`pecas/png/`) e a foto de perfil (`pecas/png/perfil.png`).
- [ ] Conferir se o designer já entregou os 9 posts com o fio e a prévia da grade (`pecas/png/grade-relancamento-previa.png`).

### Instagram (app)
1. [ ] **Conta profissional:** Configurações → Tipo de conta e ferramentas → confirmar que é conta profissional (é grátis e libera o agendamento).
2. [ ] **Nome de usuário (@):** Editar perfil → Nome de usuário → testar `pbsolucoesia`, depois as outras opções. Anotar o escolhido e me avisar (para atualizar `conhecimento/empresa.md`).
3. [ ] **Nome:** Editar perfil → Nome → `PB Soluções IA | Gestão + IA`.
4. [ ] **Foto:** Editar perfil → Editar foto → `perfil.png`.
5. [ ] **Bio:** colar a bio da seção 4 (com as quebras de linha).
6. [ ] **Link:** Editar perfil → Links → `https://wa.me/5532991337984`.
7. [ ] **Categoria e botões:** escolher uma categoria de consultoria e ligar o botão de contato do WhatsApp, se o app oferecer.
8. [ ] **Arquivar (não excluir) os posts antigos** com o nome PB Serviços: abrir o post → "..." → Arquivar. Eles somem do perfil, mas ficam guardados e podem voltar quando quiser. (Assim o painel novo aparece sozinho.)
9. [ ] **Desafixar** qualquer post fixado.
10. [ ] **Destaques antigos:** remover ou renomear para os 6 novos da seção 3.
11. [ ] **Destaques novos:** publicar 1 story para cada destaque → no perfil, tocar em "+" (Novo) → escolher o story → dar o nome → Editar capa.
12. [ ] **Agendar os posts da semana 1** no Meta Business Suite, na ordem (post 1, 2, 3). Conferir que cada post é 1080×1350.
13. [ ] **Depois de cada publicação:** abrir o perfil e conferir se o post caiu no lugar certo da grade.

### LinkedIn
14. [ ] **Página da empresa** (primeiro, porque o perfil pessoal aponta para ela): Ferramentas de administrador → Editar página → Nome `PB Soluções IA`, slogan, seção "Sobre", setor e especialidades (textos prontos em `redes/perfis.md`). Tentar a URL `linkedin.com/company/pbsolucoesia`. Trocar o logo (`perfil.png`) e a capa (`banner-linkedin.png`).
15. [ ] **Perfil pessoal da Priscila:** título (texto em `redes/perfis.md`), foto, capa `banner-linkedin.png`, e na experiência atual mudar a empresa para a página PB Soluções IA.
16. [ ] Colocar o link do WhatsApp no perfil pessoal (Informações de contato ou site).
17. [ ] **Agendar os 2 posts da semana 1** pelo relógio do LinkedIn (ícone 🕒 ao criar o post).

### Fechamento
18. [ ] **WhatsApp Business:** conferir a mensagem de saudação com o nome novo (texto em `redes/rotina-gratis.md`).
19. [ ] Toda segunda: anotar alcance, salvamentos e mensagens recebidas de cada post e me contar. Anotar também **quantas mensagens chegam de fora da saúde** (ajuda a decidir o foco da marca).

---

## 7. Pedidos para os outros agentes

**designer-pecas**
- Painel mestre do fio (3240×4050) e as 9 peças da grade em 1080×1350, com o xadrez da seção 2.
- Adaptar `post-01`, `post-02` e `gargalo-ig-post` ao formato e ao fio; criar os posts 4, 5, 7 e 8 e as capas dos carrosséis 6 e 9 (mais os slides internos).
- Prévia da grade completa (`pecas/png/grade-relancamento-previa.png`) para o QA visual.
- 6 capas de destaque (seção 3).
- Post 5: pedir à Priscila uma foto real (de boa luz, fundo simples). Se não houver, fazer versão só com tipografia.

**redator-copy**
- Legendas dos posts 4 a 9 e versão para empresários em geral da legenda do post 2.
- Textos do LinkedIn: manifesto (26/11), IA com responsabilidade (08/12) e diagnóstico da gestão (10/12).
- Textos dos slides dos 2 carrosséis (rascunho na seção 2).
- Sempre: "diagnóstico da gestão", números só de `conhecimento/empresa.md`, nenhum nome de cliente, nenhuma promessa.

**estrategista-marca**
- Revisar as 9 legendas e a prévia da grade antes da semana 1.
