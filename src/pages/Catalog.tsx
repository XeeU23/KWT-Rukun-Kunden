import React, { useState } from 'react';
import { Package, Leaf } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Catalog = () => {
  const [activeTab, setActiveTab] = useState<'processed' | 'fresh'>('processed');

  const processedProducts = products.filter(product => product.category === 'processed');
  const freshProducts = products.filter(product => product.category === 'fresh');

  const currentProducts = activeTab === 'processed' ? processedProducts : freshProducts;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Katalog Produk KWT Rukun Kunden
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan berbagai produk berkualitas dari hasil bumi dan kreativitas wanita tani kami
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('processed')}
                className={`flex items-center px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === 'processed'
                    ? 'bg-green-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Package className="h-5 w-5 mr-2" />
                Produk Olahan
              </button>
              <button
                onClick={() => setActiveTab('fresh')}
                className={`flex items-center px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                  activeTab === 'fresh'
                    ? 'bg-green-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Leaf className="h-5 w-5 mr-2" />
                Produk Segar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {activeTab === 'processed' ? 'Produk Olahan' : 'Produk Segar'}
            </h2>
            <p className="text-gray-600">
              {activeTab === 'processed' 
                ? 'Aneka produk olahan yang dibuat dengan resep tradisional dan bahan-bahan berkualitas'
                : 'Hasil panen segar langsung dari kebun dengan kualitas terjamin'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tertarik dengan Produk Kami?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Hubungi kami langsung untuk informasi lebih lanjut dan pemesanan
          </p>
          <button
            onClick={() => {
              const phoneNumber = '6282138218056';
              const message = 'Halo, saya tertarik dengan produk KWT Rukun Kunden';
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            <Package className="h-5 w-5 mr-2" />
            Hubungi Kami
          </button>
        </div>
      </section>
    </div>
  );
};

export default Catalog;