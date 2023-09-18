import React, { useRef } from "react";
import {
  Button,
  Container,
  Typography,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { Stack } from "immutable";
import { PDFDownloadLink } from "@react-pdf/renderer";
import BibleCertification from "./BibleCertification";
import BibleCertificationPDF from "./BibleCertificationPDF";

export default function Certificate () {
 const certificateName = localStorage.getItem("certificateName");
  // Create a ref for the PDF container
  const pdfRef = useRef();

  return (
    <Container maxWidth="md">
      <Stack direction="row" spacing={2} sx={{ marginBottom: "1em" }}>
        <Typography
          variant="h6"
          component={"div"}
          sx={{ flexGrow: 1 }}
        ></Typography>
        <PDFDownloadLink
          document={<BibleCertificationPDF />}
          filename={`${certificateName}-certificate.pdf`}
          ref={pdfRef}
        >
          {({ blob, url, loading, error }) => (
            loading ? <>
            <Button
                id="certificateDownLoadBTN"
                variant="contained"
                startIcon={<DownloadIcon />}
                color="secondary"
              >
                Download Certificate
              </Button>
            </>:<>
            <Button
                id="certificateDownLoadBTN"
                variant="contained"
                startIcon={<DownloadIcon />}
                color="secondary"
              >
                Download Certificate
              </Button>
            </>
          )}
        </PDFDownloadLink>
      </Stack>
      <BibleCertification />
    </Container>
  );
};

