const BestSellingProducts = () => {
  return (
      <>
          <div className="col-xl-6 col-md-12">
              <div className="card o-hidden card-hover">
                  <div className="card-header card-header-top card-header--2 px-0 pt-0">
                      <div className="card-header-title">
                          <h4>Best Selling Product</h4>
                      </div>

                      <div className="best-selling-box d-sm-flex d-none">
                          <span>Short By:</span>
                          <div className="dropdown">
                              <button className="btn p-0 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="true" data-bs-original-title="" title="">Today</button>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                  <li><a className="dropdown-item" href="#" data-bs-original-title="" title="">Action</a></li>
                                  <li><a className="dropdown-item" href="#" data-bs-original-title="" title="">Another action</a></li>
                                  <li><a className="dropdown-item" href="#" data-bs-original-title="" title="">Something else here</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div className="card-body p-0">
                      <div>
                          <div className="table-responsive">
                              <table className="best-selling-table w-image
                                            w-image
                                            w-image table border-0">
                                  <tbody>
                                  <tr>
                                      <td>
                                          <div className="best-product-box">
                                              <div className="product-image">
                                                  <img src="/assets/images/product/1.png" className="img-fluid" alt="Product"/>
                                              </div>
                                              <div className="product-name">
                                                  <h5>Aata Buscuit</h5>
                                                  <h6>26-08-2022</h6>
                                              </div>
                                          </div>
                                      </td>

                                      <td>
                                          <div className="product-detail-box">
                                              <h6>Price</h6>
                                              <h5>$29.00</h5>
                                          </div>
                                      </td>

                                      <td>
                                          <div className="product-detail-box">
                                              <h6>Orders</h6>
                                              <h5>62</h5>
                                          </div>
                                      </td>

                                      <td>
                                          <div className="product-detail-box">
                                              <h6>Stock</h6>
                                              <h5>510</h5>
                                          </div>
                                      </td>

                                      <td>
                                          <div className="product-detail-box">
                                              <h6>Amount</h6>
                                              <h5>$1,798</h5>
                                          </div>
                                      </td>
                                  </tr>

                                  <tr>
                                      <td>
                                          <div className="best-product-box">
                                              <div className="product-image">
                                                  <img src="/assets/images/product/2.png" className="img-fluid" alt="Product"/>
                                              </div>
                                              <div className="product-name">
                                                  <h5>Aata Buscuit</h5>
                                                  <h6>26-08-2022</h6>
                                              </div>
                                          </div>
                                      </td>

                                      <td>
                                          <div className="product-detail-box">
                                              <h6>Price</h6>
                                              <h5>$29.00</h5>
                                          </div>
                                      </td>

                                      <td>
                                          <div className="product-detail-box">
                                              <h6>Orders</h6>
                                              <h5>62</h5>
                                          </div>
                                      </td>

                                      <td>
                                          <div className="product-detail-box">
                                              <h6>Stock</h6>
                                              <h5>510</h5>
                                          </div>
                                      </td>

                                      <td>
                                          <div className="product-detail-box">
                                              <h6>Amount</h6>
                                              <h5>$1,798</h5>
                                          </div>
                                      </td>
                                  </tr>

                                  <tr>
                                      <td>
                                          <div className="best-product-box">
                                              <div className="product-image">
                                                  <img src="/assets/images/product/3.png" className="img-fluid" alt="Product"/>
                                              </div>
                                              <div className="product-name">
                                                  <h5>Aata Buscuit</h5>
                                                  <h6>26-08-2022</h6>
                                              </div>
                                          </div>
                                      </td>

                                      <td>
                                          <div className="product-detail-box">
                                              <h6>Price</h6>
                                              <h5>$29.00</h5>
                                          </div>
                                      </td>

                                      <td>
                                          <div className="product-detail-box">
                                              <h6>Orders</h6>
                                              <h5>62</h5>
                                          </div>
                                      </td>

                                      <td>
                                          <div className="product-detail-box">
                                              <h6>Stock</h6>
                                              <h5>510</h5>
                                          </div>
                                      </td>

                                      <td>
                                          <div className="product-detail-box">
                                              <h6>Amount</h6>
                                              <h5>$1,798</h5>
                                          </div>
                                      </td>
                                  </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </>
  )
}

export default BestSellingProducts
