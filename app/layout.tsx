'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink
} from '@apollo/client';
import Nav from './components/Nav';

const inter = Inter({ subsets: ['latin'] });

const link = createHttpLink({
  uri: 'https://rickandmortyapi.com/graphql'
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ApolloProvider client={client}>
          <main className='flex flex-row min-h-screen items-start h-screen'>
            <Nav />
            <div className='grow px-4 py-5'>{children}</div>
          </main>
        </ApolloProvider>
      </body>
    </html>
  );
}
