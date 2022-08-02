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
  width: min(414px, calc(100% - 12.8%));
  text-align: right;
`;

export default FloatingBtn;
