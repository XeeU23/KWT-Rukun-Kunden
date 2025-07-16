export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'processed' | 'fresh';
}

export const products: Product[] = [
  // Produk Olahan
  {
    id: 'kripik-pepaya',
    name: 'Kripik Pepaya',
    description: 'Kripik pepaya renyah dan gurih, dibuat dari pepaya segar pilihan dengan bumbu tradisional',
    price: 'Rp 15.000',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=500&h=300&q=80',
    category: 'processed'
  },
  {
    id: 'kripik-talas',
    name: 'Kripik Talas',
    description: 'Kripik talas premium dengan tekstur renyah dan rasa yang khas, cocok untuk camilan sehat',
    price: 'Rp 18.000',
    image: '/Keripik Talas.jpg',
    category: 'processed'
  },
  {
    id: 'manisan-pepaya',
    name: 'Manisan Pepaya',
    description: 'Manisan pepaya manis dan segar, dibuat dengan resep turun temurun yang autentik',
    price: 'Rp 12.000',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&h=300&q=80',
    category: 'processed'
  },
  {
    id: 'dodol-talas',
    name: 'Dodol Talas',
    description: 'Dodol talas lembut dengan cita rasa manis dan tekstur yang kenyal, camilan tradisional favorit',
    price: 'Rp 20.000',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&h=300&q=80',
    category: 'processed'
  },
  // Produk Segar
  {
    id: 'timun',
    name: 'Timun Segar',
    description: 'Timun segar hasil panen langsung dari kebun, renyah dan berair, cocok untuk lalapan',
    price: 'Rp 8.000/kg',
    image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=500&h=300&q=80',
    category: 'fresh'
  },
  {
    id: 'talas',
    name: 'Talas',
    description: 'Talas berkualitas tinggi, umbi yang kaya nutrisi dan cocok untuk berbagai olahan masakan',
    price: 'Rp 12.000/kg',
    image: '/Talas.jpg',
    category: 'fresh'
  },
  {
    id: 'terong',
    name: 'Terong',
    description: 'Terong ungu segar dan berkualitas, hasil panen organik tanpa pestisida berbahaya',
    price: 'Rp 10.000/kg',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=500&h=300&q=80',
    category: 'fresh'
  },
  {
    id: 'cabe',
    name: 'Cabe Merah',
    description: 'Cabe merah pedas dengan kualitas premium, dipanen pada masa optimal untuk rasa terbaik',
    price: 'Rp 25.000/kg',
    image: '/cabe.jpg',
    category: 'fresh'
  },
  {
    id: 'bayam',
    name: 'Bayam',
    description: 'Bayam hijau segar kaya akan zat besi dan vitamin, hasil panen harian untuk kesegaran maksimal',
    price: 'Rp 6.000/ikat',
    image: '/bayam.jpg',
    category: 'fresh'
  },
  {
    id: 'lele',
    name: 'Lele Segar',
    description: 'Lele segar hasil budidaya lokal dengan kualitas terjamin, sumber protein berkualitas tinggi',
    price: 'Rp 18.000/kg',
    image: '/Ikan lele.jpg',
    category: 'fresh'
  }
];