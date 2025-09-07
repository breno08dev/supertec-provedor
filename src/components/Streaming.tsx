// src/components/Streaming.tsx

import { Tv, Clapperboard, ArrowRight } from 'lucide-react';
import moviesImage from '../assets/streaming-movies.jpg'; // <-- Adicione sua imagem de filmes aqui
import sportsImage from '../assets/streaming-sports.jpg'; // <-- Adicione sua imagem de esportes aqui

const Streaming = () => {
    const scrollToPlans = () => {
        document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="streaming" className="py-20 px-4 md:px-6 bg-gradient-to-br from-background-dark via-black to-background-dark text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Assine 300MB e ganhe <span className="text-secondary">Streaming Grátis</span>
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Leve o entretenimento para o próximo nível. Filmes, séries e o melhor do futebol ao vivo, tudo por nossa conta!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Coluna de Imagens */}
                    <div className="relative h-80 lg:h-96">
                        <img 
                            src={moviesImage} 
                            alt="Cenas de filmes e séries populares" 
                            className="absolute top-0 left-0 w-2/3 h-auto rounded-2xl shadow-2xl object-cover transform -rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-105"
                        />
                        <img 
                            src={sportsImage} 
                            alt="Partida de futebol ao vivo na TV" 
                            className="absolute bottom-0 right-0 w-2/3 h-auto rounded-2xl shadow-2xl object-cover transform rotate-6 border-4 border-background-dark transition-transform duration-300 hover:rotate-0 hover:scale-105"
                        />
                    </div>

                    {/* Coluna de Texto e Benefícios */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center space-x-4 mb-3">
                                <div className="bg-highlight p-3 rounded-full">
                                    <Clapperboard className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">Filmes e Séries em Alta Definição</h3>
                            </div>
                            <p className="text-blue-100 pl-16">
                                Milhares de títulos, dos clássicos aos últimos lançamentos, para você maratonar quando quiser.
                            </p>
                        </div>
                        
                        <div>
                            <div className="flex items-center space-x-4 mb-3">
                                <div className="bg-highlight p-3 rounded-full">
                                    <Tv className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">Futebol e Esportes Ao Vivo</h3>
                            </div>
                            <p className="text-blue-100 pl-16">
                                Não perca nenhum lance do seu time do coração. Assista aos principais campeonatos nacionais e internacionais.
                            </p>
                        </div>

                        <div className="pt-4 text-center lg:text-left">
                            <button
                                onClick={scrollToPlans}
                                className="group bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3 w-full sm:w-auto"
                            >
                                <span>Ver Plano de 300MB</span>
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Streaming;