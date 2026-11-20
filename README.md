# PB Soluções — Empresa com Agentes de IA

Este repositório é o **"cérebro" da PB Soluções**. Aqui ficam guardadas, em português, as regras de cada agente de IA, o que cada um sabe sobre a empresa e como ele deve se comportar.

As ferramentas que conversam com o cliente (n8n, Instagram, chat do site, e-mail) **leem daqui**. Então, se você mudar uma regra aqui, o agente muda junto.

---

## 🗺️ Mapa da empresa

```
                    ┌──────────────────────┐
                    │  CEO — Priscila      │  ← você decide, os agentes executam
                    └──────────┬───────────┘
        ┌──────────┬───────────┼───────────┬───────────┬───────────┐
   Atendimento   Growth     Receita     Finanças    Jurídico    Marketing
   (Cliente)   (Vendas)   (Propostas)               (Contratos)  (Conteúdo)
      ✅ fase 1     ⏳         ⏳           ⏳           ⏳           ⏳
```

**Produto (o que vendemos):** agentes de IA para a saúde privada → [`produtos/saude/`](produtos/saude/README.md)

Detalhes de cada departamento: [`empresa/departamentos.md`](empresa/departamentos.md)

---

## 📁 O que tem em cada pasta

| Pasta | O que é | Você precisa mexer? |
|---|---|---|
| `empresa/` | Organograma: departamentos e o papel de cada agente | Às vezes |
| `agentes/atendimento/` | As instruções do agente de atendimento (o "manual do funcionário") | Raramente |
| `conhecimento/` | O que o agente sabe: serviços, preços, perguntas frequentes | **Sim, sempre que algo mudar** |
| `produtos/saude/` | ⭐ **Os 4 agentes que vendemos para clínicas** + ficha de implantação + testes de segurança | Revisar |
| `comercial/` | Oferta: implantação + mensalidade, pacotes, checklist de contrato | **Sim: preços** |
| `padroes/` | Padrão de qualidade (boas práticas americanas, LGPD e regras de saúde) | Não |
| `n8n/` | Passo a passo para ligar o agente no Instagram, no site e no e-mail | Na fase 2 |
| `referencias/` | Projetos do GitHub que usamos como inspiração | Não |

---

## ✅ Próximos passos (para você, Priscila)

1. **Preencher `conhecimento/servicos.md`**: procure as marcações `✏️ PREENCHER`. O agente **não inventa** preços nem serviços; se o campo estiver vazio, ele passa a conversa para você.
2. **Revisar `conhecimento/faq.md`**: as perguntas que os clientes mais fazem.
3. **Ler `agentes/atendimento/testes.md`**: são as conversas de teste. Diga se as respostas esperadas estão do jeito que você atenderia.
4. **Linha Saúde:** revise `produtos/saude/` e defina os preços em `comercial/oferta-saude.md`.
5. **Fase 2:** criar a conta no n8n e ligar os canais (guia em `n8n/GUIA.md`).

---

## 🎓 GitHub em 5 palavras (para aprender)

| Palavra em inglês | O que significa | Na prática |
|---|---|---|
| **Repository** (repositório) | Pasta do projeto na nuvem | Este lugar aqui |
| **Commit** | "Salvar com anotação" | Cada mudança fica registrada com data e motivo, e dá para voltar atrás |
| **Branch** (ramo) | Cópia de rascunho | Testamos mudanças sem estragar a versão oficial |
| **Pull Request** (PR) | Pedido para juntar o rascunho na versão oficial | Você revisa e aprova |
| **Issue** | Tarefa / pedido | Use para pedir coisas novas aos agentes (botão "New issue") |

> Dica: para editar um arquivo direto no site do GitHub, abra o arquivo e clique no ícone de lápis ✏️ (canto superior direito). Depois clique no botão verde **"Commit changes"** para salvar.
