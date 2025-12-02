import Image from "next/image";

export const LogoFull = () => (
  <Image src="/assets/full-logo.svg" alt="Logo" width={120} height={28} />
);

export const LogoIcon = () => (
  <Image src="/assets/icon-logo.svg" alt="Logo" width={28} height={28} />
);

export const Logo = {
  Full: LogoFull,
  Icon: LogoIcon,
};
