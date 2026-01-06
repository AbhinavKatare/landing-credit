import type { Metadata } from 'next'
import './styles.css'

export const metadata: Metadata = {
    title: 'CreditHub - Complete Vehicle Credit Management System',
    description: 'Enterprise-grade credit management platform for vehicle financing. Streamline operations, ensure compliance, and scale your business with confidence.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" id="__next" suppressHydrationWarning>
            <body className="antialiased bg-white text-slate-900">{children}</body>
        </html>
    )
}
