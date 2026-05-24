import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const Footer = () => {

    const iconsFooter = [
    {
        icon: "hugeicons:internet",
        link: "https://portfolio-villalba.vercel.app/"
    },
    {
        icon: "hugeicons:github",
        link: "https://github.com/vickyvillalba22"
    },
    {
        icon: "hugeicons:linkedin-01",
        link: "https://www.linkedin.com/in/vvillalba/"
    },
    ]

    return (
        <footer className="w-full flex items-center justify-center mt-12 bg-(--color-oscuro) text-(--blanco) self-end h-[20vh] text-[12px]">

            <div className="w-[90%] flex justify-between">

                <div className="flex flex-col w-[40%] gap-4 h-fit">
                    <p>Desarrollado por Victoria Villalba</p>
                    <p>Buenos Aires, Argentina</p>
                </div>

                <div className="flex flex-col w-[40%] gap-4 h-fit">
                    <div id="contIcons" className="w-fit flex gap-6 self-end">
                        {iconsFooter.map((icon, index)=>(
                            <Link href={icon.link} key={index} target="_blank"><Icon icon={icon.icon} className="text-[20px]" /></Link>
                        ))}
                    </div>
                    <a className="w-fit self-end" href="">villalbavictoria120@gmail.com</a>
                </div>

            </div>

        </footer>
    )
}

export default Footer