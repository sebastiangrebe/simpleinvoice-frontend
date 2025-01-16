import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import {Button } from '../ui/Button'
import Link from 'next/link'

export function Header() {
  return (
    <header className=" sticky top-0 z-50 w-full  backdrop-blur ">
       <div className='p-4  flex justify-between mx-[10%] border-b border-slate-700 border-b-[.5px]'>
      <div className='flex '>
        <div className='w-10'><svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 71.7L135.84 259.78V424.8c0 206.25 116.53 394.8 301 487.04L512 949.41l75.16-37.58c184.48-92.24 301-280.79 301-487.04V259.78L512 71.7z m303.02 353.09c0 94.82-27.81 184.59-77.69 260.04l-53.44-53.44c29.67-37.42 47.39-84.74 47.39-136.21 0-121.19-98.24-219.43-219.43-219.43S292.42 374 292.42 495.19s98.24 219.43 219.43 219.43c43.29 0 83.65-12.54 117.65-34.18l62.48 62.48c-38.32 41.8-84.63 77.05-137.53 103.5L512 867.63l-42.45-21.23c-160.73-80.36-260.57-241.92-260.57-421.61V304.98L512 153.47l303.02 151.51v119.81zM511.85 641.48c-80.66 0-146.29-65.62-146.29-146.29S431.19 348.9 511.85 348.9s146.29 65.62 146.29 146.29-65.63 146.29-146.29 146.29z" fill="#000000"></path></g></svg></div>
        <span className='mt-1 ml-1 text-xl font-extrabold text-primary/95'>ClearInvoice</span>
      </div>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}