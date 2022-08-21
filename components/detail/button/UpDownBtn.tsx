/* eslint-disable @typescript-eslint/ban-types */
import { useGetProfile } from '@apis/user';
import { StockDownIcon, StockUpIcon } from '@assets/icons/StockIcon';
import { useToast } from '@hooks/useToast';
import {
  UpDownBtnWrapper,
  UpDownBtnTitle,
  UpDownBtnSub,
} from './UpDownBtn.style';

interface Props {
  /**
   * @name 탑승하차-상태
   */
  upDownStatus: string;
  /**
   * @name 탑승하차-인원
   */
  upDownUser: number;
  /**
   * @name 모달
   */
  onOpen: Function;
  onJoinLeave: Function;
}

function UpDownBtn(props: Props) {
  const { data: user } = useGetProfile();
  const { fireToast } = useToast();

  const handleModalClick = () => {
    if (!user) {
      fireToast({ joinLeaveStatus: 'NO-LOGIN' });
      return;
    }
    props.onJoinLeave(props.upDownStatus);
    props.onOpen();
  };

  return (
    <>
      <UpDownBtnWrapper status={props.upDownStatus} onClick={handleModalClick}>
        <UpDownBtnTitle>
          {props.upDownStatus === 'JOIN' && (
            <span>
              <StockUpIcon /> {'탑승하기'}
            </span>
          )}
          {props.upDownStatus === 'LEAVE' && (
            <span>
              <StockDownIcon /> {'하차하기'}
            </span>
          )}
        </UpDownBtnTitle>
        <UpDownBtnSub>
          {props.upDownUser} 개미
          {props.upDownStatus === 'JOIN' && '탑승 😎'}
          {props.upDownStatus === 'LEAVE' && '하차 😭'}
        </UpDownBtnSub>
      </UpDownBtnWrapper>
    </>
  );
}

export default UpDownBtn;
