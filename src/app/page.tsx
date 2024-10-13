"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shuffle,
  AlertCircle,
  Chrome,
  Brain,
  Edit3,
  BookOpen,
  Zap,
  Clock,
  Globe,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const StepperItem = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="flex items-start mb-8">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center mr-4">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function Home() {
  const getLinkHref = (medium: string) => {
    return `https://app.learnet.pl?utm_source=landingpage&utm_medium=${medium}Start&utm_campaign=launch`;
  };

  //button end

  return (
    <div className="bg-white">
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center bg-sky-500 text-white">
          <Link className="flex items-center justify-center" href="#">
            <span className="sr-only">Learnet</span>
            <Image
              src="/icon.svg"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-sm"
            />
            <span className="ml-2 text-2xl font-bold">Learnet</span>
          </Link>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-sky-500 text-white">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="flex flex-row items-center justify-between flex-wrap md:flex-nowrap gap-10 md:gap-4">
                <div className="flex flex-col items-start space-y-4 text-left max-w-full md:max-w-[50%]">
                  <AnimatedSection>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                      Opanuj angielski z interaktywnymi ćwiczeniami
                    </h1>
                  </AnimatedSection>
                  <AnimatedSection>
                    <p className="text-sky-100 md:text-xl">
                      Popraw swoje umiejętności językowe dzięki naszej
                      innowacyjnej platformie do nauki. Ucz się angielskiego
                      poprzez słownictwo, które napotykasz codziennie, dodając
                      frazy za pomocą naszej wtyczki Chrome.
                    </p>
                  </AnimatedSection>
                  <AnimatedSection>
                    <div className="mt-4">
                      <Link href={getLinkHref("buttonStart")}>
                        <Button className="bg-white text-sky-500 hover:bg-sky-50">
                          Rozpocznij za darmo
                        </Button>
                      </Link>
                    </div>
                  </AnimatedSection>
                </div>
                <div className="">
                  <AnimatedSection>
                    <Image
                      src="/devices.png"
                      alt="Devices showing Learnet app"
                      width={666}
                      height={374}
                      className="object-contain"
                    />
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
              <AnimatedSection>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-sky-500">
                  Nasze darmowe ćwiczenia
                </h2>
              </AnimatedSection>
              <AnimatedSection>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <Card className="border-sky-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-sky-500">
                        <Brain className="w-6 h-6 mr-2" />
                        Uzupełnij Luki
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Uzupełnij luki w zdaniach, wybierając odpowiednie słowa
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-sky-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-sky-500">
                        <Shuffle className="w-6 h-6 mr-2" />
                        Układanie Zdań
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Popraw swoje umiejętności budowania zdań</p>
                    </CardContent>
                  </Card>
                  <Card className="border-sky-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-sky-500">
                        <Edit3 className="w-6 h-6 mr-2" />
                        Uzupełnij Brakujące Słowa
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Ćwicz swoje umiejętności językowe, uzupełniając
                        brakujące słowa w zdaniach
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-sky-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-sky-500">
                        <AlertCircle className="w-6 h-6 mr-2" />
                        Znajdź Błędy
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Zidentyfikuj i popraw błędy w zdaniach</p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-50">
            <div className="container px-4 md:px-6 mx-auto">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <AnimatedSection>
                  <Image
                    src="/chrome-extension.gif"
                    blurDataURL="/devices.png"
                    alt="Logo"
                    width={600}
                    height={388}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  />
                </AnimatedSection>
                <div className="flex flex-col justify-center space-y-4">
                  <AnimatedSection>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-sky-500">
                      Ucz się z dowolnej strony internetowej
                    </h2>
                  </AnimatedSection>
                  <AnimatedSection>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Nasze darmowe rozszerzenie Chrome pozwala tworzyć
                      spersonalizowane ćwiczenia z dowolnej strony internetowej.
                      Dodawaj napotkane zdania i przekształcaj je w interaktywne
                      materiały do nauki, wykorzystując słownictwo, które
                      spotykasz na co dzień.
                    </p>
                  </AnimatedSection>
                  <AnimatedSection>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Link
                        className="inline-flex h-10 items-center justify-center rounded-md bg-sky-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-950 disabled:pointer-events-none disabled:opacity-50"
                        href="#"
                      >
                        <Chrome className="mr-2 h-5 w-5" />
                        Dodaj do Chrome wkrótce
                      </Link>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
              <AnimatedSection>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-sky-500">
                  Jak to działa
                </h2>
              </AnimatedSection>
              <AnimatedSection>
                <div className="max-w-3xl mx-auto">
                  <StepperItem
                    icon={BookOpen}
                    title="Dodaj interesujące frazy"
                    description="Używaj wtyczki Chrome, aby dodawać frazy i zdania, które napotykasz podczas przeglądania internetu."
                  />
                  <StepperItem
                    icon={Edit3}
                    title="Ćwicz regularnie"
                    description="Wykonuj spersonalizowane ćwiczenia codziennie, aby poprawić swoje umiejętności językowe."
                  />
                  <StepperItem
                    icon={Zap}
                    title="Śledź postępy"
                    description="Monitoruj swoje postępy i osiągnięcia w nauce, obserwując jak rozwijasz się z czasem."
                  />
                </div>
              </AnimatedSection>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-50">
            <AnimatedSection>
              <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-sky-500">
                    Ucz się z dowolnego miejsca, w dowolnym czasie
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Learnet umożliwia naukę angielskiego gdziekolwiek jesteś i
                    kiedy tylko masz czas. Nasza platforma jest dostępna na
                    wszystkich urządzeniach, dzięki czemu możesz kontynuować
                    naukę w domu, w pracy, czy w podróży.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="flex items-center">
                      <Clock className="w-8 h-8 text-sky-500 mr-4" />
                      <p className="text-left">
                        Elastyczne godziny nauki dopasowane do Twojego
                        harmonogramu
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-8 h-8 text-sky-500 mr-4" />
                      <p className="text-left">
                        Dostęp do platformy z dowolnego miejsca na świecie
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <AnimatedSection>
              <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-sky-500">
                    Rozpocznij naukę już dziś
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Rozpocznij swoją przygodę z nauką języka angielskiego dzięki
                    naszym interaktywnym ćwiczeniom i spersonalizowanemu
                    doświadczeniu. Bądź jednym z pierwszych, którzy skorzystają
                    z tej innowacyjnej metody nauki. I pamiętaj - to całkowicie
                    za darmo!
                  </p>
                  <div className="w-full max-w-sm space-y-2">
                    <Link href={getLinkHref("buttonEnd")}>
                      <Button className="w-full bg-sky-500 text-white hover:bg-sky-600">
                        Wypróbuj zestaw darmowych ćwiczeń już teraz
                      </Button>
                    </Link>
                    <p className="text-xs text-gray-500">
                      Nie wymagamy karty kredytowej. Zacznij naukę angielskiego
                      już dziś!
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-sky-500 text-white">
          <p className="text-xs">© 2024 Learnet. Wszelkie prawa zastrzeżone.</p>
        </footer>
      </div>
    </div>
  );
}
