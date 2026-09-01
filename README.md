# Quiz: Tô insatisfeito mesmo com o meu curso?

Porta 2.2 da bio (`links.institutorumo.com`). Fala com universitário e jovem
adulto em dúvida se fica ou sai da graduação, e encaminha para Reorientação.

Oito perguntas, captura de lead depois da terceira, quatro perfis de
insatisfação. A pessoa nunca vê pontuação.

## A regra que não pode cair

O quiz **não decide pela pessoa**. Ele não diz para largar nem para ficar, não
trata mudança como fracasso nem permanência como maturidade. A leitura é sempre
a mesma: este parece ser o ponto que mais merece investigação antes de decidir.

O deslocamento que ele tenta fazer é sair de "fico ou saio?" e chegar em "o que
preciso entender para tomar essa decisão melhor?".

O `npm test` guarda essa regra: ele varre todos os textos procurando frase que
decida pela pessoa. Ele distingue a frase afirmativa da negada, porque o
conteúdo usa a construção negada de propósito, em "não serve para dizer se você
deve ficar ou sair".

## Os quatro perfis

| perfil | nome público | de onde vem a insatisfação |
|---|---|---|
| `profile1` | Talvez o problema não seja só o curso | contexto e experiência acadêmica |
| `profile2` | Seu curso entrou em zona de dúvida | a formação e a estrutura do curso |
| `profile3` | Sua dúvida parece ir além da faculdade | o futuro profissional |
| `profile4` | Um redirecionamento está pedindo espaço | vontade de outro caminho |

## Pontuação

Diferente do quiz 2.1, aqui não existe escala de elaboração. **Cada alternativa
alimenta exatamente um perfil**, e não existe alternativa melhor: existe
alternativa que descreve de onde vem o incômodo. Vence o perfil de maior soma.

O `npm test` verifica esse desenho: se alguma alternativa passar a alimentar
dois perfis, o desempate pela pergunta 8 deixa de funcionar e o teste falha.

Desempate, nesta ordem:

1. o perfil apontado pela **pergunta 8**, em que a pessoa diz o que gostaria de
   investigar primeiro;
2. o perfil apontado pela **pergunta 7**;
3. prioridade técnica `profile4 → profile3 → profile2 → profile1`, que é
   arbitrária e existe só para o quiz nunca ficar sem resposta.

Sobre as 65.536 combinações possíveis: 6,7% precisam de desempate e apenas
0,43% chegam na prioridade técnica. A distribuição fica entre 24% e 26% para
cada perfil.

A pontuação é **sempre recalculada do zero** a partir das respostas guardadas.
É isso que faz o botão "voltar" funcionar sem bug.

## Configuração

Tudo que muda sem mexer em lógica está em `src/config.js`: marca, WhatsApp,
endpoint do lead, política de privacidade e Instagram. O número do WhatsApp não
aparece em nenhum outro arquivo.

O `leadEndpoint` aponta para o Apps Script "Leads dos quizzes da bio", que grava
na planilha, manda pro Brevo e abre o cartão no CRM. O mesmo endpoint atende os
quatro quizzes: quem separa os funis é o `QUIZ_SLUG`.

No CRM este quiz cai como produto `reorientacao_adulto`, com origem
"Quiz: insatisfeito com o curso".

Sem endpoint configurado o quiz não quebra: funciona inteiro e avisa no console
durante o desenvolvimento.

## Como rodar

```bash
npm install
npm run dev
```

**Atenção:** o `npm run dev` usa o mesmo endpoint de produção. Testar
localmente cria lead de verdade na planilha e cartão no CRM.

`npm test` roda a conferência completa e também no CI, antes de publicar.

## Estrutura

```
src/
  config.js              marca, WhatsApp, endpoint, slug
  data/questions.js      as 8 perguntas, os pesos e os textos de tela
  data/results.js        os 4 perfis e o bloco final
  lib/quizScoring.js     soma por perfil e as três regras de desempate
  lib/leadService.js     submitLead, o único ponto de saída
  lib/storage.js         persistência contra refresh e UTMs
  lib/analytics.js       eventos
  components/            uma tela ou peça por arquivo
  App.jsx                a máquina de estados
```

## Visual

Terceiro irmão da família. Mesma paleta e mesmas fontes dos outros dois, e a
mesma estrutura do quiz 2.1, porque os dois vivem no mesmo bloco da bio.

O que muda é quem conduz. No 2.1 é o verde, porque o assunto é descoberta. Aqui
é o bordô, porque a dúvida já dói, e o verde recua para as seções de próximo
passo. O motivo visual é a **bifurcação**, não a trilha reta: o quiz existe para
mostrar que entre "continuar" e "largar tudo" existe caminho, e o desenho diz
isso antes do texto.

Sem vermelho de alarme, sem estética de teste psicológico e sem imagem de
estudante desesperado.

## Acessibilidade

As alternativas são `button` de verdade, com `aria-pressed`, então teclado e
leitor de tela funcionam sem gambiarra. O foco vai para o enunciado a cada
pergunta. Os erros do formulário têm `role="alert"` e `aria-describedby`. A tela
de processamento tem `aria-live`. As animações respeitam
`prefers-reduced-motion`.

Nenhum evento de analytics carrega nome, e-mail ou telefone.
