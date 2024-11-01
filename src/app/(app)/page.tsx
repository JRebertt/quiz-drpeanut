/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Loader2 } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import ReactConfetti from 'react-confetti'
import { steps } from '@/utils/const'
import Component from '@/components/testimals'

type BaseStep = {
  id: string
  title: string
}

type WelcomeStep = BaseStep & {
  type: 'welcome'
  content: string
  image: string
  buttonText: string
}

type SelectionStep = BaseStep & {
  type: 'selection'
  subtitle: string
  options: Array<{
    label: string
    imageMale: string
    imageFemale: string
    value?: string
  }>
}

type QuestionStep = BaseStep & {
  type: 'question'
  image?: string
  options: Array<{
    label: string
    image?: string
    isCorrect: boolean
  }>
}

export type Step = WelcomeStep | SelectionStep | QuestionStep

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false)
  const [showWrongAnswer, setShowWrongAnswer] = useState(false)
  const [selectedGender, setSelectedGender] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)

  const totalSteps = steps.length
  const questionSteps = steps.filter((step) => step.type === 'question').length

  useEffect(() => {
    const currentProgress = (currentStep / (totalSteps - 1)) * 100
    setProgress(currentProgress)
  }, [currentStep, totalSteps])

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1)
      setLastAnswerCorrect(true)
      setIsLoading(true)
    } else {
      setLastAnswerCorrect(false)
      setShowWrongAnswer(true)
    }
  }

  const handleContinue = () => {
    if (lastAnswerCorrect) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
        setLastAnswerCorrect(false)
      } else {
        setShowResult(true)
        setShowConfetti(true)
      }
    } else {
      setShowWrongAnswer(false)
    }
  }

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false)
        handleContinue()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  const handleSelection = (value?: string) => {
    if (steps[currentStep].id === 'gender' && value) {
      setSelectedGender(value)
    }
    setCurrentStep(currentStep + 1)
  }

  const getAnswerImage = (isCorrect: boolean) => {
    if (isCorrect) {
      return selectedGender === 'male'
        ? 'https://d9aloqs890lqz.cloudfront.net/uploads/4498/07-09-2024/aqwxc-ken-acertou.jpg'
        : 'https://media.giphy.com/media/nnsonYMgqQEzCC87aH/giphy.gif'
    } else {
      return selectedGender === 'male'
        ? 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGt6aGEyb2pwbGlrcHZoNzQxNm1ydmIzYm5wNnB4YWlwNXJpeG1udCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kBHtuLIHOHnr3iKRXJ/giphy.webp'
        : 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGt6aGEyb2pwbGlrcHZoNzQxNm1ydmIzYm5wNnB4YWlwNXJpeG1udCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kBHtuLIHOHnr3iKRXJ/giphy.webp'
    }
  }

  const renderWrongAnswer = () => (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-[#EA580E] mb-4">❌ VOCÊ ERROU</h2>
      <p className="mb-4">Essa era difícil, né?</p>
      <Image
        src={getAnswerImage(false)}
        alt="Wrong answer"
        width={300}
        height={300}
        className="mx-auto mb-4 rounded-md"
      />
      <button
        onClick={handleContinue}
        className="bg-[#EA580E] hover:bg-[#e0733c] text-white font-bold py-2 px-4 rounded"
      >
        Tentar novamente
      </button>
    </div>
  )

  const renderStep = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col justify-center items-center h-64">
          <Loader2 className="h-16 w-16 animate-spin text-[#EA580E] mb-4" />
          <p className="text-[#EA580E] font-bold">Carregando...</p>
        </div>
      )
    }

    if (showResult) {
      return (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#EA580E] mb-4">
            Parabéns! Você completou nosso desafio! 🎉
          </h1>
          <p className="mb-4">
            Como agradecimento pela sua participação, você pode escolher um
            prêmio exclusivo da Dr. Peanut gratuitamente!
          </p>
          <Image
            src="https://i.ibb.co/qx2DkLq/dr-peaunut.png"
            alt="dr-peaunut"
            width={250}
            height={200}
            className="mx-auto mb-4 rounded-md"
          />
          <p className="text-xl mb-4">
            Você acertou {score} de {questionSteps} perguntas!
          </p>
          <button
            onClick={() =>
              (window.location.href =
                'https://descontoslimitados.com/lojapeanut')
            }
            className="bg-[#EA580E] hover:bg-[#EA580E] text-white font-bold py-2 px-4 rounded"
          >
            Resgate seu prêmio
          </button>
        </div>
      )
    }

    if (showWrongAnswer) {
      return renderWrongAnswer()
    }

    const step = steps[currentStep]
    if (!step) {
      return <div>Erro: Etapa não encontrada</div>
    }

    switch (step.type) {
      case 'welcome':
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
            <p className="mb-4 text-sm">{step.content}</p>
            <Image
              src={step.image}
              alt="dr-peaunut"
              width={250}
              height={200}
              className="mx-auto mb-4 rounded-md"
            />
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="bg-[#EA580E] hover:bg-[#EA580E] text-white font-bold py-2 px-4 rounded"
            >
              {step.buttonText}
            </button>
          </div>
        )

      case 'selection':
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
            <p className="mb-4">{step.subtitle}</p>
            <div className="grid grid-cols-2 gap-4">
              {step.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelection(option.value)}
                  className="bg-white hover:bg-[#EA580E] text-[#EA580E] font-semibold py-2 px-4 border border-[#EA580E] rounded shadow"
                >
                  <Image
                    src={
                      selectedGender === 'male'
                        ? option.imageMale
                        : option.imageFemale
                    }
                    alt={option.label}
                    width={100}
                    height={100}
                    className="mx-auto mb-2 rounded-md"
                  />
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )

      case 'question':
        if (lastAnswerCorrect) {
          return (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#EA580E] mb-4">
                ♥ RESPOSTA CERTA ♥
              </h2>
              <p className="mb-4">Muito bem!</p>
              <Image
                src={getAnswerImage(true)}
                alt="Correct answer"
                width={300}
                height={300}
                className="mx-auto mb-4 rounded-md"
              />
              <button
                onClick={handleContinue}
                className="bg-[#EA580E] hover:bg-[#EA580E] text-white font-bold py-2 px-4 rounded"
              >
                Continuar
              </button>
            </div>
          )
        }

        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
            {step.image && (
              <Image
                src={step.image}
                alt="Question Image"
                width={300}
                height={200}
                className="mx-auto mb-4 rounded-md"
              />
            )}
            <div className="grid grid-cols-2 gap-4">
              {step.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.isCorrect)}
                  className="bg-white hover:bg-[#f6d5c5] text-[#EA580E] font-semibold py-2 px-4 border border-[#EA580E] rounded shadow"
                >
                  {option.image && (
                    <Image
                      src={option.image}
                      alt={option.label}
                      width={100}
                      height={100}
                      className="mx-auto mb-2 rounded-md"
                    />
                  )}
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )

      default:
        return <div>Erro: Tipo de etapa desconhecido</div>
    }
  }

  return (
    <div className="min-h-screen bg-[#EA580E] flex flex-col items-center justify-center p-4">
      {showConfetti && <ReactConfetti />}
      <Image
        src="https://i.ibb.co/6wzV0VF/image-removebg-preview-51.png"
        alt="dr-peaunut Logo"
        width={200}
        height={100}
        className="mb-4"
      />
      <Progress
        value={progress}
        className="w-64 h-2 mb-8 bg-[#eeeeee] [&>div]:bg-[#ff9d6c]"
        // className="w-64 h-2 mb-8 bg-[#f6f6f6]"
      />
      <main className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        {renderStep()}

        <Component />
      </main>
      {currentStep > 0 &&
        currentStep < steps.length - 1 &&
        !showWrongAnswer &&
        !lastAnswerCorrect &&
        !isLoading && (
          <p className="mt-4 text-sm text-white">
            Ao clicar em alguma das opções, você concorda com os Termos de
            utilização e serviço, Política de privacidade, Política de
            subscrição e Política de Cookies.
          </p>
        )}
    </div>
  )
}
