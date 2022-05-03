import * as React from 'react';
import ReactGa from 'react-ga4';
import { useLocation } from 'react-router-dom';

interface WrapperProps {
  initialised: boolean;
  children: React.PropsWithChildren<any>;
}

export function Wrapper(props: WrapperProps) {
  const location = useLocation();

  React.useEffect(() => {
    if (props.initialised) {
      ReactGa.pageview(location.pathname + location.search);
    }
  }, [props.initialised, location]);

  return props.children;
}
