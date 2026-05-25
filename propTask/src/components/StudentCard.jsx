function StudentCard(props) {
  return (
    <>
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>

      <hr />
    </>
  );
}

export default StudentCard;