export default function Footer(){
    const version="15.04";
    return (
        <div className="wrapper">
            <div className="flex flex-col justify-center items-center py-2 px-2">
                <h1 className="dark:text-white text-dark text-[14px]">&copy; {new Date().getFullYear()} | Created By Giri Diwa Adam</h1>
                <p className="text-[14px]">Made With 💖 Using Next Js Version {version}</p>
            </div>
        </div>
    )
}