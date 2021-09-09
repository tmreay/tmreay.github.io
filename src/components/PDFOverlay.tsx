import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type PDFOverlayProps = {
  pdf: any;
  open: boolean;
  toggleOpen: React.MouseEventHandler<HTMLDivElement>;
};

const CenteredModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScrollDiv = styled.div`
  overflow-y: scroll;
  height: 100vh;
`;

const PDFOverlay = function ({ pdf, open, toggleOpen }: PDFOverlayProps) {
  return (
    <CenteredModal open={open} onClose={toggleOpen}>
      <ScrollDiv>
        <Document file={pdf}>
          <Page pageNumber={1} scale={1} />
        </Document>
      </ScrollDiv>
    </CenteredModal>
  );
};

export default PDFOverlay;
