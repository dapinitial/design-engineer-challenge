import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import './global.css'
import Logo from './shared/components/logo/logo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Design Engineer Challenge',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className={styles.header}>
                    <Logo />
                </header>
                <main className={styles.main}>
                    {children}
                </main>
            </body>
        </html>
    )
}
