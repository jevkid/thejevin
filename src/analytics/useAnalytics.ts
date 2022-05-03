import * as React from 'react';
import ReactGA from 'react-ga4';

export function useAnalytics() {
  const [initialised, setInitialised] = React.useState(false);

  React.useEffect(() => {
    ReactGA.initialize('G-N32M96TL8R');
    setInitialised(true);
  }, []);

  return initialised;
}