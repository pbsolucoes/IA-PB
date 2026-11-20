# Canva da PB Soluções IA (conta Pro, conectada ao Claude)

> Fonte única de verdade de **como os agentes usam o Canva**. Lido pelos agentes `designer-pecas`, `social-media` e `redator-copy`.

## Endereços no Canva
| O quê | ID | Link |
|---|---|---|
| Kit de marca (Brand Kit) | `kAGOrnRDbCE` | Canva → Marca |
| Pasta **Kit de marca** (logos + guia) | `FAHbf9FlLeM` | https://www.canva.com/folder/FAHbf9FlLeM |
| Pasta **Peças das redes** (criativos prontos) | `FAHbf00CBLY` | https://www.canva.com/folder/FAHbf00CBLY |

## Arquivos da marca já enviados ao Canva (pasta Kit de marca)
| Arquivo | ID no Canva | Uso |
|---|---|---|
| Logo empilhado bronze/espresso | `MAHbf3T2-0o` | fundo claro (marfim) |
| Logo empilhado bronze claro/marfim | `MAHbf7EKkew` | fundo escuro (espresso) |
| Logo horizontal bronze/espresso | `MAHbf19wSto` | fundo claro: assinatura, banners, propostas |
| Logo horizontal bronze claro/marfim | `MAHbf4J_xU0` | fundo escuro |
| Ícone PB no anel (bronze) | `MAHbfzmJZYg` | fundo claro, avatar, favicon |
| Ícone PB no anel (bronze claro) | `MAHbfw-1N7c` | fundo escuro |
| Guia da marca (cores, fontes, tom) | `MAHbf3Z4OKE` | referência |

## Peças já na pasta Peças das redes
- 9 posts do relançamento (`relancamento-01` a `09`).
- Reels da sala comercial "o sino toca" (vídeo 1080 × 1920): `VAHbf1VzF8s`. Se o vídeo for refeito, envie a versão nova e avise a Priscila para apagar a antiga.

Originais com fundo transparente: `pecas/marca/` (regerar: `node pecas/renderizar-marca.js`).

## O que a Priscila faz uma vez (o Canva não deixa a IA editar o Brand Kit)
Canva → **Marca** → kit da PB Soluções IA:
1. **Cores** → adicionar paleta "PB Soluções IA": `#AB7646` · `#2A211D` · `#FDF9F5` · `#C3885B` · `#936431`.
2. **Fontes** → Título: **Playfair Display** (Bold) · Subtítulo: **Inter** (Light) · Corpo: **Inter** (Regular).
3. **Logos** → adicionar os 6 logos da pasta Kit de marca.
4. **Voz da marca** (se aparecer) → colar: "Consultivo e direto, sem jargão vazio. Sempre começa pelo diagnóstico da gestão. Nunca inventa números, prazos ou preços. Nunca cita nomes de clientes."

## Fluxo dos agentes de criação e marketing
1. **social-media** define a pauta → **redator-copy** escreve o texto (só com dados de `conhecimento/`).
2. **designer-pecas** cria a peça por um destes caminhos:
   - **A. Peça exata da marca (padrão):** HTML → PNG (`pecas/`), QA visual, depois envia ao Canva (`create-upload-url` + upload, ou `upload-asset-from-url` com o link público do GitHub) e move para a pasta **Peças das redes**.
   - **B. Peça editável no Canva:** `generate-design` / `create-design` usando o `brand_kit_id` `kAGOrnRDbCE`. Depois, `read-design` para conferir: cores da paleta, Playfair/Inter, nada de número/cliente inventado. Mover para **Peças das redes**.
   - **C. Outros formatos:** `resize-design` (Instagram post/story, LinkedIn, Facebook).
3. Exportar (`export-design`, PNG) quando a Priscila for postar.

## Regras
- **Nunca** apagar, sobrescrever ou editar um design existente da Priscila sem ela pedir; criar sempre um novo.
- Imagens geradas por IA (`generate-image`) só como fundo/textura, nunca como "foto" de cliente, equipe ou resultado.
- Nada de dados de clientes ou pacientes no Canva da marca.
- O agente **não publica** no Instagram/LinkedIn: a Priscila posta pelos apps (ou agenda no Meta Business Suite).
