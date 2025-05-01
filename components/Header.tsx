import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-950 text-white  p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="text-timeline-gold">Crono</span>
          <span>Guerra</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="hover:text-timeline-gold transition-colors"
              >
                Linha do Tempo
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="hover:text-timeline-gold transition-colors"
              >
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
