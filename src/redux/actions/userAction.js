import * as types from '../constants/userConstant';
import axios from 'axios';
import { toast } from 'react-toastify';
import { HOST_API_URL } from './../constants/api';

// READ ALL USER
export const getAllUser = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.SET_USER_LOADING, payload: true });

      const response = await axios.get(`${HOST_API_URL}/user`);
      if (response.data.success) {
        dispatch({
          type: types.GET_ALL_USER,
          payload: response.data.users,
        });
        dispatch({ type: types.SET_USER_LOADING, payload: false });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: types.SET_USER_LOADING, payload: false });
      error.response && toast.error(error.response.data.message);
    }
  };
};

//update user
export const updateUser = (updateUser, id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.SET_USER_LOADING, payload: true });
      const response = await axios.put(
        `${HOST_API_URL}/user/update/${id}`,
        updateUser
      );
      if (response.data.success) {
        dispatch({
          type: types.UPDATE_USER,
          payload: response.data.updatedUser,
        });
        toast.success(response.data.message);
        dispatch({ type: types.SET_USER_LOADING, payload: false });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: types.SET_USER_LOADING, payload: false });
      error.response && toast.error(error.response.data.message);
    }
  };
};

//update Profile user
export const updateProfile = (updateUser, id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.SET_USER_LOADING, payload: true });

      const response = await axios.put(
        `${HOST_API_URL}/user/update-profile/${id}`,
        updateUser
      );
      if (response.data.success) {
        dispatch({
          type: types.UPDATE_USER,
          payload: response.data.updatedUser,
        });
        dispatch({ type: types.SET_USER_LOADING, payload: false });
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: types.SET_USER_LOADING, payload: false });
      error.response && toast.error(error.response.data.message);
    }
  };
};

// Change Password
export const changePassword = (updateUser, id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.SET_USER_LOADING, payload: true });
      const response = await axios.put(
        `${HOST_API_URL}/user/change-password/${id}`,
        updateUser
      );
      if (response.data.success) {
        dispatch({
          type: types.UPDATE_USER,
          payload: response.data.updatedUser,
        });
        dispatch({ type: types.SET_USER_LOADING, payload: false });
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: types.SET_USER_LOADING, payload: false });
      error.response && toast.error(error.response.data.message);
    }
  };
};
