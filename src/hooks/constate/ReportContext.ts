import { useRef, useState } from 'react';

import constate from 'constate';
import { useParams } from 'react-router';

import { useHistories, useReport } from '../remote';

interface HistoryFilters {
  siteID: string;
  status: string[];
  robotID: string[];
  missionID: string[];
  startTime: string;
}

const useReportData = () => {
  const patrolRef = useRef();
  const [alarmRefs, setAlarmRefs] = useState<HTMLDivElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { siteID } = useParams();

  const [historyFilters, setHistoryFilters] = useState<HistoryFilters>({
    siteID: siteID || '',
    status: ['COMPLETE'],
    robotID: [],
    missionID: [],
    startTime: '',
  });

  const { data: missionHistory } = useHistories(historyFilters);

  const { uuid: currentUuid } = useParams();

  const { data: report } = useReport({
    uuid: currentUuid || '',
  });

  const mission = report?.mission;

  const robot = report?.robot;

  const actions = report?.actions;

  return {
    robot,
    report,
    patrolRef,
    alarmRefs,
    setAlarmRefs,
    isLoaded,
    setIsLoaded,
    missionHistory,
    historyFilters,
    setHistoryFilters,
    mission,
    actions,
  };
};

export const [ReportProvider, useReportContext] = constate(useReportData);
