import Image from 'next/image';
import styled from '@emotion/styled';

function FloatingBtn() {
  return (
    <Btn>
      <a
        href="https://forms.gle/iRgHM2vVrbKrNAEF8"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Image
          src="/images/floating_email_button.png"
          width="24"
          height="24"
          alt="email"
        />
      </a>
    </Btn>
  );
}
const Btn = styled.button`
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 0 2.4rem 1.7rem 0;
  border-radius: 50%;
  box-shadow: 0 0.4rem 0.6rem -0.4rem ${(props) => props.theme.colors.grayscale.gray_1000};
  width: 5.6rem;
  height: 5.6rem;
`;

export default FloatingBtn;
