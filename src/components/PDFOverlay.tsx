import React from 'react';
import { Document, Page } from 'react-pdf';
import Modal from '@material-ui/core/Modal';

type PDFOverlayProps = {
  pdf: any;
  open: boolean;
  toggleOpen: React.MouseEventHandler<HTMLDivElement>;
}

const PDFOverlay = function({ pdf, open, toggleOpen }: PDFOverlayProps) {
  console.log(pdf)
  return (
    <Modal open={open} onClose={toggleOpen}>
      <Document file={pdf}>
        <Page pageNumber={1} />
      </Document>
    </Modal>
  )
}

export default PDFOverlay
