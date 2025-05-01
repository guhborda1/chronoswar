import React from "react";
import { WarEvent } from "../data/warEvents";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
import Link from "next/link";
import Image from "next/image";

interface EventDetailsProps {
  event: WarEvent;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  const currentIndex = warEvents.findIndex((e) => e.id === event.id);
  const previousEvent = currentIndex > 0 ? warEvents[currentIndex - 1] : null;
  const nextEvent =
    currentIndex < warEvents.length - 1 ? warEvents[currentIndex + 1] : null;

  return (
    <div>
      <div className="relative flex flex-col justify-center mx-auto my-8 px-4 gap-2">
        {event.image && (
          <Card className="absolute overflow-hidden w-[100%] md:w-[80%] h-[500px] top-0 p-0 left-[50%] -translate-x-[50%]">
            <Image
              src={`${event.image}`}
              alt="Background"
              className="object-cover object-center w-full h-full"
              priority
              width={1920}
              height={1080}
            />
          </Card>
        )}

        <Card
          className={`mx-auto overflow-hidden max-w-6xl flex ${
            event.image && "mt-100"
          } shadow-lg p-0 w-full z-10`}
        >
          <CardHeader className="bg-gradient-to-r from-blue-900 to-amber-500 text-white p-5 flex-col h-full items-center">
            <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center">
              <div className="flex  flex-col flex-wrap md:w-1/2">
                <CardTitle className="text-3xl font-bold ">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-xl text-gray-200">
                  {event.year}
                </CardDescription>
              </div>
              <div className="flex items-center md:justify-end gap-4 md:w-1/2">
                {previousEvent && (
                  <Button
                    variant="outline"
                    className="bg-white text-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer"
                    asChild
                  >
                    <Link prefetch={false} href={`/event/${previousEvent.id}`}>
                      ← Anterior
                    </Link>
                  </Button>
                )}
                <div className="bg-blue-900 text-white px-6 py-3 rounded-md text-xl font-bold shadow-md">
                  {event.year}
                </div>
                {nextEvent && (
                  <Button
                    variant="outline"
                    className="bg-white text-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer"
                    asChild
                  >
                    <Link prefetch={false} href={`/event/${nextEvent.id}`}>
                      Próximo →
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-5 space-y-8">
            {/* Navigation between events */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {previousEvent && (
                <div className="bg-timeline-cream p-5 rounded-lg border border-timeline-gold shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3 flex items-center text-blue-900">
                    <Flag className="mr-2 h-5 w-5" />
                    Evento Anterior: {previousEvent.year}
                  </h3>
                  <p className="font-medium text-timeline-burgundy mb-2">
                    {previousEvent.title}
                  </p>
                  <p className="text-gray-700">
                    {previousEvent.description?.substring(0, 120) ?? ""}...
                  </p>
                </div>
              )}

              {nextEvent && (
                <div className="bg-timeline-cream p-5 rounded-lg border border-timeline-gold shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3 flex items-center text-blue-900">
                    <Flag className="mr-2 h-5 w-5" />
                    Evento Posterior: {nextEvent.year}
                  </h3>
                  <p className="font-medium text-timeline-burgundy mb-2">
                    {nextEvent.title}
                  </p>
                  <p className="text-gray-700">
                    {nextEvent.description?.substring(0, 120)}...
                  </p>
                </div>
              )}
            </div>

            {/* Description */}
            <section>
              <h3 className="text-2xl font-bold mb-4 text-blue-900 border-b pb-2">
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
              <h3 className="text-2xl font-bold mb-4 text-blue-900 border-b pb-2 flex items-center">
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
                <h3 className="text-2xl font-bold mb-4 text-blue-900 border-b pb-2 flex items-center">
                  <Megaphone className="mr-2 h-6 w-6" />
                  Propaganda e Narrativas
                </h3>
                <div className="space-y-6">
                  {event.propaganda.sides.map((side, index) => (
                    <div
                      key={index}
                      className="bg-timeline-cream p-5 rounded-lg border border-timeline-gold"
                    >
                      <h4 className="text-xl font-semibold mb-3 text-amber-700">
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
                    <h4 className="font-semibold mb-2 text-blue-900">
                      Análise da Propaganda:
                    </h4>
                    <p className="text-gray-800">{event.propaganda.analysis}</p>
                  </div>
                </div>
              </section>
            )}

            {/* Theories */}
            <section>
              <h3 className="text-2xl font-bold mb-4 text-blue-900 border-b pb-2 flex items-center">
                <Sword className="mr-2 h-6 w-6" />
                Teorias e Conspirações
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {event.theories?.map((theory, index) => (
                  <div
                    key={index}
                    className="bg-amber-100 h-fit mansonry p-5 rounded-lg border border-amber-300 hover:shadow-md transition-shadow"
                  >
                    <h4 className="text-lg font-semibold mb-2 text-amber-700">
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
            <section>
              <h3 className="text-2xl font-bold mb-4 text-blue-900 border-b pb-2 flex items-center">
                <Cross className="mr-2 h-6 w-6" />
                Conflitos e Relacionamentos
              </h3>
              {event.masons && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.masons.map((masons, index) => (
                    <div
                      key={index}
                      className=" bg-white p-5 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-lg font-semibold text-blue-900 mb-3">
                        {masons.name}
                      </h3>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p>
                          <span className="font-medium">Afiliação:</span>{" "}
                          {masons.affiliation}
                        </p>
                        <p>
                          <span className="font-medium">Religião:</span>{" "}
                          {masons.religion}
                        </p>
                        <p>
                          <span className="font-medium">Posição:</span>{" "}
                          {masons.position}
                        </p>
                        <p>
                          <span className="font-medium">País:</span>{" "}
                          {masons.country}
                        </p>
                        <p>
                          <span className="font-medium">Período Ativo:</span>{" "}
                          {masons.activeYears.fromYear} -{" "}
                          {masons.activeYears.toYear}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Related News */}
            {event.relatedNews && event.relatedNews.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold mb-4 text-blue-900 border-b pb-2 flex items-center">
                  <Newspaper className="mr-2 h-6 w-6" />
                  Notícias Relacionadas
                </h3>
                <div className="space-y-4">
                  {event.relatedNews.map((news, index) => (
                    <div
                      key={index}
                      className="bg-white p-5 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-semibold text-amber-700 mb-1">
                        {news.title}
                      </h4>
                      <p className="text-gray-700 mb-2">{news.description}</p>
                      {news.evidence && (
                        <p className="p-3 border rounded-sm border-amber-300 bg-amber-100">
                          <span className="font-bold">Evidencia:</span> {news.evidence}
                        </p>
                      )}
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
                <h3 className="text-2xl font-bold mb-4 text-blue-900 border-b pb-2 flex items-center">
                  <Coins className="mr-2 h-6 w-6" />
                  Suporte Financeiro e Bancário
                </h3>

                <div className="space-y-6">
                  <div className="overflow-x-auto">
                    <Table className="min-w-full">
                      <TableHeader className="bg-blue-900 text-white">
                        <TableRow>
                          <TableHead className="text-white">
                            Banco/Instituição
                          </TableHead>
                          <TableHead className="text-white">País</TableHead>
                          <TableHead className="text-white">Ativos</TableHead>
                          <TableHead className="text-white">
                            Proprietários
                          </TableHead>
                          <TableHead className="text-white">
                            Afiliações
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {event.financialInfo?.banks?.map((bank, bankIndex) => (
                          <React.Fragment key={bankIndex}>
                            {bank.owners?.map((owner, ownerIndex) => (
                              <TableRow key={`${bankIndex}-${ownerIndex}`}>
                                {ownerIndex === 0 && (
                                  <>
                                    <TableCell
                                      rowSpan={bank.owners?.length}
                                      className="font-medium"
                                    >
                                      {bank.name}
                                    </TableCell>
                                    <TableCell rowSpan={bank.owners?.length}>
                                      {bank.country}
                                    </TableCell>
                                    <TableCell rowSpan={bank.owners?.length}>
                                      {bank.assets || "N/A"}
                                    </TableCell>
                                  </>
                                )}
                                <TableCell>{owner.name}</TableCell>
                                <TableCell>
                                  <div>
                                    {owner.president && (
                                      <span>
                                        Presidente: {owner.president.name}
                                        <br />
                                        Religião: {owner.president.religion}
                                      </span>
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
                    <div className="bg-amber-100 p-5 rounded-lg border border-amber-300 min-h-32 h-fit max-h-[100%]">
                      <h4 className="font-semibold text-lg mb-3 text-amber-700">
                        Principais Financiadores:
                      </h4>
                      <ul className="space-y-3">
                        {event.financialInfo.financiers?.map(
                          (financier, index) => (
                            <li key={index} className="flex items-start">
                              <Coins className="mt-1 mr-3 h-5 w-5 text-amber-700 flex-shrink-0" />
                              <div>
                                <span className="font-medium">
                                  {financier.name}
                                </span>
                                <div className="text-sm text-gray-600">
                                  Tipo: {financier.type} • Regilião:{" "}
                                  {financier.religion}
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
                      <h4 className="font-semibold text-lg mb-3 text-blue-900">
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
                <h3 className="text-2xl font-bold mb-4 text-blue-900 border-b pb-2 flex items-center">
                  <Cross className="mr-2 h-6 w-6" />
                  Baixas e Consequências Humanas
                </h3>
                <div className="bg-amber-100 p-5 rounded-lg border border-amber-700">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {event.casualties.military && (
                      <div className="text-center">
                        <div className="text-xl font-bold text-amber-700">
                          {event.casualties.military}
                        </div>
                        <div className="text-sm uppercase tracking-wider">
                          Baixas Militares
                        </div>
                      </div>
                    )}
                    {event.casualties.civilian && (
                      <div className="text-center">
                        <div className="text-xl font-bold text-amber-700">
                          {event.casualties.civilian}
                        </div>
                        <div className="text-sm uppercase tracking-wider">
                          Vítimas Civis
                        </div>
                      </div>
                    )}
                    {event.casualties.total && (
                      <div className="text-center">
                        <div className="text-xl font-bold text-amber-700">
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
                <h3 className="text-2xl font-bold mb-4 text-blue-900 border-b pb-2 flex items-center">
                  <Users className="mr-2 h-6 w-6" />
                  Figuras-Chave
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {event.keyFigures.map((figure, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-semibold text-lg text-rose-800 mb-1">
                        {figure.name}
                      </h4>
                      <div className="text-sm text-gray-600 mb-2">
                        {figure.role}
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="bg-amber-100 px-2 py-1 rounded">
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
    </div>
  );
};

export default EventDetails;
