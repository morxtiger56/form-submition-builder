export interface IQuestionTemplate {
    id: string
    type: string
    question: string
    choices: string[]
    maxChoice: number
    disqualify: boolean
    other: boolean
}
