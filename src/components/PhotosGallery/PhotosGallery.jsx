import { PhotosGalleryItem } from '../PhotosGalleryItem/PhotosGalleryItem';
import { Grid } from '../Grid/Grid';

export const PhotosGallery = ({ images }) => {
  return (
    <Grid>
      {images.map(image => (
        <PhotosGalleryItem key={image.id} image={image} />
      ))}
    </Grid>
  );
};
