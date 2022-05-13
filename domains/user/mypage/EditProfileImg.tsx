import ProfileDefaultImg from '@assets/images/ProfileDefaultImg';

import { EditProfileImgWrap } from './EditProfileImg.style';

function EditProfileImg() {
  return (
    <EditProfileImgWrap>
      <ProfileDefaultImg width="80" height="80" />
    </EditProfileImgWrap>
  );
}

export default EditProfileImg;
