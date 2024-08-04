import { HomeHeader } from "@/components/common/HomeHeader";
import Container from "@/components/container";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Container>
        <HomeHeader />
        <div className="flex flex-col h-full w-full items-center px-5">
          <section className="flex flex-col gap-5 w-full md:max-w-screen-md p-5 md:p-10 border-x">
            <Typography variant="h2">React.js Roadmap for Beginners</Typography>
            <p>
              This roadmap will guide you through the essential concepts and
              tools needed to master React.js. Whether you're a total beginner
              or have some programming experience, this path will help you
              develop a strong foundation in building dynamic and interactive
              web applications.
            </p>
            <p>
              Total Duration: 4 Months
              <br />3 hours in Technical Skills + 1 hour in Core Skills = 4
              hours study Every Day
            </p>
            <Image
              src="/images/reactjs.png"
              width={1000}
              height={700}
              alt="React.js logo"
              className="w-full"
            />

            {/* Week 1 and 2 */}
            <Typography variant="h3">
              Week 1 and 2: HTML, CSS, JavaScript
            </Typography>
            <hr />
            <Typography variant="h5">Topics</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                HTML Basics: Elements, Attributes, Structure
              </li>
              <li className="m-1">CSS Basics: Selectors, Box Model, Flexbox</li>
              <li className="m-1">
                JavaScript Basics: Variables, Data Types, Operators
              </li>
              <li className="m-1">
                JavaScript Control Flow: Conditionals, Loops
              </li>
              <li className="m-1">JavaScript Functions and Events</li>
            </ul>

            <Typography variant="h5">Learning Resources</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">HTML and CSS</li>
              <ul className="list-disc md:ml-10 ml-5">
                <li className="m-1">
                  HTML & CSS Tutorials (English) :{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://youtu.be/G3e-cpL7ofc?si=3jZRsr1bpdpQpz42"
                  >
                    click here
                  </Link>
                </li>
                <li className="m-1">
                  HTML Tutorials (Hindi) :{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://youtu.be/5ccq_nLHneE?si=BMd1KX67fJURNKHZ"
                  >
                    click here
                  </Link>
                </li>
                <li className="m-1">
                  CSS Tutorials (Hindi) :{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://youtu.be/MSICFljRcb4?si=8H-LNuiUr2Imh0If"
                  >
                    click here
                  </Link>
                </li>
              </ul>
              <li className="m-1">JavaScript</li>
              <ul className="list-disc md:ml-10 ml-5">
                <li className="m-1">
                  JavaScript for Beginners (Hindi) :{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://youtu.be/13gLB6hDHR8?si=BWBUF-_Yoxnsq25V"
                  >
                    click here
                  </Link>
                </li>
              </ul>
              <ul className="list-disc md:ml-10 ml-5">
                <li className="m-1">
                  JavaScript for Beginners (English) :{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://youtube.com/playlist?list=PLsyeobzWxl7rrvgG7MLNIMSTzVCDZZcT4&si=8PtKlijN3TX-wmvd"
                  >
                    click here
                  </Link>
                </li>
              </ul>
            </ul>
            <Typography variant="h5">LinkedIn - Core Skill</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Create a professional-looking LinkedIn profile.
              </li>
              <ul className="list-disc md:ml-10 ml-5">
                <li className="m-1">
                  Highlight any completed projects and relevant skills.
                </li>
                <li className="m-1">Join groups related to web development.</li>
              </ul>
            </ul>

            <Typography variant="h5">Motivation</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                How Can Non Technical People Learn To Code?:{" "}
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://youtu.be/3_UuRqCyg5E?si=TZhSkwecLHyrGhOv"
                >
                  watch here
                </Link>
              </li>
            </ul>

            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Create a simple HTML/CSS website using learned skills.
              </li>
              <li className="m-1">
                Implement JavaScript for form validation or simple interactions.
              </li>
              <li className="m-1">
                Practice on Freecodecamp:{" "}
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://www.freecodecamp.org/learn/"
                >
                  Practice here
                </Link>
              </li>
            </ul>

            {/* Week 3 and 4 */}
            <Typography variant="h3">
              Week 3 and 4: Advanced JavaScript and ES6
            </Typography>
            <hr />
            <Typography variant="h5">Topics</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">ES6 Features: let, const, Arrow Functions</li>
              <li className="m-1">Destructuring, Template Literals</li>
              <li className="m-1">Array and Object Methods</li>
              <li className="m-1">Promises and Async/Await</li>
              <li className="m-1">Modules and Import/Export</li>
              <li className="m-1">Projects and only Projects</li>
            </ul>

            <Typography variant="h5">Learning Resources</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Advanced JavaScript Tutorial:{" "}
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://youtu.be/YwsOCN8woA8?si=B75xSH2Pn0pcbv6K"
                >
                  click here
                </Link>
              </li>
            </ul>

            <Typography variant="h5">Core Skill: Problem Solving</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Practice solving coding challenges on platforms like LeetCode.
              </li>
            </ul>

            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Implement an ES6-based JavaScript project using modules.
              </li>
            </ul>

            {/* Week 5 and 6 */}
            <Typography variant="h3">Week 5 and 6: React Basics</Typography>
            <hr />
            <Typography variant="h5">Topics</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">Understanding React and JSX</li>
              <li className="m-1">Components and Props</li>
              <li className="m-1">State and Lifecycle</li>
              <li className="m-1">Handling Events in React</li>
              <li className="m-1">Conditional Rendering</li>
            </ul>

            <Typography variant="h5">Learning Resources</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                React Introduction Course (Hindi):{" "}
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&si=5SwOorNPs1mPtCn_"
                >
                  watch here
                </Link>
              </li>
              <li className="m-1">
                React official docs :{" "}
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://react.dev/learn"
                >
                  learn here
                </Link>
              </li>
            </ul>

            <Typography variant="h5">Core Skill: Communication</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Enhance your communication skills by explaining React concepts
                to peers.
              </li>
              <li className="m-1">
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://www.linkedin.com"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>

            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Create a small React application with interactive elements.
              </li>
            </ul>

            {/* Week 7 and 8 */}
            <Typography variant="h3">
              Week 7 and 8: React Hooks and Advanced Concepts
            </Typography>
            <hr />
            <Typography variant="h5">Topics</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">Using React Hooks: useState, useEffect</li>
              <li className="m-1">Custom Hooks</li>
              <li className="m-1">Context API for State Management</li>
              <li className="m-1">React Router for Navigation</li>
              <li className="m-1">Code Splitting and Lazy Loading</li>
            </ul>

            <Typography variant="h5">Learning Resources</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                React Hooks Deep Dive (English) from video 43 :{" "}
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&si=7tceolcgL37lKKDg"
                >
                  watch here
                </Link>
              </li>
            </ul>

            <Typography variant="h5">Core Skill: Teamwork</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Collaborate with others on a React project to enhance teamwork
                skills.
              </li>
            </ul>

            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Develop a multi-page application using React Router.
              </li>
            </ul>

            {/* Week 9 and 10 */}
            <Typography variant="h3">
              Week 9 and 10: State Management and Testing
            </Typography>
            <hr />
            <Typography variant="h5">Topics</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">Redux for State Management</li>
              <li className="m-1">Integrating Redux with React</li>
              <li className="m-1">Unit Testing React Components</li>
              <li className="m-1">
                Testing Libraries: Jest, React Testing Library
              </li>
              <li className="m-1">End-to-End Testing with Cypress</li>
            </ul>

            <Typography variant="h5">Learning Resources</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Redux and Testing Tutorial:{" "}
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://youtu.be/-bEzt5ISACA?si=1YxdHV9w0fg3Cq73"
                >
                  watch here
                </Link>
              </li>
            </ul>

            <Typography variant="h5">Core Skill: Critical Thinking</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Apply critical thinking to debug and solve problems efficiently.
              </li>
            </ul>

            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Build a React-Redux application and write tests for components.
              </li>
            </ul>

            {/* Week 11 and 12 */}
            <Typography variant="h3">
              Week 11 and 12: Advanced Topics and Deployment
            </Typography>
            <hr />
            <Typography variant="h5">Topics</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">Performance Optimization</li>
              <li className="m-1">Static Site Generation</li>
              <li className="m-1">Deploying React Applications</li>
              <li className="m-1">CI/CD for React Apps</li>
            </ul>

            <Typography variant="h5">Learning Resources</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                What is CI/CD:{" "}
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://youtu.be/57dkyTmOCmE?si=bm8YEVk9P8xzDJCu"
                >
                  watch here
                </Link>
              </li>
              <li className="m-1">
                Deploy react app to production (Vercel) :{" "}
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://youtu.be/dg2Gw1HSlpQ?si=W4FIbtv97a7XuHjJ"
                >
                  watch here
                </Link>
              </li>
            </ul>

            <Typography variant="h5">Core Skill: Adaptability</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Stay updated with the latest React features and industry trends.
              </li>
            </ul>

            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Deploy a complete React application and share it with your
                network.
              </li>
            </ul>
          </section>
        </div>
      </Container>
    </>
  );
}
