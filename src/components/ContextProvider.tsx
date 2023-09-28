import { IApplicationFormAttributes } from "@/lib/types/applicationFormAttributes";
import { FC, ReactNode, useState, createContext } from 'react'

const initForm: IApplicationFormAttributes = {
    personalInformation: {
        emailId: {
            internalUse: false,
            show: false
        },
        firstName: {
            internalUse: false,
            show: false
        },
        lastName: {
            internalUse: false,
            show: false
        },
        phoneNumber: {
            internalUse: false,
            show: false
        },
        nationality: {
            internalUse: false,
            show: false
        },
        currentResidence: {
            internalUse: false,
            show: false
        },
        idNumber: {
            internalUse: false,
            show: false
        },
        dateOfBirth: {
            internalUse: false,
            show: false
        },
        gender: {
            internalUse: false,
            show: false
        },
    },
    profile: {
        education: {
            mandatory: false,
            show: false
        },
        experience: {
            mandatory: false,
            show: false
        },
        resume: {
            mandatory: false,
            show: false
        },
    },
    coverImage: "",
    customisedQuestions: []
}


interface ContextProvider {
    children: ReactNode
}

export const FormContext = createContext<any>(null)


export const ContextProvider: FC<ContextProvider> = ({ children }) => {
    const [form, setForm] = useState<IApplicationFormAttributes>(initForm)
    return (
        <FormContext.Provider value={{form, setForm}}>
            {children}
        </FormContext.Provider>
    )
}
