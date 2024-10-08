"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shuffle, AlertCircle, Chrome, Brain, Edit3 } from "lucide-react"
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


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

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <span className="sr-only">Learnet</span>
            <Image src="/icon.svg" alt="Logo" width={32} height={32} className="rounded-sm" />
            <span className="ml-2 text-2xl font-bold">Learnet</span>
          </Link>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <AnimatedSection>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Opanuj angielski z interaktywnymi ćwiczeniami
                  </h1>
                </AnimatedSection>
                <AnimatedSection>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Popraw swoje umiejętności językowe dzięki naszej innowacyjnej platformie do nauki. Ćwicz gdziekolwiek i kiedykolwiek, całkowicie za darmo.
                  </p>
                </AnimatedSection>
                <AnimatedSection>
                  <div className="space-x-4">
                    <Link href="https://app.learnet.pl">
                      <Button>Rozpocznij za darmo</Button>
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <AnimatedSection>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Nasze darmowe ćwiczenia</h2>
              </AnimatedSection>
              <AnimatedSection>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Brain className="w-6 h-6 mr-2" />
                        Uzupełnij Luki
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Uzupełnij luki w zdaniach, wybierając odpowiednie słowa</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shuffle className="w-6 h-6 mr-2" />
                        Układanie Zdań
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Popraw swoje umiejętności budowania zdań</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Edit3 className="w-6 h-6 mr-2" />
                        Uzupełnij Brakujące Słowa
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Ćwicz swoje umiejętności językowe, uzupełniając brakujące słowa w zdaniach</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
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
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <AnimatedSection>
                  <img
                    alt="Rozszerzenie Chrome"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                    height="310"
                    src="/placeholder.svg?height=310&width=550"
                    width="550"
                  />
                </AnimatedSection>
                <div className="flex flex-col justify-center space-y-4">
                  <AnimatedSection>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      Ucz się z dowolnej strony internetowej
                    </h2>
                  </AnimatedSection>
                  <AnimatedSection>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Nasze darmowe rozszerzenie Chrome pozwala tworzyć spersonalizowane ćwiczenia z dowolnej strony internetowej. Dodawaj napotkane zdania i przekształcaj je w interaktywne materiały do nauki.
                    </p>
                  </AnimatedSection>
                  <AnimatedSection>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Link
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-300 px-8 text-sm font-medium text-gray-600 shadow transition-colors hover:bg-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:focus-visible:ring-gray-300"
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
          
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
            <AnimatedSection>
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      Rozpocznij naukę już dziś
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Dołącz do tysięcy uczniów poprawiających swoje umiejętności językowe dzięki naszym interaktywnym ćwiczeniom i spersonalizowanemu doświadczeniu nauki. To całkowicie za darmo!
                    </p>
                    <div className="w-full max-w-sm space-y-2">
                      <Link href="https://app.learnet.pl">
                        <Button className="w-full">Zarejestruj się za darmo</Button>
                      </Link>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Nie wymagamy karty kredytowej. Zacznij naukę angielskiego już dziś!
                      </p>
                    </div>
                </div>
              </div>
            </AnimatedSection>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Lernet. Wszelkie prawa zastrzeżone.</p>
        </footer>
      </div>
    </div>
  );
}
