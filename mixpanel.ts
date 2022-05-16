import mixpanel, { Dict, Query } from 'mixpanel-browser';

const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN as string;
const isPrd = process.env.NEXT_PUBLIC_ENV === 'prd';

mixpanel.init(token);

export const Mixpanel = {
  tk: token,
  identify: (id: string) => {
    isPrd && mixpanel.identify(id);
  },
  alias: (id: string) => {
    isPrd && mixpanel.alias(id);
  },
  track: (name: string, props?: Dict) => {
    isPrd && mixpanel.track(name, props);
  },
  track_links: (query: Query, name: string) => {
    isPrd &&
      mixpanel.track_links(query, name, {
        referrer: document.referrer,
      });
  },
  people: {
    set: (props: Dict) => {
      isPrd && mixpanel.people.set(props);
    },
  },
};
