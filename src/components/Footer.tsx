import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Sprout } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sprout className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">KWT Rukun Kunden</span>
            </div>
            <p className="text-gray-300 mb-4">
              Hasil bumi dan tangan wanita tani, untuk Indonesia yang lebih sehat dan berkelanjutan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/kwt_rukun_kunden" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu Cepat</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-green-400 transition-colors">Beranda</a></li>
              <li><a href="/catalog" className="text-gray-300 hover:text-green-400 transition-colors">Katalog Produk</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-green-400 transition-colors">Tentang Kami</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+62 821-3821-8056</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">kwtrukunkundeng@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">67JP+RJ3, Kunden, Sidoluhur, Kec. Godean, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55264</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 KWT Rukun Kunden. Semua hak dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;