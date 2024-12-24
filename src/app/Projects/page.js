import Image from "next/image";

export default function Projects() {
  return (
    <div className="wrapper">
      <div className="md:pt-[50px] pt-[50px]">
        <h1 className="text-[32px] font-semibold dark:text-white text-dark leading-9 font-display pb-5">
          Projects
        </h1>
        <hr />
        <h1 className="text-[32px] font-semibold dark:text-white text-dark leading-9 font-display pb-5 mt-5">
          TEAM
        </h1>
        <p className="text-[16px] font-normal pb-[20px]">
          Proyek Pengembangan Aplikasi yang saya kerjakan bersama Team Di Kantor
          :
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          <div className="rounded-md hover:shadow-md border border-slate-200 cursor-pointer">
            <Image src="/images/KKP.png" alt="KKP" width={500} height={400} />
            <div className="py-2 px-2">
              <h3 className="text-[16px] font-semibold font-body capitalize">
                KKP
              </h3>
              <p className="text-[12px] font-normal font-body truncate">
                Pengembangan Aplikasi KKP Kementrian Kelautan dan Perikanan
              </p>
            </div>
            <div className="py-3 px-2">
              <a
                href="https://kkp.adhyamitra.com"
                className="text-[12px] font-body font-medium border border-slate-400 py-2 px-1 rounded-md hover:bg-slate-500 hover:text-white"
              >
                Visit Website{" "}
              </a>
            </div>
          </div>
          <div className="rounded-md hover:shadow-md border border-slate-200 cursor-pointer">
            <img src="images/Siswasnaker.png" alt="Siswasnaker" />
            <div className="py-2 px-2">
              <h3 className="text-[16px] font-semibold font-body capitalize">
                Siswasnaker
              </h3>
              <p className="text-[12px] font-normal font-body truncate">
                Pengembangan Aplikasi Siswasnaker Kementrian Ketenagakerjaan
              </p>
            </div>

            <div className="py-3 px-2">
              <a
                href="https://siswasnaker.adhyamitra.com"
                className="text-[12px] font-body font-medium border border-slate-400 py-2 px-1 rounded-md hover:bg-slate-500 hover:text-white"
              >
                Visit Website{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-[32px] font-semibold dark:text-white text-dark leading-9 font-display pb-5 mt-5">
        SELF
      </h1>
      <p className="text-[16px] font-normal pb-[20px]">
        Proyek Pengembangan Aplikasi yang saya kerjakan Sendiri :
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
        <div className="rounded-md hover:shadow-md border border-slate-200 cursor-pointer">
          <img src="images/GudangList.png" alt="List Gudang" />
          <div className="py-2 px-2">
            <h3 className="text-[16px] font-semibold font-body capitalize">
              List Gudang
            </h3>
            <p className="text-[12px] font-normal font-body truncate">
              Pembuatan List Gudang Sederhana Menggunakan Express API & Neon DB
            </p>
          </div>

          <div className="py-3 px-2">
            <a
              href="https://gudang-app.vercel.app/"
              className="text-[12px] font-body font-medium border border-slate-400 py-2 px-1 rounded-md hover:bg-slate-500 hover:text-white"
            >
              Visit Website{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
