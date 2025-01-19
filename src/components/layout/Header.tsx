import { Logo } from "../Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className=" sticky top-0 z-50 w-full  backdrop-blur border-b border-slate-700 border-b-[.5px] ">
       <div className='py-4  flex justify-between mx-[5%]'>
      <div className='flex '>
        <Logo />
      </div>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}