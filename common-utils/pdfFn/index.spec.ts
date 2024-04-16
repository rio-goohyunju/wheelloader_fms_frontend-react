import jsPDF from 'jspdf';
import { PDFFooters, PDFGenerator, PDFWaterMark } from '.';

it('유효한 입력 요소를 제공했을 때 정상적으로 PDF를 생성', async () => {
  // Arrange
  const patrolElements = document.createElement('div');
  const alarmElements = [document.createElement('div')];
  const startDate = '2023-09-21';

  // Act
  const pdfDoc = await PDFGenerator({
    patrolElements,
    alarmElements,
    startDate,
  });

  // Assert
  expect(pdfDoc).not.toBeNull();
});

it('alarmElements 배열이 비어있는 경우 함수가 처리되어야 함', async () => {
  // Arrange
  const patrolElements = document.createElement('div');
  const alarmElements = [];
  const startDate = '2023-09-21';

  // Act
  const pdfDoc = await PDFGenerator({
    patrolElements,
    alarmElements,
    startDate,
  });

  // Assert
  expect(pdfDoc).not.toBeNull();
});

it('PDF 생성 중 에러가 발생하는 경우 함수가 처리되어야 함', async () => {
  // Arrange
  const patrolElements = document.createElement('div');
  const alarmElements = [document.createElement('div')];
  const startDate = '2023-09-21';

  // 모의 모듈을 사용하여 html2canvas 함수가 에러를 던지도록 설정
  jest.mock('html2canvas', () => {
    throw new Error('HTML to Canvas Error');
  });

  // Act & Assert
  await expect(
    PDFGenerator({ patrolElements, alarmElements, startDate })
  ).rejects.toThrowError('HTML to Canvas Error');
});

it('유효한 jsPDF 인스턴스를 제공했을 때 워터마크가 정상적으로 추가되어야 함', () => {
  // Arrange
  const doc = new jsPDF();

  // Act
  PDFWaterMark(doc);

  // Assert
  const pageContent = doc.output('datauristring');
  // 페이지 콘텐츠에서 워터마크 텍스트가 존재하는지 확인하는 코드를 작성할 수 있습니다.
  expect(pageContent).toContain('Under development');
  // 또한, 워터마크의 스타일을 확인할 수 있는 코드도 추가 가능합니다.
  // 예: 텍스트 색상, 글꼴, 크기, 투명도 등
});


it('워터마크 텍스트와 스타일이 정확해야 함', () => {
  // Arrange
  const doc = new jsPDF();

  // Act
  PDFWaterMark(doc);

  // Assert
  const pageContent = doc.output('datauristring');
  // 페이지 콘텐츠에서 워터마크 텍스트와 스타일을 확인하는 코드를 작성할 수 있습니다.
  expect(pageContent).toContain('Under development');
  // 텍스트 색상, 글꼴, 크기, 투명도 등을 확인할 수 있는 추가 검증 코드를 작성할 수 있습니다.
});
