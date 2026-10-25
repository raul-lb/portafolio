import { sobremiData, habilidadesData } from "../data/sobremiData"
import {
    CodeBracketSquareIcon,
    ShieldCheckIcon,
    CpuChipIcon,
} from "@heroicons/react/24/outline"

const iconosHabilidad = {
    codigo: CodeBracketSquareIcon,
    seguridad: ShieldCheckIcon,
    tecnologia: CpuChipIcon,
}

export default function Sobremi() {

    return(
        <div>
            <div id="sobremi" className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6 px-3 md:px-0 pt-10">
                <h2 className="text-4xl font-title font-extrabold tracking-wider leading-none md:text-5xl lg:text-5xl text-white text-center mt-5 mb-10">{sobremiData.titulo}</h2>
                <div className="md:flex gap-8 items-center justify-between md:mx-0">
                    <div className="md:w-2/5">
                        <img 
                            src="/img/aboutme.webp" 
                            alt="Imagen de Raúl Larrea, Ingeniero Informático"
                        />
                    </div>
                    <div className="md:w-3/5">
                        <p className="mb-4 text-grisclaro2 lg:text-base 2xl:text-lg [text-wrap:pretty]">{sobremiData.descripcion1}</p>
                        <p className="mb-4 text-grisclaro2 lg:text-base 2xl:text-lg [text-wrap:pretty]">{sobremiData.descripcion2}</p>
                        <p className="mb-4 text-grisclaro2 lg:text-base 2xl:text-lg [text-wrap:pretty]">{sobremiData.descripcion3}</p>
                        <span className='inline-flex h-full animate-background-shine items-center justify-center rounded-full border border-green-500/80 bg-[linear-gradient(110deg,#07090D,45%,#4D4B4B,55%,#07090D)] bg-[length:250%_100%] px-5 py-1.5 text-sm font-medium text-text shadow-[0_0_12px_rgba(34,197,94,0.16)] backdrop-blur-3xl'>
                            Disponible para trabajar
                        </span>
                    </div>
                </div>
                <ul className=" grid gap-8 grid-cols-1 md:grid-cols-3 my-10">
                    {habilidadesData.map(habilidades => {
                        const Icon = iconosHabilidad[habilidades.icon]

                        return (
                        <li key={habilidades.id} className="relative h-full rounded-xl bg-black border border-grisclaro border-opacity-20 py-5 px-5 bg-opacity-10 [text-wrap:pretty] text-center flex flex-col items-center">
                            <div className='absolute top-0 flex w-full justify-center'>
                                <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-grisclaro border-opacity-40 text-[#20bfa9]">
                                    {Icon && <Icon aria-hidden="true" className="h-10 w-10" />}
                                </div>
                                <h3 className="text-white uppercase font-semibold text-lg">{habilidades.name}</h3>
                                <p className="text-grisclaro2 font-text text-base">{habilidades.description}</p>
                            </div>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
