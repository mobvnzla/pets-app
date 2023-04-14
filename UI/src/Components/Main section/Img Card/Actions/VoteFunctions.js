function handleLike(animal, modelID, nodeRef, otherNodeRef) {
  /* if (animal == 'Dog') {
      const rawBody = JSON.stringify({
        image_id: modelID,
        sub_id: 'mob-123',
      });
  
      fetch(`${dogURL}?api_key=${dogApiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: rawBody,
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    } */
  if (otherNodeRef.classList.contains('action__dislike-button--disliked'))
    handleDislike(animal, modelID, otherNodeRef, nodeRef);
  nodeRef.classList.contains('action__like-button--liked')
    ? console.log('you dont like ', modelID)
    : console.log('you like ', modelID);
  toggleClass(nodeRef, 'like');
}
function handleDislike(animal, modelID, nodeRef, otherNodeRef) {
  // since I can not send any fetch request but get request i cant vote
  if (otherNodeRef.classList.contains('action__like-button--liked')) handleLike(animal, modelID, otherNodeRef, nodeRef);
  nodeRef.classList.contains('action__dislike-button--disliked')
    ? console.log('you dont dislike ', modelID)
    : console.log('you dislike ', modelID);
  toggleClass(nodeRef, 'dislike');
}
function toggleClass(ref, buttonType) {
  if (buttonType == 'like') ref.classList.toggle('action__like-button--liked');
  if (buttonType == 'dislike') ref.classList.toggle('action__dislike-button--disliked');
}

export { handleLike, handleDislike, toggleClass };
