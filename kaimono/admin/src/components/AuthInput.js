const AuthInput = (props) => {
  return (
    <>
      <div className="col-12">
        <div className="form-floating theme-form-floating log-in-form">
          <input
            type={props.type}
            className="form-control"
            id={props.id}
            placeholder={props.placeholder}
          />
          <label htmlFor={props.htmlFor}>{props.label}</label>
        </div>
      </div>
    </>
  );
};
export default AuthInput;
