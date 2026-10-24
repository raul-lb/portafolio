import { headerData } from "../data/headerData"
import { redesData } from "../data/redesData"

export default function Landing() {
    return(
        <section className="[background-image:url(/img/hero.webp)] bg-top bg-cover min-h-[915px] py-12 lg:min-h-[700px] lg:py-0 flex items-center">
            <div id="inicio" className="mx-auto grid w-full max-w-screen-xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2 lg:gap-8">
                    <div className="relative isolate order-first mx-auto grid aspect-square w-full max-w-[620px] place-items-center transition-transform duration-500 lg:order-last lg:-translate-x-8 2xl:-translate-x-16">
                        <div className="relative z-10 mx-auto aspect-square w-full max-w-[540px] lg:max-w-[620px]">
                            <img 
                                className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] object-cover object-center shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-4 ring-white/80"
                                src={`/img/${headerData.imagen}`}
                                alt="Imagen de Raúl Larrea, Ingeniero Informático" />
                        </div>
                        <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible" viewBox="0 0 600 600" aria-hidden="true">
                            <path d="M72 315 130 282 92 250 171 237 132 203 214 218 190 164 270 194 291 124 337 184 383 130 397 202 469 161 447 233 523 222 470 280 546 312 463 334 511 385 425 370 444 443 371 403 337 480 299 410 247 451 254 376 178 414 198 350 111 360Z" fill="#F8FAFC" />
                            <path d="M104 226 166 209 142 187 214 196 188 171 250 188" fill="none" stroke="#F8FAFC" strokeWidth="13" strokeLinecap="round" />
                            <path d="M382 425 432 446 416 468 477 453" fill="none" stroke="#F8FAFC" strokeWidth="12" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="order-last min-w-0 w-full lg:order-first lg:translate-x-8 2xl:translate-x-16">
                        <div className="text-center lg:text-left">
                            <div>
                                <p className="text-[#9ae5db] font-semibold text-2xl mb-2 leading-none">Hola, soy</p>
                                <h1 className="text-4xl font-title font-black leading-none md:text-6xl lg:text-5xl 2xl:text-7xl text-white">{headerData.nombre}</h1>
                                <p className="mb-4 mt-2 lg:mt-0 text-2xl font-semibold font-secundary leading-none md:text-3xl lg:text-4xl text-textdestacado"> {headerData.titulo}</p>
                                <p className="mb-6 text-lg font-normal text-grisclaro2 md:text-base 2xl:text-xl [text-wrap:balance]">{headerData.descripcion}</p>
                            </div>
                            <div className="flex items-center justify-center gap-5 lg:justify-start">
                                
                                <a href="/cv-raul-larrea.pdf" target="_blank" rel="noopener noreferrer" className="flex gap-1 items-center py-2.5 px-5 text-sm text-white font-medium  bg-transparent rounded-full border transition duration-300 hover:bg-colorboton hover:scale-105 hover:shadow-[0_0_20px_3px_rgba(30,125,103,0.7)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                        </svg>
                                        Descargar CV
                                </a>
                                <ul className='flex gap-4'>
                                    {redesData.map(red => (
                                        <li  key={red.id} className='cursor-pointer transition-all duration-300 hover:scale-150'>
                                            <a target="_blank" href={red.sitioWeb}>
                                                <img className='w-4 h-4' title={red.nombre} src={`/img/${red.imagen}.svg`} alt={`imagen red social ${red.nombre}`} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}
