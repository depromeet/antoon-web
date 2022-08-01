import styled from '@emotion/styled';
import { EmailIcon } from '@assets/icons';

function FloatingBtn() {
  return (
    <BtnWrap>
      <a
        href="https://forms.gle/iRgHM2vVrbKrNAEF8"
        target="_blank"
        rel="noreferrer noopener"
      >
        <EmailIcon />
      </a>
    </BtnWrap>
  );
}

const BtnWrap = styled.div`
  position: fixed;
  bottom: 75px;
  width: min(43.2rem, calc(100% - 4.8rem));
  text-align: right;
`;

export default FloatingBtn;
