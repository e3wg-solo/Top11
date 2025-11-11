import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Прайс-лист - Салон красоты Topiconic",
  description: "Актуальные цены на услуги салона красоты Topiconic в Боброво: косметология, парикмахерские услуги, маникюр, педикюр, массаж, татуаж, макияж, эпиляция, солярий, брови и ресницы. Запись: +7 (993) 777-55-59",
  keywords: [
    "прайс",
    "цены",
    "прайс-лист",
    "стоимость услуг",
    "салон красоты Боброво",
    "цены на косметологию",
    "цены на маникюр",
    "цены на стрижку",
    "Topiconic",
    "прайс-лист салона красоты"
  ],
  openGraph: {
    title: "Прайс-лист - Салон красоты Topiconic",
    description: "Актуальные цены на все услуги салона красоты Topiconic: косметология, парикмахерские услуги, маникюр, массаж и другие услуги.",
    url: process.env.NODE_ENV === 'production' ? 'https://topiconic.ru/price' : 'http://localhost:3000/price',
    type: "website",
    locale: "ru_RU",
    siteName: "Салон красоты Topiconic",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Прайс-лист - Салон красоты Topiconic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Прайс-лист - Салон красоты Topiconic",
    description: "Актуальные цены на все услуги салона красоты Topiconic",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: process.env.NODE_ENV === 'production' ? 'https://topiconic.ru/price' : 'http://localhost:3000/price',
  },
};

export default function PriceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

