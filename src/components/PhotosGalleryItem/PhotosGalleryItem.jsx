import { GridItem } from '../GridItem/GridItem';
import css from './PhotosGalleryItem.module.css';

export const PhotosGalleryItem = ({ image: { avg_color, src, alt } }) => {
  return (
    <GridItem>
      <div
        className={css.thumb}
        style={{ backgroundColor: avg_color, borderColor: avg_color }}
      >
        <img src={src.large} alt={alt} />
      </div>
    </GridItem>
  );
};
