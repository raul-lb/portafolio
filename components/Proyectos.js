import { proyectosData } from "../data/proyectosData";
import { IconGlobal, IconGithub } from "./Icons";

export default function Proyectos() {
    return(
        <div>
            <div id="proyectos" className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6 pt-10">
                <h2 className="text-4xl font-title font-extrabold tracking-wider leading-none md:text-5xl lg:text-5xl text-white text-center mt-5 mb-10">Proyectos</h2>
                <div className="grid place-content-center md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10 md:mx-0 px-3 md:px-0">
                    {proyectosData.map(proyecto =>{
                        const imageFile = proyecto.imagen && (/\.(avif|webp|png|jpe?g|svg)$/i.test(proyecto.imagen) ? proyecto.imagen : `${proyecto.imagen}.webp`);
                        return (
                            <div key={proyecto.id} 
                                className=" overflow-hidden flex flex-col bg-black border border-grisclaro border-opacity-20 bg-opacity-20 rounded-lg">
                                <div className="flex min-h-[84px] flex-col items-center justify-center border-b border-white/10 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent px-5 py-3 text-center">
                                    <h5 className="mx-auto w-fit max-w-full rounded-md bg-[#20bfa9]/20 px-3 py-2 text-xl font-bold leading-6 tracking-tight text-white shadow-[0_0_18px_rgba(32,191,169,0.14)]">
                                        {proyecto.nombreProyecto}
                                    </h5>
                                </div>
                                {imageFile && (
                                    <div className="px-3">
                                        <div className="w-full aspect-video overflow-hidden">
                                            <img
                                                src={`/img/${imageFile}`}
                                                alt={`Imagen del proyecto ${proyecto.nombreProyecto}`}
                                                className="h-full w-full object-contain"
                                            />
                                        </div>
                                    </div>
                                )}
                                <div className="h-full flex flex-col justify-between px-5">
                                    <div>
                                        <ul className="flex items-center justify-center gap-3 mt-3 mb-2">
                                        {proyecto.tecnologias.map((tecnologia, index) => (
                                            <li key={index} className="flex items-center gap-1 text-text px-4 py-1.5 text-sm font-medium border border-text border-opacity-30 rounded-full bg-[#07090D] bg-opacity-60">
                                                {tecnologia.image && <img className="w-5 h-5" src={`/img/${tecnologia.image}.svg`} alt="" />}
                                                <p>{tecnologia.name}</p>
                                            </li>
                                        ))}
                                        </ul>
                                        {proyecto.descripcionProyecto && (
                                            <p className="mt-4 mb-4 font-normal text-grisclaro2 [text-wrap:pretty]">{proyecto.descripcionProyecto}</p>
                                        )}
                                    </div>
                                    {(proyecto.sitioWeb || proyecto.github) && (
                                        <div className="flex gap-3 items-center justify-center pb-5">
                                            {proyecto.sitioWeb && (
                                                <a target="_blank" rel="noopener noreferrer" href={proyecto.sitioWeb} className="flex flex-1 gap-1 items-center justify-center py-2.5 px-5 text-sm text-white font-medium bg-colorboton rounded-full border transition duration-300 hover:bg-colorboton hover:scale-105 hover:shadow-[0_0_20px_3px_rgba(30,125,103,0.7)]">
                                                    Sitio Web
                                                    <IconGlobal />
                                                </a>
                                            )}
                                            {proyecto.github && (
                                                <a target="_blank" rel="noopener noreferrer" href={proyecto.github} className="flex flex-1 gap-1 items-center justify-center py-2.5 px-5 text-sm text-white font-medium bg-transparent rounded-full border transition duration-300 hover:bg-colorboton2 hover:scale-105 hover:shadow-[0_0_20px_3px_rgba(77,30,125,0.7)]">
                                                    Github
                                                    <IconGithub />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
