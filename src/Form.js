import "./Form.css";

function Form() {
  return (
    <div className="Form">
      <form className="weather-form">
        <input
          className="weather-form__text"
          id="city"
          type="text"
          placeholdor="City"
        />
        <input className="btn btn-danger" type="submit" value="Search" />
      </form>
    </div>
  );
}

export default Form;
