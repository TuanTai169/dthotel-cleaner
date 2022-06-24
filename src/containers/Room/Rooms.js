import React from 'react';
import { useSelector } from 'react-redux';

import RoomItem from './RoomItem';
import FullLoading from '../../components/Common/FullLoading/FullLoading';
import ScrollToTop from './../../components/Common/ScrollToTop/ScrollToTop';

const Rooms = () => {
  const rooms = useSelector((state) => state.roomReducer.rooms);
  const isLoading = useSelector((state) => state.roomReducer.isRoomLoading);

  return (
    <>
      {isLoading ? (
        <FullLoading />
      ) : (
        <>
          <div className='page__header' style={{ marginBottom: '10px' }}>
            <div className='page__title'>
              <h3>Room Diagram</h3>
            </div>
          </div>
          <div className='page__body'>
            <div className='row'>
              <div className='col'>
                <div className='row'>
                  {rooms.map((room) => (
                    <div className='col-md-3 col-sm-6 col-xs-12' key={room._id}>
                      <RoomItem room={room} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <ScrollToTop />
    </>
  );
};

export default Rooms;
