import type { ProductInterface } from '../contexts/StockContext';

export const MOCK_PRODUCTS: ProductInterface[] = [
  {
    id: 1,
    category: 'mobilia',
    name: 'Cadeira Gamer X',
    description: 'Cadeira ergonômica para jogos',
    price: 799.99,
    quantity: 15,
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    category: 'eletronicos',
    name: 'Monitor Curvo 27"',
    description: 'Monitor 4K UHD',
    price: 1999.99,
    quantity: 10,
    createdAt: new Date().toISOString(),
  },
];
