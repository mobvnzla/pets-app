export default function Scroller({ dir, disabled, handleClick }) {
  function factor(a) {
    return dir == 'L' ? a - 1 : a + 1;
  }
  return (
    <>
      <button className='scroller' disabled={disabled} onClick={() => handleClick(factor)}>
        {dir}
      </button>
    </>
  );
}
