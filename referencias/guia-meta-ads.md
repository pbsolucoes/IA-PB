# Avaliação: "5 Skills do Claude que substituem sua agência de Meta Ads"

> PDF enviado pela Priscila em 20/11/2026. Avaliado pelo Claude: o que é fato, o que é promessa de marketing e o que serve **hoje** para a PB Soluções IA (orçamento zero, ainda sem anúncios pagos).

## As 5 skills
| Skill | O que faz | Precisa de | Serve para a PB agora? |
|---|---|---|---|
| `/spy` | Lista anúncios ativos de concorrentes (Biblioteca de Anúncios da Meta) | Token da API da Meta | ⚠️ **Limitado no Brasil**: pela API, a Meta só entrega anúncios **comerciais** veiculados na UE/Reino Unido; fora disso, só anúncios políticos e sociais (segundo várias fontes; ✏️ confirmar na documentação da Meta). No Brasil, dá para olhar **manualmente** no site da Biblioteca de Anúncios (grátis). |
| `/competitive-ads-extractor` | Analisa 3 a 5 concorrentes: ganchos, ofertas, CTAs, lacunas | Mesmo problema da API | ⚠️ Mesmo limite. Alternativa grátis: você manda prints dos anúncios e o Claude analisa |
| `/bulk-creative` | Gera 20 variações de texto de anúncio a partir do CLAUDE.md | Só o Claude | ✅ **Já temos o equivalente**: o agente `redator-copy`, com o `CLAUDE.md` rico em marca e público (que é exatamente o que o guia recomenda) |
| `/ads meta` | Auditoria da conta de anúncios (fadiga, CPM, sobreposição) | Conta de anúncios **com campanhas rodando** + token | ❌ Ainda não: a PB não tem anúncios pagos |
| `/ads-score` | Nota de 1 a 10 em 6 dimensões (gancho, copy, CTA, emoção, oferta, visual × texto) | Só o Claude | ✅ **Útil já**: dá para avaliar posts orgânicos antes de publicar. Vamos incorporar ao `estrategista-marca` |

## Fatos verificados (20/11/2026)
- ✅ O repositório `AgriciDaniel/claude-ads` existe, é público, licença MIT, ~11 mil estrelas, atualizado em 01/11/2026.
- ✅ A lista `ComposioHQ/awesome-claude-skills` existe (~80 mil estrelas).
- ❌ **Não verificado:** "substituem agências que cobram US$ 5 a 10 mil/mês" e "186 verificações". São afirmações do material, não confirmadas.
- ⚠️ **Segurança:** skills de terceiros rodam com acesso ao seu computador e às suas chaves. **Antes de instalar, o Claude lê o código.** Nunca coloque o token da Meta no GitHub (o repositório é público).

## Recomendação
1. **Agora (grátis):** usar `/ads-score` (critérios adaptados) para avaliar cada post antes de publicar, e o `redator-copy` para variações.
2. **Quando houver anúncios pagos:** avaliar a instalação do `claude-ads`, depois de ler o código.
3. **Concorrência:** olhar a Biblioteca de Anúncios da Meta no navegador (grátis) e mandar prints para análise.
