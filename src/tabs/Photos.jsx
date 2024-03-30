import { getPhotos } from 'apiService/photos';
import { Form, PhotosGallery, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    getPhotos(query, page)
      .then(({ photos, total_results }) => {
        setImages(photos);
        setTotalResults(total_results);
      })
      .catch(error => setError(error.message));
  }, [query, page]);

  function handleSubmit(query) {
    setQuery(query);
  }
  return (
    <>
      {/* <Text textAlign="center">Let`s begin search 🔎</Text> */}
      <Form onSubmit={handleSubmit} />
      <PhotosGallery images={images} />
    </>
  );
};
