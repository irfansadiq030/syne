import React from "react";
import "./Contacts.css";
import { Col, Row, Container, Table } from "react-bootstrap";

import editicon from "../../images/edit-primary.svg";
import Delete_icon from "../../images/Delete_icon.svg";
// import { Link } from "react-router-dom";
const Contacts = () => {
  return (
    <Container fluid className="quotation-top">
      <ul className="companies__menu">
        <li className="quotation-menu-item">
          <h5 className="h5-quotation">Contacts</h5>
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
              <button
                className="btn text-white  company__search__btn"
                type="button"
              >
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
              className="btn btn-sm Export__btn dropdown-toggle"
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
      </ul>

      <div className="h-100">
        <Row className="h-100">
          <Col xs={12} md={2} className="left-col-quote-left-side">
            <div className="quote-left-side  border rouded">
              <button
                className="btn  font-weight-bold btn-md Add__new__company__btn w-100"
                data-toggle="modal"
                data-target="#newcontact"
              >
                {" "}
                + Add New Contacts
              </button>
              <div
                className="modal fade"
                id="newcontact"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content p-3 AddCompany__modal">
                    <div className="">
                      <form>
                        <Container>
                          <Row>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Position:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  First Name:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Last Name:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Address 1:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Address 2:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Address 3:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold ">
                                  Title:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Email:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Telephone:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Mobile:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">Town</label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Country:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Postcode/Zip:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Company:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Account Reference:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={4}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Account Manager:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>

                            <Col lg={8}>
                              <div className="form-group px-5">
                                <label
                                  for="assignd-user-select"
                                  className="font-weight-bold"
                                >
                                  Notes
                                </label>
                                <textarea
                                  id="details"
                                  className="form-control bg-light"
                                  rows="2"
                                ></textarea>
                              </div>
                            </Col>
                          </Row>
                          <Container>
                            <Row className="mb-3 mt-3 d-flex justify-content-between">
                              <Col>
                                <button
                                  type="button"
                                  className="btn btn-md AddCompany__modal__btn  font-weight-bold text-white"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Add Contact
                                </button>
                              </Col>
                              <Col>
                                <button
                                  type="button"
                                  className="btn btn-md font-weight-bold text-dark  AddCompany__modal__closebtn"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Close
                                </button>
                              </Col>
                            </Row>
                          </Container>
                        </Container>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-group mt-3">
                <div className="d-flex flex-column">
                  <h6 className="font-weight-bold">Contact Type:</h6>
                  <button
                    type="button"
                    className="btn  dropdown-toggle Company__dropdown__category"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-expanded="false"
                  >
                    All Types
                  </button>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                    <button className="dropdown-item" type="button">
                      Action
                    </button>
                    <button className="dropdown-item" type="button">
                      Another action
                    </button>
                    <button className="dropdown-item" type="button">
                      Something else here
                    </button>
                  </div>
                </div>
              </div>
              <div className="btn-group mt-3">
                <div className="d-flex flex-column">
                  <h6 className="font-weight-bold">Contact</h6>
                  <button
                    type="button"
                    className="btn  dropdown-toggle Company__dropdown__category"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-expanded="false"
                  >
                    All Contacts
                  </button>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                    <button className="dropdown-item" type="button">
                      Action
                    </button>
                    <button className="dropdown-item" type="button">
                      Another action
                    </button>
                    <button className="dropdown-item" type="button">
                      Something else here
                    </button>
                  </div>
                </div>
              </div>
              <div className="btn-group mt-3">
                <div className="d-flex flex-column">
                  <h6 className="font-weight-bold">Contact Tags (Must have)</h6>
                  <button
                    type="button"
                    className="btn  dropdown-toggle Company__dropdown__category"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-expanded="false"
                  >
                    All Tags
                  </button>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                    <button className="dropdown-item" type="button">
                      Action
                    </button>
                    <button className="dropdown-item" type="button">
                      Another action
                    </button>
                    <button className="dropdown-item" type="button">
                      Something else here
                    </button>
                  </div>
                </div>
              </div>
              <div className="btn-group mt-3">
                <div className="d-flex flex-column">
                  <h6 className="font-weight-bold">Contact Tags (Must have)</h6>
                  <button
                    type="button"
                    className="btn  dropdown-toggle Company__dropdown__category"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-expanded="false"
                  >
                    All Tags
                  </button>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                    <button className="dropdown-item" type="button">
                      Action
                    </button>
                    <button className="dropdown-item" type="button">
                      Another action
                    </button>
                    <button className="dropdown-item" type="button">
                      Something else here
                    </button>
                  </div>
                </div>
              </div>
              <div className="btn-group mt-3">
                <div className="d-flex flex-column">
                  <h6 className="font-weight-bold">Account Managers:</h6>
                  <button
                    type="button"
                    className="btn  dropdown-toggle Company__dropdown__category"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-expanded="false"
                  >
                    All Acc Managers
                  </button>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                    <button className="dropdown-item" type="button">
                      Action
                    </button>
                    <button className="dropdown-item" type="button">
                      Another action
                    </button>
                    <button className="dropdown-item" type="button">
                      Something else here
                    </button>
                  </div>
                </div>
              </div>
              <button className="btn font-weight-bold btn-md Add__new__company__btn w-100">
                {" "}
                Clear Filters
              </button>
            </div>
          </Col>
          <Col md={10}>
            <div className="table-scroll">
              <Table striped bordered hover className="quotation-table">
                <thead className="companies-table-head">
                  <tr>
                    <th>Title</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Company</th>
                    <th>Town</th>

                    <th>Address</th>
                    <th>Email</th>
                    <th>Telephone</th>
                    <th>Mobile</th>
                    <th>Tags</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>GHM</td>
                    <td>F Name</td>
                    <td>L Name</td>

                    <td>GHM</td>
                    <td>Americs</td>
                    <td>Ats Forum ec Exhibition</td>

                    <td>example@gmail.com</td>
                    <td>+1122233333</td>
                    <td>+1122233333</td>
                    <td>abc</td>

                    <td>
                      <div className="quotation__editdelete_icon">
                        <img
                          src={editicon}
                          alt="editicon"
                          data-toggle="modal"
                          data-target="#newcontact"
                        />
                        <img
                          src={Delete_icon}
                          data-toggle="modal"
                          data-target="#Delete_modal"
                          alt="deleteicon"
                        />

                        <div
                          className="modal fade"
                          id="Delete_modal"
                          tabindex="-1"
                          role="dialog"
                          aria-labelledby="exampleModalCenterTitle"
                          aria-hidden="true"
                        >
                          <div
                            className="modal-dialog modal-dialog-centered"
                            role="document"
                          >
                            <div className="modal-content p-3">
                              <div className="delete__modal__text">
                                <div>Contact Name: F Name</div>
                                <div>Are you Sure you want to Delete ?</div>
                              </div>
                              <div className="delete__modal__button__div">
                                <div>
                                  <button className="delete__modal__button">
                                    <i class="far fa-trash-alt"></i>
                                    <span>Delete</span>
                                  </button>
                                </div>
                                <div>
                                  <button className="close__modal__button">
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default Contacts;
