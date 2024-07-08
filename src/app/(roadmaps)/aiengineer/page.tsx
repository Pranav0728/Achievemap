import { HomeHeader } from "@/components/common/HomeHeader";
import Container from "@/components/container";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import tool from "@/images/Tool AI.png";
import Link from "next/link";

export default function page() {
  return (
    <>
      <HomeHeader />
      <div className=" flex justify-center w-full ">
        <div className="flex flex-col h-full max-w-screen-md gap-5 md:p-10 p-8">
          <Typography variant="h2">AI Engineer Roadmap</Typography>
          <p>
            Following is the roadmap to learning AI Engineer (also known as{" "}
            <strong> ML Engineer</strong>) skills for a total beginner. It
            includes FREE learning resources for technical skills (or tool
            skills) and soft (or core) skills 🚀
          </p>
          <p>

            Prerequisites: You must have skills or interests to build skills in
            Coding and Math. Without these two you cannot become an AI engineer.
          </p>
          <p>

            Total Duration: 8 Months (4 hours of study Every Day)
            <br />
            Also,{" "}
            <strong> AIEngineer = Data Scientist + Software Engineer</strong>
          </p>
          <Image src={tool} width={1000} alt="tools"></Image>
          <section className="flex flex-col gap-5">
            <Typography variant="h3">
              Week 1 and 2: Computer Science Fundamentals 💻
            </Typography>
            <hr />
            <div className="list-disc">
              <Typography variant="h5">Topics</Typography>
              <div className="md:mx-10">
                <li className="m-1">
                  Data representation: Bits and Bytes, Storing text and numbers,
                  Binary number system.{" "}
                </li>
                <li className="m-1">
                  Basics of computer networks, IP addresses, Internet routing
                  protocol
                </li>
                <li className="m-1">
                  UDP, TCP, HTTP, and The World Wide Web o Programming basics:
                  variables, strings, and numbers, if condition, loops o
                  Algorithm basics
                </li>
              </div>
            </div>
            <Typography variant="h5">Learning Resources</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                Khan Academy course:{" "}
                <Link
                  className="text-blue-700"
                  target="blank"
                  href="https://bit.ly/42DUXtW"
                >
                  https://bit.ly/42DUXtW
                </Link>{" "}
              </li>
              <li className="m-1">
                In the above course, only follow the first 4 sections (1)
                Digital Information (2) The Internet (3) Programming (4)
                Algorithms. Completing the remaining sections is optional. Do it
                if you have time and interest.
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-5">
            <Typography variant="h3">
              Week 3 and 4: Beginners Python 🐍
            </Typography>
            <hr />
            <div className="list-disc">
              <Typography variant="h5">Topics</Typography>
              <div className="md:mx-10">
                <li className="m-1">
                  Variables, Numbers, Strings
                </li>
                <li className="m-1">
                Lists, Dictionaries, Sets,
                Tuples 
                </li>
                <li className="m-1">
                If condition, for loop o Functions, Lambda Functions
                </li>
                <li className="m-1">
                Modules (pip install)
                </li>
                <li className="m-1">
                Read, Write files o Exception
                </li>
                <li className="m-1">
                handling o Classes, Objects
                </li>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
