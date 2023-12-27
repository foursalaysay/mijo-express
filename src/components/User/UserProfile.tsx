import UserPhoto from '@/components/User/UserPhoto'
import UserInfo from '@/components/User/UserInfo'


export default function UserProfile(){
    return(
        <div className='w-full h-[calc(100vh-80px)] overflow-hidden'>  
            <UserPhoto />
            <UserInfo />
        </div>  
    )
}