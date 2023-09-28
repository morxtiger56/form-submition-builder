import { ComponentPropsWithRef, FC } from 'react'
import { BiMenu, BiHome } from 'react-icons/bi'
import { IconContext } from 'react-icons'

export const SideMenu: FC<ComponentPropsWithRef<"aside">> = () => {
    return (

        <IconContext.Provider value={{ className: "text-2xl" }}>
            <aside className=" grid h-full w-20 content-between justify-items-center gap-4 p-4 shadow-lg">
                <div className='grid content-start gap-10'>
                    <BiMenu />
                    <BiHome />
                    <img src='/icons/check-list.png' alt='check-list' className='w-6' />
                </div>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#1D4ED8] text-white'>
                    NT
                </div>
            </aside>

        </IconContext.Provider>
    )
}

SideMenu.displayName = "SideMenu"


