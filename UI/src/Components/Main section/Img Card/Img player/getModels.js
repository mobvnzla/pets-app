const dogApiKey = 'live_g3PFnJGKFKPs6y7z6ibjgGjlokmc7a8c6ssIS6lpuid8lBRPITbQelYb8X6mZZ7K';
const catApiKey = '98cf8a7f-84d1-449a-91a5-158be79f1f83';
const dogURL = 'http://api.thedogapi.com/v1';
const catURL = 'http://api.thecatapi.com/v1';

export default function getModels({ animal, breed, setModels }) {
  if (!breed) return;

  if (animal.name == 'Dog') {
    return fetch(`${dogURL}/images/search?breed_ids=${breed.id}&limit=10&api_key=${dogApiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setModels((a) => [...a, ...data]);
      });
  } else {
    return fetch(`${catURL}/images/search?breed_ids=${breed.id}&limit=10&api_key=${catApiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setModels((a) => [...a, ...data]);
      });
  }
}
