const TransactionsList = () => {
  return (
      <>
          <div className="col-xxl-4 col-md-6">
              <div className="card o-hidden card-hover">
                  <div className="card-header border-0">
                      <div className="card-header-title">
                          <h4>Transactions</h4>
                      </div>
                  </div>

                  <div className="card-body pt-0">
                      <div>
                          <div className="table-responsive">
                              <table className="user-table transactions-table table border-0">
                                  <tbody>
                                  <tr>
                                      <td>
                                          <div className="transactions-icon">
                                              <i className="ri-shield-line"></i>
                                          </div>
                                          <div className="transactions-name">
                                              <h6>Wallets</h6>
                                              <p>Starbucks</p>
                                          </div>
                                      </td>

                                      <td className="lost">-$74</td>
                                  </tr>
                                  <tr>
                                      <td className="td-color-1">
                                          <div className="transactions-icon">
                                              <i className="ri-check-line"></i>
                                          </div>
                                          <div className="transactions-name">
                                              <h6>Bank Transfer</h6>
                                              <p>Add Money</p>
                                          </div>
                                      </td>

                                      <td className="success">+$125</td>
                                  </tr>
                                  <tr>
                                      <td className="td-color-2">
                                          <div className="transactions-icon">
                                              <i className="ri-exchange-dollar-line"></i>
                                          </div>
                                          <div className="transactions-name">
                                              <h6>Paypal</h6>
                                              <p>Add Money</p>
                                          </div>
                                      </td>

                                      <td className="lost">-$50</td>
                                  </tr>
                                  <tr>
                                      <td className="td-color-3">
                                          <div className="transactions-icon">
                                              <i className="ri-bank-card-line"></i>
                                          </div>
                                          <div className="transactions-name">
                                              <h6>Mastercard</h6>
                                              <p>Ordered Food</p>
                                          </div>
                                      </td>

                                      <td className="lost">-$40</td>
                                  </tr>
                                  <tr>
                                      <td className="td-color-4 pb-0">
                                          <div className="transactions-icon">
                                              <i className="ri-bar-chart-grouped-line"></i>
                                          </div>
                                          <div className="transactions-name">
                                              <h6>Transfer</h6>
                                              <p>Refund</p>
                                          </div>
                                      </td>

                                      <td className="success pb-0">+$90</td>
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

export default TransactionsList
