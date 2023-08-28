import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/user/userActions';
import { clearStatusState } from '../../store/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const { loading, status } = useSelector(state => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearStatusState());
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </>
      ) : (
        <>
          {status ? (
            <>
              {status === 'error' && <>
                <h3>An error occured!</h3>
                <button onClick={() => dispatch(clearStatusState())}>Try again!</button>
              </>}
            </>
          ) : (
            <>
              <input type="text" placeholder="Username" onChange={(e) => setUser({ ...user, username: e.target.value })} />

              <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />

              <button onClick={() => dispatch(registerUser({ user, navigate }))}>Register</button>
            </>
          )}
        </>
      )}
    </>
  )
}

export default Register