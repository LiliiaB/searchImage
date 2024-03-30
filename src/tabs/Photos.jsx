import { getPhotos } from 'apiService/photos';
import { Button, Form, PhotosGallery, Text } from 'components';
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
        setImages(prev => [...prev,...photos]);
        setTotalResults(total_results);
      })
      .catch(error => setError(error.message));
  }, [query, page]);

  function handleSubmit(query) {
    setImages([])
    setPage(1)
    setError(null)
    setTotalResults(0)
    setQuery(query);
  }

  function handleLoadMore() {
    setPage(page+1)
  }
  return (
    <>
      <Form onSubmit={handleSubmit} />
      <PhotosGallery images={images} />
      {error && <Text textAlign="center">{error}🔎</Text>}
      {(totalResults>0 && images.length < totalResults)&& (<Button onClick={handleLoadMore} >
Load more
      </Button>) }
    </>
  );
};
