import { HomeHeader } from "@/components/common/HomeHeader";
import Container from "@/components/container";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import tool from "@/images/Tool AI.png";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Container>
        <HomeHeader />
        <div className="flex flex-col h-full w-full items-center px-5">
          <section className="flex flex-col gap-5 w-full md:max-w-screen-md p-5 md:p-10 border-x">
            <Typography variant="h2">AI Engineer Roadmap</Typography>
            <p>
              Following is the roadmap to learning AI Engineer (also known as{" "}
              <strong>ML Engineer</strong>) skills for a total beginner. It
              includes FREE learning resources for technical skills (or tool
              skills) and soft (or core) skills 🚀
            </p>
            <p>
              Prerequisites: You must have skills or interests to build skills
              in Coding and Math. Without these two you cannot become an AI
              engineer.
            </p>
            <p>
              Total Duration: 8 Months (4 hours of study Every Day)
              <br />
              Also,{" "}
              <strong>AIEngineer = Data Scientist + Software Engineer</strong>
            </p>
            <Image src={tool} width={1000} alt="tools" className="w-full" />

            <Typography variant="h3">
              Week 1 and 2: Computer Science Fundamentals 💻
            </Typography>
            <hr />
            <div>
              <Typography variant="h5">Topics</Typography>
              <ul className="list-disc md:ml-10 ml-5">
                <li className="m-1">
                  Data representation: Bits and Bytes, Storing text and numbers,
                  Binary number system.
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
              </ul>
            </div>
            <Typography variant="h5">Learning Resources</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Khan Academy course:{" "}
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://bit.ly/42DUXtW"
                >
                  https://bit.ly/42DUXtW
                </Link>
              </li>
            </ul>

            <Typography variant="h3">
              Week 3 and 4: Beginners Python 🐍
            </Typography>
            <hr />
            <div>
              <Typography variant="h5">Topics</Typography>
              <ul className="list-disc md:ml-10 ml-5">
                <li className="m-1">Variables, Numbers, Strings</li>
                <li className="m-1">Lists, Dictionaries, Sets, Tuples</li>
                <li className="m-1">
                  If condition, for loop o Functions, Lambda Functions
                </li>
                <li className="m-1">Modules (pip install)</li>
                <li className="m-1">Read, Write files o Exception</li>
                <li className="m-1">handling o Classes, Objects</li>
              </ul>
            </div>
            <Typography variant="h5">Learning Resources</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">Track A (Free)</li>
              <ul className="list-disc md:ml-10 ml-5">
                <li className="m-1">
                  Python Tutorials (Codebasics) on YouTube (first 16 videos):{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://bit.ly/3X6CCC7"
                  >
                    https://bit.ly/3X6CCC7
                  </Link>
                </li>
                <li className="m-1">
                  Corey’s Python Tutorials:{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://bit.ly/3uqUgaZ"
                  >
                    https://bit.ly/3uqUgaZ
                  </Link>
                </li>
                <li className="m-1">
                  Codebasics Python HINDI Tutorials:{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://bit.ly/3vmXrgw"
                  >
                    https://bit.ly/3vmXrgw
                  </Link>
                </li>
                <li className="m-1">
                  Learn Python offical website:{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://bit.ly/3vmXrgw"
                  >
                    https://www.learnpython.org
                  </Link>
                </li>
              </ul>
            </ul>
            <Typography variant="h5">LinkedIn - Core Skill</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Create a professional-looking LinkedIn profile.
                <ul className="list-disc md:ml-10 ml-5">
                  <li className="m-1">
                    Have a clear profile picture and banner image.
                  </li>
                  <li className="m-1">Add tags such as: Open to work etc.</li>
                </ul>
              </li>
            </ul>
            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Track A: Finish all these exercises:{" "}
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://bit.ly/3k1mof5"
                >
                  https://bit.ly/3k1mof5
                </Link>
              </li>
              <li className="m-1">
                Track B: Finish exercises and quizzes for relevant topics
              </li>
              <li className="m-1">
                Create a professional-looking LinkedIn profile.
              </li>
              <li className="m-1">
                Make 4-5 basic python projects
              </li>
            </ul>

            <Typography variant="h3">
              Week 5 and 6: Data Structures and Algorithms in Python
            </Typography>
            <hr />
            <Typography variant="h5">Topics</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">Data structures basics, Big O notation</li>
              <li className="m-1">
                Data structures: Arrays, Linked List, Hash Table, Stack, Queue
              </li>
              <li className="m-1">Data structures: Tree, Graph</li>
              <li className="m-1">
                Algorithms: Binary search, Bubble sort, Quick sort, Merge sort
              </li>
              <li className="m-1">Recursion</li>
            </ul>
            <Typography variant="h5">Learning Resources</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                DSA YouTube Playlist:{" "}
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://bit.ly/3uiW2Lf"
                >
                  https://bit.ly/3uiW2Lf
                </Link>
              </li>
            </ul>
            <Typography variant="h5">Motivation</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                How Kaggle helped this person become ML engineer:{" "}
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://bit.ly/3X3YenG"
                >
                  https://bit.ly/3X3YenG
                </Link>
              </li>
            </ul>

            <Typography variant="h3">Week 7, 8: Advanced Python</Typography>
            <hr />
            <Typography variant="h5">Topics</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">Inheritance, Generators, Iterators</li>
              <li className="m-1">List Comprehensions, Decorators</li>
              <li className="m-1">Multithreading, Multiprocessing</li>
            </ul>
            <Typography variant="h5">Learning Resources</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                Python Tutorials (Codebasics) on YouTube (17th to 27th video):{" "}
                <Link
                  className="text-blue-700"
                  target="blank"
                  href="https://bit.ly/3X6CCC7"
                >
                  https://bit.ly/3X6CCC7
                </Link>
              </li>
            </ul>
            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                Finish all these exercises in this same playlist:{" "}
                <Link
                  className="text-blue-700"
                  target="blank"
                  href="https://bit.ly/3X6CCC7"
                >
                  https://bit.ly/3X6CCC7
                </Link>
              </li>
            </ul>
            <Typography variant="h5">Core/Soft Skills</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">LinkedIn</li>
              <ul className="list-disc ml-10">
                <li className="m-1">
                  Start following prominent AI influencers.
                </li>
                <li className="m-1">
                  Daliana Liu:{" "}
                  <Link
                    className="text-blue-700"
                    target="blank"
                    href="https://www.linkedin.com/in/dalianaliu/"
                  >
                    dalianaliu
                  </Link>
                </li>
                <li className="m-1">
                  Nitin Aggarwal:{" "}
                  <Link
                    className="text-blue-700"
                    target="blank"
                    href="https://www.linkedin.com/in/ntnaggarwal/"
                  >
                    ntnaggarwal
                  </Link>
                </li>
                <li className="m-1">
                  Steve Nouri:{" "}
                  <Link
                    className="text-blue-700"
                    target="blank"
                    href="https://www.linkedin.com/in/stevenouri/"
                  >
                    stevenouri
                  </Link>
                </li>
                <li className="m-1">
                  Dhaval Patel:{" "}
                  <Link
                    className="text-blue-700"
                    target="blank"
                    href="https://www.linkedin.com/in/dhavalsays/"
                  >
                    dhavalsays
                  </Link>
                </li>
                <li className="m-1">Increase engagement.</li>
                <li className="m-1">
                  Start commenting meaningfully on AI and career-related posts.
                </li>
                <li className="m-1">
                  Helps network with others working in the industry, build
                  connections.
                </li>
                <li className="m-1">Learning and brainstorming opportunity.</li>
                <li className="m-1">
                  Remember online presence is a new form of resume.
                </li>
              </ul>
              <li className="m-1">Business Fundamentals - Soft Skill</li>
              <ul className="list-disc ml-10">
                <li className="m-1">
                  Learn business concepts from ThinkSchool and other YT Case
                  Studies.
                </li>
                <li className="m-1">
                  Example: How Amul beat competition:{" "}
                  <Link
                    className="text-blue-700"
                    target="blank"
                    href="https://youtu.be/nnwqtZiYMxQ"
                  >
                    https://youtu.be/nnwqtZiYMxQ
                  </Link>
                </li>
              </ul>
              <li className="m-1">Discord</li>
              <ul className="list-disc ml-10">
                <li className="m-1">
                  Start asking questions and get help from the community. This
                  post shows how to ask questions the right way:{" "}
                  <Link
                    className="text-blue-700"
                    target="blank"
                    href="https://bit.ly/3I70EbI"
                  >
                    https://bit.ly/3I70EbI
                  </Link>
                </li>
                <li className="m-1">
                  Join codebasics discord server:{" "}
                  <Link
                    className="text-blue-700"
                    target="blank"
                    href="https://discord.gg/r42Kbuk"
                  >
                    https://discord.gg/r42Kbuk
                  </Link>
                </li>
              </ul>
            </ul>
            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                Write meaningful comments on at least 10 AI related LinkedIn
                posts.
              </li>
              <li className="m-1">
                Note down your key learnings from 3 case studies on ThinkSchool
                and share them with your friend.
              </li>
            </ul>

            <Typography variant="h3">
              Week 9: Version Control (Git, GitHub)
            </Typography>
            <hr />
            <Typography variant="h5">Topics</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                What is the version control system? What is Git and GitHub?
              </li>
              <li className="m-1">Basic commands: add, commit, push.</li>
              <li className="m-1">
                Branches, reverting change, HEAD, Diff and Merge
              </li>
              <li className="m-1">Pull requests.</li>
            </ul>
            <Typography variant="h5">Learning Resources</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                Basic git and github:{" "}
                <Link
                  className="text-blue-700"
                  target="blank"
                  href="https://www.youtube.com/watch?v=SWYqp7iY_Tc"
                >
                  youtube video
                </Link>
              </li>
              <li className="m-1">
                YT playlist (codebasics):{" "}
                <Link
                  className="text-blue-700"
                  target="blank"
                  href="https://bit.ly/3SECQQ7"
                >
                  https://bit.ly/3SECQQ7
                </Link>
              </li>
              <li className="m-1">
                YT playlist (Corey):{" "}
                <Link
                  className="text-blue-700"
                  target="blank"
                  href="https://bit.ly/3T0Yrmb"
                >
                  https://bit.ly/3T0Yrmb
                </Link>
              </li>
            </ul>
            <Typography variant="h5">Motivation</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                Mechanical to Deep Learning Engineer:{" "}
                <Link
                  className="text-blue-700"
                  target="blank"
                  href="https://bit.ly/48lX9aR"
                >
                  https://bit.ly/48lX9aR
                </Link>
              </li>
            </ul>
            <Typography variant="h5">Core/Soft Skills</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">Presentation skills</li>
              <ul className="list-disc ml-10">
                <li className="m-1">
                  Death by PowerPoint:{" "}
                  <Link
                    className="text-blue-700"
                    target="blank"
                    href="https://youtu.be/Iwpi1Lm6dFo"
                  >
                    https://youtu.be/Iwpi1Lm6dFo
                  </Link>
                </li>
              </ul>
            </ul>

            <Typography variant="h3">Week 10, 11: SQL</Typography>
            <hr />
            <Typography variant="h5">Topics</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">Basics of relational databases.</li>
              <li className="m-1">
                Basic Queries: SELECT, WHERE LIKE, DISTINCT, BETWEEN, GROUP BY,
                ORDER BY
              </li>
              <li className="m-1">
                Advanced Queries: CTE, Subqueries, Window Functions
              </li>
              <li className="m-1">Joins: Left, Right, Inner, Full</li>
              <li className="m-1">
                Database creation, indexes, stored procedures.
              </li>
            </ul>

            <Typography variant="h5">Learning Resources</Typography>
            <div className="flex flex-col gap-3 md:mx-10">
              <Typography variant="h5">Track A</Typography>
              <ul className="list-disc ml-5 text-blue-700">
                <li>
                  <a
                    href="https://bit.ly/3WFku20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Khan Academy SQL course
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.w3schools.com/sql/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    W3Schools SQL tutorial
                  </a>
                </li>
                <li>
                  <a
                    href="https://sqlbolt.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SQLBolt interactive SQL tutorial
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/Rm0xH2Vpfi0?si=6ZLK8A5LvGqN4NmT"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube video on SQL basics
                  </a>
                </li>
              </ul>
            </div>
            <Typography variant="h3">
              Week 12: Numpy, Pandas, Data Visualization
            </Typography>
            <hr />
            <Typography variant="h5">Tech Skills</Typography>
            <div className="flex flex-col gap-3 md:mx-10">
              <Typography variant="h5">Numpy</Typography>
              <ul className="list-disc ml-5">
                <li className="text-blue-700">
                  <a
                    href="https://bit.ly/3GTppa8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Numpy YouTube playlist
                  </a>
                </li>
              </ul>

              <Typography variant="h5">Pandas, Matplotlib, Seaborn</Typography>
              <ul className="list-disc ml-5">
                <li>
                  Go through chapter 3 in this course (entire chapter is free):
                  <a
                    href="https://codebasics.io/courses/math-and-statistics-for-data-science"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700"
                  >
                    Math and Statistics for Data Science
                  </a>
                </li>
              </ul>
            </div>

            <Typography variant="h3">
              Week 13, 14, 15, 16: Math & Statistics for AI
            </Typography>
            <hr />
            <Typography variant="h5">Math and Statistics for AI</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                Basics: Descriptive vs inferential statistics, continuous vs
                discrete data, nominal vs ordinal data
              </li>
              <li className="m-1">
                Linear Algebra: Vectors, Matrices, Eigenvalues and Eigenvectors
              </li>
              <li className="m-1">
                Calculus: Basics of integral and differential calculus
              </li>
              <li className="m-1">
                Basic plots: Histograms, pie charts, bar charts, scatter plot
                etc.
              </li>
              <li className="m-1">
                Measures of central tendency: mean, median, mode
              </li>
              <li className="m-1">
                Measures of dispersion: variance, standard deviation
              </li>
              <li className="m-1">Probability basics</li>
              <li className="m-1">Distributions: Normal distribution</li>
              <li className="m-1">Correlation and covariance</li>
              <li className="m-1">Central limit theorem</li>
              <li className="m-1">
                Hypothesis testing: p value, confidence interval, type 1 vs type
                2 error, Z test
              </li>
            </ul>

            <Typography variant="h5">Learning Resources</Typography>
            <div className="flex flex-col gap-3 md:mx-10">
              <Typography variant="h5">Track A (Free)</Typography>
              <ul className="list-disc ml-5">
                <li>
                  Learn the above topics from this excellent Khan Academy course
                  on statistics and probability: {" "}
                  <a
                  className="text-blue-700"
                    href="https://www.khanacademy.org/math/statistics-probability"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Course link
                  </a>
                </li>
                <li>
                  When you have doubts, use StatQuest YouTube channel:{" "}
                  <a
                    href="https://www.youtube.com/@statquest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700"
                  >
                    StatQuest YouTube channel
                  </a>
                </li>
                <li>
                  Use this free YouTube playlist:{" "}
                  <a
                    href="https://bit.ly/3QrSXis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700"
                  >
                    Free YouTube playlist
                  </a>
                </li>
                <li>
                  Another great YouTube channel:{" "}
                  <a
                    href="https://www.youtube.com/@3blue1brown"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700"
                  >
                    3Blue1Brown YouTube channel
                  </a>
                </li>
              </ul>

              <Typography variant="h5">Track B (Affordable Fees){" "}</Typography>
              <ul className="list-disc ml-5">
                <li>
                  Khan Academy course doesn’t have Python coding and it is
                  generic. To learn using Python and specifics of applying
                  statistics to data science check this course:
                  <a
                    href="https://codebasics.io/courses/math-statistics-for-data-professionals"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Math and Statistics for Data Professionals
                  </a>
                </li>
              </ul>
            </div>

            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                Finish all exercises in this playlist:
                <a
                  href="https://bit.ly/3QrSXis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700"
                >
                  Free YouTube playlist
                </a>
              </li>
              <li className="m-1">
                Finish all exercises in Khan Academy course.
              </li>
            </ul>

            <Typography variant="h3">
              Week 17: Exploratory Data Analysis (EDA)
            </Typography>
            <hr />
            <Typography variant="h5">
              Exploratory Data Analysis (EDA)
            </Typography>
            <div className="flex flex-col gap-3 md:mx-10">
              <ul className="list-disc ml-5">
                <li>
                  Use this link to search for exploratory data analysis
                  notebooks on Kaggle:{" "}
                  <a
                    href="https://www.kaggle.com/code?searchQuery=exploratory+data+analysis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700"
                  >
                    Kaggle EDA Notebooks
                  </a>
                </li>
                <li>
                  Practice EDA using at least 3 datasets, for example:{" "}
                  <a
                    href="https://www.kaggle.com/datasets/rishabhkarn/ipl-auction-2023/data"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700"
                  >
                    IPL Auction 2023 Dataset
                  </a>
                </li>
              </ul>
            </div>

            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                Perform EDA on at least 2 additional datasets on Kaggle.
              </li>
            </ul>

            <Typography variant="h3">
              Week 18, 19, 20, 21: Machine Learning
            </Typography>
            <hr />
            <Typography variant="h5">
              Machine Learning: Preprocessing
            </Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                Handling NA values, outlier treatment, data normalization
              </li>
              <li className="m-1">One hot encoding, label encoding</li>
              <li className="m-1">Feature engineering</li>
              <li className="m-1">Train test split</li>
              <li className="m-1">Cross validation</li>
            </ul>

            <Typography variant="h5">
              Machine Learning: Model Building
            </Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">Types of ML: Supervised, Unsupervised</li>
              <li className="m-1">Supervised: Regression vs Classification</li>
              <li className="m-1">
                Linear models:
                <ul className="list-disc ml-5">
                  <li>Linear regression, logistic regression</li>
                  <li>Gradient descent</li>
                </ul>
              </li>
              <li className="m-1">
                Nonlinear models (tree-based models):
                <ul className="list-disc ml-5">
                  <li>Decision tree</li>
                  <li>Random forest</li>
                  <li>XGBoost</li>
                </ul>
              </li>
              <li className="m-1">
                Model evaluation:
                <ul className="list-disc ml-5">
                  <li>
                    Regression: Mean Squared Error, Mean Absolute Error, MAPE
                  </li>
                  <li>
                    Classification: Accuracy, Precision-Recall, F1 Score, ROC
                    Curve, Confusion matrix
                  </li>
                </ul>
              </li>
              <li className="m-1">
                Hyperparameter tuning: GridSearchCV, RandomSearchCV
              </li>
              <li className="m-1">
                Unsupervised: K means, Hierarchical clustering, Dimensionality
                reduction (PCA)
              </li>
            </ul>

            <Typography variant="h5">Learning Resources</Typography>
            <div className="flex flex-col gap-3 md:mx-10">
              <Typography variant="h5">
                YouTube playlist (more than 2 million views)
              </Typography>
              <ul className="list-disc ml-5">
                <li>
                  First 21 videos:{" "}
                  <a
                    className="text-blue-700"
                    href="https://bit.ly/3io5qqX"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube Playlist
                  </a>
                </li>
              </ul>

              <Typography variant="h5">Feature engineering playlist{" "}</Typography>
              <ul className="list-disc ml-5">
                <li>
                  <a
                    className="text-blue-700"
                    href="https://bit.ly/3IFa3Yf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Feature Engineering Playlist
                  </a>
                </li>
              </ul>
            </div>

            <Typography variant="h5">Core/Soft Skills</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                Project Management:{" "}
                <ul className="list-disc ml-5">
                  <li>
                    Scrum:{" "}
                    <a
                    className="text-blue-700"
                      href="https://scrumtrainingseries.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Scrum Training
                    </a>
                  </li>
                  <li>
                    Kanban:{" "}
                    <a
                     className="text-blue-700"
                      href="https://youtu.be/jf0tlbt9lx0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kanban Video
                    </a>
                  </li>
                  <li>Tools: JIRA, Notion</li>
                </ul>
              </li>
            </ul>

            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                Complete all exercises in ML playlist:{" "}
                <a
                className="text-blue-700"
                  href="https://bit.ly/3io5qqX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ML Playlist
                </a>
              </li>
              <li className="m-1">Work on 2 Kaggle ML notebooks</li>
              <li className="m-1">
                Write 2 LinkedIn posts on what you have learned in ML
              </li>
              <li className="m-1">
                Discord: Help people with at least 10 answers
              </li>
            </ul>

            <Typography variant="h3">Week 22: ML Ops ⚙️</Typography>
            <hr />
            <Typography variant="h5">Topics</Typography>
            <ul className="list-disc md:mx-10">
              <li>What is API? FastAPI for Python server development</li>
              <li>
                DevOps Fundamentals: CI/CD pipelines, containerization (Docker,
                Kubernetes)
              </li>
              <li>
                Familiarity with at least one cloud platform (AWS, Azure etc.)
              </li>
            </ul>

            <Typography variant="h5">Learning Resources</Typography>
            <div className="flex flex-col gap-3 md:mx-10">
              <ul className="list-disc ml-5">
                <li>
                  FastAPI tutorial:{" "}
                  <a
                  className="text-blue-700"
                    href="https://bit.ly/497p6Ex"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FastAPI Tutorial
                  </a>
                </li>
                <li>
                  Docker tutorial:{" "}
                  <a
                  className="text-blue-700"
                    href="https://bit.ly/3uCNpeE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Docker Tutorial
                  </a>
                </li>
              </ul>
            </div>

            <Typography variant="h3">
              Week 23, 24: Machine Learning Projects with Deployment
            </Typography>
            <hr />
            <Typography variant="h5">
              Regression Project: Bangalore property price prediction
            </Typography>
            <ul className="list-disc md:mx-10">
              <li>Data cleaning</li>
              <li>Feature engineering</li>
              <li>Model building and hyperparameter tuning</li>
              <li>Write FastAPI server as a web backend</li>
              <li>Building website for price prediction</li>
              <li>Deployment to AWS</li>
              <li>
                YouTube playlist link:{" "}
                <a
                className="text-blue-700"
                  href="https://bit.ly/3ivycWr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube Playlist
                </a>
              </li>
            </ul>

            <Typography variant="h5">
              Classification Project: Sports celebrity image classification
            </Typography>
            <ul className="list-disc md:mx-10">
              <li>Data collection and data cleaning</li>
              <li>Feature engineering and model training</li>
              <li>Write FastAPI server as a web backend</li>
              <li>Building website and deployment</li>
              <li>
                YouTube playlist link:{" "}
                <a
                className="text-blue-700"
                  href="https://bit.ly/3ioaMSU"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube Playlist
                </a>
              </li>
            </ul>

            <Typography variant="h5">ATS Resume Preparation</Typography>
            <ul className="list-disc md:mx-10">
              <li>Resumes are evolving; focus on online presence</li>
              <li>
                Resume tips and templates:{" "}
                <a
                className="text-blue-700"
                  href="https://www.youtube.com/watch?v=buQSI8NLOMw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume Tips Video
                </a>
              </li>
              <li>ATS Resume checklist: Check here</li>
            </ul>

            <Typography variant="h5">Portfolio Building Resources</Typography>
            <ul className="list-disc md:mx-10">
              <li>
                GitHub: Upload projects and create a portfolio website using
                GitHub Pages
                <ul className="list-disc ml-5">
                  <li>
                    Sample portfolio website:{" "}
                    <a
                    className="text-blue-700"
                      href="http://rajag0pal.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sample Portfolio Website
                    </a>
                  </li>
                </ul>
              </li>
              <li>Linktree: Useful for adding multiple links on one page</li>
            </ul>

            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                Use FastAPI instead of Flask in the above two projects. FastAPI
                tutorial:{" "}
                <a
                className="text-blue-700"
                  href="https://youtu.be/Wr1JjhTt1Xg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FastAPI Tutorial
                </a>
              </li>
              <li className="m-1">
                For the Regression project, choose another Kaggle project of
                interest for regression.
              </li>
              <li className="m-1">
                For the Classification project, choose another Kaggle project of
                interest for classification and deploy the end-to-end solution
                to AWS or Azure.
              </li>
              <li className="m-1">
                Add links to your projects on your resume and LinkedIn profile.
                Tag Codebasics, Dhaval Patel, and Hemanand Vadivel with the
                hashtag #dsroadmap24 for increased visibility.
              </li>
            </ul>

            <Typography variant="h3">Week 25, 26, 27: Deep Learning</Typography>
            <hr />
            <Typography variant="h5">Topics</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                What is a neural network? Forward propagation, back propagation
              </li>
              <li className="m-1">Building multilayer perceptron</li>
              <li className="m-1">
                Special neural network architectures:
                <ul className="list-disc ml-5">
                  <li>Convolutional neural network (CNN)</li>
                  <li>Sequence models: RNN, LSTM</li>
                </ul>
              </li>
            </ul>

            <Typography variant="h5">Learning Resources</Typography>
            <div className="flex flex-col gap-3 md:mx-10">
              <Typography variant="h5">
                Deep Learning playlist (tensorflow)
              </Typography>
              <ul className="list-disc ml-5">
                <li>
                  <a
                  className="text-blue-700"
                    href="https://bit.ly/3vOZ3zV"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TensorFlow Playlist
                  </a>
                </li>
              </ul>

              <Typography variant="h5">
                Deep learning playlist (pytorch)
              </Typography>
              <ul className="list-disc ml-5">
                <li>
                  <a
                  className="text-blue-700"
                    href="https://bit.ly/3TzDbWp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PyTorch Playlist
                  </a>
                </li>
              </ul>

              <Typography variant="h5">
                End to end tomato disease classification project
              </Typography>
              <ul className="list-disc ml-5">
                <li>
                  <a
                  className="text-blue-700"
                    href="https://bit.ly/3QzkVJi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tomato Disease Classification Project
                  </a>
                </li>
              </ul>
            </div>

            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                Instead of potato plant images, use tomato plant images or
                another image classification dataset.
              </li>
              <li className="m-1">Deploy to Azure instead of GCP.</li>
              <li className="m-1">
                Create a presentation as if you are presenting to stakeholders
                and upload a video presentation on LinkedIn.
              </li>
            </ul>

            <Typography variant="h3">
              Week 28, 29, 30: NLP or Computer Vision & GenAI 📃
            </Typography>
            <hr />
            <Typography variant="h5">
              Natural Language Processing (NLP)
            </Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                Topics:
                <ul className="list-disc ml-5">
                  <li>Regex</li>
                  <li>
                    Text presentation: Count vectorizer, TF-IDF, BOW, Word2Vec,
                    Embeddings
                  </li>
                  <li>Text classification: Naïve Bayes</li>
                  <li>Fundamentals of Spacy & NLTP library</li>
                  <li>One end to end project</li>
                </ul>
              </li>
            </ul>

            <Typography variant="h5">Learning Resources</Typography>
            <div className="flex flex-col gap-3 md:mx-10">
              <Typography variant="h5">NLP YouTube playlist{" "}</Typography>
              <ul className="list-disc ml-5">
                <li>
                  <a
                  className="text-blue-700"
                    href="https://bit.ly/3XnjfEZ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NLP Playlist
                  </a>
                </li>
              </ul>
            </div>

            <Typography variant="h5">Computer Vision (CV)</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                Topics:
                <ul className="list-disc ml-5">
                  <li>
                    Basic image processing techniques: Filtering, Edge
                    Detection, Image Scaling, Rotation
                  </li>
                  <li>Library to use: OpenCV</li>
                </ul>
              </li>
            </ul>

            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:mx-10">
              <li className="m-1">
                Complete exercises in the NLP playlist:{" "}
                <a
                className="text-blue-700"
                  href="https://bit.ly/3XnjfEZ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NLP Playlist Exercises
                </a>
              </li>
            </ul>

            <section className="flex flex-col gap-5">
              <Typography variant="h3">
                Week 31, 32: LLM & Langchain 📃
              </Typography>
              <hr />
              <Typography variant="h5">Topics</Typography>
              <ul className="list-disc md:mx-10">
                <li className="m-1">
                  What is LLM, Vector database, Embeddings?
                </li>
                <li className="m-1">RAG (Retrieval Augmented Generation)</li>
                <li className="m-1">Langchain framework</li>
              </ul>

              <Typography variant="h5">Learning Resources</Typography>
              <div className="flex flex-col gap-3 md:mx-10">
                <Typography variant="h5">Langchain, LLM playlist</Typography>
                <ul className="list-disc ml-5">
                  <li>
                    <a
                    className="text-blue-700"
                      href="https://bit.ly/3RYpxuw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Langchain, LLM Playlist
                    </a>
                  </li>
                </ul>
              </div>

              <Typography variant="h3">Week 33 onwards…</Typography>
              <hr />
              <Typography variant="h5">More projects</Typography>
              <ul className="list-disc md:mx-10">
                <li className="m-1">
                  Online brand building through LinkedIn, Kaggle, Discord,
                  Opensource contribution
                </li>
                <li className="m-1">Job application and Success</li>
              </ul>

              <Typography variant="h5">Tips for effective learning</Typography>
              <ul className="list-disc md:mx-10">
                <li className="m-1">
                  Spend less time consuming information, more time in:
                </li>
                <ul className="list-disc ml-5">
                  <li>Digesting</li>
                  <li>Implementing</li>
                  <li>Sharing</li>
                <li >Group learning</li>
                </ul>
              </ul>
            </section>
          </section>
          </div>
        {/* </div> */}
      </Container>
    </>
  );
}
