export const home = async () => {

  // fetch random image
  let catImage = await fetch('https://images.unsplash.com/photo-1564013799919-ab600027ffc6')
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
    .catch(error => console.error('Error:', error));

  return `<h1>Home</h1>
  <p>my home</p>
  <img width="360px" src="${catImage}" />`;
}