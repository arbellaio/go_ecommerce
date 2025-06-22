const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <footer className="footer">
          <div className="row">
            <div className="col-md-12 footer-copyright text-center">
              <p className="mb-0">
                Copyright {new Date().getFullYear()} ©kaimono powered by
                arbella.io
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
