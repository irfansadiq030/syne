import React from "react";
import "./Jobes.css";
import { Col, Row, Container, Table} from "react-bootstrap";
import { Link } from "react-router-dom";
import checkicon from "../../images/check-square.svg";
import pdf from "../../images/pdf.png";
import external from "../../images/external-link.png";
// import { Link } from "react-router-dom";
const Jobes = () => {
  return (
    <Container fluid className="quotation-top mt-100">
          <Row className="h-auto mt-2 mb-2">
      <Col xs={12} md={2} className="left-col-quote-left-side">
          <h5 className="h5-quotation">Quotation</h5>
      </Col>
      <Col xs={12} md={4}>

          <div className="input-group">
            <input
              type="text"
              className="form-control mw-400"
              placeholder="Search by Company, Quotation Number Description, Section Name "
              aria-label="Recipient's username with two button addons"
              aria-describedby="button-addon4"
            />
            <div className="input-group-append" id="button-addon4">
              <button className="btn btn-primary bg-dark-blue " type="button">
                <i className="fas fa-search"></i>
                &nbsp;&nbsp;Search
              </button>
              <button className="btn btn-outline-secondary " type="button">
                Advanced
              </button>
            </div>
          </div>
          
          </Col>

          <Col xs={6} md={1}>

            <button
              type="button"
              className="btn btn-sm  btn-light dropdown-toggle dropnow text-left"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              All Records &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

          </Col>

          <Col xs={6} md={1}>

          <div className="quotation-datepicker ">
            <input type="date" className="form-control"/>
          </div>
          
          </Col >

          <Col md={1}>



          </Col>
          <Col xs={12} md={1}>

          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-secondary dropdown-toggle bg-export p-2 br-10"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={external} alt="#" width={20} height={20} />
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
          
          </Col>
          <Col xs={12} md={1}>

          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-danger dropdown-toggle bg-pdf p-2 br-10"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={pdf} alt="#" width={20} height={20} />
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

          </Col>
      <Col xs={12} md={1}>

          <button type="button" class="btn btn-sm btn-danger bg-red p-2 br-10 view">
        
            <img src={pdf} alt="#" width={20} height={20} />
             &nbsp;&nbsp;<b>View</b>&nbsp;&nbsp;
          </button>

      </Col>
      </Row>
      <div className="h-100">
        <Row className="h-100">
          <Col xs={12} md={2} className="left-col-quote-left-side">
            <div className="quote-left-side  border rouded">
            <Link to="/jobs/1"> <button className="btn btn-sm btn-primary w-100 p-3 br-10  font-quote-button bg-yellow">
                {" "}
                <b>+ Add New Job</b>
              </button></Link>

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
              <button className=" btn btn-sm btn-primary p-2 quotation-left-button">
                <span>Completed</span>
                <img src={checkicon} alt="" className="quotation-check-icon" />
              </button>
              <button className=" btn btn-sm btn-primary p-2 quotation-left-button">
                <span> Collected CF</span>
                <img src={checkicon} alt="" className="quotation-check-icon" />
              </button>
              <button className=" btn btn-sm btn-primary p-2 quotation-left-button">
                <span>Delivered FP</span>
                <img src={checkicon} alt="" className="quotation-check-icon" />
              </button>
            </div>
          </Col>
          <Col md={10}>
            <div className="table-scroll">
              <Table striped bordered hover className="quotation-table">
                <thead className="jobs-table-head">
                  <tr>
                    <th>Status</th>
                    <th>Job No.</th>
                    <th>Date</th>
                    <th>Company</th>
                    <th>Description</th>
                    <th>Contact</th>
                    <th>Linked job</th>
                    <th>Next</th>
                    <th>Tax</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>
                      <div className="form-group">
                        <select className="form-control-sm form-select-sm bg-dark-blue text-light custom-selects bg-dark-gray">
                        <option selected>Draft</option>
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
                    <td>Been Hartley</td>
                    <td>Job00345</td>
                    <td>&euro;222.45</td>
                    <td>&euro;222.45</td>
                    <td>&euro;222.45</td>

                    <td>
                      <input type="radio" class="bg-secondary" />
                      &nbsp;&nbsp;&nbsp;X
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-group">
                        <select className="form-control-sm form-select-sm bg-green text-light ">
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
                    <td>Been Hartley</td>
                    <td>Job00345</td>
                    <td>&euro;222.45</td>
                    <td>&euro;222.45</td>
                    <td>&euro;222.45</td>

                    <td>
                      <input type="radio" class="bg-secondary" />
                      &nbsp;&nbsp;&nbsp;X
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-group">
                        <select className="form-control-sm form-select-sm bg-purple text-light ">
                        <option selected>Draft</option>
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
                    <td>Been Hartley</td>
                    <td>Job00345</td>
                    <td>&euro;222.45</td>
                    <td>&euro;222.45</td>
                    <td>&euro;222.45</td>

                    <td>
                      <input type="radio" class="bg-secondary" />
                      &nbsp;&nbsp;&nbsp;X
                    </td>
                  </tr>
                  <tr class="bg-light border-bottom border-secondary">
                    <td colspan="11" class="pb-0" style={{ gap: "1rem" }}>
                      <div class="w-100 d-flex" style={{ gap: "1rem" }}>
                        <nav aria-label="Page navigation">
                          <ul class="pagination pagination-sm">
                            <li class="page-item">
                              <a
                                class="page-link link-job"
                                href="/"
                                aria-label="Previous"
                              >
                                <span aria-hidden="true">&laquo;</span>
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link active-link" href="/">
                                1
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-job" href="/">
                                2
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-job" href="/">
                                3
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-job" href="/">
                                4
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-job" href="/">
                                5
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-job" href="/">
                                6
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-job" href="/">
                                7
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-job" href="/">
                                8
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-job" href="/">
                                9
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-job" href="/">
                                10
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link link-job" href="/" aria-label="Next">
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

export default Jobes;
