import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="bg-timeline-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CronoGuerra</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Uma linha do tempo interativa sobre conflitos e guerras do período
              pré-napoleônico até 2025, com fatos históricos, representações
              midiáticas e teorias.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="my-8 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Explore a História dos Conflitos
            </h2>
            <p className="text-gray-700">
              Navegue pela linha do tempo abaixo para descobrir os eventos que
              moldaram o mundo. Clique nos eventos para explorar detalhes,
              análises de mídia e teorias associadas.
            </p>
          </div>

          <Timeline />

          <div className="my-16 max-w-4xl mx-auto bg-timeline-cream p-8 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 text-timeline-navy">
              Interpretação Histórica e Mídia
            </h2>
            <p className="text-gray-800 mb-4">
              A forma como os conflitos são retratados na mídia e interpretados
              por historiadores muitas vezes difere significativamente dos
              eventos reais. Este projeto busca explorar essas diferenças e
              oferecer uma visão mais completa e nuançada da história militar.
            </p>
            <p className="text-gray-800">
              Ao examinar não apenas os fatos, mas também as narrativas e
              teorias que surgiram em torno de cada conflito, podemos entender
              melhor como eventos históricos continuam a moldar nosso presente e
              futuro.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
