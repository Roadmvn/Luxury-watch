import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-fade-in">
      <h1 className="text-4xl font-serif font-bold text-center mb-8">Contactez-nous</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-lg mb-6 text-center">
          Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à nous contacter !
        </p>
        <div className="space-y-4 mb-8">
          <div className="flex items-center">
            <Mail className="h-6 w-6 text-primary mr-2" />
            <span>info@elegancehorlogere.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-6 w-6 text-primary mr-2" />
            <span>+33 1 23 45 67 89</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-6 w-6 text-primary mr-2" />
            <span>123 Rue de l'Horloge, 75001 Paris, France</span>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">Nom</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-semibold">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
          </div>
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;