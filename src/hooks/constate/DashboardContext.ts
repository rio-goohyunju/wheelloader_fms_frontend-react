import { useState } from 'react';

import constate from 'constate';
import { useParams } from 'react-router-dom';

import { useRobots } from '../remote';

const useDashboardData = () => {
  const { siteID } = useParams();
  const [selectedRobotId, setRobotId] = useState<string>('');

  const handleSelectRobotId = (id: string) => {
    setRobotId(id);
  };

  const { data: robotResponse } = useRobots({
    siteID: siteID ?? '',
  });

  const isExistSelectedId = selectedRobotId !== '';

  return {
    selectedRobotId,
    handleSelectRobotId,
    robotResponse,
    isExistSelectedId,
  };
};

export const [DashboardProvider, useDashboardContext] =
  constate(useDashboardData);
