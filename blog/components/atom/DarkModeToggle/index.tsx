/** @jsxImportSource @emotion/react */
import React, { ReactElement, useContext, useState } from "react";
import { css, jsx } from "@emotion/react";
import { ThemeContext } from "pages/_app";
import styled from "@emotion/styled";
import Image from "next/image";
import Bright from "assets/images/Bright.svg";
import Dark from "assets/images/Dark.svg";
import Moon from "assets/images/Moon.svg";
import Sun from "assets/images/Sun.svg";

import { lightTheme, ColorTheme } from "styles/theme";
import * as S from "./style";

export function DarkModeToggle() {
  const { colorTheme, toggleColorTheme } = useContext(ThemeContext);

  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev: boolean) => !prev);
    toggleColorTheme();
  };

  return (
    <>
      <S.ToggleBtn
        onClick={clickedToggle}
        toggle={toggle}
        colorTheme={colorTheme}
      >
        <Image
          src={toggle ? Bright : Dark}
          alt="toggle"
          width={60}
          height={25}
          layout={"fill"}
          objectFit={"cover"}
          priority={true}
        />
        <S.Circle toggle={toggle} colorTheme={colorTheme}>
          <Image
            src={toggle ? Sun : Moon}
            alt="moon"
            width={25}
            height={25}
            layout={"fill"}
            priority={true}
          />
        </S.Circle>
      </S.ToggleBtn>
    </>
  );
}

export default DarkModeToggle;
