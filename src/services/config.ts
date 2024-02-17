import axios from 'axios';

axios.post('/user', {
  firstName: 'Santos',
  lastName: 'Dumont'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.error(error);
});
