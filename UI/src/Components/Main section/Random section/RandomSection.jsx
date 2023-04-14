import { useState, useEffect } from 'react';
import { RandomContext } from './RandomContext';
import useBreeds from '../../CustomHooks/useBreeds';
import Section from '../../Section';
import Filter from '../Filter/Filter';
import DropDown from '../Filter/DropDown';
import AnimalDetails from '../Filter/AnimalDetails';
import ImgCard from '../Img Card/ImgCard';
import getModels from '../Img Card/Img player/getModels';
import Vote from '../Img Card/Actions/Vote';
import AddFavorite from '../Img Card/Actions/AddFavorite';
import ImgPlayer from '../Img Card/Img player/ImgPlayer';
import Actions from '../Img Card/Actions/Actions';

const animalOptions = [{ name: 'Dog' }, { name: 'Cat' }];
const animalOptionsJSX = animalOptions.map((o) => (
  <option value={o.name} key={o.name}>
    {o.name}
  </option>
));
export default function RandomSection() {
  const [animal, setAnimal] = useState(animalOptions[0]);
  const [breeds, setBreeds] = useState([]);
  const [breed, setBreed] = useState(null);

  useBreeds(animal, setBreeds, setBreed);
  const breedsJSX = breeds
    ? breeds.map((breed) => (
        <option value={breed.name} key={breed.id}>
          {breed.name}
        </option>
      ))
    : null;

  const [models, setModels] = useState([]);
  const [model, setModel] = useState(0);
  const prev = model != 0;
  const next = model != models.length - 1;

  useEffect(() => {
    getModels({ animal, breed, setModels });
    return () => {
      setModels([]);
      setModel(0);
    };
  }, [breed]);

  const url = models.length > 0 ? models[model].url : null;
  const modelID = models.length > 0 ? models[model].id : null;

  return (
    <>
      <RandomContext.Provider value={{ animal, setAnimal, breed, setBreed, breeds, setBreeds }}>
        <Section sectionName='random'>
          <div className='animal-information'>
            <Filter sectionName={'Random'}>
              <DropDown
                whatFor={'animal'}
                labelText='Animal'
                populationJSX={animalOptionsJSX}
                options={animalOptions}
                setValue={setAnimal}
              ></DropDown>
              <DropDown
                whatFor={'breed'}
                labelText='Breed'
                populationJSX={breedsJSX}
                options={breeds}
                setValue={setBreed}
              ></DropDown>
            </Filter>
            <AnimalDetails context={RandomContext}></AnimalDetails>
          </div>
          <ImgCard>
            <ImgPlayer src={url} hasPrevious={prev} hasNext={next} handleClick={setModel}></ImgPlayer>
            <Actions>
              <Vote modelID={modelID}></Vote>
              <AddFavorite></AddFavorite>
            </Actions>
          </ImgCard>
        </Section>
      </RandomContext.Provider>
    </>
  );
}
