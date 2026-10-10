import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Koppela Nirvan Reddy | Space Portfolio - Computer Science Engineer',
  description:
    'Full Stack Developer & AI/ML Engineer. B.Tech Computer Science Engineering student at GRIET (CGPA 8.01). Specialized in engineering scalable web platforms, real-time computer vision kinematics, and deep learning systems.',
  keywords: [
    'Koppela Nirvan Reddy',
    'Nirvan Reddy',
    'Space Portfolio',
    'Full Stack Developer',
    'AI/ML Engineer',
    'Computer Science Engineering',
    'GRIET',
    'Three.js Portfolio',
    'Next.js Portfolio',
  ],
  authors: [{ name: 'Koppela Nirvan Reddy' }],
  icons: {
    icon: '/nirvan.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#030014] text-[#f8fafc] font-sans antialiased overflow-x-hidden selection:bg-purple-600/40 selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
