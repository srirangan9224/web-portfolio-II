import React from 'react'
import './App.css'
import Title from'./components/Title'
import Section from './components/Section'
import 'bootstrap/dist/css/bootstrap.min.css';

const aboutContent = `  <p>
    Hi, I’m <strong>Srirangan</strong>, a passionate <strong>Computer Science student</strong> with expertise in <strong>Python</strong>, 
    <strong>Machine Learning</strong>, and <strong>Database Engineering</strong>. I thrive on solving complex problems 
    and creating impactful solutions, whether it’s crafting intuitive user interfaces or designing efficient backend systems.
  </p>
  <p>
    My journey in tech has been fueled by curiosity and a love for continuous learning. From developing a 
    <strong>traffic sign classification program</strong> with a 95% accuracy rate to building an 
    <strong>interactive web application for school elections</strong> used by over 500 users, I always aim to deliver 
    high-quality results.
  </p>
  <p>
    Beyond coding, I have contributed to the community as a <strong>Scribe Volunteer</strong>, assisting visually 
    impaired students, and I enjoy sharing knowledge through mentorship. When I’m not coding, you’ll find me playing the 
    guitar or brainstorming ways to make a positive impact in the world.
  </p>
  <p>
    Feel free to explore my portfolio to learn more about my projects, skills, and experiences. Let’s create something 
    amazing together!
  </p>`


const educationContent = `<div class="education-entry">
    <h3>University of Florida</h3>
    <p><strong>Bachelor of Science in Computer Science</strong></p>
    <p>August 2024 - Present</p>
    <ul style="list-style-type: none; padding: 0;">
      <li>GPA: <strong>4.0</strong></li>
      <li>Member of <strong>Association for Computing Machinery (ACM)</strong>, participated in career development workshops.</li>
    </ul>
  </div>
  <hr>
  <div class="education-entry">
    <h3>The PSBB Millennium School, Coimbatore, India</h3>
    <p><strong>High School Diploma</strong></p>
    <p>Graduated: June 2024</p>
    <ul style="list-style-type: none; padding: 0;">
      <li><strong>EVM Project: </strong><em>Designed an electronic voting machine Application using Django FullStack</em></li>
      <li>First place in <strong>SNS TechNova</strong>, a national-level Python debugging contest.</li>
    </ul>
  </div>`
const projectsContent = ` <div class="project-entry">
    <h3>Minesweeper Game AI</h3>
    <p>
      <strong>Technologies:</strong> Python
    </p>
    <p>
      Developed an AI for Minesweeper that efficiently calculates probabilities and uses logical reasoning to solve the game board. 
      Focused on creating an engaging user experience and improving the decision-making algorithm.
    </p>
  </div>

  <div class="project-entry">
    <h3>Traffic Sign Classification Program</h3>
    <p>
      <strong>Technologies:</strong> Python, TensorFlow, Scikit-Learn, OpenCV
    </p>
    <p>
      Built a real-time traffic sign classification system with 95% accuracy on test data. Utilized convolutional neural networks (CNNs) for image recognition and preprocessing techniques for analyzing traffic signs.
    </p>
  </div>

  <div class="project-entry">
    <h3>Interactive Web Application for School Elections</h3>
    <p>
      <strong>Technologies:</strong> Django, Python, JavaScript, SQLite
    </p>
    <p>
      Designed and deployed a web application for school representative elections with over 500 active users. Engineered a dynamic front-end with real-time vote updates, utilizing JavaScript and HTML to enhance user
engagement and experience.
    </p>
  </div>
`
const contactContent = `<div class="contact-container">
  <div class="contact-info">
    <h3>you can reach me via:</h3>
    <p><strong>Email:</strong> <a href="mailto:srirangan9224@gmail.com.com">srirangan9224@gmail.com</a></p>
  </div>
  <div class="contact-info">
    <h3>Alternatively, you can message me via:</h3>
    <p><strong>Email:</strong> <a href="mailto:
srirangans@acm.org">
srirangans@acm.org</a></p>
    <p><strong>Phone:</strong> (404) 913-4213</p>
  </div>`
