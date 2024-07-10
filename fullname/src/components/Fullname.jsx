import { useState } from "react";

const Fullname = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFirstChange = (event) => {
    setFirst(event.target.value);
  };

  const handleLastChange = (event) => {
    setLast(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!first) {
      alert("First name is required");
      setIsSubmitted(false);
    } else if (!last) {
      alert("Last name is required");
      setIsSubmitted(false);
    } else {
      setIsSubmitted(true);
    }
  };

  const DisplayFullName = () => {
    return <div>{`Full Name: ${first} ${last}`}</div>;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
        <div>
          <label>
            First Name:
            <input type="text" onChange={handleFirstChange} value={first} />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input type="text" onChange={handleLastChange} value={last} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && first && last && <DisplayFullName />}
    </div>
  );
};

export default Fullname;