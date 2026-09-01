// Os quatro perfis de insatisfação.
//
// Nenhum deles diz para ficar ou sair, e nenhum trata mudança como fracasso nem
// permanência como maturidade. A leitura correta é sempre a mesma: este parece
// ser o ponto que mais merece investigação antes de decidir.

export const results = {
  profile1: {
    id: 'profile1',
    chave: 'contexto_e_experiencia',
    nome: 'Talvez o problema não seja só o curso',
    headline: 'Sua insatisfação parece estar bastante misturada com a experiência que você está vivendo agora.',
    corpo: [
      { tipo: 'p', texto: 'Isso não significa que esteja tudo bem com seu curso.' },
      { tipo: 'p', texto: 'Mas talvez exista uma pergunta anterior a:' },
      { tipo: 'falas', itens: ['Eu deveria largar?'] },
      { tipo: 'p', texto: 'A pergunta pode ser:' },
      { tipo: 'falas', itens: ['O que exatamente está me fazendo querer sair?'] },
      {
        tipo: 'p',
        texto:
          'Cansaço, sobrecarga, rotina, dificuldades com a instituição, professores, pressão ou sensação de não dar conta podem influenciar a forma como você enxerga sua escolha.',
      },
    ],
    secoes: [
      {
        titulo: 'O que merece investigação',
        corpo: [
          { tipo: 'p', texto: 'Imagine que algumas dessas dificuldades diminuíssem.' },
          {
            tipo: 'p',
            texto:
              'Com menos cansaço, uma rotina melhor e experiências acadêmicas mais interessantes, o curso voltaria a fazer algum sentido?',
          },
          {
            tipo: 'p',
            texto:
              'Se a resposta puder ser "sim", vale investigar isso antes de concluir que a graduação inteira está errada.',
          },
        ],
      },
      {
        titulo: 'Seu próximo passo',
        corpo: [
          { tipo: 'p', texto: 'Separar duas perguntas:' },
          {
            tipo: 'falas',
            itens: ['Como estou vivendo a faculdade?', 'Ainda quero construir alguma coisa a partir desta formação?'],
          },
        ],
      },
    ],
    destaque: 'Não tome uma decisão permanente tentando resolver um incômodo que pode ser circunstancial.',
    complemento: 'Isso não significa ficar a qualquer custo. Significa entender melhor antes de decidir.',
    cta: 'Quero entender o que está acontecendo',
  },

  profile2: {
    id: 'profile2',
    chave: 'curso_em_duvida',
    nome: 'Seu curso entrou em zona de dúvida',
    headline: 'Há sinais de que sua insatisfação está ligada à própria formação.',
    corpo: [
      {
        tipo: 'p',
        texto:
          'Talvez você tenha encontrado matérias, atividades ou uma estrutura curricular bem diferentes do que imaginava.',
      },
      { tipo: 'p', texto: 'Isso merece atenção.' },
      { tipo: 'p', texto: 'Mas ainda existe uma diferença entre:' },
      { tipo: 'falas', itens: ['não gosto de como estou vivendo este curso', 'não quero esta formação'] },
    ],
    secoes: [
      {
        titulo: 'O que merece investigação',
        corpo: [
          { tipo: 'p', texto: 'Antes de abandonar, vale ampliar a visão sobre o próprio curso.' },
          {
            tipo: 'falas',
            itens: [
              'Existem outras ênfases?',
              'Outra instituição oferece uma experiência diferente?',
              'Os próximos períodos mudam?',
              'Estágios ou atividades práticas poderiam aproximar você de partes mais interessantes da área?',
              'Há campos de atuação que você ainda conhece pouco?',
            ],
          },
        ],
      },
      {
        titulo: 'Seu próximo passo',
        corpo: [
          { tipo: 'p', texto: 'Confrontar sua experiência atual com uma visão mais ampla da formação.' },
          {
            tipo: 'p',
            texto:
              'Às vezes mudar de direção faz sentido. Em outras, o que precisa mudar é a forma de percorrer o caminho.',
          },
        ],
      },
    ],
    destaque:
      'Questionar seu curso não significa automaticamente abandoná-lo. Significa que sua escolha precisa ser revisitada.',
    cta: 'Quero revisitar minha escolha',
  },

  profile3: {
    id: 'profile3',
    chave: 'futuro_profissional',
    nome: 'Sua dúvida parece ir além da faculdade',
    headline: 'Sua insatisfação parece chegar ao que acontece depois da graduação.',
    corpo: [
      { tipo: 'p', texto: 'Talvez você até consiga seguir fazendo as matérias.' },
      { tipo: 'p', texto: 'Mas quando pensa:' },
      { tipo: 'falas', itens: ['Quero viver profissionalmente dentro desse universo?'] },
      { tipo: 'p', texto: 'a resposta fica menos clara.' },
      {
        tipo: 'p',
        texto:
          'Curso e carreira não são exatamente a mesma coisa. Uma graduação pode abrir caminhos diferentes, e uma trajetória profissional pode ser menos linear do que parece no início.',
      },
    ],
    secoes: [
      {
        titulo: 'O que merece investigação',
        corpo: [
          { tipo: 'p', texto: 'Antes de concluir que sua formação não serve mais, vale conhecer melhor:' },
          {
            tipo: 'lista',
            itens: [
              'diferentes áreas de atuação',
              'trajetórias menos óbvias',
              'possibilidades de especialização',
              'funções acessadas por formações diferentes',
              'combinações entre áreas',
            ],
          },
          {
            tipo: 'p',
            texto:
              'Talvez você descubra que não gosta das possibilidades que conhece hoje. Ou que estava enxergando apenas uma parte pequena do mapa.',
          },
        ],
      },
      {
        titulo: 'Seu próximo passo',
        corpo: [
          { tipo: 'p', texto: 'A pergunta deixa de ser apenas "quero continuar nesse curso?" e passa a incluir:' },
          {
            tipo: 'falas',
            itens: [
              'Que futuros consigo construir a partir daqui?',
              'Esses futuros conversam com o que quero viver?',
            ],
          },
        ],
      },
    ],
    destaque: 'Às vezes a dúvida não pede imediatamente uma nova graduação. Pede um mapa profissional maior.',
    cta: 'Quero explorar outros caminhos',
  },

  profile4: {
    id: 'profile4',
    chave: 'redirecionamento',
    nome: 'Um redirecionamento está pedindo espaço',
    headline: 'Suas respostas sugerem que a vontade de mudar não apareceu apenas ontem.',
    corpo: [
      {
        tipo: 'p',
        texto:
          'Você parece olhar com frequência para outros caminhos, perceber interesses diferentes ou reconhecer que escolheria de outra forma hoje.',
      },
      { tipo: 'p', texto: 'Isso não significa "largue sua faculdade agora".' },
      { tipo: 'p', texto: 'Mas significa que seria importante não ignorar essa dúvida.' },
    ],
    secoes: [
      {
        titulo: 'O que pode estar prendendo você',
        corpo: [
          {
            tipo: 'p',
            texto: 'Às vezes a pessoa já percebe que quer investigar uma mudança, mas pensa:',
          },
          {
            tipo: 'falas',
            itens: [
              'Já investi tempo demais.',
              'Minha família vai ficar decepcionada.',
              'E o dinheiro que já foi gasto?',
              'Vou começar do zero.',
              'E se eu me arrepender?',
            ],
          },
          {
            tipo: 'p',
            texto:
              'Essas preocupações são reais. Mas o que já foi investido, sozinho, não consegue decidir se o próximo passo continua fazendo sentido.',
          },
        ],
      },
      {
        titulo: 'O que merece investigação',
        corpo: [
          { tipo: 'p', texto: 'Transformar "quero sair" em perguntas mais concretas:' },
          {
            tipo: 'falas',
            itens: [
              'Para onde eu gostaria de ir?',
              'O que estou buscando que não encontro aqui?',
              'Que critérios mudaram desde que escolhi?',
              'Quais alternativas existem?',
              'Preciso abandonar tudo ou existe uma transição possível?',
            ],
          },
        ],
      },
      {
        titulo: 'Seu próximo passo',
        corpo: [
          { tipo: 'p', texto: 'Não fazer um salto. Construir uma travessia.' },
          {
            tipo: 'p',
            texto:
              'Entender seus critérios atuais, pesquisar alternativas e pensar nas consequências antes de transformar a vontade de mudança em decisão.',
          },
        ],
      },
    ],
    destaque:
      'Mudar de caminho não apaga o que você já percorreu. Mas a mudança precisa ser construída, não apenas usada como fuga.',
    cta: 'Quero investigar uma nova direção',
  },
}

