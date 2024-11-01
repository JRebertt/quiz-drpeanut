import type { Step } from '@/app/(app)/page'

export const steps: Step[] = [
  {
    id: 'welcome',
    type: 'welcome',
    title: 'Desafio Dr. Peanut',
    content: `Mostre que você conhece tudo sobre alimentação saudável e produtos de alta qualidade! Responda as perguntas e escolha um prêmio Dr. Peanut grátis. 🥜`,
    image: 'https://i.ibb.co/25skXTs/dr-peaunut-1080-x-1350-px.png',
    buttonText: 'Continuar',
  },
  // {
  //   id: 'gender',
  //   type: 'selection',
  //   title: 'Selecione seu gênero para continuar!',
  //   subtitle: 'O questionário leva poucos minutos.',
  //   options: [
  //     {
  //       label: 'Homem',
  //       imageMale:
  //         'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/27kjz-sem-titulo-1.jpg',
  //       imageFemale:
  //         'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/27kjz-sem-titulo-1.jpg',
  //       value: 'male',
  //     },
  //     {
  //       label: 'Mulher',
  //       imageMale:
  //         'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/c4q71-menina.png',
  //       imageFemale:
  //         'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/c4q71-menina.png',
  //       value: 'female',
  //     },
  //   ],
  // },
  // {
  //   id: 'age',
  //   type: 'selection',
  //   title: 'Qual a sua idade?',
  //   subtitle: 'Queremos conhecer mais de Você',
  //   options: [
  //     {
  //       label: '18-29',
  //       imageMale:
  //         'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/in4h0-cvv.png',
  //       imageFemale:
  //         'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/in4h0-cvv.png',
  //     },
  //     {
  //       label: '29-39',
  //       imageMale:
  //         'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/9pawm-sem-titulo-1.png',
  //       imageFemale:
  //         'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/9pawm-sem-titulo-1.png',
  //     },
  //     {
  //       label: '39-49',
  //       imageMale:
  //         'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/hvz5s-dd.png',
  //       imageFemale:
  //         'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/hvz5s-dd.png',
  //     },
  //     {
  //       label: '50+',
  //       imageMale:
  //         'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/25tda-c.png',
  //       imageFemale:
  //         'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/25tda-c.png',
  //     },
  //   ],
  // },
  {
    id: 'question1',
    type: 'question',
    title:
      'Qual é o ingrediente principal da maioria dos produtos da Dr. Peanut?',
    image: 'https://i.ibb.co/vX3WNTf/pergunta-1-dr-peaunut.webp',
    options: [
      {
        label: 'Chocolate',
        // image:
        //   'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/kp64b-verde.png',
        isCorrect: true,
      },
      {
        label: 'Pasta de amendoim',
        // image:
        //   'https://i.ibb.co/mXMyQXJ/Whats-App-Image-2024-10-24-at-21-41-28.jpg',
        isCorrect: true,
      },
      {
        label: 'Mel',
        // image:
        //   'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/kl43m-azul.png',
        isCorrect: true,
      },
      {
        label: 'Aveia',
        // image:
        //   'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/f38lp-amarelo.png',
        isCorrect: true,
      },
    ],
  },
  {
    id: 'question2',
    type: 'question',
    image: 'https://i.ibb.co/zJ0WgBd/pergunta-2-dr-peaunut.png',
    title: ' Em que ano foi fundada a Dr. Peanut?',
    options: [
      { label: '2012', isCorrect: true },
      {
        label: '2015',
        isCorrect: true,
      },
      { label: '2014', isCorrect: true },
      { label: '2018', isCorrect: true },
    ],
  },
  {
    id: 'question3',
    type: 'question',
    title:
      'Qual linha de produtos da Dr. Peanut é conhecida por não ter adição de açúcar?',
    image: 'https://i.ibb.co/MR4FQD9/pergunta-3-dr-peaunut.png',
    options: [
      {
        label: 'Gourmet Fit',
        // image:
        //   'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/1wosd-d917f1ceae44da7f3f890f4de17b31c6.webp',
        isCorrect: true,
      },
      {
        label: 'Zero Açúcar',
        // image:
        //   'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/q4b6h-screenshot-20230726-155650-1200x1200.webp',
        isCorrect: true,
      },
      {
        label: 'Protein Bar',
        // image:
        //   'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/b52rz-d-nq-np-797471-mlm72081649375-102023-o.webp',
        isCorrect: true,
      },
      {
        label: 'Classic Nuts',
        // image:
        //   'https://d9aloqs890lqz.cloudfront.net/uploads/4498/06-09-2024/iaz15-gravata-red-para-padrinho-de-casamento-modelo-jacquard-1200-fios-contemporaneo-8927-1-50b935f845f0d71f4223e3d09912c076.webp',
        isCorrect: true,
      },
    ],
  },
  {
    id: 'question4',
    type: 'question',
    title: 'Qual é a missão principal da Dr. Peanut?',
    image: 'https://i.ibb.co/s51Pk5K/pergunta-4-dr-peanut.png',
    options: [
      { label: 'Produzir doces gourmet', isCorrect: true },
      {
        label: 'Promover alimentação saudável e nutritiva',
        isCorrect: true,
      },
      { label: 'Ser a maior fábrica de chocolates do Brasil', isCorrect: true },
      { label: 'Fazer snacks exclusivos para atletas', isCorrect: true },
    ],
  },
  {
    id: 'question5',
    type: 'question',
    title:
      'A Dr. Peanut é conhecida por patrocinar atletas de qual modalidade?',
    // image: 'https://i.ibb.co/m9VnF8D/Design-sem-nome-71.png',
    options: [
      { label: 'Surf', isCorrect: true },
      { label: 'Futebol', isCorrect: true },
      { label: 'CrossFit e esportes de alta performance', isCorrect: true },
      { label: 'Basquete', isCorrect: true },
    ],
  },
]
