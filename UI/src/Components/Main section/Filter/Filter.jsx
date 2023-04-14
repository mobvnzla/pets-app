export default function Filter({ children, sectionName }) {
  return (
    <>
      <form action='' className='filter'>
        <h3 className='filter__header'>{sectionName}</h3>
        <div className='filter__options'>{children}</div>
      </form>
    </>
  );
}
