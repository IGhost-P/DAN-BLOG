/** @jsxImportSource @emotion/react */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FootText } from "components";
import * as S from "./style";
import { Icon } from "./style";
import { useDarkMode } from "hooks/useDarkMode";

interface Props {
  onClick: () => void;
}

export function FooterSection({ onClick }: Props) {
  const { colorTheme, toggleColorTheme } = useDarkMode();

  return (
    <footer css={S.Container}>
      <S.Div css={S.front}>
        <FootText>@ 2022 | Yang Snag Woo</FootText>
      </S.Div>
      <S.Div css={S.mid}>
        <FootText onClick={onClick}>CONTACT</FootText>
      </S.Div>
      <S.Div css={S.back}>
        <a href="https://www.instagram.com/tkd_wuuu/">
          <FontAwesomeIcon
            icon={faInstagram}
            width={15}
            height={15}
            css={Icon(colorTheme)}
          />
        </a>
        <a href="https://github.com/IGhost-P">
          <FontAwesomeIcon
            icon={faGithub}
            width={15}
            height={15}
            css={Icon(colorTheme)}
          />
        </a>
      </S.Div>
    </footer>
  );
}
