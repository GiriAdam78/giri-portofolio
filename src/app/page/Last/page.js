import Link from "next/link";

export default function Last() {
  return (
    <div className="pb-3">
      <div className="flex flex-row gap-3 items-center pb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-newspaper w-4 h-4"
        >
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
          <path d="M18 14h-8" />
          <path d="M15 18h-5" />
          <path d="M10 6h8v4h-8V6Z" />
        </svg>
        <h2>Project Yang Terkini :</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="rounded-md shadow-sm border dark:border-slate-50">
          <div className="pt-3 pb-3 flex flex-row items-center pl-3">
            <span className="rounded-full bg-slate-700 border border-slate-700 py-1 px-1"></span><h1 className="font-semibold pl-3 text-[14px]"><Link href="https://wlkp.adhyamitra.com">WLKP</Link></h1>
          </div>
          <p className="text-[12px] pl-3 pb-3">Pengembangan Aplikasi WLKP Kementrian Ketenagakerjaan</p>
        </div>
        <div className="rounded-md shadow-sm border dark:border-slate-50">
          <div className="pt-3 pb-3 flex flex-row items-center pl-3">
            <span className="rounded-full bg-slate-700 border border-slate-700 py-1 px-1"></span><h1 className="font-semibold pl-3 text-[14px]"><Link href="https://siswasnaker.adhyamitra.com">Siswasnaker</Link></h1>
          </div>
          <p className="text-[12px] pl-3 pb-3">Pengembangan Aplikasi Siswasnaker Kementrian Ketenagakerjaan</p>
        </div>
      </div>
    </div>
  );
}
