export interface IQuestion {
    id: string
    type: "Paragraph" | "ShortAnswer" | "YesNo" | "Dropdown" | "MultipleChoice" | "Date" | "Number" | "FileUpload"
    required: boolean
}
