import { IPersonalInformationTemplate } from '@/lib/types/personalInformationTemplate'
import { FC } from 'react'
import { Label } from './ui/label'
import { Checkbox } from './ui/checkbox'
import { Switch } from './ui/switch'
import { capatlizeKeyString } from '@/lib/utils'

interface FormFieldProps extends IPersonalInformationTemplate {
    label: string
}


export const FormField: FC<FormFieldProps> = ({ label, internalUse = true, show = true }) => {
    return (
        <div className='flex w-full items-center justify-between border-b py-4'>
            <Label className='text-xl font-semibold capitalize'>
                {capatlizeKeyString(label)}
            </Label>
            <div className='flex items-center gap-3'>
                <div className='flex items-center gap-1 '>
                    <Checkbox checked={internalUse} />
                    <Label>
                        {label}
                    </Label>
                </div>
                <div className='flex items-center gap-1 '>
                    <Switch checked={show} />
                    <Label>
                        {label}
                    </Label>
                </div>
            </div>

        </div>
    )
}
