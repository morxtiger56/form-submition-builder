import { cn } from "@/lib/utils"
import { ComponentPropsWithRef, FC } from "react"

export const ProgressHeader: FC<ComponentPropsWithRef<"div">> = ({className, ...props}) => {
    return (
        <div className={cn("flex w-full justify-between py-10 shadow-lg", className)} {...props}>
            <div className="align-center flex w-1/4 justify-center border-r py-5">
                Program Details
            </div>
            <div className="align-center flex w-1/4 justify-center border-r py-5">
                Program Details
            </div>
            <div className="align-center flex w-1/4 justify-center border-r py-5">
                Program Details
            </div>
            <div className="align-center flex w-1/4 justify-center border-r py-5">
                Program Details
            </div>
        </div>
    )
}

ProgressHeader.displayName = "Propgress Header"
