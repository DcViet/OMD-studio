// import Image from "next/image";
import OmdCms from '@/components/omd_ContentCMS';

export default function OmdAbout() {
  return (
    <div className="flex w-[1024px] flex-col items-center">
      <div className="flex sm:absolute sm:bottom-[70px] sm:left-[280px] sm:right-[310px] sm:top-[380px] md:absolute md:left-[470px] md:top-[580px] lg:absolute lg:bottom-[930px] lg:left-[680px] lg:right-[180px] lg:top-[480px]"></div>
      <OmdCms />
    </div>
  );
}