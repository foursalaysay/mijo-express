'use client'


import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
  



export default function ProviderPhoto(){
    return(
        <div className="w-11/12 flex flex-row my-5 mx-10 justify-between items-center shadow-xl rounded-lg ">
            <div className="flex flex-row gap-2 items-center justify-center">
                <Avatar  className="w-24 h-24 rounded-full m-5">
                    <AvatarImage
                    src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h2 className="font-poppins text-xl">Upload a New Photo</h2>
            </div>
                    <Dialog>
                        <DialogTrigger className="w-32 m-5 h-10 bg-white hover:bg-blue-950 border-2 hover:border-blue-950 rounded-lg  text-black hover:text-white ">
                            Update
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                            <DialogTitle>Upload New Profile Picture</DialogTitle>
                            </DialogHeader>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label className="font-poppins m-2" htmlFor="picture">Picture</Label>
                            
                                <Input className="w-[450px] cursor-pointer" id="picture" type="file" />
                                <Button className="w-40 m-5  bg-blue-950 hover:bg-white border-2 border-blue-950 rounded-lg hover:scale-110 ml-72  hover:text-black text-white self-end ">Confirm</Button>
                    
                            </div>
                        </DialogContent>
                    </Dialog>
        </div>
    )
}