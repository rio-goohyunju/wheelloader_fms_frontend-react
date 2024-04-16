import { useState } from 'react';

import constate from 'constate';

const useSchedule = () => {
  const [isAdding, setIsAdding] = useState(false);

  return { isAdding, setIsAdding };
};

export const [ScheduleProvider, useScheduleContext] = constate(useSchedule);
