import { cn } from "@/lib/utils"
import { ComponentPropsWithRef, FC } from "react"

export const ProgressHeader: FC<ComponentPropsWithRef<"div">> = ({className, ...props}) => {
    return (
        <div className={cn("flex w-full justify-between shadow-lg", className)} {...props}>
            <div className="align-center flex w-1/4 justify-center border-r py-14">
                Program Details
            </div>
            <div className="bg-primary align-center flex w-1/4 justify-center text-primary-foreground border-r py-14" style={{clipPath: "polygon(0 0, 95% 0, 95% 35%, 100% 50%, 95% 65%, 95% 100%, 0 100%)"}}>
                Application Form
            </div>
            <div className="align-center flex w-1/4 justify-center border-r py-14">
                Workflow
            </div>
            <div className="align-center flex w-1/4 justify-center border-r py-14">
                Preview
            </div>
        </div>
    )
}

ProgressHeader.displayName = "Propgress Header"
