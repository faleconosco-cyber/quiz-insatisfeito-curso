// As oito perguntas.
//
// Diferente do quiz 2.1, aqui a pontuação não é uma escala de elaboração: cada
// alternativa alimenta um perfil de insatisfação. Não existe alternativa
// "melhor". Existe alternativa que descreve de onde vem o incômodo.
//
// Por isso a ordem das alternativas segue sempre a mesma lógica interna
// (contexto, curso, futuro, redirecionamento), mas isso nunca aparece na tela.

export const CAPTURA_APOS = 3

export const questions = [
  {
    id: 1,
    title: 'Quando você pensa em desistir do curso, qual sensação aparece com mais força?',
    options: [
      { id: 'A', text: 'Cansaço. Parece que estou de saco cheio de tudo relacionado à faculdade.', scores: { profile1: 3 } },
      { id: 'B', text: 'Desinteresse. Muitas matérias e atividades simplesmente não me envolvem.', scores: { profile2: 3 } },
      { id: 'C', text: 'Dúvida sobre o futuro. Não sei se quero trabalhar com o que esse curso pode me levar a fazer.', scores: { profile3: 3 } },
      { id: 'D', text: 'Vontade de estar fazendo outra coisa. Frequentemente me imagino em outro caminho.', scores: { profile4: 3 } },
    ],
  },
  {
    id: 2,
    title: 'Se sua rotina na faculdade melhorasse bastante no próximo semestre, o que você imagina que aconteceria com sua vontade de sair?',
    options: [
      { id: 'A', text: 'Acho que diminuiria bastante.', scores: { profile1: 3 } },
      { id: 'B', text: 'Talvez melhorasse um pouco, mas eu ainda teria dúvidas sobre o curso.', scores: { profile2: 2 } },
      { id: 'C', text: 'Pouco mudaria, porque minha maior dúvida é sobre o futuro profissional.', scores: { profile3: 3 } },
      { id: 'D', text: 'Acho que continuaria querendo mudar, porque já estou interessado(a) em outros caminhos.', scores: { profile4: 3 } },
    ],
  },
  {
    id: 3,
    title: 'Pensando especificamente no conteúdo do seu curso, qual frase mais combina com você?',
    options: [
      { id: 'A', text: 'Há coisas de que gosto. O problema parece ser mais a fase que estou vivendo.', scores: { profile1: 3 } },
      { id: 'B', text: 'Gosto de algumas partes, mas várias matérias importantes me fazem questionar se escolhi bem.', scores: { profile2: 3 } },
      { id: 'C', text: 'Até consigo lidar com as matérias, mas não me identifico muito com o que imagino fazendo depois.', scores: { profile3: 3 } },
      { id: 'D', text: 'Quando conheço outras áreas ou cursos, sinto mais curiosidade por eles do que pelo meu.', scores: { profile4: 3 } },
    ],
  },
  {
    id: 4,
    title: 'Quando você escolheu essa graduação, quanto conhecia sobre o curso e sobre as possibilidades profissionais depois dele?',
    options: [
      { id: 'A', text: 'Pesquisei bastante e ainda reconheço motivos importantes que me fizeram escolher.', scores: { profile1: 2 } },
      { id: 'B', text: 'Conhecia algumas coisas, mas descobri partes da formação que não esperava.', scores: { profile2: 3 } },
      { id: 'C', text: 'Eu conhecia mais a ideia da profissão do que as possibilidades reais de atuação.', scores: { profile3: 3 } },
      { id: 'D', text: 'Escolhi com pouca investigação ou muito influenciado(a) pelo que parecia certo na época.', scores: { profile4: 3 } },
    ],
  },
  {
    id: 5,
    title: 'Quando você imagina sua vida profissional daqui a alguns anos...',
    options: [
      { id: 'A', text: 'Ainda consigo me ver em possibilidades relacionadas ao meu curso, principalmente se minha experiência atual melhorar.', scores: { profile1: 3 } },
      { id: 'B', text: 'Tenho dificuldade, porque boa parte da formação não conversa com o que gosto de fazer.', scores: { profile2: 3 } },
      { id: 'C', text: 'O principal problema é que as profissões e rotinas que conheço nessa área não me animam.', scores: { profile3: 3 } },
      { id: 'D', text: 'Minha cabeça vai rapidamente para outras áreas, formações ou tipos de trabalho.', scores: { profile4: 3 } },
    ],
  },
  {
    id: 6,
    title: 'Se você pudesse voltar ao momento em que escolheu sua graduação, o que faria diferente?',
    options: [
      { id: 'A', text: 'Talvez escolhesse o mesmo curso, mas chegaria mais preparado(a) para viver a faculdade.', scores: { profile1: 3 } },
      { id: 'B', text: 'Pesquisaria muito mais a grade, a dinâmica e o tipo de formação antes de decidir.', scores: { profile2: 3 } },
      { id: 'C', text: 'Investigaria melhor como é a vida profissional depois da graduação.', scores: { profile3: 3 } },
      { id: 'D', text: 'Me permitiria considerar outras opções que na época nem consegui explorar direito.', scores: { profile4: 3 } },
    ],
  },
  {
    // Primeiro critério de desempate depois da 8. O peso maior no D é da
    // própria spec: o medo do tempo investido é o que mais segura quem já
    // quer redirecionar.
    id: 7,
    title: 'O que mais dificulta pensar seriamente na possibilidade de mudar?',
    options: [
      { id: 'A', text: 'Tenho medo de tomar uma decisão no impulso só porque estou cansado(a).', scores: { profile1: 3 } },
      { id: 'B', text: 'Ainda não sei se os aspectos de que não gosto são suficientes para justificar uma mudança.', scores: { profile2: 3 } },
      { id: 'C', text: 'Não sei quais outros caminhos profissionais fariam mais sentido para mim.', scores: { profile3: 3 } },
      { id: 'D', text: 'Penso no tempo que já investi, na reação da família, no dinheiro ou no medo de começar de novo.', scores: { profile4: 4 } },
    ],
  },
  {
    // A pergunta que a pessoa responde apontando o próprio perfil, ao dizer o
    // que gostaria de investigar primeiro. Por isso vale 4 em todas e é o
    // primeiro critério de desempate.
    id: 8,
    title: 'Se você não precisasse decidir hoje entre "ficar" ou "sair", o que gostaria de investigar primeiro?',
    options: [
      { id: 'A', text: 'Se estou insatisfeito(a) com o curso ou simplesmente esgotado(a) com a experiência que estou vivendo.', scores: { profile1: 4 } },
      { id: 'B', text: 'Se existe uma forma diferente de viver essa graduação, outra instituição, ênfase, estágio, área ou maneira de organizar o percurso.', scores: { profile2: 4 } },
      { id: 'C', text: 'Se as possibilidades profissionais ligadas à minha formação têm espaço para aquilo que busco para minha vida.', scores: { profile3: 4 } },
      { id: 'D', text: 'Quais outros cursos e caminhos poderiam conversar melhor com quem sou hoje.', scores: { profile4: 4 } },
    ],
  },
]

