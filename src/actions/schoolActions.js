import axios from 'axios';
// import { SEARCH_SCHOOL } from './types';


export const asyncSearchSchool = schoolData => (dispatch) => {
  console.log("School Data: ");
  console.log(schoolData);

  params = {
    'name': schoolData.name,
    'city': schoolData.city
  };

  axios.post('https://merenda-mais.herokuapp.com/get_schools/', params)
    .then((response) => {
      console.log(response.data);

      // If response is an empty array, no schools could be found.
    })
    .catch((error) => {
      console.log(error);
    });
};
