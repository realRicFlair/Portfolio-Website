import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={`${inter.className} antialiased`}>
        <div className="px-4 md:px-8 lg:px-16 xl:px-32">{children}</div>
      </body>
    </html>
  );
}