function Skills() {
  const skills = [
    "Java, Python, Javascript",
    "Selenium, Playwright, Cucumber",
    "JUnit, TestNG, Pytest",
    "Git, Jenkins, GitHub Actions (CI/CD)",
    "HTML, CSS, JS, Bootstrap, React",
    "MySQL, PostgreSQL, SQL Server",
    "Scrum, Jira, Confluence",
    "Data Engineering, Data Analysis",
    "Generative AI, Prompt Engineering, OpenAI API"
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
    </section>
  );
}

export default Skills;