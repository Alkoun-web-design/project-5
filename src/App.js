import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles/App.css';
import StoreComponent from './components/StoreComponent';
import { CartProvider, MedusaProvider } from "medusa-react";
import { QueryClient } from "@tanstack/react-query";
import { BrowserRouter } from 'react-router-dom'

export default function App() {

  const queryClient = new QueryClient()

  return (
    <>
    <BrowserRouter>
      <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl="http://localhost:9000"
      >
        <CartProvider>
          <StoreComponent />
        </CartProvider>
      </MedusaProvider>
    </BrowserRouter>
    </>
  );
}


