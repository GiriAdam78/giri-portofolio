import Link from "next/link";
import Last from "./page/Last/page";

export default function Home() {
  const fullname = `Giri Diwa Adam`;

  return (
    <div className="wrapper">
      <div className="py-8 my-8 md:pt-[50px] pt-[50px]">
        <p className="text-[14px] font-normal dark:text-white text-dark pb-[20px]">
          Hallo Dunia, Saya 👋
        </p>
        <h1 className="text-[56px] font-semibold dark:text-white text-dark leading-[5rem] font-display -z-[999]">
          {fullname}
        </h1>
        <h2 className="text-[14px] font-normal dark:text-white text-dark pt-[20px] pb-[5px]">
          Saya Seorang Fullstack Web Developer, Frontend Developer
        </h2>
        <p className="text-[14px] font-normal dark:text-white text-dark pt-[12px] pb-[20px]">
          Belajar, Konsisten, Berusaha, Jangan Malu Bertanya, Kreativ Berfikir,
          Suka Tantangan dan Jangan Sungkan Membantu sesama.{" "}
        </p>
        <div className="flex flex-row items-center gap-3 pb-5">
          <span className="rounded-full border border-red-500 bg-red-500 py-1 px-1"></span>{" "}
          Belum Bersedia Untuk Di Rekrut
        </div>
        <div className="mt-3 mb-3">
          <Link
            href="https://rose-yovonnda-79.tiiny.site/"
            className="inline-flex items-center gap-3 shadow-md py-2 px-2 rounded-full bg-slate-300 dark:text-white text-dark hover:bg-slate-500 hover:text-white dark:bg-slate-700"
          >
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
              className="lucide lucide-arrow-down-to-line w-5 h-5"
            >
              <path d="M12 17V3" />
              <path d="m6 11 6 6 6-6" />
              <path d="M19 21H5" />
            </svg>
            Download My CV
          </Link>
        </div>
      </div>
      <Last />
    </div>
  );
}
