import { IPersonalInformationTemplate } from "./personalInformationTemplate"
import { IProfileTemplate } from "./profileTemplate"
import { IQuestionTemplate } from "./questionTemplate"

export interface IApplicationFormAttributes {
    coverImage: string
    personalInformation: IPersonalInformation
    profile: IProfile
    customisedQuestions: IQuestionTemplate[]
}

export interface IPersonalInformation {
    firstName: IPersonalInformationTemplate
    lastName: IPersonalInformationTemplate
    emailId: IPersonalInformationTemplate
    phoneNumber: IPersonalInformationTemplate
    nationality: IPersonalInformationTemplate
    currentResidence: IPersonalInformationTemplate
    idNumber: IPersonalInformationTemplate
    dateOfBirth: IPersonalInformationTemplate
    gender: IPersonalInformationTemplate
    personalQuestions?: IQuestionTemplate[]
}

export interface IProfile {
    education: IProfileTemplate
    experience: IProfileTemplate
    resume: IProfileTemplate
    profileQuestions?: IQuestionTemplate[]
}

