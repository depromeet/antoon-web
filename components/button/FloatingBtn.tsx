import styled from '@emotion/styled';
import { EmailIcon } from '@assets/icons';

function FloatingBtn() {
  return (
    <BtnWrap>
      <Btn>
        <a
          href="https://forms.gle/iRgHM2vVrbKrNAEF8"
          target="_blank"
          rel="noreferrer noopener"
        >
          <EmailIcon />
        </a>
      </Btn>
    </BtnWrap>
  );
}

const BtnWrap = styled.div`
  position: fixed;
  bottom: 104px;
  width: min(43.2rem, calc(100% - 4.8rem));
  text-align: right;
`;

const Btn = styled.button`
  border-radius: 50%;
  box-shadow: 0 0.4rem 0.5rem -0.4rem ${(props) => props.theme.colors.grayscale.gray_1000};
  background-color: ${(props) => props.theme.colors.basic.white};
  width: 5.6rem;
  height: 5.6rem;
`;

export default FloatingBtn;
