import { useEffect } from 'react';

//dog apikey live_g3PFnJGKFKPs6y7z6ibjgGjlokmc7a8c6ssIS6lpuid8lBRPITbQelYb8X6mZZ7K
//cat apikey 98cf8a7f-84d1-449a-91a5-158be79f1f83
const dogURL = 'http://api.thedogapi.com/v1';
const catURL = 'http://api.thecatapi.com/v1';

export default function useBreeds(animal, setBreeds, setBreed) {
  useEffect(() => {
    let ignore = false;
    if (animal.name == 'Dog') {
      fetch(`${dogURL}/breeds`)
        .then((response) => response.json())
        .then((data) => {
          if (!ignore) {
            setBreeds(data);
            setBreed(data[0]);
          }
        });
    } else {
      fetch(`${catURL}/breeds`)
        .then((response) => response.json())
        .then((data) => {
          if (!ignore) {
            setBreeds(data);
            setBreed(data[0]);
          }
        });
    }
    return () => {
      setBreeds([]);
      setBreed(null);
      ignore = true;
    };
  }, [animal]);
}
