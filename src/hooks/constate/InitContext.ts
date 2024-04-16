import { useState } from 'react';

import constate from 'constate';

const useInitData = () => {
  const [expanded, setExpanded] = useState<string | false>('panel0');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  return {
    activeStep,
    expanded,
    isLoading,
    setIsLoading,
    setActiveStep,
    setExpanded,
  };
};

export const [InitProvider, useInitContext] = constate(useInitData);
