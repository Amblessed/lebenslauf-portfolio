function Certificates() {
  const certs = [
    "ISTQB Certified Tester Foundational Level",
    "Professional Scrum Master I"
  ];

  return (
    <section id="certificate">
      <h2>Certificates</h2>
      <ul>
        {certs.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
    </section>
  );
}

export default Certificates;