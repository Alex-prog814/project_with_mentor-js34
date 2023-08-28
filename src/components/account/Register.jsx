import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/user/userActions';
import { clearStatusState } from '../../store/user/userSlice';
import { useNavigate } from 'react-router-dom';
import './reg_log.css';

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
    <div className='register_form'>
      {loading ? (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      ) : (
        // Form content
        <div className='register_form_content'>
          <h1>Register Form</h1>
          {status === 'error' && (
            <div>
              <h3>An error occurred!</h3>
              <button onClick={() => dispatch(clearStatusState())}>Try again!</button>
            </div>
          )}

          {!status && (
            <div>
              <input
                className='register_input'
                type="text"
                placeholder="Username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              <input
                className='register_input'
                type="password"
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <button
                className='shrink-border'
                onClick={() => dispatch(registerUser({ user, navigate }))}
              >
                Register
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Register