import { useState } from 'react';

import constate from 'constate';

const useAppData = () => {
  const [siteID, setSiteID] = useState('');

  return {
    siteID,
    setSiteID,
  };
};

export const [AppProvider, useAppContext] = constate(useAppData);
