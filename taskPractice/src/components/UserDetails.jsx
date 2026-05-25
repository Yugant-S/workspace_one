
function UserDetails() {
const name = "YUGANT SONWANI";
  const age = 20;
  const isStudent = true;
  const hasFees = true;

  const city = "Nagpur";
  const marks = 94;

  return (
    <>
      <h2>{name}</h2>

      <p>Age: {age}</p>

      {isStudent ? (<h3>Currently Studying</h3>) : (<h3>Working Professional</h3>)}

      {hasFees && <button>Pay Fees</button>}

      <p>Hello {name}, from {city}!</p>

      {marks >= 40 ? (<h3>Passed</h3>) : (<h3>Failed</h3>)}
    </>
  );
}
export default UserDetails
