import { cn } from '@/lib/utils'
import { ComponentPropsWithRef, FC } from 'react'


export const SectionContainer: FC<ComponentPropsWithRef<"section">> = ({ children, className, ...props }) => {
    return (
        <section className={cn('m-10 min-w-[400px] rounded-2xl shadow-lg ', className)} {...props} >
            {children}
        </section>
    )
}


SectionContainer.displayName = "SectionContainer"


interface SectionHeaderProps extends ComponentPropsWithRef<"div"> {
    title: string
}


export const SectionHeader: FC<SectionHeaderProps> = ({ title, className, ...props }) => {
    return <div className={cn('w-full rounded-tl-[inherit] rounded-tr-[inherit] bg-secondary  px-6 py-10 text-xl font-bold capitalize', className)} {...props}>
        <h4>
            {title}
        </h4>
    </div>
}

SectionHeader.displayName = "SectionHeader"

export const SectionBody: FC<ComponentPropsWithRef<"div">> = ({ className, children, ...props }) => {
    return <div className={cn('w-full rounded-bl-[inherit] rounded-br-[inherit] p-6', className)} {...props}>
        {children}
    </div>
}

SectionBody.displayName = "SectionBody"
