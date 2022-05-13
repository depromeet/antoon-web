import { StockDownIcon, StockUpIcon } from '@assets/icons/StockIcon';
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
}

function UpDownBtn(props: Props) {
  return (
    <>
      <UpDownBtnWrapper status={props.upDownStatus}>
        <UpDownBtnTitle>
          {props.upDownStatus == 'up' && (
            <span>
              <StockUpIcon /> {'탑승하기'}
            </span>
          )}
          {props.upDownStatus == 'down' && (
            <span>
              <StockDownIcon /> {'하차하기'}
            </span>
          )}
        </UpDownBtnTitle>
        <UpDownBtnSub>
          {props.upDownUser} 개미
          {props.upDownStatus == 'up' && '탑승 😎'}
          {props.upDownStatus == 'down' && '하차 😭'}
        </UpDownBtnSub>
      </UpDownBtnWrapper>
    </>
  );
}

export default UpDownBtn;
