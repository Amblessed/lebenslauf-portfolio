function FurtherTrainings() {
  const trainings = [
    {
      title: "The Ultimate React Course 2025: React, Next.js, Redux & More",
      courseUrl: "https://www.udemy.com/course/the-ultimate-react-course/",
      certificateUrl: "Ongoing",
      overview: "",
    },
    {
      title: "Spring Boot Data JPA & Hibernate: Master Basics to Advance",
      courseUrl: "https://www.udemy.com/course/spring-boot-data-jpa-hibernate-master-basics-to-advance/",
      certificateUrl: "https://www.udemy.com/certificate/UC-6b268d46-440d-4f2e-ab65-0d90478123bd/",
      overview:
        "Mastered Hibernate and JPA with Spring Boot, including ORM fundamentals, entity relationships, inheritance strategies, JPQL, Criteria API, and multi-database integration (H2, MySQL, PostgreSQL).",
    },
    {
      title: "Spring Boot REST APIs: Building Modern APIs with Spring Boot",
      courseUrl: "https://www.udemy.com/course/spring-boot-rest-apis/",
      certificateUrl: "https://www.udemy.com/certificate/UC-3df2f4a8-2c85-421a-9d71-c8d0cc9da087/",
      overview:
        "Built RESTful APIs with Spring Boot, implementing full CRUD operations, MySQL integration via Spring Data JPA, DTO mapping, validation, proper HTTP status codes, global exception handling, and basic security with Spring Security.",
    },
    {
      title: "Full Stack: React and Java Spring Boot - The Developer Guide",
      courseUrl: "https://www.udemy.com/course/full-stack-react-and-java-spring-boot-the-developer-guide/",
      certificateUrl: "https://www.udemy.com/certificate/UC-f810695c-a558-4cde-8a20-88f6fe769962/",
      overview:
        "Developed full-stack applications using React for the frontend and Spring Boot for the backend, covering RESTful API integration, state management, and deployment strategies.",
    },
    {
      title: "Amazon Junior Software Developer with GenAI Professional Certificate",
      courseUrl: "https://www.coursera.org/professional-certificates/amazon-junior-software-developer",
      certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/0BDTVTE5FRM1",
      overview:
        "Completed Amazon’s GenAI-backed curriculum covering software development fundamentals, cloud services, version control, and AI-assisted coding practices for junior developer roles.",
    },
    {
      title: "Meta Database Engineer Professional Certificate",
      courseUrl: "https://www.coursera.org/professional-certificates/meta-database-engineer",
      certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/E6VFLQRUP652",
      overview:
        "Gained expertise in database design, normalization, indexing, SQL optimization, and data modeling, with hands-on projects using relational and NoSQL databases.",
    },
    {
      title: "Data Engineering Foundations Specialization",
      courseUrl: "https://www.coursera.org/specializations/data-engineering-foundations",
      certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/RKELGBKYEBRL",
      overview:
        "Learned foundational data engineering concepts including ETL pipelines, data warehousing, batch and stream processing, and cloud-based data tools.",
    },
    {
      title: "Developing AI Systems with the OpenAI API",
      courseUrl: "https://app.datacamp.com/learn/courses/developing-ai-systems-with-the-openai-api",
      certificateUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/9c8a012dc30ddab466691e23e1d36c5bf40d1b76",
      overview:
        "Explored how to design and deploy AI-powered applications using the OpenAI API. Gained hands-on experience with prompt engineering, fine-tuning models, and integrating generative AI into real-world systems. Learned to structure API calls, manage tokens, and build scalable AI workflows that complement backend services.",
    },
    {
      title: "Working with the OpenAI API",
      courseUrl: "https://app.datacamp.com/learn/courses/working-with-the-openai-api",
      certificateUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/5c5b4b2bff139b2919c2abc8bef2d1056072f6e9",
      overview:
        "Focused on practical implementation of OpenAI’s capabilities within software systems. Learned to craft effective prompts, handle API responses, and integrate AI features into backend workflows. Strengthened understanding of use cases like summarization, classification, and conversational agents, with emphasis on ethical deployment and performance optimization.",
    },
  ];

  return (
    <section id="skills">
      <h2>📚 Further Trainings</h2>
     {/*  <ol style={{ paddingLeft: 0, listStyle: "none" }}> */}
      <ol style={{ paddingLeft: 0, listStyle: "none" }}>
        {trainings.map(({ title, courseUrl, certificateUrl, overview }, index) => (
          <li key={index} style={{ marginBottom: "2rem" }}>
            <h3 style={{ marginBottom: "0.5rem" }}>
              <a
                href={courseUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Course: ${title}`}
                style={{ textDecoration: "none", color: "#007acc" }}
              >
                {title}
              </a>
            {" => "}
            {certificateUrl === "Ongoing" ? (
                <em>Currently in progress</em>
              ) : (
                <a
                  href={certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Certificate for ${title}`}
                >
                  View Certificate
                </a>
              )}
              </h3>
            {overview && <p style={{ marginTop: "0.5rem" }}>{overview}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default FurtherTrainings;
