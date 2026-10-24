import Image from "next/image"
import { redesData, enlacesData, webAbout } from "../data/redesData"

export default function Footer() {
    return(
        <div className="bg-negrochido backdrop-blur-md bg-opacity-80 rounded-t-3xl border-t border-t-colorboton border-opacity-50">
            <div className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6">
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between mx-3 md:mx-0 py-10 font-body">
                    <div className="flex flex-col items-center md:items-start md:text-left justify-center mb-5 md:mb-0 text-center md:w-1/3 [text-wrap:balance]">
                        <a href="#">
                            <Image src="/img/logo.svg" width={110} height={35} alt="Logo Raúl Larrea" />
                        </a>
                        <p className="text-white ">Transformando ideas en realidad a traves de codigo limpio y soluciones innovadoras</p>
                        <ul className='flex gap-4 mt-4'>
                        {redesData.map(red => (
                            <li  key={red.id} className='cursor-pointer transition-all duration-300 hover:scale-150'>
                                <a target="_blank" href={red.sitioWeb}>
                                    <img className='w-4 h-4' title={red.nombre} src={`/img/${red.imagen}.svg`} alt={`imagen red social ${red.nombre}`} />
                                </a>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="mb-3 md:mb-0">
                        <h2 className="text-white uppercase font-semibold mb-3">Navegacion</h2>
                        <ul className=" flex flex-col text-center md:text-left gap-4 justify-between">
                            {enlacesData.map(enlace => (
                                <li key={enlace.id}>
                                    <a href={enlace.link} className="py-1 text-white rounded transition-colors duration-300 hover:text-textdestacado">
                                        {enlace.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center flex-col mt-3 md:mt-0">
                        <h2 className="text-white uppercase font-semibold mb-3">sobre esta web</h2>
                        <p className="text-white  mb-3">Creado con:</p>
                        <ul className="flex gap-3 md:gap-0 md:flex-col mb-3 space-y-1">
                            {webAbout.map(web => (
                                <li key={web.id} className="flex items-center gap-1  md:gap-3">
                                    <img className="w-6 h-6 transition duration-300 rounded-full" title={web.name} src={`/img/${web.imagen}.svg`} alt={`Logo de ${web.name}`} />
                                    <p className="text-white ">{web.name}</p>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white ">por <span className="font-semibold text-sm hover:text-colorboton">Raúl Larrea</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
