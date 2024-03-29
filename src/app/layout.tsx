import Navigation from '@/components/navigation';
import './globals.css';
import SessionProvider from '@/components/session-provider';
import {createTables} from '@/lib/data';

export const metadata = {
  title: 'TODO',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  await createTables();
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Navigation />
          <main>
            <div>
              {children}
            </div>
          </main>
        </SessionProvider>
      </body>
    </html>
  )
}
