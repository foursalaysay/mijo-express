'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})



import CleaningIcon from '../../../public/register.svg';
import Image from 'next/image';

import MainNavbar from '@/components/Reusables/MainNavbar';

type formType = {
  firstName : string,
  lastName : string,
  email : string,
  username: string,
  password : string,
  phoneNumber : string,
  userType : "Customer" | "Provider"
}

export default function RegisterPage(){


  function onSubmit(data: formType) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  } 

  return (
    <div className='flex flex-col'>
    <MainNavbar />
    <div className='max-w-8xl h-[calc(100vh-80px)] flex flex-row mt-20'>
      <div className='flex flex-col justify-start items-start mt-10'>
        <Image src={CleaningIcon} alt='logo' height={500} width={500} className='border-r-2 ml-10 mt-5'/>
      </div>
        <div className='ml-5 mt-10 w-[calc(100vw-700px)]'>
          <ScrollArea className="w-full  rounded-md border p-4">
            <h1 className='font-poppins text-black text-7xl'>Register Here!</h1>
            <p className='mt-5'>Fill up the form to create your account.</p>

            {/* CREATING THE FORM */}
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
          </ScrollArea>
           
        </div>
    </div>
    </div>
  );
}
