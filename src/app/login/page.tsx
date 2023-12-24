import Image from 'next/image';
import loginIcon from '/public/login.svg'

//COMPONENTS
import LoginForm from '@/components/Reusables/LoginForm'
import MainNavbar from '@/components/Reusables/MainNavbar'



export default function LoginPage() {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <MainNavbar />
        <div className='flex flex-row h-[calc(100vh-80px)] mt-20'>
          <Image
          className='w-1/2 flex items-center justify-center m-auto'
          priority
          src={loginIcon}
          alt="Follow us on Twitter"
        />
        <div className='w-1/2 flex items-center justify-center flex-col m-10'>
              <LoginForm />
        </div>
      </div>
      </div>
  )
}
