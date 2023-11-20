import Image from "next/image";
import { FC } from "react";
import Logo from "../../assets/logo.webp";
import Avatar from "../../assets/man.webp";

const Header: FC = () => {
  return (
    <div className='flex items-center justify-between px-2.5 border-b border-black border-opacity-25'>
      <div className='relative h-20 w-20'>
        <Image src={Logo} fill alt='Logo' />
      </div>
      <div className='h-14 w-14 rounded-full relative overflow-hidden'>
        <Image src={Avatar} fill alt='Logo' style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
};

export default Header;