// Qual perfil cada alternativa aponta, nas perguntas usadas para desempate.
// Fica derivado dos próprios pesos, para não existir duas fontes de verdade.
export function perfilApontadoPor(questionId, optionId) {
  const q = questions.find((x) => x.id === questionId)
  if (!q) return null
  const o = q.options.find((x) => x.id === optionId)
  if (!o) return null
  const chaves = Object.keys(o.scores)
  return chaves.length === 1 ? chaves[0] : null
}

export const landing = {
  titulo: 'Tô insatisfeito mesmo com o meu curso?',
  paragrafos: [
    'Tem dia em que você pensa: "acho que escolhi o curso errado."',
    'E tem dia em que abandonar tudo também parece uma decisão enorme.',
    'Antes de transformar a dúvida em "fico ou saio?", talvez valha entender melhor:',
  ],
  destaque: 'O que exatamente está te incomodando?',
  fecho: 'Responda 8 perguntas rápidas e descubra de onde pode estar vindo sua insatisfação com a graduação.',
  botao: 'Entender minha dúvida',
  microtexto: 'Leva cerca de 3 minutos.',
}

export const captura = {
  titulo: 'Sua dúvida já começou a ficar um pouco mais específica.',
  paragrafos: [
    'E isso é importante.',
    'Porque "não aguento mais meu curso" pode significar coisas bem diferentes.',
    'Faltam 5 perguntas para entender qual ponto parece pesar mais na sua experiência.',
  ],
  consentimento: 'Concordo em receber meu resultado e conteúdos relacionados à escolha e reorientação profissional.',
  botao: 'Continuar',
  microtexto: 'Seus dados serão utilizados para enviar informações relacionadas ao resultado deste quiz. Você poderá sair da lista quando quiser.',
}

export const processamento = {
  frases: [
    'Organizando suas respostas...',
    'Separando curso, contexto e futuro profissional...',
    'Identificando o ponto que mais pesa na sua dúvida...',
  ],
  fim: 'Seu resultado está pronto.',
}

export const AVISO =
  'Este quiz é uma ferramenta de reflexão. Ele não determina se você deve permanecer, interromper ou mudar sua graduação. Decisões acadêmicas envolvem aspectos pessoais, profissionais, financeiros e contextuais que precisam ser analisados com mais profundidade.'
