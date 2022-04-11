import { DEFAULT_IMG } from '@constants/icon-constants';
import { ThumbnailImg, ThumbnailWrap } from './Thumbnail.style';

type Props = {
  category: 'main' | 'sub';
  scale: boolean | false;
  readonly src: string;
  readonly alt: string;
};
function Thumbnail(props: Props) {
  const { category, scale, src, alt } = props;
  return (
    <>
      <ThumbnailWrap scale={scale}>
        <ThumbnailImg
          width={category === 'main' ? 550 : 550}
          height={category === 'main' ? 400 : 400}
          src={src}
          alt={alt}
          objectFit={scale ? 'cover' : 'contain'}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = DEFAULT_IMG.THUMBNAIL;
          }}
        />
      </ThumbnailWrap>
    </>
  );
}

export default Thumbnail;
