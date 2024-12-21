import Link from "next/link";
import Tooltip from "../components/ToolTip";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { IoLogoGithub,IoLogoLinkedin  } from "react-icons/io";
import { SiGmail } from "react-icons/si";

export default function Contact(){
    return (
        <div className="wrapper">
            <div className="md:pt-[50px] pt-[50px]">
                <h1 className="text-[32px] font-semibold dark:text-white leading-9 font-display pb-3">Contact</h1>
                <p className="leading-loose">Terhubunglah Denganku :</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1">
                <h1 className="font-bold mt-3 mb-2">Social Media :</h1>

                <div className="py-3 px-2 rounded w-[100%] md:w-[40%] mb-2">
                    <div className="flex items-center gap-2">
                        <CiFacebook className="w-7 h-7" />
                        <Link href="https://www.facebook.com/giri.diwa.1/" className="hover:text-blue-500">Giri Diwa Adam</Link>
                    </div>
                </div>
                <div className="py-3 px-2 rounded w-[100%] md:w-[40%] mb-2">
                    <div className="flex items-center gap-2">
                        <CiTwitter className="w-7 h-7"/>
                        <Link href="https://x.com/giri_diwa" className="hover:text-cyan-800">giri_diwa</Link>
                    </div>
                </div>
                <div className="py-3 px-2 rounded w-[100%] md:w-[40%] mb-2">
                    <div className="flex items-center gap-2">
                        <IoLogoGithub className="w-7 h-7"/>
                        <Link href="https://github.com/GiriAdam78/" className="hover:text-gray-600">GiriAdam78</Link>
                    </div>
                </div>

                <div className="py-3 px-2 rounded w-[100%] md:w-[40%] mb-2">
                    <div className="flex items-center gap-2">
                        <IoLogoLinkedin className="w-7 h-7"/>
                        <Link href="https://www.linkedin.com/in/giri-diwa-adam/" className="hover:text-blue-500">Giri Diwa Adam</Link>
                    </div>
                </div>
            </div>
            <div className="pt-[20px] pb-[20px]">
                <p className="font-semibold text-[18px] font-body mb-[20px]">Atau Bisa Lewat :</p>
                <div className="flex flex-wrap items-center mt-[8px] mb-[10px] gap-3">
                    <div className="rounded border border-border py-3 px-3 flex items-center gap-3">
                        <SiGmail /> giriadam67@gmail.com
                    </div>
                   
                </div>
            </div>
        </div>
    )
}