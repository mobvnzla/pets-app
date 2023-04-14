import Scroller from './Scroller';

export default function ImgPlayer({ src, hasNext, hasPrevious, handleClick }) {
  return (
    <>
      <div className='imgPlayer'>
        <Scroller dir='L' disabled={!hasPrevious || src == null} handleClick={handleClick}></Scroller>
        <div className='imgPlayer__imgContainer'>
          <span className='imgPlayer__span'>...loading</span>
          <img src={src} className='img' />
        </div>
        <Scroller dir='R' disabled={!hasNext || src == null} handleClick={handleClick}></Scroller>
      </div>
    </>
  );
}
