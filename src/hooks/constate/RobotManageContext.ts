import { useState } from 'react';

import constate from 'constate';

import { RobotData } from '@/api/robot/types';

const useRobotManageData = () => {
  const [selectedRobot, setSelectedRobot] = useState<RobotData | null>();

  const handleSelectRobot = (data: RobotData | null) => {
    setSelectedRobot(data);
  };

  return {
    selectedRobot,
    handleSelectRobot,
  };
};

export const [RobotManageProvider, useRobotManageContext] =
  constate(useRobotManageData);
