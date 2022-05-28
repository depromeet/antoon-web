import { ArrowRight, CheckFill, CheckLine } from '@assets/icons';
import { all } from '@pages/user/signup/policy';
import { Dispatch, SetStateAction } from 'react';
import {
  CheckboxWrapper,
  CheckboxLabel,
  CheckboxInput,
} from './Checkbox.style';

interface Props {
  id: string;
  message: string;
  link: string;
  agreeAll?: boolean;
  checkedItems: string[];
  setCheckedItems: Dispatch<SetStateAction<string[]>>;
  isAllChecked: boolean;
}

function Checkbox(props: Props) {
  const {
    id,
    message,
    link,
    agreeAll,
    checkedItems,
    setCheckedItems,
    isAllChecked,
  } = props;

  const onChangeAll = () =>
    isAllChecked ? setCheckedItems([]) : setCheckedItems([...all]);

  const onChangeCheck = () => {
    const [agreeAllId] = [...all];

    checkedItems.includes(id)
      ? setCheckedItems(
          checkedItems
            .filter((item) => item !== id)
            .filter((item) => item !== agreeAllId),
        )
      : setCheckedItems([...checkedItems, id]);
  };

  return (
    <CheckboxWrapper agreeAll={!!agreeAll}>
      <CheckboxLabel htmlFor={id}>
        <CheckboxInput
          type="checkbox"
          id={id}
          onChange={agreeAll ? onChangeAll : onChangeCheck}
        />
        {checkedItems.includes(id) || isAllChecked ? (
          <CheckFill />
        ) : (
          <CheckLine />
        )}
        {message}
      </CheckboxLabel>
      <a href={link}>
        {!agreeAll && <ArrowRight style={{ marginLeft: 'auto' }} />}
      </a>
    </CheckboxWrapper>
  );
}

export default Checkbox;
