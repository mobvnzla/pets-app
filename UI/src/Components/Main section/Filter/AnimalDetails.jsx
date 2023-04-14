import { useContext } from 'react';

export default function AnimalDetails({ context }) {
  const { breed } = useContext(context);

  const name = breed ? breed.name : null;
  const temperament = breed ? breed.temperament : null;

  return (
    <>
      <div className='animal-details'>
        <h3 className='animal-details__header'>{name ?? 'Animal'} details</h3>
        <p className='animal-temperament__p'>Temperament: {temperament ?? 'Loading'}</p>
      </div>
    </>
  );
}
