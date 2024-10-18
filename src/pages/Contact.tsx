import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Contactez-nous</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="mb-6 text-center">
          Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à nous contacter !
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <Mail className="h-6 w-6 text-blue-600 mr-2" />
            <span>info@elegancehorlogere.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-6 w-6 text-blue-600 mr-2" />
            <span>+33 1 23 45 67 89</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-6 w-6 text-blue-600 mr-2" />
            <span>123 Rue de l'Horloge, 75001 Paris, France</span>
          </div>
        </div>
        <form className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Nom</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded-md" required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;