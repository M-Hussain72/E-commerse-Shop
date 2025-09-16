import { createContext, useState } from 'react';

export const LSVisibilityCtx = createContext({
  currentState: '', // like login, or successFullLogin
  showLogin: () => {},
  hideLogin: () => {},
  showSignUp: () => {},
  hideSignUp: () => {},
});

// eslint-disable-next-line react/prop-types
export default function LSVisibilityProvider({ children }) {
  const [currentState, setCurrentState] = useState('');

  function showLogin() {
    setCurrentState('login');
  }
  function hideLogin() {
    setCurrentState('');
  }
  function showSignUp() {
    setCurrentState('signup');
  }
  function hideSignUp() {
    setCurrentState('');
  }

  const valueCtx = {
    currentState: currentState,
    showLogin,
    showSignUp,
    hideLogin,
    hideSignUp,
  };

  return (
    <LSVisibilityCtx.Provider value={valueCtx}>
      {children}
    </LSVisibilityCtx.Provider>
  );
}
