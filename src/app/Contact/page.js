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
                <p>Terhubunglah Denganku :</p>
            </div>
            <div className="flex flex-row mt-[2em] items-center mb-[1em] gap-3">
                <p>Social Media :</p>
                <Tooltip text="facebook">
                    <div className="rounded-full px-2 py-2 border border-slate-700 dark:border-slate-400">
                        <Link href="https://www.facebook.com/giri.diwa.1/" className="hover:text-blue-500"><CiFacebook className="w-6 h-6"/></Link>
                    </div>
                </Tooltip>
                <Tooltip text="twitter">
                    <div className="rounded-full px-2 py-2 border border-slate-700 dark:border-slate-400">
                        <Link href="https://x.com/giri_diwa" className="hover:text-cyan-800"><CiTwitter className="w-6 h-6"/></Link>
                    </div>
                </Tooltip>
                <Tooltip text="Github">
                    <div className="rounded-full px-2 py-2 border border-slate-700 dark:border-slate-400">
                        <Link href="https://github.com/GiriAdam78/" className="hover:text-gray-600"><IoLogoGithub className="w-6 h-6"/></Link>
                    </div>
                </Tooltip>
                <Tooltip text="Linkedin">
                    <div className="rounded-full px-2 py-2 border border-slate-700 dark:border-slate-400">
                        <Link href="https://www.linkedin.com/in/giri-diwa-adam/" className="hover:text-blue-500"><IoLogoLinkedin className="w-6 h-6"/></Link>
                    </div>
                </Tooltip>
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