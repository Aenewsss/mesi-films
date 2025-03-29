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
        <video playsInline src="https://firebasestorage.googleapis.com/v0/b/safrasul-sementes-fb9bd.appspot.com/o/mesi-films%2Fteaser-mesi-films.mp4?alt=media&token=1e78a2a7-00fe-43ae-b0d2-9443a725369f" autoPlay controls className="bg-gray-300 aspect-video max-w-3xl mx-auto relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all">
              <Play className="w-8 h-8 text-white" fill="white" />
            </div>
          </div>
          <p className="text-gray-600 font-medium">VÍDEO TEASER</p>
        </video>
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
        <h2 className="text-center text-6xl  font-medium mb-16 relative">
          <span className="relative px-8 inline-block">
            VÍDEOS DE PERFORMANCE
            <span className="absolute -left-6 -top-2 h-6 w-6 border-l-2 border-t-2 border-yellow-400"></span>
            <span className="absolute -right-6 -top-2 h-6 w-6 border-r-2 border-t-2 border-yellow-400"></span>
            <span className="absolute -left-6 -bottom-2 h-6 w-6 border-l-2 border-b-2 border-yellow-400"></span>
            <span className="absolute -right-6 -bottom-2 h-6 w-6 border-r-2 border-b-2 border-yellow-400"></span>
          </span>
        </h2>
        <h2 className="text-center text-xl mb-2">VÍDEOS QUE VÃO PARA TRÁFEGO PAGO,</h2>
        <h3 className="text-center text-xl mb-12">
          COM O OBJETIVO DE TE FAZER <span className="text-yellow-400">VENDER MAIS</span>.
        </h3>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center">
          {activeVideoSlide === 0 && (
              <div className="w-[481px] h-[857px] mx-2">
                <video
                  controls
                  autoPlay
                  src="https://firebasestorage.googleapis.com/v0/b/safrasul-sementes-fb9bd.appspot.com/o/mesi-films%2FCriativo%202%20-%20E%CC%81rica.mp4?alt=media&token=511396e3-86b5-4ac1-b702-530dc58fcf0a"
                  width={481}
                  height={857}
                  className="object-cover rounded-lg"
                />
              </div>
            )}

            {activeVideoSlide === 1 && (
              <div className="w-[481px] h-[857px] mx-2">
                <video
                  controls
                  autoPlay
                  src="https://firebasestorage.googleapis.com/v0/b/safrasul-sementes-fb9bd.appspot.com/o/mesi-films%2FFique%20quieto%20a%20nada%20vai%20acontecer.mp4?alt=media&token=883bb737-48a2-4b6f-8c8f-7bd84954e249"
                  width={481}
                  height={857}
                  className="object-cover rounded-lg"
                />
              </div>
            )}

            {activeVideoSlide === 2 && (
              <div className="w-[481px] h-[857px] mx-2">
                <video
                  controls
                  autoPlay
                  src="https://firebasestorage.googleapis.com/v0/b/safrasul-sementes-fb9bd.appspot.com/o/mesi-films%2FiPhone%2016.mp4?alt=media&token=8f718cca-94ed-4105-bdcd-84356c259e41"
                  width={481}
                  height={857}
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            {activeVideoSlide === 3 && (
              <div className="w-[481px] h-[857px] mx-2">
                <video
                  controls
                  autoPlay
                  src="https://firebasestorage.googleapis.com/v0/b/safrasul-sementes-fb9bd.appspot.com/o/mesi-films%2FMetabolismo%20influencia%20suas%20emoc%CC%A7o%CC%83es%20Patrocinado.mp4?alt=media&token=d7f9373a-5ba3-4170-b47e-b5a4e37b1dc6"
                  width={481}
                  height={857}
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            {activeVideoSlide === 4 && (
              <div className="w-[481px] h-[857px] mx-2">
                <video
                  controls
                  autoPlay
                  src="https://firebasestorage.googleapis.com/v0/b/safrasul-sementes-fb9bd.appspot.com/o/mesi-films%2FVoce%CC%82%20mora%20em%20Brasi%CC%81lia.mp4?alt=media&token=bd90f198-0dcb-4631-a9dd-547414235584"
                  width={481}
                  height={857}
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            {activeVideoSlide === 5 && (
              <div className="w-[481px] h-[857px] mx-2">
                <video
                  controls
                  autoPlay
                  src="https://firebasestorage.googleapis.com/v0/b/safrasul-sementes-fb9bd.appspot.com/o/mesi-films%2FCriativo%203%20VSP.mp4?alt=media&token=cf8f6e2e-773f-4bca-b49e-15e36472b5e6"
                  width={481}
                  height={857}
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
        <h2 className="text-center text-6xl  font-medium mb-16 relative">
          <span className="relative px-8 inline-block">
            VÍDEOS DE BRANDING
            <span className="absolute -left-6 -top-2 h-6 w-6 border-l-2 border-t-2 border-yellow-400"></span>
            <span className="absolute -right-6 -top-2 h-6 w-6 border-r-2 border-t-2 border-yellow-400"></span>
            <span className="absolute -left-6 -bottom-2 h-6 w-6 border-l-2 border-b-2 border-yellow-400"></span>
            <span className="absolute -right-6 -bottom-2 h-6 w-6 border-r-2 border-b-2 border-yellow-400"></span>
          </span>
        </h2>
        <h2 className="text-center text-xl mb-2">VÍDEOS QUE VÃO PARA O FEED,</h2>
        <h3 className="text-center text-xl mb-12">
          COM O OBJETIVO DE TORNAR O SEU PERFIL <span className="text-yellow-400">MAIS ATRATIVO</span>.
        </h3>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center">
            {activeFeedSlide === 0 && (
              <div className="w-[481px] h-[857px] mx-2">
                <video
                  controls
                  autoPlay
                  src="https://firebasestorage.googleapis.com/v0/b/safrasul-sementes-fb9bd.appspot.com/o/mesi-films%2F2%20opc%CC%A7o%CC%83es%20Finalizado.mp4?alt=media&token=c3646407-8c7f-4665-bc51-9fa4dd02e29b"
                  width={481}
                  height={857}
                  className="object-cover rounded-lg"
                />
              </div>
            )}

            {activeFeedSlide === 1 && (
              <div className="w-[481px] h-[857px] mx-2">
                <video
                  controls
                  autoPlay
                  src="https://firebasestorage.googleapis.com/v0/b/safrasul-sementes-fb9bd.appspot.com/o/mesi-films%2FEntrega%20premium.mp4?alt=media&token=cd4bb2e2-4750-4ec7-ae13-044d7d28670d"
                  width={481}
                  height={857}
                  className="object-cover rounded-lg"
                />
              </div>
            )}

            {activeFeedSlide === 2 && (
              <div className="w-[481px] h-[857px] mx-2">
                <video
                  controls
                  autoPlay
                  src="https://firebasestorage.googleapis.com/v0/b/safrasul-sementes-fb9bd.appspot.com/o/mesi-films%2FQuais%20sinais%20-%20Leso%CC%83es.mp4?alt=media&token=233478c0-9c71-4613-9d54-ccda6998386d"
                  width={481}
                  height={857}
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            {activeFeedSlide === 3 && (
              <div className="w-[481px] h-[857px] mx-2">
                <video
                  controls
                  autoPlay
                  src="https://firebasestorage.googleapis.com/v0/b/safrasul-sementes-fb9bd.appspot.com/o/mesi-films%2FSuco%20para%20emagrecer.mp4?alt=media&token=ff922a34-4ee2-4f9a-9d61-f9c5f3c56966"
                  width={481}
                  height={857}
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            {activeFeedSlide === 4 && (
              <div className="w-[481px] h-[857px] mx-2">
                <video
                  controls
                  autoPlay
                  src="https://firebasestorage.googleapis.com/v0/b/safrasul-sementes-fb9bd.appspot.com/o/mesi-films%2FTipos%20de%20treinamentos.mp4?alt=media&token=9158dd82-0240-48e6-a7ce-c15455d944f9"
                  width={481}
                  height={857}
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            {activeFeedSlide === 5 && (
              <div className="w-[481px] h-[857px] mx-2">
                <video
                  controls
                  autoPlay
                  src="https://firebasestorage.googleapis.com/v0/b/safrasul-sementes-fb9bd.appspot.com/o/mesi-films%2FTreino%20graduados%202.mp4?alt=media&token=7da00e3e-2eb6-453f-a4c2-cdeb05b843cc"
                  width={481}
                  height={857}
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
        <h2 className="text-center text-6xl  font-medium mb-16 relative">
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
              <Image unoptimized className="object-cover w-24 h-24 bg-gray-800 flex items-center justify-center" src="/rodrigo-neri.png" alt="Rodrigo Neri" width={136} height={118} />
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
              <Image unoptimized className="object-cover w-24 h-24 bg-gray-800 flex items-center justify-center" src="/mateus-ticchetti.png" alt="Rodrigo Neri" width={136} height={118} />
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
              <Image unoptimized className="object-cover w-24 h-24 bg-gray-800 flex items-center justify-center" src="/duuck.png" alt="Rodrigo Neri" width={136} height={118} />
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
              <Image unoptimized className="object-cover w-24 h-24 bg-gray-800 flex items-center justify-center" src="/rafael-ferreira.png" alt="Rodrigo Neri" width={136} height={118} />
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
            <span className="relative px-8 text-6xl inline-block font-medium">
              QUEM JÁ ATENDEMOS
              <span className="absolute -left-6 -top-2 h-6 w-6 border-l-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -right-6 -top-2 h-6 w-6 border-r-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -left-6 -bottom-2 h-6 w-6 border-l-2 border-b-2 border-yellow-400"></span>
              <span className="absolute -right-6 -bottom-2 h-6 w-6 border-r-2 border-b-2 border-yellow-400"></span>
            </span>
          </h2>

          <div className="flex flex-wrap justify-between max-w-4xl mx-auto mb-6">
            <div className="w-[200px] flex justify-center">
              <Image unoptimized className="object-contain" src="/logo-Petrobras.png" alt="Rodrigo Neri" width={200} height={40} />
            </div>
            <div className="w-[200px] flex justify-center">
              <Image unoptimized className="object-contain" src="/logo-BYD.png" alt="Rodrigo Neri" width={200} height={40} />
            </div>
            <div className="w-[200px] flex justify-center">
              <Image unoptimized className="object-contain" src="/logo-CASACOR.png" alt="Rodrigo Neri" width={200} height={40} />
            </div>
          </div>

          <div className="flex flex-wrap justify-between max-w-4xl mx-auto mb-6">
            <div className="w-[200px] flex justify-center">
              <Image unoptimized className="object-contain" src="/logo-BIG-BOX.png" alt="Rodrigo Neri" width={200} height={40} />
            </div>
            <div className="w-[200px] flex justify-center">
              <Image unoptimized className="object-contain" src="/logo-UNQ.png" alt="Rodrigo Neri" width={120} height={40} />
            </div>
            <div className="w-[200px] flex justify-center">
              <Image unoptimized className="object-contain" src="/logo-band.png" alt="Rodrigo Neri" width={100} height={40} />
            </div>
          </div>

          <div className="flex flex-wrap justify-between max-w-4xl mx-auto">
            <div className="w-[200px] flex justify-center">
              <Image unoptimized className="object-contain" src="/logo-MSC-Cruzeiros.png" alt="Rodrigo Neri" width={200} height={40} />
            </div>
            <div className="w-[200px] flex justify-center">
              <Image unoptimized className="object-contain" src="/logo-cobra.png" alt="Rodrigo Neri" width={120} height={40} />
            </div>
            <div className="w-[200px] flex justify-center">
              <Image unoptimized className="object-contain" src="/logo-FINT.png" alt="Rodrigo Neri" width={200} height={40} />
            </div>
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

