import React, { useState } from 'react';
import DialogChange from '../../components/Dialog/DialogChange';
import { changeStatusRoom, getAllRoom } from '../../redux/actions/roomAction';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

const RoomItem = (props) => {
  const auth = useSelector((state) => state.auth.user);

  const [conformDialog, setConformDialog] = useState({
    isOpenDialog: false,
    title: '',
    message: '',
  });
  const dispatch = useDispatch();
  const { room } = props;
  const { roomNumber, price, status, _id } = room;

  const handlerReady = async (id) => {
    try {
      await dispatch(changeStatusRoom(id, 'ready'));
      dispatch(getAllRoom(auth._id));
    } catch (error) {
      //
    }
  };

  return (
    <>
      <div
        className='status-card'
        style={{
          cursor: 'pointer',
          backgroundColor: status === 'Cleaning' ? 'yellow' : '#fff',
        }}
        onClick={() =>
          setConformDialog({
            isOpenDialog: true,
            title: 'Cleaning Room',
            message: 'Are you sure this room has been cleaned ?',
            onConform: () => handlerReady(_id),
          })
        }
      >
        <div className='status-card__info'>
          <h4>{roomNumber}</h4>
          <span>${price}</span>
        </div>
      </div>
      <DialogChange
        conformDialog={conformDialog}
        setConformDialog={setConformDialog}
      />
    </>
  );
};

export default RoomItem;
