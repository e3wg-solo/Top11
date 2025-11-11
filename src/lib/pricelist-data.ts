export type PriceItem = {
  categoryId: string;
  categoryName: string;
  name: string;
  price: string;
  duration?: string;
};

export const pricelistData: PriceItem[] = [
  // Косметология эстетическая - Чистка лица
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Атравматическая чистка лица на косметике 'Egia'",
    price: "5000 ₽",
    duration: "2ч 30м"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Мануальная чистка лица с применением очищающего ухода 'Актилия', 'Christina'",
    price: "5000 ₽",
    duration: "2ч 30м - 3ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Комбинированная чистка лица на косметике 'Egia', 'Christina'",
    price: "5000 ₽",
    duration: "3ч - 3ч 30м"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Ультразвуковая чистка лица на косметике 'Egia', 'Christina'",
    price: "5000 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Ультразвуковая чистка спины (надплечье) 'Egia', 'Christina'",
    price: "5000 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Ультразвуковая чистка спины (полностью) 'Egia', 'Christina'",
    price: "5000 ₽",
    duration: "1ч 30м"
  },

  // Уход за кожей лица
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Экспресс-уход",
    price: "2500 ₽",
    duration: "40м"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Экспресс-уход для нормальной кожи",
    price: "2500 ₽",
    duration: "40м"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Экспресс-уход для жирной кожи",
    price: "2500 ₽",
    duration: "40м"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Корректирующий уход для проблемной кожи «Актилия»",
    price: "3500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Антиоксидантный уход для молодой кожи",
    price: "3500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Интенсивный восстанавливающий уход для сухой кожи",
    price: "3500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Уход за кожей с применением комбинированного пилинга 'Ультра-пил'",
    price: "5000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Восстановление кожи после повреждений",
    price: "3500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Интенсивный омолаживающий уход за зрелой кожей",
    price: "5000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Интенсивный увлажняющий уход",
    price: "3500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Интенсивный уход за чувствительной кожей",
    price: "3500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Лифтинг-уход «Коррекция мимических морщин»",
    price: "5000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Антикуперозная программа",
    price: "4000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Энергетический антиоксидантный уход «Вита С»",
    price: "5000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Осветляющая программа для кожи с гиперпигментацией",
    price: "5000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Уход за кожей вокруг глаз для уменьшения отеков и темных кругов",
    price: "3000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Уход за кожей вокруг глаз от морщин",
    price: "3500 ₽",
    duration: "1ч"
  },

  // Карбокситерапия
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Карбокситерапия",
    price: "3000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Маска по типу кожи (не считается самостоятельной процедурой)",
    price: "800 ₽",
    duration: "15м"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Альгинантная маска (не считается самостоятельной процедурой)",
    price: "1000 ₽",
    duration: "15м"
  },

  // Уходовые процедуры с применением пилингов
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Пилинг-лосьон легкий 10% р.н 4.0 Ultra peel lotion light Egia",
    price: "5000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Пилинг-лосьон средний 20% p.h 3.8 Ultra peel lotion light Egia",
    price: "5000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Пилинг-лосьон сильный 30% Р.Н 3.7 Ultra peel lotion light Egia",
    price: "5000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Пилинг-лосьон ультра сильный 50% Р.Н 3.7 Ultra peel lotion light Egia Even Stronger",
    price: "5000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "100% натуральный БИОпилинг лёгкий (для чувствительной и нормальной кожи)",
    price: "5000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "100% натуральный БИОпилинг сильный (для проблемной и жирной кожи)",
    price: "5000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Пилинг пептидный, мощный 'DERMA QUEST'",
    price: "5000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Пилинг молочный для деликатной и чувствительной кожи (гиалуроновая, молочная кислоты 30% ph 3,25) 'DERMA QUEST'",
    price: "5000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Пилинг тыквенный 'DERMA QUEST'",
    price: "5000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Кислотный малиновый пилинг Berry Peel 12% AXA (салициловая ph 3,0)",
    price: "5000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Кислотный ванильный пилинг Vanilla Peel гликолевая 30% ph 2,5",
    price: "5000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Профессиональный, всесезонный дерматологический пилинг PRX-T33",
    price: "5000 ₽",
    duration: "1ч"
  },

  // Дополнительные услуги
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Прокол ушей с серёжкой",
    price: "3000 ₽",
    duration: "20м"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Шоколадная SPA-программа",
    price: "8000 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Антицеллюлитная SPA-программа",
    price: "8000 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Скрабирование (пилинг тела)",
    price: "8000 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "aesthetic-cosmetology",
    categoryName: "Косметология эстетическая",
    name: "Термоодеяло (электроодеяло, как доп процедура)",
    price: "2000 ₽",
    duration: "1ч 30м"
  },

  // Косметология аппаратная
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Ультразвуковой пилинг лица доп усл",
    price: "2500 ₽",
    duration: "15м"
  },
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Ультразвуковой пилинг лица (как полноценная процедура)",
    price: "3500 ₽",
    duration: "40м"
  },
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Алмазная микродермабразия",
    price: "3000 ₽",
    duration: "20м"
  },
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Алмазная микродермабразия",
    price: "3500 ₽",
    duration: "30м"
  },
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Алмазная микродермабразия",
    price: "4000 ₽",
    duration: "40м"
  },
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Микротоковая терапия",
    price: "3000 ₽",
    duration: "20м"
  },
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Микротоковая терапия",
    price: "3500 ₽",
    duration: "30м"
  },
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Микротоковая терапия",
    price: "4000 ₽",
    duration: "40м"
  },
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Электропорация (безигольная неинвазивная мезотерапия)",
    price: "2500 ₽",
    duration: "20м"
  },
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Электропорация (безигольная неинвазивная мезотерапия)",
    price: "3000 ₽",
    duration: "30м"
  },
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Электропорация (безигольная неинвазивная мезотерапия)",
    price: "4000 ₽",
    duration: "40м"
  },
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Криотерапия (аппаратная не считается самостоятельной процедурой)",
    price: "2000 ₽",
    duration: "20м"
  },
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Фотохромотерапия (Терапия инфракрасная)",
    price: "1000 ₽",
    duration: "20м"
  },
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Дарсонвализация",
    price: "1500 ₽",
    duration: "20м"
  },
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Дарсонвализация (как полноценная процедура)",
    price: "3500 ₽",
    duration: "40м"
  },
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Фракционная мезотерапия (Насадка дермапен индивидуально под клиента)",
    price: "1000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Стоимость препарата для фракционной мезотерапии",
    price: "от 6500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Микророллеровая мезотерапия (Роллер индивидуально под клиента)",
    price: "3000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "hardware-cosmetology",
    categoryName: "Косметология аппаратная",
    name: "Стоимость препарата для микророллеровой мезотерапии",
    price: "от 6500 ₽",
    duration: "1ч"
  },

  // Парикмахерский зал - Женский зал
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Стрижка челки",
    price: "500 ₽",
    duration: "15м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Женская стрижка",
    price: "2500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Стрижка одним срезом",
    price: "1000 ₽",
    duration: "15м"
  },

  // Осветление
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Осветление корней (до 5 см от корней)",
    price: "3200 ₽",
    duration: "1ч 30м"
  },

  // Декапирование/смывка
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Декапирование короткие волосы",
    price: "2000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Декапирование средние волосы",
    price: "2500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Декапирование длинные волосы",
    price: "3000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Декапирование очень длинные волосы",
    price: "3500 ₽",
    duration: "1ч 30м"
  },

  // Окрашивание (в 1 тон)
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Окрашивание короткие или корни",
    price: "5000 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Окрашивание средняя длина (до плеч)",
    price: "6000 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Окрашивание длинные (до лопаток)",
    price: "7000 ₽",
    duration: "2ч"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Окрашивание очень длинные (до пояса)",
    price: "8000 ₽",
    duration: "2ч"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Окрашивание за густоту волос",
    price: "500 ₽",
    duration: "5м"
  },

  // Восстановление цвета
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Восстановление цвета средняя длина (до плеч)",
    price: "2500 ₽",
    duration: "20м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Восстановление цвета длинные (до лопаток)",
    price: "3000 ₽",
    duration: "20м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Восстановление цвета очень длинные",
    price: "3500 ₽",
    duration: "20м"
  },

  // Сложное окрашивание - Айртач
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Айртач средние (до плеч)",
    price: "13000 ₽",
    duration: "4ч"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Айртач длинные (до лопаток)",
    price: "15000 ₽",
    duration: "4ч 30м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Айртач очень длинные (до пояса)",
    price: "20000 ₽",
    duration: "5ч"
  },

  // Контуринг
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Контуринг/эффект выгоревших волос средние (до плеч)",
    price: "4500 ₽",
    duration: "2ч"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Контуринг/эффект выгоревших волос длинные (до лопаток)",
    price: "5500 ₽",
    duration: "3ч"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Контуринг/эффект выгоревших волос очень длинные (до пояса)",
    price: "6500 ₽",
    duration: "2ч"
  },

  // Балаяж/Шатуш/Мелирование
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Сложное окрашивание/Балаяж/Шатуш/Мелирование (средние)",
    price: "9000 ₽",
    duration: "3ч"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Сложное окрашивание/Балаяж/Шатуш/Мелирование (длинные)",
    price: "10500 ₽",
    duration: "4ч"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Сложное окрашивание/Балаяж/Шатуш/Мелирование (очень длинные)",
    price: "13000 ₽",
    duration: "5ч"
  },

  // Кератиновое выпрямление/Ботокс
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Кератиновое выпрямление/горячий ботокс короткие",
    price: "4000 ₽",
    duration: "2ч 30м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Кератиновое выпрямление/горячий ботокс средние",
    price: "6000 ₽",
    duration: "3ч"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Кератиновое выпрямление/горячий ботокс длинные",
    price: "8000 ₽",
    duration: "3ч 30м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Кератиновое выпрямление/горячий ботокс очень длинные",
    price: "10000 ₽",
    duration: "4ч"
  },

  // СПА-уход INSIGHT
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "СПА-уход INSIGHT средние",
    price: "1500 ₽",
    duration: "30м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "СПА-уход INSIGHT длинные",
    price: "2000 ₽",
    duration: "30м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "СПА-уход INSIGHT очень длинные",
    price: "2500 ₽",
    duration: "30м"
  },

  // СПА-уход ADRICOCO
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "СПА-уход ADRICOCO средние",
    price: "1500 ₽",
    duration: "30м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "СПА-уход ADRICOCO длинные",
    price: "2000 ₽",
    duration: "30м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "СПА-уход ADRICOCO очень длинные",
    price: "2500 ₽",
    duration: "30м"
  },

  // Укладки - Повседневные
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Повседневная укладка короткие",
    price: "1000 ₽",
    duration: "30м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Повседневная укладка средние",
    price: "1200 ₽",
    duration: "30м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Повседневная укладка длинные",
    price: "1500 ₽",
    duration: "30м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Повседневная укладка очень длинные",
    price: "2000 ₽",
    duration: "30м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Повседневная укладка длинные густые",
    price: "2500 ₽",
    duration: "1ч"
  },

  // Укладки - Вечерние
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Вечерняя укладка средние (на горячие инструменты)",
    price: "2000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Вечерняя укладка длинные (на горячие инструменты)",
    price: "2500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Вечерняя укладка очень длинные (на горячие инструменты)",
    price: "3500-4000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Вечерняя свадебная прическа",
    price: "3000-5000 ₽",
    duration: "1ч 30м"
  },

  // Плетение кос
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Плетение кос (одна коса)",
    price: "1000 ₽",
    duration: "30м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Плетение кос сложное",
    price: "1500 ₽",
    duration: "1ч"
  },

  // Детский зал
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Детская стрижка (до 7 лет)",
    price: "1000 ₽",
    duration: "30м"
  },

  // Мужской зал
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Мужская классическая стрижка",
    price: "1500 ₽",
    duration: "30м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Мужской камуфляж седины",
    price: "800 ₽",
    duration: "10м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Мужской под насадку (от 2-х и более насадок)",
    price: "1000 ₽",
    duration: "30м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Мужская коррекция стрижки",
    price: "500 ₽",
    duration: "30м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Мужской 1 пробор/1 рисунок",
    price: "150 ₽",
    duration: "10м"
  },

  // Стрижка бороды
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Стрижка бороды машинкой",
    price: "300 ₽",
    duration: "1ч"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Оформление бороды",
    price: "400 ₽",
    duration: "1ч"
  },

  // Полировка волос
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Полировка волос средние-длинные",
    price: "1500 ₽",
    duration: "30м"
  },
  {
    categoryId: "hairdressing",
    categoryName: "Парикмахерский зал",
    name: "Полировка волос очень длинные",
    price: "1800 ₽",
    duration: "30м"
  },

  // Ногтевой сервис - Маникюр
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Маникюр женский комбинированный",
    price: "1500 ₽",
    duration: "40м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Мужской маникюр комбинированный",
    price: "1700 ₽",
    duration: "40м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Маникюр комплекс экстра длина (снятие, маникюр, покрытие гель-лак)",
    price: "3000 ₽",
    duration: "2ч 30м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Маникюр комплекс (снятие, маникюр, покрытие гель-лак)",
    price: "2800 ₽",
    duration: "1ч 30м - 2ч"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Маникюр с покрытием (маникюр, покрытие гель-лак без снятия)",
    price: "2500 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Маникюр со снятием (без покрытия)",
    price: "1800 ₽",
    duration: "1ч - 1ч 30м"
  },

  // Ногтевой сервис - Педикюр
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Экспресс женский педикюр (пальчики, гигиена)",
    price: "1600 ₽",
    duration: "1ч"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Педикюр женский только пятка",
    price: "800 ₽",
    duration: "30м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Мужской смарт-педикюр",
    price: "2500 ₽",
    duration: "1ч - 1ч 30м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Мужской педикюр только пальцы",
    price: "1800 ₽",
    duration: "1ч"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Мужской педикюр только пятка",
    price: "900 ₽",
    duration: "30м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Мужской педикюр комбинированный",
    price: "2000 ₽",
    duration: "1ч - 1ч 30м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Смарт педикюр (гигиена)",
    price: "2000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Смарт педикюр комплекс (снятие, педикюр, покрытие гель-лак)",
    price: "3400 ₽",
    duration: "1ч 30м - 2ч"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Смарт педикюр с покрытием (покрытие гель-лак, без снятия)",
    price: "3100 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Смарт педикюр со снятием (без покрытия)",
    price: "2300 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Экспресс педикюр комплекс (пальчики, снятие, педикюр, покрытие гель-лак)",
    price: "2400 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Экспресс педикюр с покрытием (пальчики, покрытие гель-лак без снятия)",
    price: "2100 ₽",
    duration: "1ч - 1ч 30м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Экспресс педикюр со снятием (пальчики)",
    price: "1700 ₽",
    duration: "1ч - 1ч 30м"
  },

  // Ногтевой сервис - Покрытие
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Покрытие гель-лаком",
    price: "1100 ₽",
    duration: "20м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Омбре",
    price: "500 ₽",
    duration: "15м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Светоотражающий",
    price: "500 ₽",
    duration: "15м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Лунный",
    price: "500 ₽",
    duration: "15м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Лаком",
    price: "450 ₽",
    duration: "10м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Френч",
    price: "500 ₽",
    duration: "30м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Лечебное покрытие (лак кератин)",
    price: "650 ₽",
    duration: "10м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Покрытие гелем",
    price: "1000 ₽",
    duration: "1ч"
  },

  // Ногтевой сервис - Укрепление
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Укрепление акриловой пудрой 1 ноготь",
    price: "40 ₽",
    duration: "20м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Укрепление акриловой пудрой 10 ногтей",
    price: "400 ₽",
    duration: "1ч"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Укрепление гелем 1 ноготь",
    price: "50 ₽",
    duration: "30м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Укрепление гелем 10 ногтей",
    price: "500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Укрепление акрилгелем 1 ноготь (на половину длины)",
    price: "70 ₽",
    duration: "30м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Укрепление акрилгелем 10 ногтей (на половину длины)",
    price: "700 ₽",
    duration: "1ч"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Укрепление акрилгелем 1 ноготь (на всю длину)",
    price: "100 ₽",
    duration: "30м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Укрепление акрилгелем 10 ногтей (на всю длину)",
    price: "1000 ₽",
    duration: "1ч"
  },

  // Ногтевой сервис - Дизайн
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Простой дизайн (1 ноготь)",
    price: "70 ₽",
    duration: "от 10м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Стразы (1 шт.)",
    price: "30 ₽",
    duration: "от 10м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Слайдер (наклейки, термонаклейки, фольга)",
    price: "70 ₽",
    duration: "от 10м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Блестки",
    price: "70 ₽",
    duration: "от 10м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Конфетти 1 шт",
    price: "70 ₽",
    duration: "от 10м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Втирка",
    price: "70 ₽",
    duration: "от 10м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Художественная роспись",
    price: "250-500 ₽",
    duration: "1ч"
  },

  // Ногтевой сервис - СПА-уход ПАРАФИН
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "SPA-уход за руками 'Холодный парафин'",
    price: "500 ₽",
    duration: "30м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "SPA-уход за руками 'Горячий парафин'",
    price: "500 ₽",
    duration: "30м"
  },

  // Ногтевой сервис - Наращивание
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Наращивание экстра длина 1 ноготь (снятие, маникюр, покрытие, выравнивание)",
    price: "600 ₽",
    duration: "30м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Наращивание 1 ноготь (снятие, маникюр, покрытие, выравнивание)",
    price: "550 ₽",
    duration: "30м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Наращивание 10 ногтей (снятие, маникюр, покрытие, выравнивание)",
    price: "5500 ₽",
    duration: "3ч"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Наращивание экстра длина (снятие, маникюр, покрытие, выравнивание)",
    price: "6000 ₽",
    duration: "3ч 30м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Коррекция нарощенных ногтей, длина стандарт (снятие, маникюр, покрытие, выравнивание)",
    price: "4300 ₽",
    duration: "2ч"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Коррекция нарощенных ногтей, экстра длина (снятие, маникюр, покрытие, выравнивание)",
    price: "5000 ₽",
    duration: "2ч"
  },

  // Ногтевой сервис - Дополнительные услуги
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Ремонт одного ногтя (не нарощенного)",
    price: "300 ₽",
    duration: "10м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Снятие лака",
    price: "100 ₽",
    duration: "20м"
  },
  {
    categoryId: "nail-service",
    categoryName: "Ногтевой сервис",
    name: "Снятие шеллака с опилом формой",
    price: "500 ₽",
    duration: "30м"
  },

  // Макияж
  {
    categoryId: "makeup",
    categoryName: "Макияж",
    name: "Коктейльный макияж",
    price: "4000 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "makeup",
    categoryName: "Макияж",
    name: "Вечерний макияж",
    price: "5000 ₽",
    duration: "2ч"
  },
  {
    categoryId: "makeup",
    categoryName: "Макияж",
    name: "Демакияж со смывкой лица",
    price: "250 ₽",
    duration: "10м"
  },

  // Солярий
  {
    categoryId: "solarium",
    categoryName: "Солярий",
    name: "Солярий вертикальный 1 минута (шапка + коврик + стикини)",
    price: "45 ₽",
    duration: "1м"
  },
  {
    categoryId: "solarium",
    categoryName: "Солярий",
    name: "Пакет аксессуаров для загара в солярии (шапка-шарлотка, коврик одноразовый, стикеры)",
    price: "100 ₽"
  },
  {
    categoryId: "solarium",
    categoryName: "Солярий",
    name: "Крем для загара классический (по типу кожи) 15 мл",
    price: "450 ₽"
  },
  {
    categoryId: "solarium",
    categoryName: "Солярий",
    name: "Крем для загара без бронзатора и отдушек (по типу кожи) 15 мл",
    price: "450 ₽"
  },
  {
    categoryId: "solarium",
    categoryName: "Солярий",
    name: "Крем для загара с бронзатором (по типу кожи) 15 мл",
    price: "450 ₽"
  },
  {
    categoryId: "solarium",
    categoryName: "Солярий",
    name: "Крем для загара с натуральным бронзатором (по типу кожи) 15 мл",
    price: "450 ₽"
  },
  {
    categoryId: "solarium",
    categoryName: "Солярий",
    name: "Крем для загара с экстрабронзатором (по типу кожи) 15 мл",
    price: "450 ₽"
  },
  {
    categoryId: "solarium",
    categoryName: "Солярий",
    name: "Крем для загара увлажняющий (по типу кожи) 15 мл",
    price: "450 ₽"
  },
  {
    categoryId: "solarium",
    categoryName: "Солярий",
    name: "Крем для загара антивозрастной (по типу кожи) 15 мл",
    price: "450 ₽"
  },
  {
    categoryId: "solarium",
    categoryName: "Солярий",
    name: "Крем для загара антицеллюлитный (по типу кожи) 15 мл",
    price: "450 ₽"
  },
  {
    categoryId: "solarium",
    categoryName: "Солярий",
    name: "Крем для загара для ног (по типу кожи) 15 мл",
    price: "450 ₽"
  },
  {
    categoryId: "solarium",
    categoryName: "Солярий",
    name: "Крем для загара для лица (по типу кожи) 15 мл",
    price: "450 ₽"
  },
  {
    categoryId: "solarium",
    categoryName: "Солярий",
    name: "Крем после загара увлажняющий (по типу кожи) 15 мл",
    price: "450 ₽"
  },
  {
    categoryId: "solarium",
    categoryName: "Солярий",
    name: "Крем после загара питательный (по типу кожи) 15 мл",
    price: "450 ₽"
  },
  {
    categoryId: "solarium",
    categoryName: "Солярий",
    name: "Шапка",
    price: "10 ₽"
  },
  {
    categoryId: "solarium",
    categoryName: "Солярий",
    name: "Стикини Fire-Sun",
    price: "10 ₽"
  },
  {
    categoryId: "solarium",
    categoryName: "Солярий",
    name: "Одноразовый коврик",
    price: "10 ₽"
  },

  // Татуаж
  {
    categoryId: "tattoo",
    categoryName: "Татуаж",
    name: "Обезболивание",
    price: "800 ₽",
    duration: "30м"
  },
  {
    categoryId: "tattoo",
    categoryName: "Татуаж",
    name: "Перманентный татуаж бровей (пудровое напыление)",
    price: "15000 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "tattoo",
    categoryName: "Татуаж",
    name: "Перманентный татуаж веки, межресничное заполнение",
    price: "15000 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "tattoo",
    categoryName: "Татуаж",
    name: "Перманентный татуаж веки стрелки",
    price: "15000 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "tattoo",
    categoryName: "Татуаж",
    name: "Перманентный татуаж губы полное заполнение (окрашивание)",
    price: "18000 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "tattoo",
    categoryName: "Татуаж",
    name: "Перманентный татуаж губы, контур",
    price: "15000 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "tattoo",
    categoryName: "Татуаж",
    name: "Микроблейдинг бровей",
    price: "15000 ₽",
    duration: "1ч 30м"
  },

  // Массаж - Массаж лица
  {
    categoryId: "massage",
    categoryName: "Массаж",
    name: "Комбинированный массаж лица",
    price: "3500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "massage",
    categoryName: "Массаж",
    name: "БМС – биомеханическая стимуляция лица на маске",
    price: "4000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "massage",
    categoryName: "Массаж",
    name: "Массаж лица по Жаке",
    price: "1500 ₽",
    duration: "1ч"
  },

  // Массаж - Массаж тела
  {
    categoryId: "massage",
    categoryName: "Массаж",
    name: "Классический массаж тела",
    price: "3000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "massage",
    categoryName: "Массаж",
    name: "Релаксирующий массаж тела",
    price: "3000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "massage",
    categoryName: "Массаж",
    name: "Антицеллюлитный массаж",
    price: "3800 ₽",
    duration: "1ч"
  },
  {
    categoryId: "massage",
    categoryName: "Массаж",
    name: "Лимфодренажный массаж тела",
    price: "3800 ₽",
    duration: "1ч"
  },
  {
    categoryId: "massage",
    categoryName: "Массаж",
    name: "Спина + ШВЗ",
    price: "2000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "massage",
    categoryName: "Массаж",
    name: "Массаж спины",
    price: "300 ₽",
    duration: "1ч"
  },
  {
    categoryId: "massage",
    categoryName: "Массаж",
    name: "ШВЗ",
    price: "3500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "massage",
    categoryName: "Массаж",
    name: "Баночный массаж тела",
    price: "3500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "massage",
    categoryName: "Массаж",
    name: "Миофасциальный триггерный массаж тела",
    price: "3800 ₽",
    duration: "1ч"
  },
  {
    categoryId: "massage",
    categoryName: "Массаж",
    name: "Спортивный массаж",
    price: "2500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "massage",
    categoryName: "Массаж",
    name: "Глубокотканный массаж",
    price: "3800 ₽",
    duration: "1ч"
  },

  // Брови и ресницы
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Архитектура бровей",
    price: "1000 ₽",
    duration: "40м"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Коррекция бровей",
    price: "800 ₽",
    duration: "30м"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Коррекция бровей воском",
    price: "800 ₽",
    duration: "30м"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Тридинг бровей",
    price: "800 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Коррекция бровей воском + SPA бровей + окрашивание хной",
    price: "1550 ₽",
    duration: "1ч"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Коррекция бровей пинцетом + окрашивание краской",
    price: "1500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Окрашивание бровей краской",
    price: "800 ₽",
    duration: "1ч"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Окрашивание бровей хной (татуаж бровей)",
    price: "900 ₽",
    duration: "1ч"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Окрашивание ресниц краской",
    price: "800 ₽",
    duration: "1ч"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Окрашивание ресниц хной",
    price: "950 ₽",
    duration: "30м"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Ламинирование бровей + ресниц (комплекс)",
    price: "5000 ₽",
    duration: "1ч 30м"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Ламинирование бровей",
    price: "3000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Ламинирование ресниц",
    price: "3000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Наращивание ресниц, поресничное 1D",
    price: "2500 ₽",
    duration: "от 1ч"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Наращивание ресниц, поресничное 2D",
    price: "3300 ₽",
    duration: "от 2ч"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Наращивание ресниц, поресничное 3D",
    price: "3800 ₽",
    duration: "от 3ч"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Наращивание ресниц, поресничное 4D",
    price: "4800 ₽",
    duration: "от 4ч"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Снятие нарощенных ресниц (чужая работа)",
    price: "800 ₽",
    duration: "20м"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Наращивание ресниц поресничные: уголки",
    price: "2000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Наращивание ресниц пучков: уголки 10 м",
    price: "1500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Наращивание ресниц пучковое: полный объём 15 м",
    price: "2000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Наращивание ресниц пучков: классика 20 м",
    price: "1800 ₽",
    duration: "1ч"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Экспресс-уход за ресницами",
    price: "800 ₽",
    duration: "1ч"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "SPA для бровей",
    price: "500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Тридинг лицо полностью (кроме бровей)",
    price: "2000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "eyebrows-lashes",
    categoryName: "Брови и ресницы",
    name: "Коррекция бровей (для мужчин)",
    price: "1100 ₽",
    duration: "30м"
  },

  // Эпиляция - Биоэпиляция горячим воском
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Биоэпиляция воском (Ноги полностью)",
    price: "3400 ₽",
    duration: "40м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Биоэпиляция воском (Голень)",
    price: "2100 ₽",
    duration: "20м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Биоэпиляция воском (Бедра)",
    price: "2100 ₽",
    duration: "30м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Биоэпиляция воском (Зона подмышек)",
    price: "1000 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Биоэпиляция воском (Руки полностью)",
    price: "2100 ₽",
    duration: "20м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Биоэпиляция воском (Руки до локтя)",
    price: "1400 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Биоэпиляция воском (Бикини классическое)",
    price: "2000 ₽",
    duration: "30м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Биоэпиляция воском (Бикини глубокое)",
    price: "2500 ₽",
    duration: "1ч"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Биоэпиляция воском (Спина полностью)",
    price: "3000 ₽",
    duration: "1ч"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Биоэпиляция воском (Половина спины)",
    price: "1500 ₽",
    duration: "30м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Биоэпиляция воском (Живот полностью)",
    price: "2000 ₽",
    duration: "30м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Биоэпиляция воском (Половина живота)",
    price: "1400 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Биоэпиляция воском (Верхняя губа)",
    price: "600 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Биоэпиляция воском (Одна зона на лице)",
    price: "600 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Биоэпиляция воском (Лицо полностью)",
    price: "2000 ₽",
    duration: "30м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Биоэпиляция воском (Декольте)",
    price: "1800 ₽",
    duration: "30м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Биоэпиляция воском (10 пальцев)",
    price: "600 ₽",
    duration: "10м"
  },

  // Эпиляция - Комби-зоны
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Комби-easy 2 зон (глубокое бикини, подмышки)",
    price: "3500 ₽",
    duration: "20м - 30м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Комби-hard 2 зон (ноги полностью, глубокое бикини)",
    price: "4500 ₽",
    duration: "30м - 45м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Комби-easy 3 зон (лицо полностью, подмышки, руки до локтя)",
    price: "4500 ₽",
    duration: "45м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Комби-hard 3 зон (подмышки, руки до локтя, ноги до колен)",
    price: "5000 ₽",
    duration: "45м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Комби 5 зон (ноги полностью, 1 зона на лице, подмышки, глубокое бикини, белая линия живота)",
    price: "6500 ₽",
    duration: "1ч 10м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Комби 8 зон (ноги полностью, руки полностью, 1 зона на лице, подмышки, глубокое бикини, живот полностью, ягодицы, спина полностью)",
    price: "8000 ₽"
  },

  // Эпиляция - Лазерная эпиляция (женская)
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Верхняя губа (1 сеанс) женская",
    price: "800 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Подбородок (1 сеанс) женская",
    price: "800 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Межбровье (1 сеанс) женская",
    price: "800 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Щёки (1 сеанс) женская",
    price: "1000 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Виски (1 сеанс) женская",
    price: "1000 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Шея передняя поверхность (1 сеанс) женская",
    price: "1300 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Шея задняя поверхность (1 сеанс) женская",
    price: "1300 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Нос (1 сеанс) женская",
    price: "600 ₽",
    duration: "10м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Лоб (1 сеанс) женская",
    price: "1000 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция 10 Пальцев (1 сеанс) женская",
    price: "800 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Декольте (1 сеанс) женская",
    price: "2500 ₽",
    duration: "20м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Грудь (1 сеанс) женская",
    price: "2000 ₽",
    duration: "20м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Ореолы (1 сеанс) женская",
    price: "1500 ₽",
    duration: "10м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Подмышечные впадины (1 сеанс) женская",
    price: "1600 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Живот полностью (1 сеанс) женская",
    price: "3000 ₽",
    duration: "20м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Белая линия живота (1 сеанс) женская",
    price: "1600 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Спина нижняя треть/крестец (1 сеанс) женская",
    price: "5000 ₽",
    duration: "20м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Глубокое бикини (1 сеанс) женская",
    price: "3000 ₽",
    duration: "40м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Бикини классика (1 сеанс) женская",
    price: "2500 ₽",
    duration: "20м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Бёдра полностью (1 сеанс) женская",
    price: "3000 ₽",
    duration: "30м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Внутренняя часть бёдер (1 сеанс) женская",
    price: "2500 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Передняя часть бёдер (1 сеанс) женская",
    price: "2500 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Задняя часть бёдер (1 сеанс) женская",
    price: "2500 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Ягодицы (1 сеанс) женская",
    price: "3000 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Межъягодичная зона (1 сеанс) женская",
    price: "2000 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Плечи (1 сеанс) женская",
    price: "2800 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Руки до локтя (1 сеанс) женская",
    price: "2000 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Руки полностью (1 сеанс) женская",
    price: "4000 ₽"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Ноги до колен (с коленями) (1 сеанс) женская",
    price: "3000 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Ноги полностью (1 сеанс) женская",
    price: "5000 ₽",
    duration: "30м"
  },

  // Эпиляция - Лазерная эпиляция (мужская) прайс +10%
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Верхняя губа (1 сеанс) мужская",
    price: "880 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Подбородок (1 сеанс) мужская",
    price: "880 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Межбровье (1 сеанс) мужская",
    price: "880 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Щёки (1 сеанс) мужская",
    price: "1100 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Виски (1 сеанс) мужская",
    price: "1100 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Шея передняя поверхность (1 сеанс) мужская",
    price: "1430 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Шея задняя поверхность (1 сеанс) мужская",
    price: "1430 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Нос (1 сеанс) мужская",
    price: "680 ₽",
    duration: "10м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Лоб (1 сеанс) мужская",
    price: "1100 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция 10 Пальцев (1 сеанс) мужская",
    price: "880 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Декольте (1 сеанс) мужская",
    price: "2750 ₽",
    duration: "20м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Грудь (1 сеанс) мужская",
    price: "2200 ₽",
    duration: "20м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Ореолы (1 сеанс) мужская",
    price: "1650 ₽",
    duration: "10м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Подмышечные впадины (1 сеанс) мужская",
    price: "1760 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Живот полностью (1 сеанс) мужская",
    price: "3300 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Белая линия живота (1 сеанс) мужская",
    price: "1760 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Спина нижняя треть/крестец (1 сеанс) мужская",
    price: "5500 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Бёдра полностью (1 сеанс) мужская",
    price: "3300 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Внутренняя часть бёдер (1 сеанс) мужская",
    price: "2750 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Передняя часть бёдер (1 сеанс) мужская",
    price: "2750 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Задняя часть бёдер (1 сеанс) мужская",
    price: "2750 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Ягодицы (1 сеанс) мужская",
    price: "3300 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Межъягодичная зона (1 сеанс) мужская",
    price: "2200 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Плечи (1 сеанс) мужская",
    price: "3080 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Руки до локтя (1 сеанс) мужская",
    price: "2200 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Руки полностью (1 сеанс) мужская",
    price: "4400 ₽",
    duration: "30м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Ноги до колен (с коленями) (1 сеанс) мужская",
    price: "3300 ₽",
    duration: "15м"
  },
  {
    categoryId: "epilation",
    categoryName: "Эпиляция",
    name: "Лазерная эпиляция Ноги полностью (1 сеанс) мужская",
    price: "5500 ₽",
    duration: "40м"
  },
];


export function getPricelistData(): PriceItem[] {
  return pricelistData;
} 
