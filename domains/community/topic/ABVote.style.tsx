import styled from '@emotion/styled';

const ABVoteWrapper = styled.section``;

const ABVoteItems = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const ABVoteForm = styled.div`
  margin-bottom: 60px;
  text-align: center;
`;

const VoteJoinCount = styled.p`
  margin-top: 10px;
  color: ${(props) => props.theme.colors.grayscale.gray_800};
  font-size: 12px;
`;

export { ABVoteWrapper, ABVoteItems, ABVoteForm, VoteJoinCount };
