import type { Metadata } from 'next';
import { Ubuntu, Caveat } from 'next/font/google';
import cls from 'classnames';
import './globals.css';

import { Providers } from '@/redux/provider';

const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ubuntu',
});

const caveat = Caveat({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  title: 'Adam Badaoui | Ubuntu 22.04',
  description:
    'Découvrez le portfolio d’Adam Badaoui, étudiant en BTS SIO option SISR, spécialisé dans les infrastructures, les systèmes et les réseaux. Explorez ses projets, ses compétences techniques et ses éxperiences professionnelles dans un environement basées sur Ubuntu, un espace moderne et clair mettant en avant son expérience, sa progression et son expertise.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cls(ubuntu.variable, caveat.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
