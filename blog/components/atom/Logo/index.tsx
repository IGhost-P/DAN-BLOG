import LogoSvg from "assets/images/Logo.svg";
import LogoDarkSvg from "assets/images/Logo-dark.svg";
import Image from "next/image";
export function Logo({ isDark = false }: { isDark?: boolean }) {
  return (
    <div className="logo">
      <Image
        src={isDark ? LogoDarkSvg : LogoSvg}
        alt="logo"
        width={437}
        height={89}
      />
    </div>
  );
}
