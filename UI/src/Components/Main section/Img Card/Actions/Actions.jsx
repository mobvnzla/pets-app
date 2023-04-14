import AddFavorite from './AddFavorite';
import Vote from './Vote';

export default function Actions({ children }) {
  return (
    <>
      <div className='actions'>{children}</div>
    </>
  );
}
