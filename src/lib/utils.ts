import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export function capatlizeKeyString(str: string) {
    const capitalLetterIndexes: number[] = []
    let i = 0
    capitalLetterIndexes.push(0)
    for (const letter of str) {
        if (letter === letter.toUpperCase() && i !== 0) {
            capitalLetterIndexes.push(i)
        }
        i++
    }
    capitalLetterIndexes.push(str.length)

    let capitalizedString = ""
    console.log(capitalLetterIndexes)
    for (let index = 0; index < capitalLetterIndexes.length; index++) {
        capitalizedString += str.slice((capitalLetterIndexes[index - 1] ?? 0), capitalLetterIndexes[index])
        capitalizedString += " "
    }
    return capitalizedString
}

