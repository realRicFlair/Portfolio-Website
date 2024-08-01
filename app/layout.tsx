import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { SpeedInsights } from "@vercel/speed-insights/next"
import NavbarMain from './ui/NavbarMain';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={`${inter.className} antialiased`}>
        <div className="px-4 md:px-8 lg:px-16 xl:px-32">
          <div className="mt-4">
            <NavbarMain />
          </div>
          
          {children}
          </div>
      </body>
    </html>
  );
}