const certificationsContent =  `<div class="certification-entry">
    <h3>HiPerGator Account Training</h3>
    <p>
      <strong>Issued By:</strong> University of Florida | <strong>Issued:</strong> Nov 2024
    </p>
    <a href="https://www.coursera.org/account/accomplishments/verify/LNDH08A5N318?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course
" target="_blank">Show Credential</a>
  </div>

  <div class="certification-entry">
    <h3>Meta Database Engineer Specialization</h3>
    <p>
      <strong>Issued By:</strong> Meta | <strong>Issued:</strong> Apr 2024 | <strong>Credential ID:</strong> F8DED2Z8GSN9
    </p>
    <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/F8DED2Z8GSN9" target="_blank">Show Credential</a>
  </div>

  <div class="certification-entry">
    <h3>Introduction to Machine Learning</h3>
    <p>
      <strong>Issued By:</strong> Duke University | <strong>Issued:</strong> Mar 2024 | <strong>Credential ID:</strong> 3MQH2J9ZT5R4
    </p>
    <a href="https://www.coursera.org/account/accomplishments/certificate/3MQH2J9ZT5R4" target="_blank">Show Credential</a>
  </div>

  <div class="certification-entry">
    <h3>Welcome to Game Theory</h3>
    <p>
      <strong>Issued By:</strong> The University of Tokyo | <strong>Issued:</strong> Mar 2024 | <strong>Credential ID:</strong> Q9TS9AQ5NLFY
    </p>
    <a href="https://www.coursera.org/account/accomplishments/certificate/Q9TS9AQ5NLFY" target="_blank">Show Credential</a>
  </div>

  <div class="certification-entry">
    <h3>CS50’s Introduction to Databases with SQL</h3>
    <p>
      <strong>Issued By:</strong> CS50 | <strong>Issued:</strong> Oct 2023
    </p>
    <a href="https://certificates.cs50.io/050943f7-0dad-436f-9aae-aa53051c56e3.pdf?size=letter" target="_blank">Show Credential</a>
  </div>

  <div class="certification-entry">
    <h3>CS50's Introduction to Artificial Intelligence with Python</h3>
    <p>
      <strong>Issued By:</strong> CS50 | <strong>Issued:</strong> Aug 2023
    </p>
    <a href="https://certificates.cs50.io/94025bd9-3e06-4d15-b0d2-e788e770363b.pdf?size=letter" target="_blank">Show Credential</a>
  </div>

  <div class="certification-entry">
    <h3>Introduction to Programming with Python and Java Specialization</h3>
    <p>
      <strong>Issued By:</strong> University of Pennsylvania | <strong>Issued:</strong> May 2023 | <strong>Credential ID:</strong> L36D8FCSR9A5
    </p>
    <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/L36D8FCSR9A5" target="_blank">Show Credential</a>
  </div>

  <div class="certification-entry">
    <h3>Programming with JavaScript</h3>
    <p>
      <strong>Issued By:</strong> Meta | <strong>Issued:</strong> May 2023 | <strong>Credential ID:</strong> 35MTPN7VVUXQ
    </p>
    <a href="https://www.coursera.org/account/accomplishments/certificate/35MTPN7VVUXQ" target="_blank">Show Credential</a>
  </div>

  <div class="certification-entry">
    <h3>CS50’s Web Programming with Python and JavaScript</h3>
    <p>
      <strong>Issued By:</strong> CS50 | <strong>Issued:</strong> Mar 2023
    </p>
    <a href="https://certificates.cs50.io/0216ffbc-af37-4de6-a273-0688371578d4.pdf?size=letter" target="_blank">Show Credential</a>
  </div>

  <div class="certification-entry">
    <h3>CS50's Introduction to Programming with Python</h3>
    <p>
      <strong>Issued By:</strong> CS50 | <strong>Issued:</strong> Oct 2022
    </p>
    <a href="https://certificates.cs50.io/c48b7e8a-707e-43b3-943e-01100160b9ac.pdf?size=letter" target="_blank">Show Credential</a>
  </div>

  <div class="certification-entry">
    <h3>Plectrum Guitar Grade 5</h3>
    <p>
      <strong>Issued By:</strong> Trinity College London
    </p>
  </div>`

function App() {

  return (
    <>
      <Title/>
      <br/>
      <br/>
      <Section title={"about"} content={aboutContent} display={'block'}/>
      <Section title={"education"} content={educationContent} display={'none'}/>
      <Section title={"projects"} content={projectsContent} display={'none'}/>
      <Section title={"certifications"} content={certificationsContent} display={'none'}/>
      <Section title={"contact"} content={contactContent} display={'none'}/>
    </>
  )
}

export default App
