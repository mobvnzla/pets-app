import ImgCard from '../Img Card/ImgCard';
import Filter from '../Filter/Filter';
import { FavoriteContext } from './FavoriteContext';
import { useState } from 'react';
import Section from '../../Section';
import ImgPlayer from '../Img Card/Img player/ImgPlayer';
import DropDown from '../Filter/DropDown';
import Actions from '../Img Card/Actions/Actions';
import AnimalDetails from '../Filter/AnimalDetails';

const animalOptions = [{ name: 'Dog' }, { name: 'Cat' }];
const animalOptionsJSX = animalOptions.map((o) => (
  <option value={o.name} key={o.name}>
    {o.name}
  </option>
));
export default function FavoriteSection() {
  const [animal, setAnimal] = useState(animalOptions[0]);

  return (
    <>
      <FavoriteContext.Provider value={{ animal }}>
        <Section sectionName='favorite'>
          <div className='animal-information'>
            <Filter sectionName={'Favorite'}>
              <DropDown
                whatFor={'animal'}
                labelText='Animal'
                populationJSX={animalOptionsJSX}
                options={animalOptions}
                setValue={setAnimal}
              ></DropDown>
            </Filter>
            <AnimalDetails context={FavoriteContext}></AnimalDetails>
          </div>
          <ImgCard>
            <ImgPlayer></ImgPlayer>
            <Actions></Actions>
          </ImgCard>
        </Section>
      </FavoriteContext.Provider>
    </>
  );
}
