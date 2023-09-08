import React from 'react'
import { Container } from '@mui/material'
import './certificate.css'

const BibleCertification = () => {
  // const classes = useStyles();

  return (
    <Container>
      <body>
        <div class="container pm-certificate-container">
          <div class="outer-border"></div>
          <div class="inner-border"></div>

          <div class="pm-certificate-border col-xs-12">
            <div class="row pm-certificate-header">
              <div
                class="pm-certificate-title cursive col-xs-12 text-center"
                color="red"
              >
                <h2>BIBLE COMMUNICATION CENTER COLLEGE</h2>
              </div>
            </div>

            <div class="row pm-certificate-body">
              <div class="pm-certificate-block">
                <div class="col-xs-12">
                  <div class="row">
                    <div class="col-xs-2"></div>
                    <div class="pm-certificate-name col-xs-8 text-center">
                      <span class="pm-name-text bold">
                        Upon the recommendation of the Faculty and
                        Administration hereby confers upon
                      </span>
                    </div>
                    <div class="col-xs-2"></div>
                  </div>
                </div>

                <div class="col-xs-12">
                  <div class="row">
                    <div class="col-xs-2"></div>
                    <div class="pm-earned col-xs-8 text-center">
                      <span class="pm-credits-text block bold sans">
                        UMWARI Rachel
                      </span>
                      <span class="  padding-0 block cursive">
                        The
                      </span>
                      <span class="pm-credits-text block bold sans">
                        CERTIFICATE
                      </span>
                    </div>
                    <div class="col-xs-2"></div>
                    <div class="col-xs-12"></div>
                  </div>
                </div>

                <div class="col-xs-12">
                  <div class="row">
                    <div class="col-xs-2"></div>
                    <div class="pm-course-title col-xs-8 text-center">
                      <span class="pm-earned-text block cursive">
                        In Christian Discipleship
                      </span>
                    </div>
                    <div class="col-xs-2"></div>
                  </div>
                </div>

                <div class="col-xs-12">
                  <div class="row">
                    <div class="col-xs-2"></div>
                    <div class="pm-course-title col-xs-8 text-center">
                      <span class="pm-credits-text block bold sans">
                        With all rights and privileges thereto pertaining in
                        testimony whereof, we have affixed our names and the
                        seal given at Kigali, Rwandaon this 23th day of the
                        december 2018
                      </span>
                    </div>
                    <div class="col-xs-2"></div>
                  </div>
                </div>
              </div>

              <div class="col-xs-12">
                <div class="row">
                  <div class="pm-certificate-footer">
                    <div class="col-xs-4 pm-certified col-xs-4">
                      <div class="block">
                        <span class="pm-credits-text block sans">
                          Apostle Joshua NDAGIJIMANA MASASU
                        </span>
                        <span class="pm-earned-text padding-0 block cursive">
                          Chancellor
                        </span>
                      </div>
                      <div>
                        <span class="pm-credits-text block sans">
                          Pastor Lydia UMULISA MASASU
                        </span>
                        <span class="pm-earned-text  padding-0 block cursive">
                        x
                          Vice Chancellor
                        </span>
                      </div>
                      <span class="pm-empty-space block underline"></span>
                      <span class="bold block">Bible Communication Center</span>
                    </div>
                    <div class="col-xs-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </Container>
  )
}

export default BibleCertification
