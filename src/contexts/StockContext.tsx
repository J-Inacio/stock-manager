import { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { MOCK_PRODUCTS } from '../data/mockProducts';

export interface ProductInterface {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  createdAt: string;
}

interface StockContextType {
  products: ProductInterface[];
  addProduct: (product: Omit<ProductInterface, 'id' | 'createdAt'>) => void;
  removeProduct: (id: number) => void;
  updateProductQuantity: (id: number, newQuantity: number) => void;
  isLoading: boolean;
}

const StockContext = createContext<StockContextType | undefined>(undefined);

export function StockContextProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  const [products, setProducts] = useLocalStorage<ProductInterface[]>(
    'estoque-produtos',
    MOCK_PRODUCTS,
  );

  useState(() => {
    setIsLoading(false);
  });

  const addProduct = (productData: Omit<ProductInterface, 'id' | 'createdAt'>) => {
    const newProduct: ProductInterface = {
      ...productData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };
    setProducts((currentProducts) => [newProduct, ...currentProducts]);
  };

  const removeProduct = (id: number) => {
    setProducts((currentProducts) => currentProducts.filter((p) => p.id !== id));
  };

  const updateProductQuantity = (id: number, newQuantity: number) => {
    setProducts((currentProducts) =>
      currentProducts.map((p) => (p.id === id ? { ...p, quantity: newQuantity } : p)),
    );
  };

  const value = {
    products,
    addProduct,
    removeProduct,
    updateProductQuantity,
    isLoading,
  };

  return (
    <StockContext.Provider value={value}>
      {isLoading ? <p>Carregando Estoque...</p> : children}
    </StockContext.Provider>
  );
}

export function useStock() {
  const context = useContext(StockContext);
  if (context === undefined) {
    throw new Error('useStock deve ser usado dentro de um StockContextProvider');
  }
  return context;
}
