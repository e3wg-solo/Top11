'use client';

import { FadeInUp } from "@/components/animations";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Users, Award, Heart, Star, X, ChevronLeft, ChevronRight, PartyPopper } from 'lucide-react';
import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Marquee } from "@/components/ui/3d-testimonails";
import { EmblaCarouselType } from 'embla-carousel';

const teamPhotos = [
  "/gallery/ph6.webp",
  "/gallery/ph2-3.webp",
  "/gallery/ph5.webp",
  "/gallery/ph2-2.webp",
  "/gallery/ph2-1.webp",
  "/gallery/ph1-2.webp",
  "/gallery/ph1-1.webp",
  "/gallery/ph4.webp",
  "/gallery/ph3.webp",
  "/gallery/ph2.webp",
  "/gallery/ph1.webp",
];



export default function AboutUsPage() {
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const handleApiChange = useCallback((api: EmblaCarouselType | undefined) => {
    setEmblaApi(api || null);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const openModal = useCallback((index: number) => {
    setSelectedImage(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  }, []);

  const goToPrevious = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? teamPhotos.length - 1 : selectedImage - 1);
    }
  }, [selectedImage]);

  const goToNext = useCallback(() => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === teamPhotos.length - 1 ? 0 : selectedImage + 1);
    }
  }, [selectedImage]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    
    // Определяем, что это свайп (движение больше 10px)
    const distance = Math.abs(touchStart - currentTouch);
    if (distance > 10) {
      setIsSwiping(true);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    // Если не было движения, это тап
    if (!touchEnd || !isSwiping) {
      // Проверяем, что тап был по фону, а не по изображению
      const target = e.target as HTMLElement;
      const isImage = target.tagName === 'IMG' || target.closest('img');
      if (!isImage) {
        closeModal();
      }
    } else {
      // Обработка свайпа
      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;

      if (isLeftSwipe) {
        goToNext();
      } else if (isRightSwipe) {
        goToPrevious();
      }
    }
    
    // Сброс состояния
    setTouchStart(null);
    setTouchEnd(null);
    setIsSwiping(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    const handleKeyNavigation = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === 'ArrowLeft') {
          goToPrevious();
        } else if (e.key === 'ArrowRight') {
          goToNext();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleKeyNavigation);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleKeyNavigation);
    };
  }, [isModalOpen, closeModal, goToPrevious, goToNext]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="bg-black via-background to-accent/10 pt-5">
        <div className="container mx-auto px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="flex items-center gap-4 mb-8 bg-black">
                <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                  Назад на главную
                </Link>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                О нас
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Познакомьтесь с нашей командой и узнайте больше о TOPICONIC
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Информация о салоне */}
      <section className="py-8 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">
                  Наша история
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Добро пожаловать в TOPICONIC
                </h2>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <Card className="p-8 sm:p-12 bg-gradient-to-br from-muted/30 to-background">
                <CardContent className="p-0">
                  <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                    <p className="text-lg mb-6">
                      Основательница TOPICONIC бьюти & спа <strong className="text-foreground">Кристина Манукян</strong> уверена: кроме хорошего сервиса, безопасности и оправданных ожиданий, в понятие качества в индустрии красоты входит нечто большее – то, каким будет новый облик посетителя: будет ли он более привлекательным, будет ли соответствовать образу жизни, темпераменту и тому впечатлению, которое человек хочет производить на окружающих.
                    </p>
                    
                    <blockquote className="border-l-4 border-brand-primary pl-6 italic my-8">
                      <p className="text-lg">
                        Мы – команда профессионалов, которая нацелена на главный результат – усовершенствовать образ посетителя, сделать его более гармоничным. В нашем салоне клиент забудет о своих проблемах, ощутит совершенно новое отношение к себе, к своему здоровью, душевному состоянию, внешности.
                      </p>
                    </blockquote>
                    
                    <p className="text-lg">
                      <strong className="text-foreground">TOPICONIC бьюти & спа</strong> предлагает широкий спектр услуг в сфере красоты и здоровья: от лечебной, инъекционной, аппаратной и лазерной косметологии до ногтевого сервиса, парикмахерского и массажного искусства, визажа и бровистики.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Почему мы */}
      <section className="py-8 sm:py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Почему выбирают нас
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Мы не просто оказываем услуги красоты — мы создаём уникальный опыт трансформации
                </p>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeInUp delay={0.2}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                        <Heart className="h-5 w-5 text-brand-primary" />
                      </div>
                      Персональный подход
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Каждый клиент уникален, поэтому мы создаём индивидуальную программу красоты, учитывая ваши особенности, пожелания и образ жизни.
                    </p>
                  </CardContent>
                </Card>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                        <Award className="h-5 w-5 text-brand-primary" />
                      </div>
                      Высокие стандарты
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Мы следуем самым строгим стандартам качества и безопасности, используем только сертифицированные материалы и оборудование.
                    </p>
                  </CardContent>
                </Card>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                        <Users className="h-5 w-5 text-brand-primary" />
                      </div>
                      Команда экспертов
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Наши мастера — это не просто специалисты, это художники, которые превращают ваши мечты о красоте в реальность.
                    </p>
                  </CardContent>
                </Card>
              </FadeInUp>

              <FadeInUp delay={0.5}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-brand-primary/10 rounded-full flex items-center justify-center">
                        <Star className="h-5 w-5 text-brand-primary" />
                      </div>
                      Атмосфера комфорта
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Уютная атмосфера нашего салона поможет вам расслабиться и забыть о повседневных заботах, наслаждаясь процессом преображения.
                    </p>
                  </CardContent>
                </Card>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Бегущая строка */}
      <section className="py-2 bg-brand-primary overflow-hidden">
        <Marquee 
          repeat={6} 
          pauseOnHover={false}
          className="text-white text-xl sm:text-xl lg:text-2xl font-bold"
        >
          <span className="mx-8 flex items-center gap-3">
            <PartyPopper className="h-6 w-6 sm:h-8 sm:w-8" />
            Нам исполнилось 5 лет ! 
            <PartyPopper className="h-6 w-6 sm:h-8 sm:w-8" />
          </span>
        </Marquee>
      </section>

      {/* Карусель с фотографиями */}
      <section className="py-8 sm:py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4">
                  Наша атмосфера
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Галерея нашего салона
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ощутите атмосферу нашего салона — уют, стиль и забота в каждой детали.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="max-w-4xl mx-auto">
                <Carousel
                  opts={{
                    align: "center",
                    loop: true,
                    skipSnaps: false,
                    dragFree: false,
                    containScroll: "trimSnaps",
                  }}
                  className="w-full"
                  setApi={handleApiChange}
                >
                  <CarouselContent>
                    {teamPhotos.map((photo, index) => (
                      <CarouselItem key={index} className="transform-gpu">
                        <div 
                          className="relative aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer"
                          onClick={() => openModal(index)}
                        >
                          <Image
                            src={photo}
                            alt={`Gallery ${index + 1}`}
                            width={1000}
                            height={600}
                            quality={100}
                            className="object-cover w-full h-auto rounded-2xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                            loading={index === 0 ? 'eager' : 'lazy'}
                            priority={index === 0}
                            placeholder="blur"
                            blurDataURL="/placeholder/blur.jpg"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                
                {/* Navigation buttons */}
                <div className="flex items-center justify-center gap-6 mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollPrev}
                    className="h-12 w-12 rounded-full"
                  >
                    <ArrowLeft className="h-6 w-6" />
                    <span className="sr-only">Previous image</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={scrollNext}
                    className="h-12 w-12 rounded-full"
                  >
                    <ArrowLeft className="h-6 w-6 rotate-180" />
                    <span className="sr-only">Next image</span>
                  </Button>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Modal for full-screen image */}
      {isModalOpen && selectedImage !== null && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm">
          {/* Close button - visible on all devices */}
          <Button
            variant="ghost"
            size="icon"
            onClick={closeModal}
            className="fixed top-20 right-4 z-[10001] sm:top-20 sm:right-4 z-[10001] text-white bg-black/80 hover:bg-white/40 border-2 border-white/30 h-10 w-10 sm:h-10 sm:w-10 rounded-full transition-all duration-200 shadow-2xl"
            aria-label="Закрыть"
          >
            <X className="h-8 w-8 sm:h-6 sm:w-6 stroke-[3]" />
          </Button>

          {/* Previous button - visible on desktop */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="fixed left-4 top-1/2 transform -translate-y-1/2 z-[10000] text-white bg-black/80 hover:bg-white/40 border-2 border-white/30 h-12 w-12 rounded-full hidden sm:flex transition-all duration-200 shadow-2xl"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Next button - visible on desktop */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="fixed right-4 top-1/2 transform -translate-y-1/2 z-[10000] text-white bg-black/80 hover:bg-white/40 border-2 border-white/30 h-12 w-12 rounded-full hidden sm:flex transition-all duration-200 shadow-2xl"
            aria-label="Следующее фото"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Mobile navigation buttons */}
          <div className="fixed bottom-20 left-0 right-0 flex justify-center gap-4 z-[10000] sm:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="text-white bg-black/80 hover:bg-white/40 border-2 border-white/30 h-12 w-12 rounded-full transition-all duration-200 shadow-2xl"
              aria-label="Предыдущее фото"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="text-white bg-black/80 hover:bg-white/40 border-2 border-white/30 h-12 w-12 rounded-full transition-all duration-200 shadow-2xl"
              aria-label="Следующее фото"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Image container */}
          <div 
            className="relative w-full h-full flex items-center justify-center p-2 sm:p-4"
            onClick={closeModal}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={teamPhotos[selectedImage]}
                alt={`Gallery ${selectedImage + 1}`}
                width={2560}
                height={1440}
                quality={100}
                className="w-auto h-auto max-w-[92vw] max-h-[75vh] sm:max-w-[95vw] sm:max-h-[90vh] object-contain rounded-lg select-none"
                loading="lazy"
                draggable={false}
              />
              
              {/* Image counter */}
              <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium z-[10000] shadow-lg">
                {selectedImage + 1} / {teamPhotos.length}
              </div>

              {/* Mobile swipe hint */}
              <div className="fixed bottom-36 left-1/2 transform -translate-x-1/2 text-white/60 text-xs sm:hidden z-[10000] bg-black/50 px-3 py-1 rounded-full">
                Свайпните для навигации
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 