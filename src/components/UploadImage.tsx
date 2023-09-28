import { ChangeEvent, FC, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { IconContext } from "react-icons";
import { BiUpload } from "react-icons/bi";
import { Button } from "./ui/button";

export const UploadImage: FC = () => {
    const [, setPicture] = useState<File | null>(null);
    const [, setImgData] = useState<string | ArrayBuffer | null>(null);
    const [previewImage, setPreviewImage] = useState<string>("");

    const onChangePicture = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            console.log("picture: ", e.target.files);
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
            setPreviewImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <>
            {previewImage.length > 0 ? (
                <div className="w-full h-[200px] relative">
                    <img
                        src={previewImage}
                        className="absolute w-full h-full object-fill rounded-lg"
                        alt=""
                    />
                    <Button
                        className="z-10 absolute text-destructive bg-white justify-start hover:bg-destructive hover:text-white rounded-tl-none rounded-tr-none bottom-0 w-full"
                        variant={"destructive"}
                        onClick={() => setPreviewImage("")}
                    >
                        Delete & re-upload
                    </Button>
                </div>
            ) : (
                <Label
                    htmlFor="images"
                    className="cursor-pointer"
                >
                    <div className="flex min-h-[200px] w-full relative hover:bg-black/20 transition-colors flex-col items-center justify-center rounded-lg border-2 border-dashed border-black">
                        <Input
                            onChange={onChangePicture}
                            className="w-full h-full absolute hidden"
                            accept="image/*"
                            id="images"
                            type="file"
                        />
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
                </Label>
            )}
        </>
    );
};
