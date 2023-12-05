'use client'


import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
  



export default function ProviderPhoto(){
    return(
        <div className="w-3/6 flex flex-row my-5 mx-10 justify-between items-center shadow-xl rounded-lg border-2 border-b-blue-950">
            <div className="flex flex-row gap-2 items-center justify-center">
                <Avatar  className="w-24 h-24 rounded-full m-5">
                    <AvatarImage
                    src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h2 className="font-poppins text-xl">Upload a New Photo</h2>
            </div>
            <div >
                
                    <Dialog>
                        <DialogTrigger >
                            <Button className="w-32 m-5 bg-white border-2 border-blue-950 rounded-lg  text-black hover:text-white ">Update</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                            <DialogTitle>Upload New Profile Picture</DialogTitle>
                            {/* <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription> */}
                            </DialogHeader>
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label className="font-poppins m-2" htmlFor="picture">Picture</Label>
                            
                                <Input className="w-96 cursor-pointer" id="picture" type="file" />
                                <Button className="w-32 m-5 bg-blue-950 hover:bg-white border-2 border-blue-950 rounded-lg hover:scale-110 ml-60  hover:text-black text-white self-end ">Update</Button>
                    
                            </div>
                        </DialogContent>
                    </Dialog>
                
                

            </div>
        </div>
    )
}