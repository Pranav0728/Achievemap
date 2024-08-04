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
              tools needed to master React.js. Whether you&apos;re a total beginner
              or have some programming experience, this path will help you
              develop a strong foundation in building dynamic and interactive
              web applications.
            </p>
            <p>
              Total Duration: 4 Months
              <br />
              3 hours in Technical Skills + 1 hour in Core Skills = 4 hours study Every Day
            </p>
            <Image
              src="/images/reactjs.png"
              width={1000}
              height={700}
              alt="React.js logo"
              className="w-full"
            />

            {/* Week 1 and 2 */}
            <Typography variant="h3">Week 1 and 2: HTML, CSS, JavaScript</Typography>
            <hr />
            <Typography variant="h5">Topics</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">HTML Basics: Elements, Attributes, Structure</li>
              <li className="m-1">CSS Basics: Selectors, Box Model, Flexbox</li>
              <li className="m-1">JavaScript Basics: Variables, Data Types, Operators</li>
              <li className="m-1">JavaScript Control Flow: Conditionals, Loops</li>
              <li className="m-1">JavaScript Functions and Events</li>
            </ul>

            <Typography variant="h5">Learning Resources</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">HTML and CSS
                <ul className="list-disc md:ml-10 ml-5">
                  <li className="m-1">
                    HTML & CSS Tutorials (English):{" "}
                    <Link className="text-blue-700" target="_blank" href="https://youtu.be/G3e-cpL7ofc?si=3jZRsr1bpdpQpz42">
                      click here
                    </Link>
                  </li>
                  <li className="m-1">
                    HTML Tutorials (Hindi):{" "}
                    <Link className="text-blue-700" target="_blank" href="https://youtu.be/5ccq_nLHneE?si=BMd1KX67fJURNKHZ">
                      click here
                    </Link>
                  </li>
                  <li className="m-1">
                    CSS Tutorials (Hindi):{" "}
                    <Link className="text-blue-700" target="_blank" href="https://youtu.be/MSICFljRcb4?si=8H-LNuiUr2Imh0If">
                      click here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="m-1">JavaScript
                <ul className="list-disc md:ml-10 ml-5">
                  <li className="m-1">
                    JavaScript for Beginners (Hindi):{" "}
                    <Link className="text-blue-700" target="_blank" href="https://youtu.be/13gLB6hDHR8?si=BWBUF-_Yoxnsq25V">
                      click here
                    </Link>
                  </li>
                  <li className="m-1">
                    JavaScript for Beginners (English):{" "}
                    <Link className="text-blue-700" target="_blank" href="https://youtube.com/playlist?list=PLsyeobzWxl7rrvgG7MLNIMSTzVCDZZcT4&si=8PtKlijN3TX-wmvd">
                      click here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <Typography variant="h5">LinkedIn - Core Skill</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">Create a professional-looking LinkedIn profile.
                <ul className="list-disc md:ml-10 ml-5">
                  <li className="m-1">Highlight any completed projects and relevant skills.</li>
                  <li className="m-1">Join groups related to web development.</li>
                </ul>
              </li>
            </ul>

            <Typography variant="h5">Motivation</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                How Can Non-Technical People Learn To Code?:{" "}
                <Link className="text-blue-700" target="_blank" href="https://youtu.be/3_UuRqCyg5E?si=TZhSkwecLHyrGhOv">
                  watch here
                </Link>
              </li>
            </ul>

            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">Create a simple HTML/CSS website using learned skills.</li>
              <li className="m-1">Implement JavaScript for form validation or simple interactions.</li>
              <li className="m-1">
                Practice on Freecodecamp:{" "}
                <Link className="text-blue-700" target="_blank" href="https://www.freecodecamp.org/learn/">
                  Practice here
                </Link>
              </li>
            </ul>

            {/* Week 3 and 4 */}
            <Typography variant="h3">Week 3 and 4: Advanced JavaScript and ES6</Typography>
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
                <Link className="text-blue-700" target="_blank" href="https://youtu.be/YwsOCN8woA8?si=B75xSH2Pn0pcbv6K">
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
                React Basics Tutorial:{" "}
                <Link className="text-blue-700" target="_blank" href="https://youtu.be/dBaaNkAB-Ko?si=eo-ELN-iB5PA3DFT">
                  click here
                </Link>
              </li>
              <li className="m-1">
                React Official Documentation:{" "}
                <Link className="text-blue-700" target="_blank" href="https://reactjs.org/docs/getting-started.html">
                  click here
                </Link>
              </li>
            </ul>

            <Typography variant="h5">LinkedIn - Core Skill</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">Showcase your React projects on LinkedIn.</li>
            </ul>

            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">Build a simple React app using functional components.</li>
              <li className="m-1">Incorporate state management and lifecycle methods.</li>
            </ul>

            {/* Week 7 and 8 */}
            <Typography variant="h3">Week 7 and 8: React Advanced Topics</Typography>
            <hr />
            <Typography variant="h5">Topics</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">React Router for Navigation</li>
              <li className="m-1">Context API for State Management</li>
              <li className="m-1">React Hooks: useState, useEffect</li>
              <li className="m-1">Custom Hooks and Performance Optimization</li>
              <li className="m-1">Testing React Components</li>
            </ul>

            <Typography variant="h5">Learning Resources</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                React Router Tutorial:{" "}
                <Link className="text-blue-700" target="_blank" href="https://youtu.be/3S0F1A8XQn0?si=wIZbY04aEHVUz51J">
                  click here
                </Link>
              </li>
              <li className="m-1">
                Testing React Components Tutorial:{" "}
                <Link className="text-blue-700" target="_blank" href="https://youtu.be/ahcST4nllVA?si=duP6cEkTh5Q_rXiB">
                  click here
                </Link>
              </li>
            </ul>

            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Create a multi-page React app with routing and state management.
              </li>
              <li className="m-1">
                Write unit tests for your components.
              </li>
            </ul>
          </section>
        </div>
      </Container>
    </>
  );
}
