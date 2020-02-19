export const PROFILE_FETCHED = 'PROFILE_FETCHED';
export const PROFILE_EDITED = 'PROFILE_EDITED';

export function fetchProfile() {
  return (dispatch) => {
    let header = new Headers({"Content-Type":"application/json", "Authorization":"token 0d4b255aedd171e5fdbfeab9b510772e0a09b75c"});
    return fetch('https://api.github.com/users/ajmarquezz', {
      method: 'GET',
      headers: header
    })
    .then(response => response.json())
    .then(json => {
      dispatch(loadProfile(json))
    })
    .catch(error => console.log(error));
  }
}

export function loadProfile(results) {
  return {
    type : PROFILE_FETCHED,
    payload : results
  }
}
