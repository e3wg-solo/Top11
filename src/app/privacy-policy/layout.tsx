import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности - Салон красоты Topiconic",
  description: "Политика конфиденциальности салона красоты Topiconic. Информация о том, как мы собираем, используем и защищаем ваши персональные данные.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Политика конфиденциальности - Салон красоты Topiconic",
    description: "Политика конфиденциальности салона красоты Topiconic",
    url: process.env.NODE_ENV === 'production' ? 'https://topiconic.ru/privacy-policy' : 'http://localhost:3000/privacy-policy',
    type: "website",
  },
  alternates: {
    canonical: process.env.NODE_ENV === 'production' ? 'https://topiconic.ru/privacy-policy' : 'http://localhost:3000/privacy-policy',
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

