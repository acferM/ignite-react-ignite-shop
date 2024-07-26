import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../global.css";

import logoImg from '../assets/logo.svg'
import Image from "next/image";

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Home | Ignite Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <div className="flex min-h-screen flex-col items-start justify-center">
          <header className="mx-auto w-full max-w-[1180px] py-8">
            <Image src={logoImg} alt="Ignite Shop" height={logoImg.height} width={logoImg.width} />
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
