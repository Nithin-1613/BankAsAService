export const registerUser = (userData) => {
    return {
      type: 'REGISTER_SUCCESS',
      payload: userData,
    };
  };


export const registerFail = (error) => {
    return {
      type: 'REGISTER_FAIL',
      payload: error,
    };
}

export const loginUser = (userData) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: userData,
    };
}

