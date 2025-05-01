import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto my-8 px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="bg-timeline-navy text-white">
              <CardTitle className="text-3xl">Sobre o CronoGuerra</CardTitle>
            </CardHeader>

            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
              <p className="text-gray-700 mb-6">
                O CronoGuerra é uma plataforma educativa que apresenta uma linha
                do tempo interativa sobre conflitos armados desde o período
                pré-napoleônico até os dias atuais. Nosso objetivo é fornecer
                uma visão balanceada e informativa sobre os eventos históricos,
                incluindo como foram retratados pela mídia e as diversas teorias
                associadas a cada conflito.
              </p>

              <Separator className="my-6" />

              <h2 className="text-2xl font-bold mb-4">Nossa Abordagem</h2>
              <p className="text-gray-700 mb-6">
                Buscamos apresentar os fatos históricos junto com análises
                críticas sobre como esses eventos foram interpretados ao longo
                do tempo. Reconhecemos que a história é frequentemente contada
                pelos vencedores e que diferentes perspectivas existem para cada
                conflito.
              </p>
              <p className="text-gray-700 mb-6">
                Para cada evento, fornecemos:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Descrição fatual do conflito</li>
                <li>
                  Análise de como o evento foi retratado na mídia da época e
                  posteriormente
                </li>
                <li>
                  Principais teorias e interpretações associadas ao evento
                </li>
                <li>Quando relevante, notícias contemporâneas relacionadas</li>
              </ul>

              <Separator className="my-6" />

              <h2 className="text-2xl font-bold mb-4">Fontes e Metodologia</h2>
              <p className="text-gray-700 mb-6">
                Nossa equipe de historiadores e pesquisadores baseia as
                informações em fontes acadêmicas respeitáveis, documentos
                históricos, registros jornalísticos e análises contemporâneas.
                Buscamos apresentar múltiplas perspectivas, incluindo visões
                controversas, desde que tenham alguma base histórica ou
                analítica significativa.
              </p>
              <p className="text-gray-700 mb-6">
                Atualizamos continuamente nosso conteúdo para refletir novas
                descobertas históricas e interpretações acadêmicas. Convidamos
                os usuários a contribuir com perspectivas adicionais ou
                correções através do nosso formulário de contato.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
