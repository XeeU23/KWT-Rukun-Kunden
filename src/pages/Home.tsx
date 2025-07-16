import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Users, Award } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-green-600 to-green-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/80 to-green-600/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hasil Bumi dan Tangan Wanita Tani
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Untuk Indonesia yang lebih sehat dan berkelanjutan
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/catalog"
                className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
              >
                Lihat Produk Kami
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-800 transition-colors duration-200"
              >
                Tentang Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Produk KWT Rukun Kunden?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan yang terbaik dari hasil bumi dan kreativitas wanita tani
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Organik</h3>
              <p className="text-gray-600">
                Semua produk kami dibuat dari bahan-bahan organik tanpa pestisida dan bahan kimia berbahaya
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Buatan Tangan</h3>
              <p className="text-gray-600">
                Setiap produk dibuat dengan penuh cinta dan keahlian oleh ibu-ibu KWT yang berpengalaman
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kualitas Terjamin</h3>
              <p className="text-gray-600">
                Proses produksi mengikuti standar kebersihan dan kualitas untuk memastikan produk terbaik
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Siap Merasakan Kelezatan Produk Kami?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Jelajahi katalog produk kami dan pesan langsung melalui WhatsApp untuk pengalaman berbelanja yang mudah
          </p>
          <Link 
            to="/catalog"
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            Mulai Belanja
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;