"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PromoCard {
  id: number;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  color: "primary" | "secondary" | "accent";
}

const promoCards: PromoCard[] = [
  {
    id: 1,
    title: "Эпиляция зоны бикини + подмышки",
    description: "Комплексная эпиляция двух зон по специальной цене",
    discount: "-20%",
    validUntil: "экономия до 800₽",
    color: "primary"
  },
  {
    id: 2,
    title: "Аппаратная косметология лица",
    description: "Курс из 5 процедур на выбор: RF-лифтинг, микротоки, фонофорез",
    discount: "12000₽",
    validUntil: "вместо 15000₽",
    color: "accent"
  },
  {
    id: 3,
    title: "Перманентный макияж бровей",
    description: "Натуральный татуаж бровей с коррекцией",
    discount: "-15%",
    validUntil: "для новых клиентов",
    color: "primary"
  },
  {
    id: 4,
    title: "Ламинирование + окрашивание ресниц",
    description: "Комплекс для выразительного взгляда",
    discount: "2500₽",
    validUntil: "вместо 3200₽",
    color: "secondary"
  },
  {
    id: 5,
    title: "Маникюр + педикюр + покрытие",
    description: "Комплексный уход за руками и ногами",
    discount: "3500₽",
    validUntil: "вместо 4500₽",
    color: "accent"
  },
  {
    id: 6,
    title: "Безлимитный солярий на месяц",
    description: "Неограниченное количество посещений солярия",
    discount: "5000₽",
    validUntil: "до конца года",
    color: "primary"
  }
];

export function PromoCardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleCardClick = (card: PromoCard) => {
    const message = `Здравствуйте! Меня интересует акция "${card.title}" (${card.discount}) - ${card.description}. Подскажите, пожалуйста, подробности!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/79937775559?text=${encodedMessage}`, '_blank');
  };

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (isAutoPlaying) {
        setDirection(1);
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % promoCards.length;
          return nextIndex >= 0 && nextIndex < promoCards.length ? nextIndex : 0;
        });
      }
    }, 6000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % promoCards.length;
      return nextIndex >= 0 && nextIndex < promoCards.length ? nextIndex : 0;
    });
    setIsAutoPlaying(false);
    stopAutoPlay();
    setTimeout(() => {
      setIsAutoPlaying(true);
      startAutoPlay();
    }, 10000); // Возобновить автопрокрутку через 10 секунд
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => {
      const prevIdx = prevIndex - 1;
      return prevIdx < 0 ? promoCards.length - 1 : prevIdx;
    });
    setIsAutoPlaying(false);
    stopAutoPlay();
    setTimeout(() => {
      setIsAutoPlaying(true);
      startAutoPlay();
    }, 10000); // Возобновить автопрокрутку через 10 секунд
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    stopAutoPlay();
    setTimeout(() => {
      setIsAutoPlaying(true);
      startAutoPlay();
    }, 10000);
  };

  useEffect(() => {
    if (promoCards.length === 0) return;
    startAutoPlay();
    return () => stopAutoPlay();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoPlaying]);

  // Проверяем, что массив карточек не пустой
  if (promoCards.length === 0) {
    return null;
  }

  const currentCard = promoCards[currentIndex];

  // Проверяем, что карточка существует
  if (!currentCard) {
    return null;
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "from-[rgb(172,147,74)]/80 to-[rgb(172,147,74)]/60 border-[rgb(172,147,74)]/40";
      case "secondary":
        return "from-[rgb(172,147,74)]/70 to-[rgb(172,147,74)]/50 border-[rgb(172,147,74)]/30";
      case "accent":
        return "from-[rgb(218,185,103)]/80 to-[rgb(218,185,103)]/60 border-[rgb(218,185,103)]/40";
      default:
        return "from-[rgb(172,147,74)]/80 to-[rgb(172,147,74)]/60 border-[rgb(172,147,74)]/40";
    }
  };

  // Анимации для framer-motion
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 15 : -15,
    }),
  };

  const contentVariants = {
    enter: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
  };

  const badgeVariants = {
    enter: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    center: {
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotate: 10,
    },
  };

  const dotVariants = {
    enter: {
      scale: 0,
      opacity: 0,
    },
    center: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0,
      opacity: 0,
    },
  };

  // Touch/swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Navigation buttons */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrev}
          className="h-8 w-8 rounded-full bg-white/90 hover:bg-white border-white/20 hover:border-white/40 shadow-lg"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="h-8 w-8 rounded-full bg-white/90 hover:bg-white border-white/20 hover:border-white/40 shadow-lg"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Контейнер с фиксированной высотой для предотвращения "прыжков" */}
      <div 
        className="h-[200px] relative"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
              rotateY: { duration: 0.4 },
            }}
            className="absolute inset-0"
          >
            <Card 
              onClick={() => handleCardClick(currentCard)}
              className={cn(
                "h-full overflow-hidden bg-gradient-to-br border-2 cursor-pointer",
                "hover:scale-105 hover:shadow-xl hover:shadow-[rgb(172,147,74)]/20 hover:border-[rgb(172,147,74)]/50",
                "active:scale-95 active:transition-transform active:duration-150",
                getColorClasses(currentCard.color)
              )}
            >
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <motion.div 
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="flex items-start justify-between mb-4"
                >
                  <div className="flex-1 text-left min-h-0">
                    <motion.h3 
                      variants={contentVariants}
                      className="text-lg font-semibold text-white mb-1 text-left line-clamp-2"
                    >
                      {currentCard.title}
                    </motion.h3>
                    <motion.p 
                      variants={contentVariants}
                      className="text-sm text-white/80 text-left line-clamp-2"
                    >
                      {currentCard.description}
                    </motion.p>
                  </div>
                  <motion.div
                    variants={badgeVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <Badge className="text-lg font-bold px-3 py-1 ml-3 bg-[rgb(172,147,74)] text-white flex-shrink-0 shadow-lg">
                      {currentCard.discount}
                    </Badge>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex items-center justify-between"
                >
                  <motion.p 
                    variants={contentVariants}
                    className="text-xs text-white/70 text-left"
                  >
                    {currentCard.validUntil}
                  </motion.p>
                  <div className="flex space-x-1">
                    {promoCards.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          goToSlide(index);
                        }}
                        variants={dotVariants}
                        initial="enter"
                        animate={index === currentIndex ? "center" : "center"}
                        exit="exit"
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={cn(
                          "w-2 h-2 rounded-full transition-all duration-200 hover:scale-110",
                          index === currentIndex 
                            ? "bg-white scale-125 shadow-lg shadow-white/50" 
                            : "bg-white/30 scale-100 hover:bg-white/50"
                        )}
                      />
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Click hint */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-center mt-3"
      >
        <p className="text-xs text-white/60 flex items-center gap-1">
          Нажмите на акцию для связи в WhatsApp
        </p>
      </motion.div>
    </div>
  );
}