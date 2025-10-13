"use client";

import { motion, Variants } from 'framer-motion';
import { Tv, Clapperboard, ArrowRight } from 'lucide-react';
import moviesImage from '../Assets/streaming-movies.webp'; // Otimizado para .webp
import sportsImage from '../Assets/streaming-sports.webp'; // Otimizado para .webp

const Streaming = () => {
    const scrollToPlans = () => {
        document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
    };

    // Variantes com transições mais lentas e suaves
    const titleVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.0, ease: 'easeOut' } // Duração ajustada
        }
    };

    const imageContainerVariants: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } // Duração ajustada
        }
    };

    const textContainerVariants: Variants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 } // Duração e delay ajustados
        }
    };

    return (
        <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-br from-background-dark via-black to-background-dark text-white overflow-hidden" id="streaming">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Assine 300MB e ganhe <span className="text-secondary">Streaming Grátis</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-md sm:max-w-xl md:max-w-3xl mx-auto">
                        Leve o entretenimento para o próximo nível. Filmes, séries e o melhor do futebol ao vivo, tudo por nossa conta!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
                    {/* Imagens */}
                    <motion.div
                        className="relative h-72 sm:h-80 md:h-96"
                        variants={imageContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <img
                            src={moviesImage}
                            alt="Cenas de filmes e séries populares"
                            loading="lazy" // Otimização de carregamento
                            className="absolute top-0 left-0 w-2/3 sm:w-1/2 md:w-2/3 h-auto rounded-2xl shadow-2xl object-cover transform -rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-105"
                        />
                        <img
                            src={sportsImage}
                            alt="Partida de futebol ao vivo na TV"
                            loading="lazy" // Otimização de carregamento
                            className="absolute bottom-0 right-0 w-2/3 sm:w-1/2 md:w-2/3 h-auto rounded-2xl shadow-2xl object-cover transform rotate-6 border-4 border-background-dark transition-transform duration-300 hover:rotate-0 hover:scale-105"
                        />
                    </motion.div>

                    {/* Textos e botões */}
                    <motion.div
                        className="space-y-6 sm:space-y-8"
                        variants={textContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div>
                            <div className="flex items-center space-x-3 sm:space-x-4 mb-2 sm:mb-3">
                                <div className="bg-highlight p-2 sm:p-3 rounded-full">
                                    <Clapperboard className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold">Filmes e Séries em Alta Definição</h3>
                            </div>
                            <p className="text-blue-100 pl-12 sm:pl-16 text-sm sm:text-base">
                                Milhares de títulos, dos clássicos aos últimos lançamentos, para você maratonar quando quiser.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center space-x-3 sm:space-x-4 mb-2 sm:mb-3">
                                <div className="bg-highlight p-2 sm:p-3 rounded-full">
                                    <Tv className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold">Futebol e Esportes Ao Vivo</h3>
                            </div>
                            <p className="text-blue-100 pl-12 sm:pl-16 text-sm sm:text-base">
                                Não perca nenhum lance do seu time do coração. Assista aos principais campeonatos nacionais e internacionais.
                            </p>
                        </div>

                        <div className="pt-4 text-center md:text-left">
                            <button
                                onClick={scrollToPlans}
                                className="group bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 sm:space-x-3 w-full sm:w-auto"
                            >
                                <span>Ver Plano de 300MB</span>
                                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Streaming;