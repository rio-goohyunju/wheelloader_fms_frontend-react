import jsPDF, { GState } from 'jspdf';

const addWaterMark = (doc: jsPDF) => {
  const pageCount = doc.getNumberOfPages();
  const gState = new GState({ opacity: 0.7, 'stroke-opacity': 0.7 });

  for (let i = 1; i <= pageCount; i += 1) {
    doc.setPage(i);
    doc.setTextColor(150, 150, 150);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(50);

    doc.saveGraphicsState(); // 그래픽 상태 저장

    doc.setGState(gState);

    doc.text(
      'Under development',
      doc.internal.pageSize.width / 2 - 50,
      doc.internal.pageSize.height / 2 + 40,
      undefined,
      45
    );

    doc.restoreGraphicsState(); // 그래픽 상태 복원
  }
};

export default addWaterMark;
