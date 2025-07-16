import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-green-600 text-white py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/2255832/pexels-photo-2255832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
          }}
        >
          <div className="absolute inset-0 bg-green-800/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tentang KWT Rukun Kunden
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Memberdayakan wanita tani melalui pertanian berkelanjutan dan produk berkualitas tinggi
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Kelompok Wanita Tani (KWT) Rukun Kunden adalah komunitas perempuan desa yang berdiri atas semangat gotong royong, kemandirian, dan cinta terhadap pertanian berkelanjutan. Berbasis di Dusun Kunden, kami hadir sebagai wadah bagi ibu-ibu dan perempuan desa untuk belajar, bertumbuh, dan berdaya lewat kegiatan pertanian, pengolahan hasil, serta kewirausahaan berbasis rumah tangga.
                </p>
                <p>
                  Kami percaya bahwa halaman rumah bukan sekadar ruang kosong, tapi sumber pangan keluarga dan potensi ekonomi yang luar biasa. Melalui budidaya sayuran, tanaman obat keluarga (TOGA), serta produksi olahan seperti sambal, dodol, dan keripik sayur, KWT Rukun Kunden terus berinovasi menghadirkan produk yang sehat, berkualitas, dan bernilai jual.
                </p>
                <p>
                  Lebih dari sekadar kelompok tani, kami adalah komunitas pembelajar. Kami aktif mengikuti pelatihan, menggandeng penyuluh, serta menjalin kolaborasi dengan UMKM dan pemerintah desa untuk mewujudkan pertanian yang lestari dan perempuan desa yang berdaya.
                </p>
                <p className="font-medium text-green-700 italic">
                  "Dari pekarangan, untuk ketahanan pangan dan masa depan desa yang lebih baik."
                </p>
                <p>
                  Mari kenal lebih dekat, dukung karya kami, dan jadi bagian dari gerakan perempuan tangguh desa bersama KWT Rukun Kunden.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Ibu-ibu KWT sedang bekerja"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Komitmen kami terhadap kualitas, keberlanjutan, dan pemberdayaan masyarakat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Kualitas</h3>
              <p className="text-gray-600">
                Setiap produk dibuat dengan penuh perhatian terhadap kualitas dan cita rasa
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pemberdayaan</h3>
              <p className="text-gray-600">
                Memberdayakan wanita tani untuk mandiri secara ekonomi dan sosial
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Berkelanjutan</h3>
              <p className="text-gray-600">
                Menerapkan praktik pertanian organik yang ramah lingkungan
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tradisional</h3>
              <p className="text-gray-600">
                Melestarikan resep dan teknik pengolahan tradisional yang autentik
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visi Kami</h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadi kelompok wanita tani terdepan yang mengoptimalkan pekarangan rumah sebagai sumber pangan dan ekonomi keluarga, sekaligus mewujudkan perempuan desa yang mandiri dan berdaya dalam pertanian berkelanjutan.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  Mengoptimalkan pekarangan rumah sebagai sumber pangan dan ekonomi keluarga
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  Mengembangkan budidaya sayuran dan tanaman obat keluarga (TOGA) secara berkelanjutan
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  Meningkatkan keterampilan pengolahan hasil pertanian dan kewirausahaan wanita tani
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  Membangun jaringan kolaborasi dengan UMKM dan pemerintah desa untuk pertanian lestari
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kegiatan Rutin KWT Rukun Kunden
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dokumentasi kegiatan harian dan program pemberdayaan yang kami lakukan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1"
                alt="Piket Harian"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Piket Harian</h3>
                <p className="text-gray-600">
                  Kegiatan rutin harian anggota KWT dalam merawat tanaman dan memelihara kebun bersama
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1"
                alt="Pertemuan Rutin Bulanan"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pertemuan Rutin Bulanan</h3>
                <p className="text-gray-600">
                  Pertemuan bulanan untuk evaluasi, perencanaan, dan sharing pengalaman antar anggota
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5965592/pexels-photo-5965592.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1"
                alt="Pelatihan"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pelatihan</h3>
                <p className="text-gray-600">
                  Program pelatihan berkala untuk meningkatkan keterampilan pertanian dan pengolahan
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1"
                alt="Produksi Olahan"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Produksi Olahan Hasil Pertanian</h3>
                <p className="text-gray-600">
                  Proses pengolahan hasil panen menjadi produk bernilai tambah seperti keripik dan dodol
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1"
                alt="Bazar dan Pameran"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bazar dan Pameran</h3>
                <p className="text-gray-600">
                  Partisipasi dalam bazar dan pameran untuk memperkenalkan produk KWT kepada masyarakat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ingin Bergabung dengan KWT Rukun Kunden?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk informasi lebih lanjut tentang keanggotaan dan kegiatan kami
          </p>
          <button
            onClick={() => {
              const phoneNumber = '6282138218056';
              const message = 'Halo, saya tertarik untuk bergabung dengan KWT Rukun Kunden';
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <Users className="h-5 w-5 mr-2" />
            Hubungi Kami
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;