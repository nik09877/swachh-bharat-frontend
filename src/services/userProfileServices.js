import axios from 'axios';

const updateUserProfile = async (user, token) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await axios.put(`/api/user/`, user, config);
    console.log('userProfileServices:updateUserProfile()  Success: ', data);
    return {
      data: data,
      isUpdated: true,
      error: null,
    };
  } catch (error) {
    console.error(
      'userProfileServices:updateUserProfile()  Error: ',
      error.response.data
    );
    return {
      data: null,
      isUpdated: false,
      error: error.response.data,
    };
  }
};

const getUserProfile = async (token) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await axios.put(`/api/user/`, config);
    console.log('userProfileServices:getUserProfile()  Success: ', data);
    localStorage.setItem('user', JSON.stringify(data));
    return {
      data: data,
      isUpdated: true,
      error: null,
    };
  } catch (error) {
    console.error(
      'userProfileServices:updateUserProfile()  Error: ',
      error.response.data
    );
    return {
      data: null,
      isUpdated: false,
      error: error.response.data,
    };
  }
};

const userProfileServices = { updateUserProfile, getUserProfile };
export default userProfileServices;
