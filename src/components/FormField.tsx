import { IPersonalInformationTemplate } from '@/lib/types/personalInformationTemplate'
import { FC } from 'react'
import { Label } from './ui/label'
import { Checkbox } from './ui/checkbox'
import { Switch } from './ui/switch'
import { capatlizeKeyString } from '@/lib/utils'
import { IProfileTemplate } from '@/lib/types/profileTemplate'

interface FormFieldProps extends IPersonalInformationTemplate {
    label: string
    options?: IProfileTemplate
}


export const FormField: FC<FormFieldProps> = ({ label, options }) => {
    return (
        <div className='flex w-full items-center justify-between border-b py-4'>
            <Label className='text-xl font-semibold capitalize'>
                {capatlizeKeyString(label)}
            </Label>
            <div className='flex items-center gap-3'>
                {
                    !options ? <></> :
                        <>
                            <div className='flex items-center gap-1 '>
                                <Checkbox checked={options.mandatory} />
                                <Label>
                                    mandatory
                                </Label>
                            </div>
                            <div className='flex items-center gap-1 '>
                                <Switch checked={options.show} />
                                <Label>
                                    {options.show ? "show" : "hide"}
                                </Label>
                            </div>

                        </>
                }
            </div>
        </div>
    )
}
