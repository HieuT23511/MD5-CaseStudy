import { FE2DIE } from "../assests/index.jsx"
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <>
            <div className='bg-black text-[#949494] px-3 py-7 flex flex-row justify-between'>
                <div className=' flex flex-col gap-4'>
                    <div className='flex flex-col gap-5'>
                        <Link to={'/'}><img className='w-24 ml-[30px]' src={FE2DIE} alt=""/></Link>
                        <Link to={'/'}><p className='text-white ml-[10px]' >FE2DIE - CLick to Buy</p></Link>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <GitHubIcon />
                        <YouTubeIcon />
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                    </div>
                </div>
                <div className="">
                    <h2 className='text-xl text-white 300 mb-3'>Liên hệ với chúng tôi</h2>
                    <p>FE2DIE STORE, My Dinh, Hanoi, Vietnam</p>
                    <p>Mobile: 0985558888</p>
                    <p>Phone: 0985558888</p>
                    <p>Email: fe2die.clicktobuy@gmail.com</p>
                </div>
                <div>
                    <h2 className='text-xl text-white 300 mb-3'>Về chúng tôi</h2>
                    <p>About</p>
                    <p>Help & Support</p>
                </div>
            </div>
        </>
    )
}