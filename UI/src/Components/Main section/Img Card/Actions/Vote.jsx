import { useContext, useEffect, useRef } from 'react';
import { RandomContext } from '../../Random section/RandomContext';
import { handleLike, handleDislike, toggleClass } from './VoteFunctions';

const dogApiKey = 'live_g3PFnJGKFKPs6y7z6ibjgGjlokmc7a8c6ssIS6lpuid8lBRPITbQelYb8X6mZZ7K';
const catApiKey = '98cf8a7f-84d1-449a-91a5-158be79f1f83';
const dogURL = 'http://api.thedogapi.com/v1/votes';
const catURL = 'http://api.thecatapi.com/v1/votes';

export default function Vote({ modelID }) {
  const likeButton = useRef(null);
  const dislikeButton = useRef(null);
  const { animal } = useContext(RandomContext);

  //reset buttons to their default on scroll
  useEffect(() => {
    if (likeButton.current.classList.contains('action__like-button--liked')) toggleClass(likeButton.current, 'like');
    if (dislikeButton.current.classList.contains('action__dislike-button--disliked'))
      toggleClass(dislikeButton.current, 'dislike');
  }, [modelID]);

  return (
    <>
      <div className='vote'>
        <button
          ref={likeButton}
          className='action__button vote__button--like'
          onClick={() => handleLike(animal, modelID, likeButton.current, dislikeButton.current)}
        >
          Like
        </button>
        <button
          ref={dislikeButton}
          className='action__button vote__button--dislike'
          onClick={() => handleDislike(animal, modelID, dislikeButton.current, likeButton.current)}
        >
          Dislike
        </button>
      </div>
    </>
  );
}
