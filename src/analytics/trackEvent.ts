import ReactGA from 'react-ga4';

interface EventProps {
  category: string;
  action: string;
}

export function trackEvent(props: EventProps) {
  ReactGA.event({
    category: props.category,
    action: props.action
  });
}