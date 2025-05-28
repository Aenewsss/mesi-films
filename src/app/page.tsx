"use client";

import Image from "next/image";
import { Play, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function MesiFilms() {
  const [activeVideoSlide, setActiveVideoSlide] = useState(0);
  const [activeFeedSlide, setActiveFeedSlide] = useState(0);

  const handlePrevVideo = () => {
    setActiveVideoSlide((prev) => (prev === 0 ? 4 : prev - 1));
  };

  const handleNextVideo = () => {
    setActiveVideoSlide((prev) => (prev === 4 ? 0 : prev + 1));
  };

  const handlePrevFeed = () => {
    setActiveFeedSlide((prev) => (prev === 0 ? 4 : prev - 1));
  };

  const handleNextFeed = () => {
    setActiveFeedSlide((prev) => (prev === 4 ? 0 : prev + 1));
  };

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
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16 relative flex justify-center">
        <div className="">
          <div className="relative flex justify-center items-center min-h-[220px] sm:min-h-[300px] md:min-h-[100px] mb-4 sm:mb-8">
            <Image
              src="/index-logo.png"
              alt=""
              fill
              className="object-contain pointer-events-none select-none z-0 opacity-20 scale-85 sm:scale-100 md:scale-125"
              priority
            />
            <h1 className="relative z-10 text-4xl md:text-7xl font-mos-light text-center leading-tight">
              <span className="text-yellow-400 z-1">+</span>CLIQUES
              <br />
              <span className="text-yellow-400 z-1">+</span>LEADS
              <br />
              <span className="text-yellow-400 z-1">+</span>VENDAS
            </h1>
          </div>

          {/* <p className="text-sm mb-8 text-gray-300 max-w-lg">
            CLIQUE NO ÍCONE DE PLAY PARA DESCOBRIR COMO OS VÍDEOS PODEM SER UMA PODEROSA FERRAMENTA PARA A SUA MARCA
            ATRAIR CLIENTES QUALIFICADOS, GERAR LEADS E AUMENTAR AS SUAS VENDAS.
          </p> */}

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Image
              src="/triangle-mesi.png"
              alt="MESI FILMS"
              width={628}
              height={785}
              className="object-contain w-full max-w-xs md:max-w-md lg:max-w-lg"
            />

            <p className="text-gray-300 max-w-lg mb-8 font-sora-extra-light">
              SUA EMPRESA COM UM NOVO POSICIONAMENTO DIGITAL.
              <br />A <span className="font-sora"> MESI FILMS</span> TEM COMO
              FOCO MOSTRAR PARA O MUNDO O QUE A SUA MARCA REPRESENTA. AS REDES
              SOCIAIS SÃO AS NOVAS VITRINES, E SABEMOS QUE NÃO BASTA APENAS
              ESTAR NELAS
              <br />
              <span className="relative px-5 inline-block font-sora mt-10 mb-10 ml-2 text-white">
                É PRECISO SE DESTACAR
                <span className="absolute -left-2 -top-2 h-2 w-2 border-l-1 border-t-1 border-yellow-400"></span>
                <span className="absolute -right-2 -top-2 h-2 w-2 border-r-1 border-t-1 border-yellow-400"></span>
                <span className="absolute -left-2 -bottom-2 h-2 w-2 border-l-1 border-b-1 border-yellow-400"></span>
                <span className="absolute -right-2 -bottom-2 h-2 w-2 border-r-1 border-b-1 border-yellow-400"></span>
              </span>
              <br />
              CADA MARCA CARREGA UMA HISTÓRIA, UM PROPÓSITO E UMA IDENTIDADE
              ÚNICA. NOSSA MISSÃO É TRANSFORMAR TUDO ISSO EM UMA PRESENÇA
              DIGITAL AUTÊNTICA, QUE TRANSMITE NÃO SÓ O QUE VOCÊ FAZ, MAS O
              PORQUÊ FAZ. CRIAMOS VÍDEOS QUE TRADUZEM A ESSÊNCIA DO SEU NEGÓCIO,
              DESPERTAM CONEXÃO E POSICIONAM SUA EMPRESA DA MANEIRA QUE ELA
              MERECE.
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 mb-8">
        <Image
          src="/PLAY AMARELO.png"
          alt="MESI FILMS"
          width={50}
          height={10}
          className="object-contain rotate-90"
        />
      </div>

      {/* Video Teaser */}
      <section className="container mx-auto px-4 py-8">
        <div className="w-full max-w-3xl mx-auto aspect-video">
          <video
            id="testvideo"
            playsInline
            src="https://firebasestorage.googleapis.com/v0/b/shekinah-locadora.firebasestorage.app/o/mesi_films%2FTeaser-Mesi-Films.mp4?alt=media&token=fe9c9a40-39cd-423c-ad0d-db91c84b5938"
            autoPlay
            controls
            className="w-full h-full object-cover bg-gray-300"
          >
            <p className="text-gray-600 font-medium">VÍDEO TEASER</p>
          </video>
        </div>
      </section>

      {/* CTA Button */}
      <section className="container mx-auto px-4 py-8 flex justify-center">
        <Link target="_blank" href="https://api.whatsapp.com/send?phone=5561981923272&text=Olá, venho através do site Mesi Films e gostaria de solicitar um orçamento." className=" bg-yellow-400 text-black font-sora-bold cursor-pointer py-2 px-4 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition-colors">
          SOLICITE SEU ORÇAMENTO
          <Image
            src="/PLAY PRETO.png"
            alt="Play Icon"
            width={40}
            height={30}
            className="object-contain ml-1"
          />
        </Link>
      </section>

      {/* Traffic Videos Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <h2 className="text-center text-2x1 md:text-3xl mb-16 relative">
          <span className="relative px-2 sm:px-5 inline-block font-mos-light max-w-xs sm:max-w-md md:max-w-lg mx-auto whitespace-normal break-words">
            VÍDEOS DE PERFORMANCE
            <span className="absolute -left-6 -top-2 h-3 w-3 border-l-2 border-t-2 border-yellow-400"></span>
            <span className="absolute -right-6 -top-2 h-3 w-3 border-r-2 border-t-2 border-yellow-400"></span>
            <span className="absolute -left-6 -bottom-2 h-3 w-3 border-l-2 border-b-2 border-yellow-400"></span>
            <span className="absolute -right-6 -bottom-2 h-3 w-3 border-r-2 border-b-2 border-yellow-400"></span>
          </span>
        </h2>
        <h2 className="text-center text-sm md:text-xl mb-12 font-mos-light">
          VÍDEOS QUE VÃO PARA TRÁFEGO PAGO,
          <br />COM O OBJETIVO DE TE FAZER<br className="sm:hidden block" />
          <span className="text-yellow-400">&nbsp;VENDER MAIS</span>.
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center">
            {activeVideoSlide === 0 && (
              <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[9/16] mx-auto max-h-[700px]">
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/shekinah-locadora.firebasestorage.app/o/mesi_films%2FCriativo-2-Erica.mp4?alt=media&token=a3363d9a-a84e-48de-8307-2c39b851ac6e"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            )}

            {activeVideoSlide === 1 && (
              <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[9/16] mx-auto max-h-[700px]">
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/shekinah-locadora.firebasestorage.app/o/mesi_films%2FiPhone-16.mp4?alt=media&token=8d1d3c2a-2470-4d42-ae23-991a31eebaa2"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            )}

            {activeVideoSlide === 2 && (
              <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[9/16] mx-auto max-h-[700px]">
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/shekinah-locadora.firebasestorage.app/o/mesi_films%2FVoce-mora-em-Brasilia.mp4?alt=media&token=d7af6131-2363-4303-bd07-84a4b0e117a8"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            )}
            {activeVideoSlide === 3 && (
              <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[9/16] mx-auto max-h-[700px]">
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/shekinah-locadora.firebasestorage.app/o/mesi_films%2FMetabolismo-influencia-suas-emocoes-Patrocinado.mp4?alt=media&token=acb8b11a-8387-435e-8ea1-fe89d65b7c3b"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            )}
            {activeVideoSlide === 4 && (
              <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[9/16] mx-auto max-h-[700px]">
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/shekinah-locadora.firebasestorage.app/o/mesi_films%2FFique-quieto-e-nada-vai%20acontecer.mp4?alt=media&token=e6b84235-2cb0-455b-8e09-46446b5d5303"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            )}
          </div>

          <button
            onClick={handlePrevVideo}
            className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={handleNextVideo}
            className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </section>

      {/* Feed Videos Section */}
      <section className="container mx-auto px-4 py-8 sm:py-8 md:py-16">
        <h2 className="text-center text-xl md:text-4xl font-medium mb-16 relative">
          <span className="relative px-2 sm:px-5 inline-block font-mos-light max-w-xs sm:max-w-md md:max-w-lg mx-auto whitespace-normal break-words">
            VÍDEOS DE BRANDING
            <span className="absolute -left-6 -top-2 h-3 w-3 border-l-2 border-t-2 border-yellow-400"></span>
            <span className="absolute -right-6 -top-2 h-3 w-3 border-r-2 border-t-2 border-yellow-400"></span>
            <span className="absolute -left-6 -bottom-2 h-3 w-3 border-l-2 border-b-2 border-yellow-400"></span>
            <span className="absolute -right-6 -bottom-2 h-3 w-3 border-r-2 border-b-2 border-yellow-400"></span>
          </span>
        </h2>
        <h2 className="text-center text-sm md:text-xl font-mos-light mb-12">
          VÍDEOS QUE VÃO PARA O FEED,<br /> COM O OBJETIVO DE TORNAR
          O SEU PERFIL{" "}
          <span className="text-yellow-400">MAIS ATRATIVO</span>.
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center">
            {activeFeedSlide === 0 && (
              <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[9/16] mx-auto max-h-[700px]">
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/shekinah-locadora.firebasestorage.app/o/mesi_films%2FEntrega-premium.mp4?alt=media&token=8c1524d7-0411-4d1b-8ac2-e348b58ff42b"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            )}

            {activeFeedSlide === 1 && (
              <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[9/16] mx-auto max-h-[700px]">
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/shekinah-locadora.firebasestorage.app/o/mesi_films%2FOnde-carregar-o-seu-BYD.mp4?alt=media&token=d1794fe7-cbcb-44af-a351-11e65a3f31f2"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            )}

            {activeFeedSlide === 2 && (
              <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[9/16] mx-auto max-h-[700px]">
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/shekinah-locadora.firebasestorage.app/o/mesi_films%2FSuco-para-emagrecer.mp4?alt=media&token=bb61facd-5261-41db-9ff5-438ee4be1a79"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            )}
            {activeFeedSlide === 3 && (
              <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[9/16] mx-auto max-h-[700px]">
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/shekinah-locadora.firebasestorage.app/o/mesi_films%2FQuais-sinais-Lesoes.mp4?alt=media&token=56b364b6-de78-4585-b07d-6c3f032f397a"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            )}
            {activeFeedSlide === 4 && (
              <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[9/16] mx-auto max-h-[700px]">
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/shekinah-locadora.firebasestorage.app/o/mesi_films%2FTipos-de-treinamentos.mp4?alt=media&token=56378501-315c-4de5-85cb-fc700c28bb4d"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            )}
            {activeFeedSlide === 5 && (
              <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[9/16] mx-auto max-h-[700px]">
                <video
                  controls
                  src="https://firebasestorage.googleapis.com/v0/b/shekinah-locadora.firebasestorage.app/o/mesi_films%2FTreino-graduados-2.mp4?alt=media&token=3f9c7043-78ce-4db3-9392-3d5c4378ff14"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            )}
          </div>

          <button
            onClick={handlePrevFeed}
            className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={handleNextFeed}
            className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <h2 className="text-center text-2xl md:text-5xl font-medium mb-16 relative">
          <span className="relative px-6 inline-block font-mos-light">
            DEPOIMENTOS
            <span className="absolute -left-6 -top-2 h-3 w-3 border-l-2 border-t-2 border-yellow-400"></span>
            <span className="absolute -right-6 -top-2 h-3 w-3 border-r-2 border-t-2 border-yellow-400"></span>
            <span className="absolute -left-6 -bottom-2 h-3 w-3 border-l-2 border-b-2 border-yellow-400"></span>
            <span className="absolute -right-6 -bottom-2 h-3 w-3 border-r-2 border-b-2 border-yellow-400"></span>
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto font-mos-light">
          {/* Testimonial 1 */}
          <div className="p-6">
            <div className="relative inline-block mb-4">
              <Image
                unoptimized
                className="object-cover w-24 h-24 bg-gray-800 flex items-center justify-center"
                src="/rodrigo-neri.png"
                alt="Rodrigo Neri"
                width={136}
                height={118}
              />
              <span className="absolute -left-2 -top-2 h-3 w-3 border-l-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -right-2 -top-2 h-3 w-3 border-r-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -left-2 -bottom-2 h-3 w-3 border-l-2 border-b-2 border-yellow-400"></span>
              <span className="absolute -right-2 -bottom-2 h-3 w-3 border-r-2 border-b-2 border-yellow-400"></span>
            </div>
            <h3 className="text-xl font-bold mb-1 flex items-center">
              RODRIGO NERI <span className="ml-2 text-gray-500 text-xs">○</span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              CENTRO DE KRAV MAGA SUDOESTE
            </p>
            <p className="text-xs text-gray-300 leading-relaxed">
              PROFISSIONAL COMPETENTE, COM PREÇO JUSTO E, NA MINHA OPINIÃO, O
              MAIS IMPORTANTE: CUMPRE TODOS OS PRAZOS COMBINADOS. ALÉM DE
              CONCLUIRMOS O TRABALHO, A VISIBILIDADE DA MINHA EMPRESA ALCANÇOU
              PATAMARES JAMAIS IMAGINADOS. RECOMENDO DE OLHOS FECHADOS O
              TRABALHO DO LUCAS!
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="p-6">
            <div className="relative inline-block mb-4">
              <Image
                unoptimized
                className="object-cover w-24 h-24 bg-gray-800 flex items-center justify-center"
                src="/mateus-ticchetti.png"
                alt="Rodrigo Neri"
                width={136}
                height={118}
              />
              <span className="absolute -left-2 -top-2 h-3 w-3 border-l-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -right-2 -top-2 h-3 w-3 border-r-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -left-2 -bottom-2 h-3 w-3 border-l-2 border-b-2 border-yellow-400"></span>
              <span className="absolute -right-2 -bottom-2 h-3 w-3 border-r-2 border-b-2 border-yellow-400"></span>
            </div>
            <h3 className="text-xl font-bold mb-1 flex items-center">
              MATEUS TICCHETTI{" "}
              <span className="ml-2 text-gray-500 text-xs">○</span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">NUTRICIONISTA</p>
            <p className="text-xs text-gray-300 leading-relaxed">
              JÁ REALIZEI O TRABALHO COM A MESI FILMS HÁ UM BOM TEMPO E, ATÉ
              HOJE, SIGO ME SURPREENDENDO COM A ENTREGA DO TRABALHO. O
              PROFISSIONALISMO E A QUALIDADE DE ENTREGA DOS TRABALHOS É SURREAL.
              SEMPRE TIVEMOS RESULTADOS POSITIVOS EM NOSSOS PROJETOS. E TER A
              MESI FILMS COMIGO NESSA JORNADA FOI FUNDAMENTAL PARA O MEU
              CRESCIMENTO. RECOMENDO DE OLHOS FECHADOS!
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="p-6">
            <div className="relative inline-block mb-4">
              <Image
                unoptimized
                className="object-cover w-24 h-24 bg-gray-800 flex items-center justify-center"
                src="/duuck.png"
                alt="Rodrigo Neri"
                width={136}
                height={118}
              />
              <span className="absolute -left-2 -top-2 h-3 w-3 border-l-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -right-2 -top-2 h-3 w-3 border-r-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -left-2 -bottom-2 h-3 w-3 border-l-2 border-b-2 border-yellow-400"></span>
              <span className="absolute -right-2 -bottom-2 h-3 w-3 border-r-2 border-b-2 border-yellow-400"></span>
            </div>
            <h3 className="text-xl font-bold mb-1 flex items-center">
              DUUCK IMPORTS{" "}
              <span className="ml-2 text-gray-500 text-xs">○</span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">PRODUTOS APPLE</p>
            <p className="text-xs text-gray-300 leading-relaxed">
              JÁ FAZ 6 MESES QUE ESTAMOS TRABALHANDO COM O LUCAS E OS RESULTADOS
              ESTÃO MUITO BOM! ELE É UM EXCELENTE PROFISSIONAL E, GRAÇAS À AJUDA
              DELE, OS VÍDEOS DA DUUCK ESTÃO CADA VEZ MELHORES. INCLUSIVE, ESSE
              É UM RECONHECIMENTO QUE TEMOS DA GALERA DE FORA. TODOS OS DIAS
              RECEBEMOS ELOGIOS SOBRE A QUALIDADE DOS VÍDEOS. O LUCAS É UM
              PARCEIRO FUNDAMENTAL PRA GENTE!
            </p>
          </div>

          {/* Testimonial 4 */}
          <div className="p-6">
            <div className="relative inline-block mb-4">
              <Image
                unoptimized
                className="object-cover w-24 h-24 bg-gray-800 flex items-center justify-center"
                src="/rafael-ferreira.png"
                alt="Rodrigo Neri"
                width={136}
                height={118}
              />
              <span className="absolute -left-2 -top-2 h-3 w-3 border-l-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -right-2 -top-2 h-3 w-3 border-r-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -left-2 -bottom-2 h-3 w-3 border-l-2 border-b-2 border-yellow-400"></span>
              <span className="absolute -right-2 -bottom-2 h-3 w-3 border-r-2 border-b-2 border-yellow-400"></span>
            </div>
            <h3 className="text-xl font-bold mb-1 flex items-center">
              RAFAEL FERREIRA{" "}
              <span className="ml-2 text-gray-500 text-xs">○</span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">PERSONAL UNIQUE</p>
            <p className="text-xs text-gray-300 leading-relaxed">
              O TRABALHO DESENVOLVIDO PELO LUCAS PARA MINHA ASSESSORIA ME
              COLOCOU EM OUTRO PATAMAR NA APRESENTAÇÃO DO SERVIÇO E FECHAMENTO
              DOS CONTRATOS. PROFISSIONAL EXTREMAMENTE COMPROMETIDO E CAPRICHOSO
              COM A ENTREGA E DETALHES. RECOMENDO SEM PESTANEJAR!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="container mx-auto px-4 py-8 flex justify-center">
        <Link target="_blank" href="https://api.whatsapp.com/send?phone=5561981923272&text=Olá, venho através do site Mesi Films e gostaria de solicitar um orçamento." className=" bg-yellow-400 text-black font-sora-bold cursor-pointer py-2 px-4 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition-colors">

          SOLICITE SEU ORÇAMENTO
          <Image
            src="/PLAY PRETO.png"
            alt="Play Icon"
            width={40}
            height={30}
            className="object-contain ml-1"
          />
        </Link>
      </section>

      {/* Clients Section */}
      <section className="bg-gray-100 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl md:text-4xl font-medium mb-16 text-black relative">
            <span className="relative  px-2 sm:px-5 inline-block font-mos-light max-w-xs sm:max-w-md md:max-w-lg mx-auto whitespace-normal break-words">
              QUEM JÁ ATENDEMOS
              <span className="absolute -left-6 -top-2 h-3 w-3 border-l-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -right-6 -top-2 h-3 w-3 border-r-2 border-t-2 border-yellow-400"></span>
              <span className="absolute -left-6 -bottom-2 h-3 w-3 border-l-2 border-b-2 border-yellow-400"></span>
              <span className="absolute -right-6 -bottom-2 h-3 w-3 border-r-2 border-b-2 border-yellow-400"></span>
            </span>
          </h2>

          <div className="flex flex-wrap justify-between max-w-4xl mx-auto md:mb-6 mb-2">
            <div className="w-1/2 sm:w-1/3 md:w-[200px] items-center flex justify-center">
              <Image
                unoptimized
                className="object-contain md:w-full w-1/2 h-auto md:scale-100 scale-[1.5] mb-4"
                src="/logo-Petrobras.png"
                alt="Rodrigo Neri"
                width={200}
                height={40}
              />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-[200px] items-center flex justify-center">
              <Image
                unoptimized
                className="object-contain md:w-full w-1/2 h-auto md:scale-100 scale-[1.3] mb-4"
                src="/logo-BYD.png"
                alt="Rodrigo Neri"
                width={200}
                height={40}
              />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-[200px] items-center flex justify-center">
              <Image
                unoptimized
                className="object-contain md:w-full w-1/2 h-auto md:scale-100 scale-[1.3]"
                src="/logo-CASACOR.png"
                alt="Rodrigo Neri"
                width={200}
                height={40}
              />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-[200px] items-center md:hidden flex justify-center">
              <Image
                unoptimized
                className="object-contain md:w-full w-1/2 h-auto md:scale-100 scale-[1.3]"
                src="/logo-BIG-BOX.png"
                alt="Rodrigo Neri"
                width={200}
                height={40}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-between max-w-4xl mx-auto md:mb-6 mb-4">
            <div className="w-1/2 sm:w-1/3 md:w-[200px] items-center  md:flex hidden justify-center">
              <Image
                unoptimized
                className="object-contain md:w-full w-1/2 h-auto md:scale-100 scale-[1.3]"
                src="/logo-BIG-BOX.png"
                alt="Rodrigo Neri"
                width={200}
                height={40}
              />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-[200px] items-center flex justify-center">
              <Image
                unoptimized
                className="object-contain md:w-full w-1/2 h-auto"
                src="/logo-UNQ.png"
                alt="Rodrigo Neri"
                width={120}
                height={40}
              />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-[200px] items-center flex justify-center">
              <Image
                unoptimized
                className="object-contain md:w-full w-1/2 h-auto md:scale-100 scale-[0.8]"
                src="/logo-band.png"
                alt="Rodrigo Neri"
                width={100}
                height={40}
              />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-[200px] items-center md:hidden flex justify-center">
              <Image
                unoptimized
                className="object-contain md:w-full w-1/2 h-auto"
                src="/logo-MSC-Cruzeiros.png"
                alt="Rodrigo Neri"
                width={200}
                height={40}
              />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-[200px] items-center md:hidden flex justify-center ">
              <Image
                unoptimized
                className="object-contain md:w-full w-1/2 h-auto scale-[1.3]"
                src="/logo-FINT.png"
                alt="Rodrigo Neri"
                width={200}
                height={40}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-between max-w-4xl mx-auto">
            <div className="w-1/2 sm:w-1/3 md:w-[200px] items-center justify-center  md:flex hidden">
              <Image
                unoptimized
                className="object-contain md:w-full w-1/2 h-auto"
                src="/logo-MSC-Cruzeiros.png"
                alt="Rodrigo Neri"
                width={200}
                height={40}
              />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-[200px] items-center flex justify-center ">
              <Image
                unoptimized
                className="object-contain md:w-full w-1/2 h-auto"
                src="/logo-cobra.png"
                alt="Rodrigo Neri"
                width={120}
                height={40}
              />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-[200px] items-center md:flex hidden justify-center ">
              <Image
                unoptimized
                className="object-contain md:w-full w-1/2 h-auto"
                src="/logo-FINT.png"
                alt="Rodrigo Neri"
                width={200}
                height={40}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 relative font-mos-light">
        <div className="container mx-auto px-4 text-center flex flex-col">
          <h2 className="text-2xl md:text-4xl font-bold mb-16">
            VAMOS FALAR SOBRE
            <br />O SEU PROJETO?
          </h2>

          <Link target="_blank" href="https://api.whatsapp.com/send?phone=5561981923272&text=Olá, venho através do site Mesi Films e gostaria de solicitar um orçamento." className=" bg-yellow-400 text-black font-sora-bold cursor-pointer py-2 px-4 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition-colors self-center">
            FALE COM A GENTE
            <Image
              src="/PLAY PRETO.png"
              alt="Play Icon"
              width={40}
              height={30}
              className="object-contain ml-1"
            />
          </Link>
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
              <a target="_blank" href="https://www.instagram.com/mesifilmss" className="text-white hover:text-yellow-400">
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
            <p>
              ENDEREÇO: RUA SEM NOME, 000 - CIDADE/ESTADO | CNPJ:
              00.000.000/0001-00 | TODOS OS DIREITOS RESERVADOS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
