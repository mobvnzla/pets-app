export default function Section({ children, sectionName }) {
  return (
    <>
      <div className={`section__container`} id={`${sectionName}`}>
        <section className={`section`}>{children}</section>
      </div>
    </>
  );
}
