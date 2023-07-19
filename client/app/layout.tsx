import Navbar from './components/navbar';
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
        {children}
        </>
      </body>
    </html>
  );
}
