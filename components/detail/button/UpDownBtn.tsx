import { StockDownIcon, StockUpIcon } from '@assets/icons/StockIcon';
import { MouseEventHandler } from 'react';
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
  onOpen: MouseEventHandler<HTMLElement>;
  onJoinLeave: any;
}

function UpDownBtn(props: Props) {
  const clickwrapper = () => {
    props.onJoinLeave;
  };

  return (
    <>
      <UpDownBtnWrapper status={props.upDownStatus} onClick={props.onOpen}>
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
