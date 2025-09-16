import axios from 'axios';
import FetchWithAuth from './fetchWithAuth';

export async function requestLogin(value) {
  console.log(' i call request login');
  const response = await axios.post('http://localhost:5555/login', {
    email: value.email,
    password: value.password,
  });
  return response;
}

const refreshAccessToken = async () => {
  const token = JSON.parse(localStorage.getItem('authToken'));
  console.log('refresh access token ');
  console.log(token.refreshToken);
  await axios
    .post('http://localhost:5555/refreshToken', {
      token: token.refreshToken,
    })
    .then(
      (response) => {
        console.log(' Refresh token ---------> ');
        console.log(response);
        localStorage.setItem(
          'authToken',
          JSON.stringify({
            accessToken: response.data.accessToken,
            refreshToken: response.data.refreshToken,
          })
        );
      },
      (error) => {

        console.log(`refreshToken : `);
        console.log(error);

      }
    );
};



export async function fetchUser() {
  const url = 'http://localhost:5555/user';
  // const token = JSON.parse(localStorage.getItem('authToken'));

  const response = await FetchWithAuth(url, refreshAccessToken);
  return response;
}

export async function fetchProductById(productId) {
  try {
    const response = await axios.get(
      `http://localhost:5555/products/${productId}`
    );
    const product = response.data.data;
    return product;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchSearchProduct(value) {
  try {
    const response = await axios.get(
      `http://localhost:5555/product/search/${value}`
    );
    const product = response.data.data;
    return product;
  } catch (error) {
    if (error.response.status != 404) {
      console.log(error);
    }
    return [];
  }
}
