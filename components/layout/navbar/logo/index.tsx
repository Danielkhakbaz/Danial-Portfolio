import Image from "next/image";
import DanialKhakbazLogo from "public/images/logos/Danial-Khakbaz-Logo.webp";

const Logo = async () => {
  return (
    <Image
      width={65}
      height={65}
      src={DanialKhakbazLogo}
      alt="Danial Khakbaz's logo"
      rel="preload"
      priority
      fetchPriority="high"
    />
  );
};

export default Logo;
