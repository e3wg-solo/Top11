import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас - Салон красоты Topiconic",
  description: "Познакомьтесь с командой салона красоты Topiconic в Боброво. Профессиональные мастера, качественные услуги косметологии, парикмахерского искусства, маникюра и других услуг красоты.",
  keywords: [
    "о нас",
    "команда",
    "салон красоты Боброво",
    "профессиональные мастера",
    "Topiconic",
    "косметология",
    "парикмахерские услуги",
    "маникюр"
  ],
  openGraph: {
    title: "О нас - Салон красоты Topiconic",
    description: "Познакомьтесь с командой салона красоты Topiconic в Боброво. Профессиональные мастера, качественные услуги.",
    url: process.env.NODE_ENV === 'production' ? 'https://topiconic.ru/about' : 'http://localhost:3000/about',
    type: "website",
    locale: "ru_RU",
    siteName: "Салон красоты Topiconic",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "О нас - Салон красоты Topiconic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "О нас - Салон красоты Topiconic",
    description: "Познакомьтесь с командой салона красоты Topiconic в Боброво",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: process.env.NODE_ENV === 'production' ? 'https://topiconic.ru/about' : 'http://localhost:3000/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

