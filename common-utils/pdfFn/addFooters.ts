import jsPDF from 'jspdf';

import { getToday } from '../dateTime';

const addFooters = (doc: jsPDF, startDate: string) => {
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i += 1) {
    doc.setPage(i);
    doc.text(
      `Page ${String(i)} of ${String(pageCount)}`,
      doc.internal.pageSize.width / 2,
      287,
      {
        align: 'center',
      }
    );
    doc.text(
      `레포트 생성 일자 : ${getToday()}`,
      doc.internal.pageSize.width / 2 + 30,
      287,
      {
        align: 'center',
      }
    );
    doc.text(
      `미션 수행 일자 : ${startDate}`,
      doc.internal.pageSize.width / 2 + 80,
      287,
      {
        align: 'center',
      }
    );
  }
};

export default addFooters;
