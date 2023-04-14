import Section from '../../Section';
import ImgCard from '../Img Card/ImgCard';
import Actions from '../Img Card/Actions/Actions';
import { useRef } from 'react';

function previewImage(file, previewImg, previewContainer, deleteFileButton) {
  if (file.length > 0) {
    const fileReader = new FileReader();

    fileReader.onload = function (e) {
      previewImg.setAttribute('src', e.target.result);
      previewContainer.classList.remove('hidden');
      deleteFileButton.classList.remove('hidden');
    };
    fileReader.readAsDataURL(file[0]);
  }
}
function emptyForm(file, previewContainer) {
  file.value = '';
  previewContainer.classList.add('hidden');
}
function submitImg(form, file, previewContainer) {
  const formData = new FormData(form);

  try {
    /* fetch(API_URL_UPLOAD, {
      method: 'POST',
      headers: {
        'X-API-KEY': 'my-api-ley',
      },
      body: formData,
    }); */
  } catch (err) {
    console.log(err);
  } finally {
    emptyForm(file, previewContainer);
  }
}

export default function UploadSection() {
  const form = useRef(null);
  const previewContainer = useRef(null);
  const previewImg = useRef(null);
  const file = useRef(null);
  const deleteFileButton = useRef(null);

  return (
    <>
      <Section sectionName='upload'>
        <form action='' ref={form}>
          <label htmlFor='file' className='upload__label'>
            <ImgCard>
              <span className='upload__span'>Upload your own lil hommie!</span>
              <input
                className='hidden'
                type='file'
                name='file'
                id='file'
                ref={file}
                onChange={() =>
                  previewImage(
                    file.current.files,
                    previewImg.current,
                    previewContainer.current,
                    deleteFileButton.current,
                  )
                }
              />
              <div className='preview-container hidden' ref={previewContainer}>
                <img src='' alt='' ref={previewImg} className='preview-container__img' />
                <button
                  type='button'
                  className='preview-container__delete-button hidden'
                  ref={deleteFileButton}
                  onClick={() => emptyForm(file.current, previewContainer.current)}
                >
                  X
                </button>
              </div>
            </ImgCard>
          </label>
          <Actions>
            <button
              onClick={(e) => {
                e.preventDefault();
                submitImg(form.current, file.current, previewContainer.current);
              }}
              type='submit'
              className='upload__submit-button'
            >
              Share your lil sunshine
            </button>
          </Actions>
        </form>
      </Section>
    </>
  );
}
