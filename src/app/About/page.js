import { SiLaravel, SiNextdotjs, SiTailwindcss, SiReact, SiAngular , SiExpress, SiNodedotjs, SiBootstrap, SiRadixui, SiShadcnui   } from "react-icons/si";
import Tooltip from "../components/ToolTip";

export default function About() {
  return (
    <div className="wrapper mb-[10px]">
      <div className="md:pt-[50px] pt-[50px]">
        <h1 className="text-[32px] font-semibold dark:text-white text-dark leading-9 font-display pb-3">
          About Me{" "}
        </h1>
        <p className="mb-8 leading-relaxed text-secondary dark:text-white text-[14px]">
          Halo semuanya, Perkenalkan nama saya Giri Diwa Adam, saya adalah
          seorang Fullstack Web developer yang berasal dari Kota Tangerang,
          Banten, tepatnya di Desa Larangan Utara. Awal mula saya menyukai dunia
          programming adalah ketika saya duduk di bangku sekolah kejuruan, tanpa
          sengaja saya menemukan sebuah buku tentang programming, disitulah saya
          mulai tertarik dengan dunia programming.
        </p>
        <p className="mb-8 leading-relaxed text-secondary dark:text-white text-[14px]">
          Dan akhirnya saya melanjutkan kuliah di Jurusan IT, dan saya pun
          semakin tertarik untuk mendalami dunia pemrograman. Untuk melanjutkan
          rasa penasaran saya terhadap dunia pemrograman, saya pun mengambil les
          bahasa pemrograman untuk memperdalam bahasa pemrograman yang sedang
          saya pelajari.
        </p>
        <p className="mb-8 leading-relaxed text-secondary dark:text-white text-[14px]">
          Melalui portofolio ini saya ingin menunjukkan hasil-hasil project yang
          saya kerjakan sebagai fullstack programmer, semoga dapat menginspirasi
          teman-teman yang ingin menjadi programmer juga. dan jangan menyerah,
          teruslah belajar sampai bisa, karena dalam dunia programming tidak ada
          kata menunggu, mereka akan terus berkembang mengikuti perkembangan
          jaman.
        </p>
      </div>
      <hr />
      <div className="md:pt-[10px] pt-[10px] mb-[20px]">
        <h2 className="mb-[10px] font-semibold">Techstack Saya :</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex flex-col justify-center">
            <SiLaravel className="w-[2rem] h-[2rem] text-red-500 dark:text-white" />
          </div>
          <p>Laravel</p>
          <div className="flex flex-col justify-center">
            <SiNextdotjs className="w-[2rem] h-[2rem] text-black dark:text-white" />
          </div>
          <p>Next Js</p>
          <div className="flex flex-col justify-center">
            <SiTailwindcss className="w-[2rem] h-[2rem] text-cyan-500 dark:text-white" />
          </div>
          <p>Tailwind CSS</p>
          <div className="flex flex-col justify-center">
            <SiReact className="w-[2rem] h-[2rem] text-cyan-600 dark:text-white"/>
          </div>
          <p>React</p>
          <div className="flex flex-col justify-center">
            <SiAngular className="w-[2rem] h-[2rem] text-red-600 dark:text-white"/>
          </div>
          <p>Angular</p>
          <div className="flex flex-col justify-center">
            <SiExpress className="w-[2rem] h-[2rem] text-black dark:text-white"/>
          </div>
          <p>Express JS</p>
          <div className="flex flex-col justify-center">
            <SiNodedotjs className="w-[2rem] h-[2rem] text-green-500 dark:text-white"/>
          </div>
          <p>Node JS</p>
          <div className="flex flex-col justify-center">
            <SiBootstrap className="w-[2rem] h-[2rem] text-purple-500 dark:text-white"/>
          </div>
          <p>Bootstrap CSS</p>
          <div className="flex flex-col justify-center">
            <SiRadixui className="w-[2rem] h-[2rem] text-black dark:text-white"/>
          </div>
          <p>Radix UI</p>
          <div className="flex flex-col justify-center">
            <SiShadcnui className="w-[2rem] h-[2rem] text-black dark:text-white"/>
          </div>
          <p>Shadcn UI</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
