import React from "react";
import { WarEvent } from "../data/warEvents";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { warEvents } from "../data/warEvents";
import {
  Sword,
  Coins,
  Flag,
  Newspaper,
  Megaphone,
  Cross,
  Users,
} from "lucide-react";

interface EventDetailsProps {
  event: WarEvent;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  const currentIndex = warEvents.findIndex((e) => e.id === event.id);
  const previousEvent = currentIndex > 0 ? warEvents[currentIndex - 1] : null;
  const nextEvent =
    currentIndex < warEvents.length - 1 ? warEvents[currentIndex + 1] : null;

  return (
    <div className="max-w-6xl mx-auto my-8 px-4">
      <Card className="overflow-hidden shadow-lg">
        <CardHeader className="bg-gradient-to-r from-timeline-navy to-timeline-burgundy text-white p-8">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-4xl font-bold mb-3">
                {event.title}
              </CardTitle>
              <CardDescription className="text-2xl text-gray-200">
                {event.year}
              </CardDescription>
            </div>
            <div className="flex items-center gap-4">
              {previousEvent && (
                <Link to={`/evento/${previousEvent.id}`}>
                  <Button variant="outline" className="bg-white text-timeline-navy hover:bg-timeline-gold">
                    ← Anterior
                  </Button>
                </Link>
              )}
              <div className="bg-timeline-gold text-timeline-navy px-6 py-3 rounded-md text-xl font-bold shadow-md">
                {event.year}
              </div>
              {nextEvent && (
                <Link to={`/evento/${nextEvent.id}`}>
                  <Button variant="outline" className="bg-white text-timeline-navy hover:bg-timeline-gold">
                    Próximo →
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-8 space-y-8">
          {/* Navigation between events */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previousEvent && (
              <div className="bg-timeline-cream p-5 rounded-lg border border-timeline-gold shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-3 flex items-center text-timeline-navy">
                  <Flag className="mr-2 h-5 w-5" />
                  Evento Anterior: {previousEvent.year}
                </h3>
                <p className="font-medium text-timeline-burgundy mb-2">
                  {previousEvent.title}
                </p>
                <p className="text-gray-700">
                  {previousEvent.description.substring(0, 120)}...
                </p>
              </div>
            )}

            {nextEvent && (
              <div className="bg-timeline-cream p-5 rounded-lg border border-timeline-gold shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-3 flex items-center text-timeline-navy">
                  <Flag className="mr-2 h-5 w-5" />
                  Evento Posterior: {nextEvent.year}
                </h3>
                <p className="font-medium text-timeline-burgundy mb-2">
                  {nextEvent.title}
                </p>
                <p className="text-gray-700">
                  {nextEvent.description.substring(0, 120)}...
                </p>
              </div>
            )}
          </div>

          {/* Description */}
          <section>
            <h3 className="text-2xl font-bold mb-4 text-timeline-navy border-b pb-2">
              Descrição Histórica
            </h3>
            <div className="bg-white p-5 rounded-lg shadow-inner border">
              <p className="text-gray-800 leading-relaxed">
                {event.description}
              </p>
            </div>
          </section>

          {/* Media Portrayal */}
          <section>
            <h3 className="text-2xl font-bold mb-4 text-timeline-navy border-b pb-2 flex items-center">
              <Newspaper className="mr-2 h-6 w-6" />
              Representação na Mídia
            </h3>
            <div className="bg-white p-5 rounded-lg shadow-inner border">
              <p className="text-gray-800 leading-relaxed">
                {event.mediaPortrayal}
              </p>
            </div>
          </section>

          {/* Propaganda */}
          {event.propaganda && (
            <section>
              <h3 className="text-2xl font-bold mb-4 text-timeline-navy border-b pb-2 flex items-center">
                <Megaphone className="mr-2 h-6 w-6" />
                Propaganda e Narrativas
              </h3>
              <div className="space-y-6">
                {event.propaganda.sides.map((side, index) => (
                  <div
                    key={index}
                    className="bg-timeline-cream p-5 rounded-lg border border-timeline-gold"
                  >
                    <h4 className="text-xl font-semibold mb-3 text-timeline-burgundy">
                      {side.name}
                    </h4>

                    <div className="mb-4">
                      <h5 className="font-medium mb-2">Slogans:</h5>
                      <div className="flex flex-wrap gap-2">
                        {side.slogans.map((slogan, i) => (
                          <span
                            key={i}
                            className="bg-white px-3 py-1 rounded-full text-sm shadow-sm"
                          >
                            {slogan}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-medium mb-2">Veículos de Mídia:</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        {side.mediaOutlets.map((outlet, i) => (
                          <li key={i}>{outlet}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2">
                        Técnicas de Propaganda:
                      </h5>
                      <ul className="list-disc pl-5 space-y-1">
                        {side.techniques.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}

                <div className="bg-white p-5 rounded-lg border shadow-inner">
                  <h4 className="font-semibold mb-2 text-timeline-navy">
                    Análise da Propaganda:
                  </h4>
                  <p className="text-gray-800">{event.propaganda.analysis}</p>
                </div>
              </div>
            </section>
          )}

          {/* Theories */}
          <section>
            <h3 className="text-2xl font-bold mb-4 text-timeline-navy border-b pb-2 flex items-center">
              <Sword className="mr-2 h-6 w-6" />
              Teorias e Conspirações
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {event.theories.map((theory, index) => (
                <div
                  key={index}
                  className="bg-timeline-cream p-5 rounded-lg border border-timeline-gold hover:shadow-md transition-shadow"
                >
                  <h4 className="text-lg font-semibold mb-2 text-timeline-burgundy">
                    {theory.title}
                  </h4>
                  <p className="text-gray-700 mb-3">{theory.description}</p>
                  {theory.evidence && (
                    <div className="bg-white p-3 rounded border text-sm">
                      <span className="font-medium">Evidência:</span>{" "}
                      {theory.evidence}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Related News */}
          {event.relatedNews && event.relatedNews.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold mb-4 text-timeline-navy border-b pb-2 flex items-center">
                <Newspaper className="mr-2 h-6 w-6" />
                Notícias Relacionadas
              </h3>
              <div className="space-y-4">
                {event.relatedNews.map((news, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-semibold text-timeline-burgundy mb-1">
                      {news.title}
                    </h4>
                    <p className="text-gray-700 mb-2">{news.description}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Fonte: {news.source}</span>
                      {news.date && <span>Data: {news.date}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Financial Info */}
          {event.financialInfo && (
            <section>
              <h3 className="text-2xl font-bold mb-4 text-timeline-navy border-b pb-2 flex items-center">
                <Coins className="mr-2 h-6 w-6" />
                Suporte Financeiro e Bancário
              </h3>

              <div className="space-y-6">
                <div className="overflow-x-auto">
                  <Table className="min-w-full">
                    <TableHeader className="bg-timeline-navy text-white">
                      <TableRow>
                        <TableHead className="text-white">
                          Banco/Instituição
                        </TableHead>
                        <TableHead className="text-white">País</TableHead>
                        <TableHead className="text-white">Ativos</TableHead>
                        <TableHead className="text-white">
                          Proprietários
                        </TableHead>
                        <TableHead className="text-white">Afiliações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {event.financialInfo.banks.map((bank, bankIndex) => (
                        <React.Fragment key={bankIndex}>
                          {bank.owners.map((owner, ownerIndex) => (
                            <TableRow key={`${bankIndex}-${ownerIndex}`}>
                              {ownerIndex === 0 && (
                                <>
                                  <TableCell
                                    rowSpan={bank.owners.length}
                                    className="font-medium"
                                  >
                                    {bank.name}
                                  </TableCell>
                                  <TableCell rowSpan={bank.owners.length}>
                                    {bank.country}
                                  </TableCell>
                                  <TableCell rowSpan={bank.owners.length}>
                                    {bank.assets || "N/A"}
                                  </TableCell>
                                </>
                              )}
                              <TableCell>{owner.name}</TableCell>
                              <TableCell>
                                <div>
                                  {owner.religion && (
                                    <span>Religião: {owner.religion}</span>
                                  )}
                                  {owner.politicalAffiliation && (
                                    <span className="block">
                                      Política: {owner.politicalAffiliation}
                                    </span>
                                  )}
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </React.Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-timeline-cream p-5 rounded-lg border border-timeline-gold min-h-32 h-fit max-h-[100%]">
                    <h4 className="font-semibold text-lg mb-3 text-timeline-burgundy">
                      Principais Financiadores:
                    </h4>
                    <ul className="space-y-3">
                      {event.financialInfo.financiers.map(
                        (financier, index) => (
                          <li key={index} className="flex items-start">
                            <Coins className="mt-1 mr-3 h-5 w-5 text-timeline-burgundy flex-shrink-0" />
                            <div>
                              <span className="font-medium">
                                {financier.name}
                              </span>
                              <div className="text-sm text-gray-600">
                                Tipo: {financier.type} •
                                {financier.amount &&
                                  ` Montante: ${financier.amount} ${
                                    financier.currency || ""
                                  }`}
                              </div>
                            </div>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="bg-white p-5 rounded-lg border shadow-inner">
                    <h4 className="font-semibold text-lg mb-3 text-timeline-navy">
                      Impacto Financeiro:
                    </h4>
                    <p className="text-gray-800">
                      {event.financialInfo.financialImpact}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Casualties */}
          {event.casualties && (
            <section>
              <h3 className="text-2xl font-bold mb-4 text-timeline-navy border-b pb-2 flex items-center">
                <Cross className="mr-2 h-6 w-6" />
                Baixas e Consequências Humanas
              </h3>
              <div className="bg-timeline-cream p-5 rounded-lg border border-timeline-gold">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {event.casualties.military && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-timeline-burgundy">
                        {event.casualties.military}
                      </div>
                      <div className="text-sm uppercase tracking-wider">
                        Baixas Militares
                      </div>
                    </div>
                  )}
                  {event.casualties.civilian && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-timeline-burgundy">
                        {event.casualties.civilian}
                      </div>
                      <div className="text-sm uppercase tracking-wider">
                        Vítimas Civis
                      </div>
                    </div>
                  )}
                  {event.casualties.total && (
                    <div className="text-center">
                      <div className="text-3xl font-bold text-timeline-burgundy">
                        {event.casualties.total}
                      </div>
                      <div className="text-sm uppercase tracking-wider">
                        Total Estimado
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Key Figures */}
          {event.keyFigures && event.keyFigures.length > 0 && (
            <section>
              <h3 className="text-2xl font-bold mb-4 text-timeline-navy border-b pb-2 flex items-center">
                <Users className="mr-2 h-6 w-6" />
                Figuras-Chave
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {event.keyFigures.map((figure, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-semibold text-lg text-timeline-burgundy mb-1">
                      {figure.name}
                    </h4>
                    <div className="text-sm text-gray-600 mb-2">
                      {figure.role}
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="bg-timeline-cream px-2 py-1 rounded">
                        Lado: {figure.side}
                      </span>
                      {figure.fate && (
                        <span className="text-gray-500">
                          Destino: {figure.fate}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EventDetails;
