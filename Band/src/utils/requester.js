import authData from './authData'

let requester = {

  login: (data) => {
    return fetch(
      authData.BASE_URL + 'user/' + authData.APP_KEY + '/login',
      {
        method: 'POST',
        headers: authData.AUTH_HEADERS,
        body: JSON.stringify(data)
      }
    ).then(data => data.json())
  },

  signIn: (data) => {
    return fetch(
      authData.BASE_URL + 'user/' + authData.APP_KEY + '/',
      {
        method: 'POST',
        headers: authData.AUTH_HEADERS,
        body: JSON.stringify(data)
      }
    ).then(data => data.json())
  },

  logout: () => {
    return fetch(
      authData.BASE_URL + 'user/' + authData.APP_KEY + '/_logout',
      {
        method: 'POST',
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem('authToken')
        }
      }
    ).then(localStorage.clear())
  },

  fetchAllAlbums: () => {
    return fetch(
      authData.BASE_URL + 'appdata/' + authData.APP_KEY + '/albums',
      {
        method: 'GET',
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem('authToken')
        }

      }
    ).then(data => data.json())
  },

  fetchSingleAlbum: (id) => {
    return fetch(
      authData.BASE_URL + 'appdata/' + authData.APP_KEY + '/albums/' + id,
      {
        method: 'GET',
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem('authToken')
        }

      }
    ).then(data => data.json())
  },

  deleteAlbum: (id) => {
    return fetch(
      authData.BASE_URL + 'appdata/' + authData.APP_KEY + '/albums/' + id,
      {
        method: 'DELETE',
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem('authToken')
        }
      }
    )
  },

  postComment: (formData) => {
    return fetch(
      authData.BASE_URL + 'appdata/' + authData.APP_KEY + '/comments',
      {
        method: 'POST',
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem('authToken'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)

      }
    ).then(data => data.json())
  },
  fetchComments: (id) => {
    return fetch(
      authData.BASE_URL + 'appdata/' + authData.APP_KEY + `/comments/?query={"postId":"${id}"}`,
      {
        method: 'GET',
        headers: {
          'Authorization': 'Kinvey ' + localStorage.getItem('authToken')
        }

      }
    ).then(data => data.json())
  }

}
export default requester
