import React from "react";
import "./QuotationId.css";
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
import quickpdf from "../../images/pdf-icon.svg";
import checkicon from "../../images/check-square.svg";
import calender from "../../images/calendar-primary.svg";
import company from "../../images/edit-primary.svg";
// import { Link } from "react-router-dom";
const QuotationId = () => {
  return (
    <Container fluid className="quotation-top">
      <Row>
        <Col lg={2}>
          <h4>
            QUOTE: <span>3744</span>{" "}
          </h4>
        </Col>
        <Col lg={10}>
          <div class="d-flex justify-content-end align-items-center flex-wrap gap-1">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm font-weight-bold btn-danger dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={quickpdf} alt="" class="icon" />
                Quick PDF
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/">
                  Job T1
                </a>
                <a class="dropdown-item" href="/">
                  Job T2
                </a>
                <a class="dropdown-item" href="/">
                  Job T3
                </a>
              </div>
            </div>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm font-weight-bold btn-danger d-flex gap-0.5 duplicate-quote-btn"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                {/* <div class="position-relative icon">
                  <img
                    src={quickpdf}
                    alt=""
                    class="position-absolute"
                    style={{ left: "0px" }}
                  />
                  <img
                    src="assets/duplicate-part2.svg"
                    alt=""
                    class="position-absolute"
                    style={{ left: "10%" }}
                  />
                </div> */}
                Duplicate Quote
              </button>
            </div>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm font-weight-bold text-white btn-warning"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                + Create Job
              </button>
            </div>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm font-weight-bold text-white btn-success"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                + Create Invoice
              </button>
            </div>
            <div class="btn-group">
              <div class="form-group mb-0 w-100">
                <select
                  value="Draft"
                  class="form-control form-control-sm text-white font-weight-bold status"
                >
                  <option value="Draft" selected class="bg-secondary">
                    Draft
                  </option>
                  <option value="Sent" class="bg-primary">
                    Sent
                  </option>
                  <option value="Accepted" class="bg-success">
                    Accepted
                  </option>
                  <option value="Declined" class="bg-violet">
                    Declined
                  </option>
                  <option value="Aged" class="bg-brown">
                    Aged
                  </option>
                </select>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Container fluid>
        <div className="py-5 border rounded-lg mx-0">
          <Row>
            <Col xs={12} lg={4}>
              <form className="px-5">
                <div class="form-group ">
                  <label for="date-input" class="font-weight-bold">
                    Date Quoted
                  </label>
                  <div class="w-100 d-flex align-items-center gap-1">
                    <input
                      type="text"
                      class="form-control bg-light w-25"
                      style={{ minwidth: "100px" }}
                      id="date-input"
                      placeholder="12 / 11/ 22"
                    />
                    <img src={calender} alt="calendar" class="icon" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="company-select" class="font-weight-bold">
                    Company
                  </label>
                  <div class="w-100 d-flex align-items-center gap-1">
                    <select
                      value=""
                      class="form-control bg-light"
                      id="company-select"
                    >
                      <option value="">Ricoh (Merstham)</option>
                    </select>
                    <img src={company} alt="calendar" class="icon" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="company-select" class="font-weight-bold">
                    Contact
                  </label>
                  <div class="w-100 d-flex align-items-center gap-1">
                    <select
                      value=""
                      class="form-control bg-light"
                      id="company-select"
                    >
                      <option value="">Pawel Szulam</option>
                    </select>
                    <img src={company} alt="calendar" class="icon" />
                  </div>
                </div>
              </form>
            </Col>
            <Col xs={12} lg={4}>
              <form>
                <div class="form-group">
                  <label for="invoice-address-select" class="font-weight-bold">
                    Invoice Address
                  </label>
                  <div class="w-100 d-flex align-items-center gap-1">
                    <select
                      value=""
                      class="form-control bg-light"
                      id="invoice-address-select"
                    >
                      <option value="">Ricoh (Merstham) , Ricoh House ,</option>
                      <option value="">Ricoh (Merstham) , Ricoh House ,</option>
                    </select>
                    <img src={company} alt="calendar" class="icon" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="site-address-select" class="font-weight-bold">
                    Site Address
                  </label>
                  <div class="w-100 d-flex align-items-center gap-1">
                    <select
                      value=""
                      class="form-control bg-light"
                      id="site-address-select"
                    >
                      <option value="">
                        Ricoh (Merstham) , Ricoh House , wells place , Merstham
                        RH1, 3LG
                      </option>
                    </select>
                    <img src={company} alt="calendar" class="icon" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="assignd-user-select" class="font-weight-bold">
                    Assigned User
                  </label>
                  <div class="w-100 d-flex align-items-center gap-1">
                    <select
                      value=""
                      class="form-control bg-light"
                      id="assignd-user-select"
                    >
                      <option value="">Febian Porter</option>
                    </select>
                    <img src={company} alt="calendar" class="icon" />
                  </div>
                </div>
              </form>
            </Col>
            <Col xs={12} lg={4}>
              <div class="form-group px-5">
                <label for="assignd-user-select" class="font-weight-bold">
                  Details
                </label>
                <textarea
                  placeholder="Planner (Marthin)"
                  id="details"
                  class="form-control bg-light"
                  rows="8"
                ></textarea>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="h-100 mt-5">
        <Row className="h-100">
          <Col md={12}>
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

export default QuotationId;
