import React from 'react'
import { Nav } from '../src/components/Nav'

const PriceListPage = () => {
    return (
        <>
            <Nav />
            <main className="px-6 py-8 max-w-6xl mx-auto space-y-10 text-slate-100">
                <h1 className="text-4xl font-bold text-center uppercase tracking-[0.24em] text-gold">
                    Cennik Biały Lotos
                </h1>

                <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-black/20">
                    <h2 className="text-2xl font-semibold text-gold mb-4">Kosmetyka</h2>
                    <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900 p-4 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                        <span>Usługa</span>
                        <span>Cena</span>
                        <span>Czas</span>
                    </div>
                    <div className="space-y-3 mt-4 text-sm leading-6 text-slate-200">
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Henna + regulacja brwi</span>
                            <span>60,00 zł</span>
                            <span>20 min</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Regulacja brwi</span>
                            <span>30,00 zł</span>
                            <span>10 min</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Uzupełnienie rzęs 3D</span>
                            <span>140,00 zł</span>
                            <span>1 godz. 30 min</span>
                        </div>
                    </div>
                </section>

                <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-black/20">
                    <h2 className="text-2xl font-semibold text-gold mb-4">
                        Makijaż permanentny
                    </h2>
                    <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900 p-4 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                        <span>Usługa</span>
                        <span>Cena</span>
                        <span>Czas</span>
                    </div>
                    <div className="space-y-3 mt-4 text-sm leading-6 text-slate-200">
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Kreski Górne</span>
                            <span>950,00 zł</span>
                            <span>3 h</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Brwi</span>
                            <span>750,00 zł</span>
                            <span>2 h</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Usta</span>
                            <span>850,00 zł</span>
                            <span>3 h</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Kreski Dolne</span>
                            <span>500,00 zł</span>
                            <span>40 min</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Pigmentacja skóry głowy</span>
                            <span>800,00 zł</span>
                            <span>3 h</span>
                        </div>
                    </div>
                </section>

                <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-black/20">
                    <h2 className="text-2xl font-semibold text-gold mb-4">
                        Korekta po 6 tygodniach
                    </h2>
                    <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900 p-4 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                        <span>Usługa</span>
                        <span>Cena</span>
                        <span>Czas</span>
                    </div>
                    <div className="space-y-3 mt-4 text-sm leading-6 text-slate-200">
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Kreski Dolne</span>
                            <span>100,00 zł</span>
                            <span>1 h</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Usta</span>
                            <span>150,00 zł</span>
                            <span>1 h 30 min</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Kreski Górne</span>
                            <span>150,00 zł</span>
                            <span>1 h 30 min</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Brwi</span>
                            <span>130,00 zł</span>
                            <span>1 h 30 min</span>
                        </div>
                    </div>
                </section>

                <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-black/20">
                    <h2 className="text-2xl font-semibold text-gold mb-4">
                        Odświeżenie do 1 roku (Stałe Klientki)
                    </h2>
                    <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900 p-4 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                        <span>Usługa</span>
                        <span>Cena</span>
                        <span>Czas</span>
                    </div>
                    <div className="space-y-3 mt-4 text-sm leading-6 text-slate-200">
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Kreski Dolne</span>
                            <span>250,00 zł</span>
                            <span>40 min</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Brwi</span>
                            <span>375,00 zł</span>
                            <span>1 h 30 min</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Kreski Górne</span>
                            <span>475,00 zł</span>
                            <span>2 h</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Usta</span>
                            <span>425,00 zł</span>
                            <span>2 h</span>
                        </div>
                    </div>
                </section>

                <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-black/20">
                    <h2 className="text-2xl font-semibold text-gold mb-4">
                        Odświeżenie do 2 lat (Stałe Klientki)
                    </h2>
                    <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900 p-4 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                        <span>Usługa</span>
                        <span>Cena</span>
                        <span>Czas</span>
                    </div>
                    <div className="space-y-3 mt-4 text-sm leading-6 text-slate-200">
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Kreski Dolne</span>
                            <span>350,00 zł</span>
                            <span>1 h</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Usta</span>
                            <span>595,00 zł</span>
                            <span>2 h</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Brwi</span>
                            <span>525,00 zł</span>
                            <span>2 h</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Kreski Górne</span>
                            <span>665,00 zł</span>
                            <span>2 h 30 min</span>
                        </div>
                    </div>
                </section>

                <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-black/20">
                    <h2 className="text-2xl font-semibold text-gold mb-4">
                        Dotychczas zebrany cennik główny
                    </h2>
                    <div className="grid grid-cols-[2fr_1fr] gap-4 rounded-xl bg-slate-900 p-4 text-sm font-semibold uppercase tracking-[0.16em] text-gold">
                        <span>Usługa</span>
                        <span>Cena</span>
                    </div>
                    <div className="space-y-3 mt-4 text-sm leading-6 text-slate-200">
                        <div className="grid grid-cols-[2fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Brwi</span>
                            <span>750,00 zł</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Usta</span>
                            <span>850,00 zł</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Kreski Górne</span>
                            <span>950,00 zł</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Kreski Dolne</span>
                            <span>500,00 zł</span>
                        </div>
                        <div className="grid grid-cols-[2fr_1fr] gap-4 rounded-xl bg-slate-900/80 p-4">
                            <span>Pigmentacja skóry głowy</span>
                            <span>800,00 zł</span>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default PriceListPage