// Fecha todos os perfis, igual.
export const blocoFinal = {
  titulo: 'Talvez a pergunta não seja apenas "fico ou saio?"',
  abertura: 'Quando a dúvida aperta, parece que existem só duas portas:',
  portas: ['Continuar', 'Largar tudo'],
  meio: 'Mas entre elas existe bastante coisa para investigar. Você pode:',
  lista: [
    'entender melhor sua insatisfação',
    'revisar os critérios da escolha',
    'conhecer melhor seu curso',
    'explorar áreas de atuação',
    'comparar outras graduações',
    'investigar possibilidades de transferência',
    'conhecer trajetórias diferentes',
    'construir cenários antes de decidir',
  ],
  destaque:
    'Reorientação Profissional não serve para dizer se você deve ficar ou sair. Serve para ajudar você a compreender o que está escolhendo agora, e por quê.',
  fechamento: [
    'Mudar pode fazer sentido. Ficar também pode.',
    'O importante é que a decisão não venha apenas do cansaço, da culpa, do medo ou da pressão.',
  ],
  cta: 'Quero entender melhor meu próximo passo',
}

// Texto corrido do resultado, para viajar no payload e alimentar o primeiro
// e-mail da sequência. A tela monta o mesmo conteúdo em blocos.
export function textoDoResultado(r) {
  const linhas = [r.headline]

  function despejar(blocos) {
    blocos.forEach((b) => {
      if (b.tipo === 'p') linhas.push(b.texto)
      else b.itens.forEach((i) => linhas.push(`- ${i}`))
    })
  }

  despejar(r.corpo)
  r.secoes.forEach((s) => {
    linhas.push(s.titulo)
    despejar(s.corpo)
  })
  linhas.push(r.destaque)
  if (r.complemento) linhas.push(r.complemento)

  return linhas.join('\n\n')
}
