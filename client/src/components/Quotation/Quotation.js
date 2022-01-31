import React from "react";
import "./Quotation.css";
import {
  Form,
  InputGroup,
  Col,
  Row,
  Container,
  Dropdown,
  DropdownButton,
  Table,
} from "react-bootstrap";
import checkicon from "../../images/check-square.svg";
// import { Link } from "react-router-dom";
const Quotation = () => {
  return (
    <Container fluid className="quotation-top">
      <ul className="quotation-menu">
        <li className="quotation-menu-item">
          <h5 className="h5-quotation">Quotation</h5>
        </li>
        <li className="quotation-menu-item">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username with two button addons"
              aria-describedby="button-addon4"
            />
            <div className="input-group-append" id="button-addon4">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search"></i>
                Search
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
              className="btn btn-sm  btn-light dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              All Records
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
          <div className="quotation-datepicker">
            <input type="date" />
          </div>
        </li>
        <li className="quotation-menu-item">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-external-link-alt"></i>
              Export
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
              className="btn btn-sm btn-danger dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-file-pdf"></i>
              Quick PDF
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
          <button type="button" class="btn btn-sm btn-danger">
            {" "}
            <i className="fas fa-file-pdf"></i> View
          </button>
        </li>
      </ul>

      <div className="h-100">
        <Row className="h-100">
          <Col xs={12} md={2} className="left-col-quote-left-side">
            <div className="quote-left-side  border rouded">
              <button className="btn btn-sm btn-primary w-100">
                {" "}
                + Add New Quote
              </button>

              <button className=" btn btn-sm btn-primary  quotation-left-button">
                <span> Draft</span>
                <img src={checkicon} alt="" className="quotation-check-icon" />
              </button>
              <button className=" btn btn-sm btn-primary  quotation-left-button">
                <span> Sent</span>
                <img src={checkicon} alt="" className="quotation-check-icon" />
              </button>
              <button className=" btn btn-sm btn-primary  quotation-left-button">
                <span> Accepted</span>
                <img src={checkicon} alt="" className="quotation-check-icon" />
              </button>
              <button className=" btn btn-sm btn-primary  quotation-left-button">
                <span> Declined</span>
                <img src={checkicon} alt="" className="quotation-check-icon" />
              </button>
              <button className=" btn btn-sm btn-primary  quotation-left-button">
                <span> Aged</span>
                <img src={checkicon} alt="" className="quotation-check-icon" />
              </button>
            </div>
          </Col>
          <Col md={10}>
            <div className="table-scroll">
              <Table striped bordered hover className="quotation-table">
                <thead className="quotation-table-head">
                  <tr>
                    <th>Status</th>
                    <th>Quote No.</th>
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
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-secondary dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Draft
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="/">
                            Sent
                          </a>
                          <a className="dropdown-item" href="/">
                            Accepted
                          </a>
                          <a className="dropdown-item" href="/">
                            Declined
                          </a>
                          <a className="dropdown-item" href="/">
                            Aged
                          </a>
                        </div>
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
                      &nbsp;X
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-secondary dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Draft
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="/">
                            Sent
                          </a>
                          <a className="dropdown-item" href="/">
                            Accepted
                          </a>
                          <a className="dropdown-item" href="/">
                            Declined
                          </a>
                          <a className="dropdown-item" href="/">
                            Aged
                          </a>
                        </div>
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
                      &nbsp;X
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-secondary dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Draft
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="/">
                            Sent
                          </a>
                          <a className="dropdown-item" href="/">
                            Accepted
                          </a>
                          <a className="dropdown-item" href="/">
                            Declined
                          </a>
                          <a className="dropdown-item" href="/">
                            Aged
                          </a>
                        </div>
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
                      &nbsp;X
                    </td>
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
                            <li class="page-item active">
                              <a class="page-link" href="/">
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

export default Quotation;
