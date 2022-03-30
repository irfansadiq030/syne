import React from 'react'
import "./Product.css";
import { Col, Row, Container, Table } from "react-bootstrap";
import editicon from "../../images/edit-primary.svg";
import Delete_icon from "../../images/Delete_icon.svg";
import BottomBar from '../BottomBar/BottomBar';


const Product = () => {
  return (
      <>
    <Row className='mt-3 ml-1'>
      <Col xs={12} md={2}>
      <h5 className="h5-quotation">Products</h5>
      </Col>
      <Col xs={12} md={4} className="ml-8">
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
                className="btn text-white  company__search__btn br-0"
                type="button"
              >
                <i className="fas fa-search"></i> 
                Search
              </button>
              <button className="btn btn-outline-secondary br-2" type="button">
                Advanced
              </button>
            </div>
          </div>
      </Col>
    </Row>
    <Container fluid className="quotation-top">
       
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
                + Add New Product
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
                            <Col lg={12}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Image:
                                </label>
                                <input
                                  type="file"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Item Code:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Category:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={2}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Unit:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={2}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Cost:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={2}>
                              <div className="form-group">
                                <label className="font-weight-bold">
                                  Price:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div className="form-group">
                                <label className="font-weight-bold ">
                                  Product Tags:
                                </label>
                                <input
                                  type="text"
                                  class="form-control bg-light"
                                />
                              </div>
                            </Col>

                            <Col lg={12}>
                              <div className="form-group">
                                <label
                                  for="assignd-user-select"
                                  className="font-weight-bold"
                                >
                                  Description
                                </label>
                                <textarea
                                  id="details"
                                  className="form-control bg-light"
                                  rows="4"
                                ></textarea>
                              </div>
                            </Col>
                          </Row>
                          <hr />
                          <Container>
                            <Row className="mb-3 mt-3 d-flex justify-content-between">
                              <Col>
                                <button
                                  type="button"
                                  className="btn btn-md AddCompany__modal__btn  font-weight-bold text-white"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Add Product
                                </button>
                              </Col>
                              <Col>
                                <button
                                  type="button"
                                  className="btn btn-md font-weight-bold text-dark  AddCompany__modal__closebtn"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                  data-dismiss="modal"
                                  
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
                  <h6 className="font-weight-bold">All Categories:</h6>
                  <button
                    type="button"
                    className="btn  dropdown-toggle Company__dropdown__category"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-expanded="false"
                  >
                    All Categories
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
                  <h6 className="font-weight-bold">Product Tags</h6>
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
                  <h6 className="font-weight-bold">Min Price (0)</h6>
                  <button
                    type="button"
                    className="btn  dropdown-toggle Company__dropdown__category"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-expanded="false"
                  >
                    Min Price
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
                  <h6 className="font-weight-bold">Max Price (0)</h6>
                  <button
                    type="button"
                    className="btn  dropdown-toggle Company__dropdown__category"
                    data-toggle="dropdown"
                    data-display="static"
                    aria-expanded="false"
                  >
                    Max Price
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
              <button className="btn font-weight-bold btn-md Add__new__company__btn w-100 bg-blue">
                {" "}
                Clear Filters
              </button>
            </div>
          </Col>
          <Col md={10}>
            <div className="table-scroll">
              <Table striped bordered hover className="quotation-table">
                <thead className="companies-table-head">
                  <tr className='p-5'>
                    <th>Image</th>
                    <th>Item Code</th>
                    <th>Company</th>
                    <th>Description</th>
                    <th>Unit</th>
                    <th>Cost</th>
                    <th>Prices</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>Arts Forum Dec Exhibition</td>
                    <td>America</td>

                    <td>Arts Forum Dec Exhibition</td>
                    <td>5433</td>
                    <td>5433</td>

                    <td>3333</td>

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
                                <div data-dismiss="modal">
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


                  <tr>
                    <td></td>
                    <td>Arts Forum Dec Exhibition</td>
                    <td>America</td>

                    <td>Arts Forum Dec Exhibition</td>
                    <td>5433</td>
                    <td>5433</td>

                    <td>3333</td>

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



                  <tr>
                    <td></td>
                    <td>Arts Forum Dec Exhibition</td>
                    <td>America</td>

                    <td>Arts Forum Dec Exhibition</td>
                    <td>5433</td>
                    <td>5433</td>

                    <td>3333</td>

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



                  <tr>
                    <td></td>
                    <td>Arts Forum Dec Exhibition</td>
                    <td>America</td>

                    <td>Arts Forum Dec Exhibition</td>
                    <td>5433</td>
                    <td>5433</td>

                    <td>3333</td>

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


                  <tr>
                    <td></td>
                    <td>Arts Forum Dec Exhibition</td>
                    <td>America</td>

                    <td>Arts Forum Dec Exhibition</td>
                    <td>5433</td>
                    <td>5433</td>

                    <td>3333</td>

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
                            <li class="page-item ">
                              <a class="page-link background-active text-white" href="/">
                                1
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/">
                                2
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/">
                                3
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/">
                                4
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/">
                                5
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="/">
                                6
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/">
                                7
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/">
                                8
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/">
                                9
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/">
                                10
                              </a>
                            </li>
                            <li class="page-item">
                              <a class="page-link text-purple" href="/" aria-label="Next">
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
    <div>
      <BottomBar/>
    </div>
      </>
  )
}

export default Product