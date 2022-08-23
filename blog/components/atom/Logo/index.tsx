import { useContext } from "react";
import LogoSvg from "assets/images/Logo.svg";
import LogoDarkSvg from "assets/images/Logo-dark.svg";
import Image from "next/image";
import { ThemeContext } from "pages/_app";
import { lightTheme, ColorTheme } from "styles/theme";
export function Logo({ isDark = false }: { isDark?: boolean }) {
  const { colorTheme, toggleColorTheme } = useContext(ThemeContext);

  return (
    <div className="logo">
      <Image
        src={colorTheme === lightTheme ? LogoSvg : LogoDarkSvg}
        alt="logo"
        width={437}
        height={89}
      />
    </div>
  );
}
