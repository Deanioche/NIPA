export const mention = async() => {

  let data = await fetch('https://api.github.com/users')
    .then(response => response.json())
    .catch(error => console.error('Error:', error));

  console.log(data);
  
  let usersList = data.map(user => `<li>${user.login}</li>`).join('');
  return `<h1>Page 3</h1><ul>${usersList}</ul>`;
}