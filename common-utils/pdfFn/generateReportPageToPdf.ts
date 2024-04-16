import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import hl from '../Font/HyundaiHarmonyL.ttf';

import { HyundaiHarmonyLBase64 } from './fontBase64';

interface generateReportPageToPdfProps {
  patrolElements?: HTMLDivElement;
  alarmElements: HTMLDivElement[];
}

const generateReportPageToPdf = async ({
  patrolElements,
  alarmElements,
}: generateReportPageToPdfProps) => {
  if (!patrolElements) {
    return;
  }

  const PatrolDetail = await html2canvas(patrolElements, {
    allowTaint: true,
    useCORS: true,
    logging: false,
    scale: 2,
  });

  const imgWidth = 210; // Image width (mm) / A4 standard 210mm
  const imgHeight = (PatrolDetail.height * imgWidth) / PatrolDetail.width; // Calculate proportional height
  const padding = 5;

  // eslint-disable-next-line new-cap
  const doc = new jsPDF('p', 'mm', 'a4', true);
  doc.addFileToVFS('HyundaiHarmonyL.ttf', HyundaiHarmonyLBase64);
  doc.addFont(hl as string, 'HyundaiHarmonyL', 'normal');
  doc.setFont('HyundaiHarmonyL');
  doc.setFontSize(8);

  // Image cropping and adding to pages
  const cropHeight = doc.internal.pageSize.height - padding; // 297 - 5
  let startY = 0;

  while (startY < imgHeight) {
    const remainingHeight = imgHeight - startY; // Calculate remaining height
    const visibleHeight = Math.min(remainingHeight, cropHeight); // Determine visible height

    const canvas = document.createElement('canvas');
    const canvasWidth = 1440; // Set canvas width to target width
    const canvasHeight = canvasWidth; // Calculate canvas height based on aspect ratio
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const context = canvas.getContext('2d');
    if (!context) return;
    context.drawImage(
      PatrolDetail,
      0,
      startY * (PatrolDetail.height / imgHeight), // Adjust startY position based on the ratio of startY to the total image height
      PatrolDetail.width,
      visibleHeight * (PatrolDetail.height / imgHeight), // Adjust visibleHeight based on the ratio of visibleHeight to the total image height
      0,
      0,
      canvasWidth,
      canvasHeight
    );

    const croppedImgData = canvas.toDataURL('image/png', 1.0);

    doc.addImage(croppedImgData, 'JPEG', 0, padding, imgWidth, visibleHeight);

    startY += visibleHeight;

    if (startY < imgHeight) {
      doc.addPage();
    }
  }

  // Add watermark or implement image addition for alarmElements

  let curHeight = imgHeight + padding;

  await Promise.all(
    alarmElements.map(async (alarmElement) => {
      const canvas = await html2canvas(alarmElement, {
        allowTaint: true,
        useCORS: true,
        logging: false,
        scale: 1,
      });

      const img = canvas.toDataURL('image/png', 1.0);
      const imageHeight = (canvas.height * imgWidth) / canvas.width;

      // 현재 페이지의 높이와 이미지의 높이를 비교하여 페이지를 추가
      if (curHeight + imageHeight > doc.internal.pageSize.height - padding) {
        doc.addPage();
        curHeight = padding;
      }

      doc.addImage(img, 'JPEG', padding, curHeight, 200, imageHeight);
      curHeight += imageHeight + padding;
    })
  );

  return doc;
};

export default generateReportPageToPdf;
