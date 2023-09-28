import { ComponentPropsWithRef, FC } from 'react'

interface FormBuilderProps extends ComponentPropsWithRef<"form"> {
    fields: string[]
}

export const FormBuilder: FC<FormBuilderProps> = () => {
    return (
        <form>
        </form>
    )
}
