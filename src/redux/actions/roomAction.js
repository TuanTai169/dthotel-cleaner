import * as types from '../constants/roomConstant';
import axios from 'axios';
import { toast } from 'react-toastify';
import { HOST_API_URL } from './../constants/api';

// READ ALL Room
export const getAllRoom = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.SET_ROOM_LOADING, payload: true });
      const response = await axios.get(`${HOST_API_URL}/room/cleaner/${id}`);

      if (response.data.success) {
        dispatch({
          type: types.GET_ALL_ROOM,
          payload: response.data.rooms,
        });
        dispatch({ type: types.SET_ROOM_LOADING, payload: false });
        return response.data;
      }
      return undefined;
    } catch (error) {
      dispatch({ type: types.SET_ROOM_ERROR });
      error.response && toast.error(error.response.data.message);
    }
  };
};

//GET READY
export const changeStatusRoom = (id, status) => {
  return async (dispatch) => {
    try {
      dispatch({ type: types.SET_ROOM_LOADING, payload: true });
      const response = await axios.put(
        `${HOST_API_URL}/room/change-status/${status}/${id}`
      );
      if (response.data.success) {
        dispatch({
          type: types.UPDATE_ROOM,
          payload: response.data.updatedRoom,
        });
        dispatch({ type: types.SET_ROOM_LOADING, payload: false });
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: types.SET_ROOM_LOADING, payload: false });
      error.response && toast.error(error.response.data.message);
    }
  };
};
