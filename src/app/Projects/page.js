import Image from "next/image";
import Tooltip from "../components/ToolTip";
import {
  SiLaravel,
  SiPostgresql,
  SiBootstrap,
  SiReact,
  SiAngular,
  SiExpress,
  SiNodedotjs,
  SiNextdotjs,
} from "react-icons/si";

export default function Projects() {
  return (
    <div className="wrapper">
      <div className="md:pt-[50px] pt-[50px]">
        <h1 className="text-[32px] font-semibold dark:text-white text-dark leading-9 font-display pb-5">
          Projects
        </h1>
        <p className="text-[16px] font-normal pb-[20px]">
          Beberapa Proyek Yang pernah saya Kerjakan :
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          <div className="rounded-md hover:shadow-md border border-slate-200 cursor-pointer">
            <Image src="/images/Wlkp.png" alt="Inspector" width={400} height={400}/>
            <div className="py-2 px-2">
              <h3 className="text-[16px] font-semibold font-body capitalize">
                WLKP
              </h3>
              <p className="text-[12px] font-normal font-body truncate">
                Pengembangan Aplikasi WLKP Kementrian Ketenagakerjaan
              </p>
            </div>
            <hr/>
            <ul className="flex flex-wrap gap-4 ml-1 mr-1 relative -z-[999] mt-3 mb-2">
                <div className="flex flex-col justify-center items-center">
                    <SiLaravel  className="w-5 h-5 text-red-500 dark:text-white hover:text-red-600"/>
                    <p className="text-[12px]">Laravel</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <SiPostgresql  className="w-5 h-5 text-gray-700 dark:text-white"/>
                    <p className="text-[12px]">Postgres Sql</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <SiAngular  className="w-5 h-5 text-red-500 dark:text-white"/>
                    <p className="text-[12px]">Angular</p>
                </div>
            </ul>
            <hr/>
            <div className="py-3 px-2">
              <a
                href="https://wlkp.adhyamitra.com"
                className="text-[12px] font-body font-medium border border-slate-400 py-2 px-1 rounded-md hover:bg-slate-500 hover:text-white"
              >
                Show More{" "}
              </a>
            </div>
          </div>
          <div className="rounded-md hover:shadow-md border border-slate-200 cursor-pointer">
            <img src="images/Wlkp.png" alt="Inspector" />
            <div className="py-2 px-2">
              <h3 className="text-[16px] font-semibold font-body capitalize">
                Siswasnaker
              </h3>
              <p className="text-[12px] font-normal font-body truncate">
                Pengembangan Aplikasi Siswasnaker Kementrian Ketenagakerjaan
              </p>
            </div>
            <hr/>
            <ul className="flex flex-wrap gap-4 ml-1 mr-1 relative -z-[999] mt-3 mb-2">
                <div className="flex flex-col justify-center items-center">
                    <SiLaravel  className="w-5 h-5 text-red-500 dark:text-white hover:text-red-600"/>
                    <p className="text-[12px]">Laravel</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <SiPostgresql  className="w-5 h-5 text-gray-700 dark:text-white"/>
                    <p className="text-[12px]">Postgres Sql</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <SiNextdotjs  className="w-5 h-5 text-black dark:text-white"/>
                    <p className="text-[12px]">Next Js</p>
                </div>
            </ul>
            <hr/>
            <div className="py-3 px-2">
              <a
                href="https://siswasnaker.adhyamitra.com"
                className="text-[12px] font-body font-medium border border-slate-400 py-2 px-1 rounded-md hover:bg-slate-500 hover:text-white"
              >
                Show More{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
