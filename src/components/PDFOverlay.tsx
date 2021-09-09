import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Backdrop from '@material-ui/core/Backdrop';

type PDFOverlayProps = {
  pdf: any;
  open: boolean;
  toggleOpen: React.MouseEventHandler<HTMLDivElement>;
}

const PDFOverlay = function({ pdf, open, toggleOpen }: PDFOverlayProps) {
  return (
    <Backdrop open={open} onClick={toggleOpen}>
      <Document file={pdf}>
        <Page pageNumber={1} />
      </Document>
    </Backdrop>
  )
}

export default PDFOverlay
