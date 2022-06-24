import React, { useEffect } from 'react';
import './layout.css';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import themeAction from '../../redux/actions/themeAction';

import TopNav from '../Topnav/TopNav';
import Rooms from '../../containers/Room/Rooms';
import Profile from '../../containers/Profile/Profile';
import NotFound from '../Common/NotFound/NotFound';

import { getAllRoom } from '../../redux/actions/roomAction';

const Layout = () => {
  const themeReducer = useSelector((state) => state.themeReducer);
  const auth = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem('themeMode', 'theme-mode-light');
    const colorClass = localStorage.getItem('colorMode', 'theme-mode-light');
    dispatch(themeAction.setMode(themeClass));
    dispatch(themeAction.setColor(colorClass));
    dispatch(getAllRoom(auth._id));
    return () => {};
  }, [dispatch, auth]);

  return (
    <>
      <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
        {/* <Sidebar /> */}
        <div className='layout__content'>
          <TopNav />
          <div className='layout__content-main'>
            <Routes>
              <Route path='/' exact element={<Rooms />} />
              <Route path='/profile' exact element={<Profile />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
