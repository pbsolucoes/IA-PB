# Criativos no Canva (conta Pro)

## O que já funciona (testado em 20/11/2026)
1. O **designer-pecas** cria o criativo em HTML e gera os PNGs (`node pecas/renderizar.js`).
2. O Claude **envia os PNGs para a sua biblioteca do Canva** (conector Canva do claude.ai, ferramenta `create-upload-url`).
3. O Canva pode transformar o criativo em um **design editável** (`create-design` com o criativo como referência).

Rede liberada no ambiente "PB Soluções": `www.canva.com` (envio de arquivos) e `mcp.canva.com` (plugin do Canva).

## O que só você pode liberar
Em **claude.ai/customize/connectors → Canva → permissões das ferramentas**, permita:
- `resize-design`: redimensionar para post, story e LinkedIn (skill `/canva:resize-for-social-media`)
- `search-designs` e `get-design`: encontrar e ler seus designs
- `list-brand-kits`: usar o Kit de Marca da conta Pro

Depois, **abra uma nova sessão** (as permissões são lidas no início da sessão).

## Kit de Marca (recomendado, conta Pro)
No Canva → Marca → Kit de Marca "PB Soluções IA":
- Cores: Bronze `#AB7646` · Bronze Claro `#C3885B` · Bronze Escuro `#936431` · Espresso `#2A211D` · Marfim `#FDF9F5`
- Fontes: Playfair Display (títulos) · Inter (textos)
- Logo: `pecas/png/perfil.png` (monograma PB)
