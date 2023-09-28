import { SectionBody, SectionContainer, SectionHeader } from "./components/Section";
import { ProgressHeader } from "./components/ProgressHeader";
import { SideMenu } from "./components/SideMenu";
import { useContext, useEffect } from "react";
import { BiUpload } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import { Label } from "./components/ui/label";
import { IApplicationFormAttributes, IPersonalInformation, IProfile } from "./lib/types/applicationFormAttributes";
import { FormField } from "./components/FormField.tsx";
import { Button } from "./components/ui/button.tsx";
import { GrFormAdd } from "react-icons/gr"
import { capatlizeKeyString } from "./lib/utils.ts";
import { IQuestionTemplate } from "./lib/types/questionTemplate.ts";
import { ContextProvider, FormContext } from "./components/ContextProvider.tsx";


async function getData() {
    try {
        const url = import.meta.env.VITE_API_URL
        const data = await fetch(`${url}/api/3/programs/1/application-form`)
        const res = await data.json()
        return res.data
    } catch (error) {
        console.error(error)
    }
}

// Getting form section attributes and building the section fields dynamiclly form the inteface keys

function getAttributes(section: IQuestionTemplate[] | IProfile | IPersonalInformation | string) {
    const elements = []
    if (typeof section === "string") {
        return "Cannot pass a string"
    }
    for (const key in section) {
        elements.push(
            <FormField key={key + "personalInfo"} label={key} />
        )
    }
    return elements
}

// Bulding all the sections from the inital form dynamiclly form the inteface keys

function sectionBuilder(form: IApplicationFormAttributes) {
    const elements = []
    for (const key in form) {

        if (key === "coverImage") {
            continue;
        }

        elements.push(
            <SectionContainer>
                <SectionHeader title={capatlizeKeyString(key)} />
                <SectionBody>
                    {
                        getAttributes(form[key as keyof IApplicationFormAttributes])
                    }
                    <Button variant={"ghost"} className="mt-4 w-full items-center justify-start gap-1 px-0 py-6 text-start leading-tight">
                        <IconContext.Provider value={{ className: "text-4xl" }}>
                            <GrFormAdd />
                        </IconContext.Provider>
                        <span className="font-semibold">
                            Add a question
                        </span>
                    </Button>
                </SectionBody>
            </SectionContainer>
        )
    }
    return elements
}

function Body() {
    const { form, setForm } = useContext(FormContext)

    useEffect(() => {
        getData().then(data => {
            setForm(data.attributes)
        })
    }, [])
    return (
        <main className='flex h-screen w-full font-poppins'>
            <SideMenu />
            <div className="w-full overflow-y-scroll py-20">
                <ProgressHeader />
                <SectionContainer>
                    <SectionHeader title="Upload cover image" />
                    <SectionBody>
                        <div className="flex min-h-[200px] w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-black">
                            <IconContext.Provider value={{ className: "text-3xl" }}>
                                <BiUpload />
                            </IconContext.Provider>
                            <Label className="text-md font-semibold ">
                                Upload cover image
                            </Label>
                            <p className="text-sm text-black/30 ">
                                16:9 ratio is recommended. Max image size 1mb
                            </p>
                        </div>
                    </SectionBody>
                </SectionContainer>
                {
                    sectionBuilder(form)
                }
            </div>
        </main>

    )

}



function App() {

    //Getting the inital form data
    return <ContextProvider>
        <Body />
    </ContextProvider>;
}

export default App;
