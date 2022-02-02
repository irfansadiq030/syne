import React from "react";
import "./AddProductInvoice.css";
import { Col, Row, Container, Table } from "react-bootstrap";
import image_vector from "../../images/image_vector.svg";
// import { Link } from "react-router-dom";
const AddProductInvoice = () => {
  return (
    <>
      <Container fluid className="quotation-top">
        <Container fluid>
          <Row>
            <Col lg={10}>
              <h6 className="Adding__Invoice__Leftside">
                Adding Product to Invoice:{" "}
                <span className="Adding__Product__number">3744</span>
              </h6>
            </Col>
            <Col lg={2}>
              <div className="btn-group">
                <button
                  type="button"
                  class="btn btn-sm font-weight-bold text-white  Adding__Invoice__back__btn"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Back
                </button>
              </div>
            </Col>
          </Row>
          <hr />
        </Container>
        <Container fluid>
          <h4 className="Item__List__Heading">Item List</h4>
          <Row>
            <Col lg={4}>
              <div className="Item__List__dropdown">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn  dropdown-toggle Item__List__dropdown__category"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-expanded="false"
                  >
                    Add Category
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
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn  dropdown-toggle Item__List__dropdown__category"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-expanded="false"
                  >
                    All Tages
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
            </Col>
            <Col lg={8}>
              <div className="minmax__Price__Head">
                <div className="minmax__Price">
                  <div className="input-group  w-25">
                    <select
                      className="custom-select minmax__Price__select "
                      id="inputGroupSelect01"
                    >
                      <option selected>Min.Price(0)</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="input-group  w-25">
                    <select
                      className="custom-select minmax__Price__select"
                      id="inputGroupSelect01"
                    >
                      <option selected>Max.Price(0)</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm font-weight-bold text-white Adding__Invoice__reset__btn"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Reset
                    </button>
                  </div>
                </div>
                <div className="input-group  w-50 minmax__Price__search">
                  <input
                    type="text"
                    className="form-control minmax__Price__search__input"
                    aria-label="Recipient's username with two button addons"
                    aria-describedby="button-addon4"
                  />
                  <div
                    className="input-group-append minmax__Price__search__btn"
                    id="button-addon4 "
                  >
                    <button
                      className="btn text-white font-weight-bold Adding__Invoice__search__btn"
                      type="button "
                    >
                      <i className="fas fa-search"></i>
                      Search
                    </button>
                    <button
                      className="btn font-weight-bold  text-white ml-1 Adding__Invoice__clear__btn  minmax__Price__search__btn"
                      type="button"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col lg={12} className="Add__Selected__pro__btn">
              <div className="btn-group mt-3 ">
                <button
                  type="button"
                  class="btn btn-sm   font-weight-bold text-white btn-success Add__Selected__pro__btn__color"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  + Add Selected Products
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="h-100 mt-5">
          <Row className="h-100">
            <Col md={12}>
              <div className="table-scroll">
                <Table striped bordered hover className="quotation-table">
                  <thead className="Add__Invoice__table__head">
                    <tr>
                      <th>Image</th>
                      <th>Item Code </th>
                      <th>Category</th>

                      <th>Description</th>
                      <th>Unit</th>
                      <th>Cost</th>
                      <th>Prices</th>
                      <th>Add Qty</th>
                      <th>Select</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={image_vector}
                          alt="image_vectore"
                          className="Product__image__icon"
                        />
                      </td>
                      <td>Q3766</td>
                      <td>INKS</td>
                      <td>Arts Forum </td>
                      <td>Arts Forum Exhibition</td>
                      <td>&euro;222.45</td>
                      <td>&euro;222.45</td>
                      <td>
                        <input type="number" className="AddPro__qty__input" />
                      </td>
                      <td>
                        <input type="checkbox" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src={image_vector}
                          alt="image_vectore"
                          className="Product__image__icon"
                        />
                      </td>
                      <td>Q3766</td>
                      <td>INKS</td>
                      <td>Arts Forum </td>
                      <td>Arts Forum Exhibition</td>
                      <td>&euro;222.45</td>
                      <td>&euro;222.45</td>
                      <td>
                        <input type="number" className="AddPro__qty__input" />
                      </td>
                      <td>
                        <input type="checkbox" />
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
    </>
  );
};

export default AddProductInvoice;
