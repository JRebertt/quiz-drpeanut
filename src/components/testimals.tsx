'use client'

import { useState, useEffect } from 'react'
import { Star, User, ThumbsUp } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'

interface Avaliacao {
  id: number
  usuario: string
  foto: string
  classificacao: number
  data: string
  comentario: string
  fotoProduto?: string
  curtidas: number
}

interface DistribuicaoEstrelas {
  [key: number]: number
}

export default function Component() {
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([
    {
      id: 1,
      usuario: 'Maria Silva',
      foto: '',
      classificacao: 5,
      data: '10 de maio de 2023',
      comentario:
        'Ótimo produto! Superou minhas expectativas em todos os aspectos.',
      fotoProduto: '',
      curtidas: 12,
    },
    {
      id: 2,
      usuario: 'Stefany Soti',
      foto: 'https://i.ibb.co/C799Ptm/Palmeiras-1.png',
      classificacao: 4,
      data: '5 de junho de 2023',
      comentario:
        'Bom produto, mas a entrega demorou um pouco mais do que o esperado.',
      curtidas: 3,
    },
    {
      id: 3,
      usuario: 'Ana Oliveira',
      foto: '',
      classificacao: 5,
      data: '20 de junho de 2023',
      comentario: 'Excelente qualidade e ótimo custo-benefício. Recomendo!',
      fotoProduto: '',
      curtidas: 15,
    },
    {
      id: 4,
      usuario: 'Anna Sommer',
      foto: '',
      classificacao: 5,
      data: '15 de julho de 2023',
      comentario:
        'Produto razoável. Atende às necessidades básicas, mas poderia ser melhor.',
      curtidas: 3,
    },
    {
      id: 4,
      usuario: 'Anna Sommer',
      foto: '',
      classificacao: 5,
      data: '15 de julho de 2023',
      comentario:
        'Produto razoável. Atende às necessidades básicas, mas poderia ser melhor.',
      curtidas: 2,
    },
  ])

  const [filtro, setFiltro] = useState(0)
  const [contadorAvaliacoes, setContadorAvaliacoes] = useState(100) // Iniciando com um número maior
  const [distribuicaoEstrelas, setDistribuicaoEstrelas] =
    useState<DistribuicaoEstrelas>({})
  const [mediaClassificacao, setMediaClassificacao] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setAvaliacoes((prevAvaliacoes) =>
        prevAvaliacoes.map((av) => ({
          ...av,
          curtidas: av.curtidas + Math.floor(Math.random() * 3),
        })),
      )
      setContadorAvaliacoes((prev) => prev + Math.floor(Math.random() * 5) + 1)
    }, 3000)

    return () => clearInterval(intervalo)
  }, [])

  useEffect(() => {
    const novaDistribuicao = avaliacoes.reduce((acc, curr) => {
      acc[curr.classificacao] = (acc[curr.classificacao] || 0) + 1
      return acc
    }, {} as DistribuicaoEstrelas)
    setDistribuicaoEstrelas(novaDistribuicao)

    const novaMedia =
      avaliacoes.reduce((acc, curr) => acc + curr.classificacao, 0) /
      avaliacoes.length
    setMediaClassificacao(novaMedia)
  }, [avaliacoes])

  const curtirAvaliacao = (id: number) => {
    setAvaliacoes(
      avaliacoes.map((av) =>
        av.id === id ? { ...av, curtidas: av.curtidas + 1 } : av,
      ),
    )
  }

  const avaliacoesFiltradas = filtro
    ? avaliacoes.filter((av) => av.classificacao === filtro)
    : avaliacoes

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Avaliações do Produto
      </h2>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
        <div>
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 md:w-8 md:h-8 ${
                    star <= mediaClassificacao
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl md:text-3xl font-semibold animate-pulse">
              {mediaClassificacao.toFixed(1)}
            </span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            <span className="font-bold text-xl md:text-2xl animate-pulse">
              {contadorAvaliacoes}
            </span>{' '}
            avaliações
          </p>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((estrelas) => (
              <div key={estrelas} className="flex items-center">
                <Button
                  variant="ghost"
                  className="w-14 md:w-16 mr-2 px-1 md:px-2"
                  onClick={() => setFiltro(estrelas === filtro ? 0 : estrelas)}
                >
                  {estrelas}{' '}
                  <Star className="w-3 h-3 md:w-4 md:h-4 ml-1 inline" />
                </Button>
                <Progress
                  value={
                    ((distribuicaoEstrelas[estrelas] || 0) /
                      avaliacoes.length) *
                    100
                  }
                  className="flex-grow h-2"
                />
                <span className="ml-2 w-14 md:w-16 text-right text-sm md:text-base animate-pulse">
                  {(
                    ((distribuicaoEstrelas[estrelas] || 0) /
                      avaliacoes.length) *
                    100
                  ).toFixed(1)}
                  %
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-100 p-4 md:p-6 rounded-lg">
          <h3 className="text-lg md:text-xl font-semibold mb-4">
            Estatísticas
          </h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li>
              Média de curtidas:{' '}
              <span className="font-bold animate-pulse">
                {(
                  avaliacoes.reduce((acc, curr) => acc + curr.curtidas, 0) /
                  avaliacoes.length
                ).toFixed(1)}
              </span>
            </li>
            <li>
              Avaliação mais recente: {avaliacoes[avaliacoes.length - 1].data}
            </li>
            <li>
              Avaliações 5 estrelas:{' '}
              <span className="font-bold animate-pulse">
                {distribuicaoEstrelas[5] || 0}
              </span>
            </li>
            <li>
              Avaliações 1 estrela:{' '}
              <span className="font-bold animate-pulse">
                {distribuicaoEstrelas[1] || 0}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-4 md:space-y-6">
        {avaliacoesFiltradas.map((avaliacao) => (
          <Card
            key={avaliacao.id}
            className="transition-all duration-300 hover:shadow-lg"
          >
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-wrap items-center mb-4">
                <Avatar className="w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4">
                  <AvatarImage src={avaliacao.foto} alt={avaliacao.usuario} />
                  <AvatarFallback>
                    <User className="w-5 h-5 md:w-6 md:h-6" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex-grow min-w-0 mb-2 md:mb-0">
                  <h3 className="font-semibold text-sm md:text-base truncate">
                    {avaliacao.usuario}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    {avaliacao.data}
                  </p>
                </div>
                <div className="flex w-full md:w-auto md:ml-auto">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 md:w-5 md:h-5 ${
                        star <= avaliacao.classificacao
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="mb-4 text-sm md:text-base">
                {avaliacao.comentario}
              </p>
              {avaliacao.fotoProduto && (
                <Image
                  src={avaliacao.fotoProduto}
                  alt="Foto do produto"
                  className="w-full max-w-xs rounded-lg mb-4"
                />
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => curtirAvaliacao(avaliacao.id)}
                className="transition-all duration-300 hover:bg-blue-50 text-xs md:text-sm"
              >
                <ThumbsUp className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                Curtir (
                <span className="font-bold animate-pulse">
                  {avaliacao.curtidas}
                </span>
                )
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
