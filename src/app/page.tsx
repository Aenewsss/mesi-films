"use client"

import Image from "next/image"
import { Play, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function MesiFilms() {
  const [activeVideoSlide, setActiveVideoSlide] = useState(1)
  const [activeFeedSlide, setActiveFeedSlide] = useState(1)

  const handlePrevVideo = () => {
    setActiveVideoSlide((prev) => (prev === 0 ? 2 : prev - 1))
  }

  const handleNextVideo = () => {
    setActiveVideoSlide((prev) => (prev === 2 ? 0 : prev + 1))
  }

  const handlePrevFeed = () => {
    setActiveFeedSlide((prev) => (prev === 0 ? 2 : prev - 1))
  }

  const handleNextFeed = () => {
    setActiveFeedSlide((prev) => (prev === 2 ? 0 : prev + 1))
  }

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="container mx-auto pt-6 px-4">
        <div className="flex justify-center">
          <Image
            src="/logo-mesi-vertical.png"
            alt="MESI FILMS"
            width={150}
            height={40}
            className="object-contain"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 relative flex justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-8xl font-medium mb-8 text-center">
            <span className="text-yellow-400">+</span>CLIQUES
            <br />
            <span className="text-yellow-400">+</span>LEADS
            <br />
            <span className="text-yellow-400">+</span>VENDAS
          </h1>

          {/* <p className="text-sm mb-8 text-gray-300 max-w-lg">
            CLIQUE NO ÍCONE DE PLAY PARA DESCOBRIR COMO OS VÍDEOS PODEM SER UMA PODEROSA FERRAMENTA PARA A SUA MARCA
            ATRAIR CLIENTES QUALIFICADOS, GERAR LEADS E AUMENTAR AS SUAS VENDAS.
          </p> */}

          <div className="flex justify-between items-center">
            <Image
              src="/triangle-mesi.png"
              alt="MESI FILMS"
              width={628}
              height={785}
              className="object-contain"
            />

            <p className="text-lg text-gray-300 max-w-lg mb-8">
              Sua empresa com um novo posicionamento digital.
              A Mesi Films tem como foco mostrar para o mundo o que a sua marca representa. As redes sociais são as novas vitrines, e sabemos que não basta apenas estar nelas
              <br />
              <br />
              <br />
              Cada marca carrega uma história, um propósito e uma identidade única. Nossa missão é transformar tudo isso em uma presença digital autêntica, que transmite não só o que você faz, mas o porquê faz. Criamos vídeos que traduzem a essência
              do seu negócio, despertam conexão e posicionam sua empresa da maneira que ela merece.
            </p>
          </div>
        </div>

        {/* <div className="flex justify-center my-8">
          <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
            <ChevronRight className="w-6 h-6 text-black" />
          </div>
        </div> */}
      </section>

      {/* Video Teaser */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-gray-300 aspect-video max-w-3xl mx-auto relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
              <Play className="w-8 h-8 text-white" fill="white" />
            </div>
          </div>
          <p className="text-gray-600 font-medium">VÍDEO TEASER</p>
        </div>
      </section>

      {/* CTA Button */}
      <section className="container mx-auto px-4 py-8 flex justify-center">
        <button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition-colors">
          SOLICITE SEU ORÇAMENTO
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* Traffic Videos Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center text-xl mb-2">VÍDEOS QUE VÃO PARA TRÁFEGO PAGO,</h2>
        <h3 className="text-center text-xl mb-12">
          COM O OBJETIVO DE TE FAZER <span className="text-yellow-400">VENDER MAIS</span>.
        </h3>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center">
            {activeVideoSlide === 0 && (
              <div className="w-64 h-96 mx-2">
                <Image
                  src="/placeholder.svg?height=384&width=256"
                  alt="Video example"
                  width={256}
                  height={384}
                  className="object-cover rounded-lg"
                />
              </div>
            )}

            {activeVideoSlide === 1 && (
              <div className="w-64 h-96 mx-2">
                <Image
                  src="/placeholder.svg?height=384&width=256"
                  alt="Video example"
                  width={256}
                  height={384}
                  className="object-cover rounded-lg"
                />
              </div>
            )}

            {activeVideoSlide === 2 && (
              <div className="w-64 h-96 mx-2">
                <Image
                  src="/placeholder.svg?height=384&width=256"
                  alt="Video example"
                  width={256}
                  height={384}
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          <button
            onClick={handlePrevVideo}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={handleNextVideo}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </section>

      {/* Feed Videos Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center text-xl mb-2">VÍDEOS QUE VÃO PARA O FEED,</h2>
        <h3 className="text-center text-xl mb-12">
          COM O OBJETIVO DE TORNAR O SEU PERFIL <span className="text-yellow-400">MAIS ATRATIVO</span>.
        </h3>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center">
            {activeFeedSlide === 0 && (
              <div className="w-64 h-96 mx-2">
                <Image
                  src="/placeholder.svg?height=384&width=256"
                  alt="Feed video example"
                  width={256}
                  height={384}
                  className="object-cover rounded-lg"
                />
              </div>
            )}

            {activeFeedSlide === 1 && (
              <div className="w-64 h-96 mx-2">
                <Image
                  src="/placeholder.svg?height=384&width=256"
                  alt="Feed video example"
                  width={256}
                  height={384}
                  className="object-cover rounded-lg"
                />
              </div>
            )}

            {activeFeedSlide === 2 && (
              <div className="w-64 h-96 mx-2">
                <Image
                  src="/placeholder.svg?height=384&width=256"
                  alt="Feed video example"
                  width={256}
                  height={384}
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          <button
            onClick={handlePrevFeed}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={handleNextFeed}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center text-2xl font-bold mb-16 relative">
          <span className="relative px-8 inline-block">
            DEPOIMENTOS
            <span className="absolute -left-6 -top-2 h-6 w-6 border-l-2 border-t-2 border-yellow-400"></span>
            <span className="absolute -right-6 -top-2 h-6 w-6 border-r-2 border-t-2 border-yellow-400"></span>
            <span className="absolute -left-6 -bottom-2 h-6 w-6 border-l-2 border-b-2 border-yellow-400"></span>
            <span className="absolute -right-6 -bottom-2 h-6 w-6 border-r-2 border-b-2 border-yellow-400"></span>
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <div className="p-6">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 bg-gray-800 flex items-center justify-center">
                <span className="text-sm text-white">FOTO</span>
              </div>
              <span className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -left-2 -bottom-2 h-6 w-6 border-l-2 border-b-2 border-yellow-400"></span>
              <span className="absolute -right-2 -bottom-2 h-6 w-6 border-r-2 border-b-2 border-yellow-400"></span>
            </div>
            <h3 className="text-xl font-bold mb-1 flex items-center">
              RODRIGO NERI <span className="ml-2 text-gray-500 text-xs">○</span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">CENTRO DE KRAV MAGA SUDOESTE</p>
            <p className="text-xs text-gray-300 leading-relaxed">
              PROFISSIONAL COMPETENTE, COM PREÇO JUSTO E, NA MINHA OPINIÃO, O MAIS IMPORTANTE: CUMPRE TODOS OS PRAZOS
              COMBINADOS. ALÉM DE CONCLUIRMOS O TRABALHO, A VISIBILIDADE DA MINHA EMPRESA ALCANÇOU PATAMARES JAMAIS
              IMAGINADOS. RECOMENDO DE OLHOS FECHADOS O TRABALHO DO LUCAS!
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="p-6">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 bg-gray-800 flex items-center justify-center">
                <span className="text-sm text-white">FOTO</span>
              </div>
              <span className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -left-2 -bottom-2 h-6 w-6 border-l-2 border-b-2 border-yellow-400"></span>
              <span className="absolute -right-2 -bottom-2 h-6 w-6 border-r-2 border-b-2 border-yellow-400"></span>
            </div>
            <h3 className="text-xl font-bold mb-1 flex items-center">
              MATEUS TICCHETTI <span className="ml-2 text-gray-500 text-xs">○</span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">NUTRICIONISTA</p>
            <p className="text-xs text-gray-300 leading-relaxed">
              JÁ REALIZEI O TRABALHO COM A MESI FILMS HÁ UM BOM TEMPO E, ATÉ HOJE, SIGO ME SURPREENDENDO COM A ENTREGA
              DO TRABALHO. O PROFISSIONALISMO E A QUALIDADE DE ENTREGA DOS TRABALHOS É SURREAL. SEMPRE TIVEMOS
              RESULTADOS POSITIVOS EM NOSSOS PROJETOS. E TER A MESI FILMS COMIGO NESSA JORNADA FOI FUNDAMENTAL PARA O
              MEU CRESCIMENTO. RECOMENDO DE OLHOS FECHADOS!
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="p-6">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 bg-gray-800 flex items-center justify-center">
                <span className="text-sm text-white">FOTO</span>
              </div>
              <span className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -left-2 -bottom-2 h-6 w-6 border-l-2 border-b-2 border-yellow-400"></span>
              <span className="absolute -right-2 -bottom-2 h-6 w-6 border-r-2 border-b-2 border-yellow-400"></span>
            </div>
            <h3 className="text-xl font-bold mb-1 flex items-center">
              DUUCK IMPORTS <span className="ml-2 text-gray-500 text-xs">○</span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">PRODUTOS APPLE</p>
            <p className="text-xs text-gray-300 leading-relaxed">
              JÁ FAZ 6 MESES QUE ESTAMOS TRABALHANDO COM O LUCAS E OS RESULTADOS ESTÃO MUITO BOM! ELE É UM EXCELENTE
              PROFISSIONAL E, GRAÇAS À AJUDA DELE, OS VÍDEOS DA DUUCK ESTÃO CADA VEZ MELHORES. INCLUSIVE, ESSE É UM
              RECONHECIMENTO QUE TEMOS DA GALERA DE FORA. TODOS OS DIAS RECEBEMOS ELOGIOS SOBRE A QUALIDADE DOS VÍDEOS.
              O LUCAS É UM PARCEIRO FUNDAMENTAL PRA GENTE!
            </p>
          </div>

          {/* Testimonial 4 */}
          <div className="p-6">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 bg-gray-800 flex items-center justify-center">
                <span className="text-sm text-white">FOTO</span>
              </div>
              <span className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -left-2 -bottom-2 h-6 w-6 border-l-2 border-b-2 border-yellow-400"></span>
              <span className="absolute -right-2 -bottom-2 h-6 w-6 border-r-2 border-b-2 border-yellow-400"></span>
            </div>
            <h3 className="text-xl font-bold mb-1 flex items-center">
              RAFAEL FERREIRA <span className="ml-2 text-gray-500 text-xs">○</span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">PERSONAL UNIQUE</p>
            <p className="text-xs text-gray-300 leading-relaxed">
              O TRABALHO DESENVOLVIDO PELO LUCAS PARA MINHA ASSESSORIA ME COLOCOU EM OUTRO PATAMAR NA APRESENTAÇÃO DO
              SERVIÇO E FECHAMENTO DOS CONTRATOS. PROFISSIONAL EXTREMAMENTE COMPROMETIDO E CAPRICHOSO COM A ENTREGA E
              DETALHES. RECOMENDO SEM PESTANEJAR!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="container mx-auto px-4 py-8 flex justify-center">
        <button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition-colors">
          SOLICITE SEU ORÇAMENTO
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* Clients Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-16 text-black relative">
            <span className="relative px-8 inline-block">
              QUEM JÁ ATENDEMOS
              <span className="absolute -left-6 -top-2 h-6 w-6 border-l-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -right-6 -top-2 h-6 w-6 border-r-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -left-6 -bottom-2 h-6 w-6 border-l-2 border-b-2 border-yellow-400"></span>
              <span className="absolute -right-6 -bottom-2 h-6 w-6 border-r-2 border-b-2 border-yellow-400"></span>
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-6">
            <button className="bg-black text-white py-2 px-6 rounded-full">PETROBRAS</button>
            <button className="bg-black text-white py-2 px-6 rounded-full">CASACOR</button>
            <button className="bg-black text-white py-2 px-6 rounded-full">MSC CRUZEIROS</button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-6">
            <button className="bg-black text-white py-2 px-6 rounded-full">COBRA</button>
            <button className="bg-black text-white py-2 px-6 rounded-full">SUPER TIME</button>
            <button className="bg-black text-white py-2 px-6 rounded-full">BAND</button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <button className="bg-black text-white py-2 px-6 rounded-full">FINT</button>
            <button className="bg-black text-white py-2 px-6 rounded-full">UNO</button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            VAMOS FALAR SOBRE
            <br />O SEU PROJETO?
          </h2>

          <button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-full flex items-center gap-2 mx-auto hover:bg-yellow-300 transition-colors">
            FALE COM A GENTE
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-8">
            <Image
              src="/logo-mesi-vertical.png"
              alt="MESI FILMS"
              width={150}
              height={40}
              className="object-contain mb-8"
            />

            <div className="flex items-center gap-4">
              <a href="#" className="text-white hover:text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500">
            <p>ENDEREÇO: RUA SEM NOME, 000 - CIDADE/ESTADO | CNPJ: 00.000.000/0001-00 | TODOS OS DIREITOS RESERVADOS</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

