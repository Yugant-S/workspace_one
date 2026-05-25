import StudentCard from "./components/StudentCard";

function App() {
  return (
    <>
      <StudentCard
        name="Ayesha"
        age={20}
        city="Pune"
      />

      <StudentCard
        name="Ravi"
        age={21}
        city="Mumbai"
      />

      <StudentCard
        name="Priya"
        age={19}
        city="Nagpur"
      />
    </>
  );
}

export default App;