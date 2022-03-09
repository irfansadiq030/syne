import React from "react";
import "./Invoice.css";
import { Col, Row, Container, Table } from "react-bootstrap";
import checkicon from "../../images/check-square.svg";
// import { Link } from "react-router-dom";
const Invoice = () => {
  return (
    <Container fluid className="quotation-top">
          <Row className="h-auto">
      <Col xs={12} md={2} className="left-col-quote-left-side">
          <h5 className="h5-quotation">Invoices</h5>
      </Col>
      <Col md={10}>
      <ul className="quotation-menu">
        <li className="quotation-menu-item">
          <div className="input-group">
            <input
              type="text"
              className="form-control mw-400"
              placeholder="Search by Company, Quotation Number Description, Section Name "
              aria-label="Recipient's username with two button addons"
              aria-describedby="button-addon4"
            />
            <div className="input-group-append" id="button-addon4">
              <button className="btn btn-primary bg-dark-green b-0" type="button">
                <i className="fas fa-search"></i>
                &nbsp;&nbsp;Search
              </button>
              <button className="btn btn-outline-secondary " type="button">
                Advanced
              </button>
            </div>
          </div>
        </li>
        <li className="quotation-menu-item">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm  btn-light dropdown-toggle dropnow"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              All Records &nbsp;&nbsp;
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/">
                Action
              </a>
              <a className="dropdown-item" href="/">
                Another action
              </a>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">
                Separated link
              </a>
            </div>
          </div>
        </li>
        <li className="quotation-menu-item">
          <div className="quotation-datepicker ">
            <input type="date" className="form-control"/>
          </div>
        </li>
        <li className="quotation-menu-item">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-secondary dropdown-toggle bg-dark-gray p-2"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-external-link-alt"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;<b>Export</b>&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/">
                Action
              </a>
              <a className="dropdown-item" href="/">
                Another action
              </a>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">
                Separated link
              </a>
            </div>
          </div>
        </li>
        <li className="quotation-menu-item">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-danger dropdown-toggle bg-red p-2"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-file-pdf"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;<b>Quick PDF</b>&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/">
                Action
              </a>
              <a className="dropdown-item" href="/">
                Another action
              </a>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">
                Separated link
              </a>
            </div>
          </div>
        </li>
        <li className="quotation-menu-item">
          <button type="button" class="btn btn-sm btn-danger bg-red p-2">
            {" "}
            <i className="fas fa-file-pdf"></i> &nbsp;&nbsp;&nbsp;&nbsp;<b>View</b>&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
        </li>
      </ul>
      </Col>
      </Row>

      <div className="h-100">
        <Row className="h-100">
          <Col xs={12} md={2} className="left-col-quote-left-side">
            <div className="quote-left-side  border rouded">
              <button className="btn btn-sm btn-success bg-dark-green w-100 p-3 font-quote-button">
                {" "}
                <b>+ Add New Invoice</b>
              </button>

              <button className=" btn btn-sm btn-primary p-2 quotation-left-button">
                <span> Draft</span>
                <img src={checkicon} alt="" className="quotation-check-icon" />
              </button>
              <button className=" btn btn-sm btn-primary p-2 quotation-left-button">
                <span> DPD Sent</span>
                <img src={checkicon} alt="" className="quotation-check-icon" />
              </button>
              <button className=" btn btn-sm btn-primary p-2 quotation-left-button">
                <span> FP Process</span>
                <img src={checkicon} alt="" className="quotation-check-icon" />
              </button>
              <button className=" btn btn-sm btn-primary p-2 quotation-left-button">
                <span> PW Process</span>
                <img src={checkicon} alt="" className="quotation-check-icon" />
              </button>
              <button className=" btn btn-sm btn-primary p-2 quotation-left-button">
                <span> LP Print</span>
                <img src={checkicon} alt="" className="quotation-check-icon" />
              </button>
            </div>
          </Col>
          <Col md={10}>
          <Row>
          <Col md={5}>
            
          </Col>

           <Col className="table-scroll" md={4}>
              <Table striped bordered hover className="invoice-table">
              <tbody>
                  <tr>
                    <td className="bolder"><b>Total Amount</b></td>
                    <td>1235</td>
                    <td>1235</td>
                    <td>1235</td>
                  </tr>
                  <tr>
                    <td className="font-green"><b>Total Paid</b></td>
                    <td>1235</td>
                    <td>1235</td>
                    <td>1235</td>
                  </tr>
                  <tr>
                    <td className="font-blue"><b>Total Unpaid</b></td>
                    <td>1235</td>
                    <td>1235</td>
                    <td>1235</td>
                  </tr>
                  <tr>
                    <td className="font-purple"><b>Total Credits</b></td>
                    <td>1235</td>
                    <td>1235</td>
                    <td>1235</td>
                  </tr>
              </tbody>
              </Table>
            </Col>
            <Col md={3}>
            <p>Total Amount Selected: <span className="font-green">€5000</span></p>
            <p>Total Amount: <span className="font-green">€5000</span></p>
          </Col>
            </Row>
            <div className="table-scroll">
              <Table striped bordered hover className="quotation-table">
                <thead className="invoice-table-head">
                  <tr>
                    <th>Status</th>
                    <th>Inv No.</th>
                    <th>Invoice Date</th>
                    <th>Company</th>
                    <th>Description</th>

                    <th>Linked job</th>
                    <th>Next</th>
                    <th>Tax</th>
                    <th>Total</th>
                    <th>All</th>
                    <th>Payment Status</th>
                    <th>Comment Box</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>
                      <div className="form-group">
                        <select className="form-control-sm form-select-sm bg-green text-light b-0">
                        <option selected>FP Process</option>
                          <option>DPD Sent</option>
                          <option>FP Process</option>
                          <option>PW Process</option>
                          <option>LP Print</option>
                        </select>
                      </div>
                    </td>
                    <td>Q3766</td>
                    <td>12/12/19</td>
                    <td>@GHM</td>
                    <td>Arts Forum Exhibition</td>
                    <td>Inv00872</td>
                    <td>&euro;222.45</td>
                    <td>&euro;222.45</td>
                    <td>&euro;222.45</td>
                   
                    <td>
                      <input type="radio" class="bg-secondary" />
                    </td>
                    <td>
                      <div className="form-group">
                        <select className="form-control-sm form-select-sm bg-dark-gray text-light">
                        <option selected> Unpaid</option>
                          <option>Paid Card</option>
                          <option>Paid Bank</option>
                          <option>Credit Note</option>
                          <option>Pro-Forma</option>
                        </select>
                      </div>
                    </td>

                    <td>Comment</td>
                  </tr>

                  <tr class="bg-light border-bottom border-secondary">
                    <td colspan="11" class="pb-0" style={{ gap: "1rem" }}>
                      <div class="w-100 d-flex" style={{ gap: "1rem" }}>
                        <nav aria-label="Page navigation">
                          <ul class="pagination pagination-sm">
                            <li class="page-item">
                              <a
                                class="page-link"
                                href="/"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">&laquo;</span>
                              </a>
                            </li>
                            <li class="active-pag">
                              <a class="page-link page-link-active" href="/">
                                1
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                2
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                3
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                4
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                5
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                6
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                7
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                8
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                9
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                10
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <div class="form-group row ml-3 align-items-center input-group-sm">
                          <select
                            class="form-control col"
                            id="inputGroupSelect03"
                            style={{ maxWidth: "65px" }}
                          >
                            <option value="100">100</option>
                            <option value="90">90</option>
                            <option value="80">80</option>
                            <option value="70">70</option>
                            <option value="60">60</option>
                            <option value="50">50</option>
                            <option value="40">40</option>
                            <option value="30">30</option>
                            <option value="20">20</option>
                            <option value="10">10</option>
                          </select>
                          <label class="form-control-label font-weight-light col mb-0  item-per-page-table">
                            Items per page
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Invoice;
