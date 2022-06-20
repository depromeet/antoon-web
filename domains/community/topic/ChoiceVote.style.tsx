import styled from '@emotion/styled';

const ChoiceVoteWrapper = styled.section``;

const ChoiceVoteItems = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const ChoiceVoteForm = styled.div`
  margin-bottom: 60px;
  text-align: center;
`;

const VoteJoinCount = styled.p`
  margin-top: 10px;
  color: ${(props) => props.theme.colors.grayscale.gray_800};
  font-size: 12px;
`;

export { ChoiceVoteWrapper, ChoiceVoteItems, ChoiceVoteForm, VoteJoinCount };
