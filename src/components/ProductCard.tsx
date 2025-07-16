import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '6282138218056'; // Nomor WhatsApp KWT
    const message = `Halo, saya tertarik dengan produk ${product.name}. Bisakah saya mendapatkan informasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-w-16 aspect-h-9 h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">{product.price}</span>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors duration-200"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Pesan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;