import { useContext } from "react";
import LogoSvg from "assets/images/Logo.svg";
import LogoDarkSvg from "assets/images/Logo-dark.svg";
import Image from "next/image";
import { ThemeContext } from "pages/_app";
import { lightTheme } from "styles/theme";
import * as S from "./style";
export function Logo() {
  const { colorTheme, toggleColorTheme } = useContext(ThemeContext);

  return (
    <div className="logo" css={S.Container}>
      <Image
        src={colorTheme === lightTheme ? LogoSvg : LogoDarkSvg}
        alt="logo"
        width={437}
        height={89}
      />
    </div>
  );
}
