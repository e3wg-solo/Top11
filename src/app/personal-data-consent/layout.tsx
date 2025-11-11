import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных - Салон красоты Topiconic",
  description: "Согласие на обработку персональных данных в салоне красоты Topiconic. Информация о согласии на обработку персональных данных.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Согласие на обработку персональных данных - Салон красоты Topiconic",
    description: "Согласие на обработку персональных данных в салоне красоты Topiconic",
    url: process.env.NODE_ENV === 'production' ? 'https://topiconic.ru/personal-data-consent' : 'http://localhost:3000/personal-data-consent',
    type: "website",
  },
  alternates: {
    canonical: process.env.NODE_ENV === 'production' ? 'https://topiconic.ru/personal-data-consent' : 'http://localhost:3000/personal-data-consent',
  },
};

export default function PersonalDataConsentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

