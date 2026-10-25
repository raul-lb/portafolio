import { logrosData } from "../data/logrosData"

export default function Logros() {
    return (
        <div>
            <div id="logros" className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6 pt-10">
                <h2 className="text-4xl font-title font-extrabold tracking-wider leading-none md:text-5xl lg:text-5xl text-white text-center mt-5 mb-10">
                    Logros
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 mx-3 md:mx-0">
                    {logrosData.map((logro) => (
                        <div
                            key={logro.id}
                            className="relative overflow-hidden group rounded-lg bg-black border border-grisclaro border-opacity-20 bg-opacity-20"
                        >
                            <div
                                className="bg-cover bg-center w-full h-80 transition duration-500 transform group-hover:scale-110"
                                style={{ backgroundImage: `url(/img/${logro.imagen}.webp)` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-90 transition duration-300"></div>
                            </div>
                            <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
                                <div className="flex items-end justify-end opacity-0 group-hover:opacity-100 transition duration-500">
                                    <p className="text-grisclaro2">{logro.fecha}</p>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                                    <a
                                        href={encodeURI(logro.archivo)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex gap-1 items-center py-2.5 px-5 text-sm text-white font-medium rounded-full border transition duration-300 bg-colorboton hover:bg-colorboton hover:scale-105 hover:shadow-[0_0_40px_3px_rgba(30,125,103,0.7)] opacity-0 group-hover:opacity-100"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H19.5V12M19.25 6.25L10.5 15m-2.25-9H6a1.5 1.5 0 0 0-1.5 1.5v10.5A1.5 1.5 0 0 0 6 19.5h10.5A1.5 1.5 0 0 0 18 18v-2.25" />
                                        </svg>
                                        Ver Certificado
                                    </a>
                                </div>
                                <div className="text-white opacity-0 group-hover:opacity-100 transition duration-500">
                                    <h3 className="text-xl font-bold">{logro.titulo}</h3>
                                    <p className="mt-2 text-sm text-grisclaro2">{logro.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
