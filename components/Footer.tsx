
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-timeline-navy text-white p-6 mt-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-300">
              © 2025 CronoGuerra - Uma linha do tempo histórica sobre guerras e conflitos
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-timeline-gold transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-300 hover:text-timeline-gold transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-300 hover:text-timeline-gold transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
