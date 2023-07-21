import Navbar from './components/navbar';
import { CartProvider } from './context/cart-context-provider';
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary-light">
        <>
          <Navbar/>
          <CartProvider>
            {children}
          </CartProvider>
        </>
      </body>
    </html>
  );
}
