import styled from '@emotion/styled';

const TopicBannerContainer = styled.div`
  width: calc(29.6rem * 3 + 1.6rem * 3);

  .slick-dots li {
    margin: 0;
  }

  .slick-track > div {
    margin-right: 1.6rem;
    width: 29.6rem !important;
  }

  .slick-slide div {
    outline: none;
  }
`;

const TopicBanner = styled.div`
  border-radius: 1.6rem;
  background-color: ${(props) => props.theme.colors.grayscale.gray_200};
  width: 29.6rem;
  height: 29.8rem;
`;

const TopicContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.6rem 2rem 2rem;
`;

const TopicContentTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export {
  TopicBannerContainer,
  TopicBanner,
  TopicContentWrapper,
  TopicContentTopWrapper,
};
