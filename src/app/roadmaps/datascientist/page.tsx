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
            <Typography variant="h2">
              Data Science Roadmap for Beginners
            </Typography>
            <p>
              Following is the roadmap to learn Data Science skills for a total
              beginner (no coding or computer science background needed). It
              includes FREE learning resources for technical skills (or tool
              skills) and soft (or core) skills 🚀
            </p>
            <p>
              Total Duration: 6 Months
              <br />3 hours in Tool Skills + 1 hour in Core Skills = 4 hours
              study Every Day
            </p>
            <Image
              src="/images/dstool.png"
              width={1000}
              height={700}
              alt="tools"
              className="w-full"
            />
            <Typography variant="h3">Week 1 and 2: Python</Typography>
            <hr />
            <Typography variant="h5">Topics</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">Variables, Numbers, Strings</li>
              <li className="m-1">Lists, Dictionaries, Sets, Tuples</li>
              <li className="m-1">If condition, for loop</li>
              <li className="m-1">Functions, Lambda Functions</li>
              <li className="m-1">Modules (pip install)</li>
              <li className="m-1">Read, Write files</li>
              <li className="m-1">Exception handling</li>
              <li className="m-1">Classes, Objects</li>
            </ul>

            <Typography variant="h5">Learning Resources</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">Track A (Free)</li>
              <ul className="list-disc md:ml-10 ml-5">
                <li className="m-1">
                  Free Python Tutorials on YouTube (first 16 videos):{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://bit.ly/3X6CCC7"
                  >
                    https://bit.ly/3X6CCC7
                  </Link>
                </li>
                <li className="m-1">
                  Codebasics python HINDI tutorials:{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://bit.ly/3vmXrgw"
                  >
                    https://bit.ly/3vmXrgw
                  </Link>
                </li>
              </ul>
              <li className="m-1">Track B (Affordable Fees)</li>
              <ul className="list-disc md:ml-10 ml-5">
                <li className="m-1">
                  Python course:{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://codebasics.io/courses/python-for-beginner-and-intermediate-learners"
                  >
                    https://codebasics.io/courses/python-for-beginner-and-intermediate-learners
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
                  Have a clear profile picture and banner image.
                </li>
                <li className="m-1">Add tags such as: Open to work etc.</li>
                <li className="m-1">
                  Use this LinkedIn Checklist to create a profile:{" "}
                  <Link className="text-blue-700" target="_blank" href="#">
                    Click here
                  </Link>
                </li>
              </ul>
            </ul>

            <Typography variant="h5">Motivation</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Physics to Data Scientist Transition:{" "}
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://bit.ly/47cA8GU"
                >
                  https://bit.ly/47cA8GU
                </Link>
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
            </ul>
            <Typography variant="h3">
              Week 3: Numpy, Pandas, Data Visualization
            </Typography>
            <hr />
            <Typography variant="h5">Tech Skills</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">Numpy</li>
              <ul className="list-disc md:ml-10 ml-5">
                <li className="m-1">
                  Numpy YouTube playlist:{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://bit.ly/3GTppa8"
                  >
                    https://bit.ly/3GTppa8
                  </Link>
                </li>
              </ul>
              <li className="m-1">Pandas, Matplotlib, Seaborn</li>
              <ul className="list-disc md:ml-10 ml-5">
                <li className="m-1">
                  Go through chapter 3 in this course (entire chapter is free):{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://codebasics.io/courses/math-and-statistics-for-data-science"
                  >
                    https://codebasics.io/courses/math-and-statistics-for-data-science
                  </Link>
                </li>
              </ul>
            </ul>

            <Typography variant="h5">Core/Soft Skills</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">LinkedIn</li>
              <ul className="list-disc md:ml-10 ml-5">
                <li className="m-1">
                  Start following prominent data science influencers.
                </li>
                <li className="m-1">
                  Daliana Liu:{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://www.linkedin.com/in/dalianaliu/"
                  >
                    https://www.linkedin.com/in/dalianaliu/
                  </Link>
                </li>
                <li className="m-1">
                  Nitin Aggarwal:{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://www.linkedin.com/in/ntnaggarwal/"
                  >
                    https://www.linkedin.com/in/ntnaggarwal/
                  </Link>
                </li>
                <li className="m-1">
                  Steve Nouri:{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://www.linkedin.com/in/stevenouri/"
                  >
                    https://www.linkedin.com/in/stevenouri/
                  </Link>
                </li>
                <li className="m-1">
                  Dhaval Patel:{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://www.linkedin.com/in/dhavalsays/"
                  >
                    https://www.linkedin.com/in/dhavalsays/
                  </Link>
                </li>
                <li className="m-1">Increase engagement.</li>
                <li className="m-1">
                  Start commenting meaningfully on data science and
                  career-related posts.
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
              <ul className="list-disc md:ml-10 ml-5">
                <li className="m-1">
                  Learn business concepts from ThinkSchool and other YT Case
                  Studies.
                </li>
                <li className="m-1">
                  Example: How Amul beat competition:{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://youtu.be/nnwqtZiYMxQ"
                  >
                    https://youtu.be/nnwqtZiYMxQ
                  </Link>
                </li>
              </ul>
              <li className="m-1">Discord</li>
              <ul className="list-disc md:ml-10 ml-5">
                <li className="m-1">
                  Start asking questions and get help from the community. This
                  post shows how to ask questions the right way:{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://bit.ly/3I70EbI"
                  >
                    https://bit.ly/3I70EbI
                  </Link>
                </li>
                <li className="m-1">
                  Join codebasics discord server:{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://discord.gg/r42Kbuk"
                  >
                    https://discord.gg/r42Kbuk
                  </Link>
                </li>
              </ul>
            </ul>

            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Write meaningful comments on at least 10 data science related
                LinkedIn posts
              </li>
              <li className="m-1">
                Note down your key learnings from 3 case studies on ThinkSchool
                and share them with your friend.
              </li>
            </ul>
            <Typography variant="h3">
              Week 4, 5, 6, 7: Statistics and Math for Data Science
            </Typography>
            <hr />
            <Typography variant="h5">
              Math and Statistics for Data Science
            </Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Basics: Descriptive vs inferential statistics, continuous vs
                discrete data, nominal vs ordinal data
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
                2 error, Z test, t test, ANOVA
              </li>
            </ul>

            <Typography variant="h5">Learning Resources</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">Track A (Free)</li>
              <ul className="list-disc md:ml-10 ml-5">
                <li className="m-1">
                  Learn the above topics from this excellent Khan academy course
                  on statistics and probability.
                </li>
                <li className="m-1">
                  Course link:{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://www.khanacademy.org/math/statistics-probability"
                  >
                    https://www.khanacademy.org/math/statistics-probability
                  </Link>
                </li>
                <li className="m-1">
                  While doing Khan academy course, when you have doubts, use
                  StatQuest YouTube channel:{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://www.youtube.com/@statquest"
                  >
                    https://www.youtube.com/@statquest
                  </Link>
                </li>
                <li className="m-1">
                  Use this free YouTube playlist:{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://bit.ly/3QrSXis"
                  >
                    https://bit.ly/3QrSXis
                  </Link>
                </li>
              </ul>
              <li className="m-1">Track B (Affordable Fees)</li>
              <ul className="list-disc md:ml-10 ml-5">
                <li className="m-1">
                  Khan academy course doesn’t have python coding and it is
                  generic. To learn using Python and specifics of applying
                  statistics to data science check this course:{" "}
                  <Link
                    className="text-blue-700"
                    target="_blank"
                    href="https://codebasics.io/courses/math-statistics-for-data-professionals"
                  >
                    https://codebasics.io/courses/math-statistics-for-data-professionals
                  </Link>
                </li>
              </ul>
            </ul>

            <Typography variant="h5">Motivation</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Petroleum engineer to data scientist:{" "}
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://bit.ly/3REsqiL"
                >
                  https://bit.ly/3REsqiL
                </Link>
              </li>
            </ul>

            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Finish all exercises in this playlist:{" "}
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://bit.ly/3QrSXis"
                >
                  https://bit.ly/3QrSXis
                </Link>
              </li>
              <li className="m-1">
                Finish all exercises in Khan academy course.
              </li>
            </ul>
            <Typography variant="h3">
              Week 8: Exploratory Data Analysis (EDA)
            </Typography>
            <hr />
            <Typography variant="h5">
              Exploratory Data Analysis (EDA)
            </Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Use the following link to search for exploratory data analysis
                notebooks:{" "}
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://www.kaggle.com/code?searchQuery=exploratory+data+analysis"
                >
                  https://www.kaggle.com/code?searchQuery=exploratory+data+analysis
                </Link>
              </li>
              <li className="m-1">Practice EDA using at least 3 datasets.</li>
              <li className="m-1">
                Example dataset:{" "}
                <Link
                  className="text-blue-700"
                  target="_blank"
                  href="https://www.kaggle.com/datasets/rishabhkarn/ipl-auction-2023/data"
                >
                  https://www.kaggle.com/datasets/rishabhkarn/ipl-auction-2023/data
                </Link>
              </li>
            </ul>

            <Typography variant="h5">Assignment</Typography>
            <ul className="list-disc md:ml-10 ml-5">
              <li className="m-1">
                Perform EDA (Exploratory data analysis) on at least 2 additional
                datasets on Kaggle.
              </li>
            </ul>
            <Typography variant="h3">Week 9, 10: SQL</Typography>
<hr />
<Typography variant="h5">Topics</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">Basics of relational databases.</li>
  <li className="m-1">Basic Queries: SELECT, WHERE LIKE, DISTINCT, BETWEEN, GROUP BY, ORDER BY</li>
  <li className="m-1">Advanced Queries: CTE, Subqueries, Window Functions</li>
  <li className="m-1">Joins: Left, Right, Inner, Full</li>
  <li className="m-1">
    No need to learn database creation, indexes, triggers etc. as those things are rarely used by data scientists.
  </li>
</ul>

<Typography variant="h5">Learning Resources</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">
    Track A
    <ul className="list-disc md:ml-10 ml-5">
      <li className="m-1">Khan Academy: <Link className="text-blue-700" target="_blank" href="https://bit.ly/3WFku20">https://bit.ly/3WFku20</Link></li>
      <li className="m-1">W3Schools SQL Tutorial: <Link className="text-blue-700" target="_blank" href="https://www.w3schools.com/sql/">https://www.w3schools.com/sql/</Link></li>
      <li className="m-1">SQLBolt: <Link className="text-blue-700" target="_blank" href="https://sqlbolt.com/">https://sqlbolt.com/</Link></li>
    </ul>
  </li>
  <li className="m-1">
    Track B
    <ul className="list-disc md:ml-10 ml-5">
      <li className="m-1">SQL course for data professionals: <Link className="text-blue-700" target="_blank" href="https://codebasics.io/courses/sql-beginner-to-advanced-for-data-professionals">https://codebasics.io/courses/sql-beginner-to-advanced-for-data-professionals</Link></li>
    </ul>
  </li>
</ul>

<Typography variant="h5">Core/Soft Skills</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">Presentation skills</li>
  <ul className="list-disc md:ml-10 ml-5">
    <li className="m-1">Death by PowerPoint: <Link className="text-blue-700" target="_blank" href="https://youtu.be/Iwpi1Lm6dFo">https://youtu.be/Iwpi1Lm6dFo</Link></li>
  </ul>
</ul>

<Typography variant="h5">Assignment</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">
    Participate in SQL resume project challenge on <Link className="text-blue-700" target="_blank" href="https://codebasics.io/">https://codebasics.io/</Link>
    <ul className="list-disc md:ml-10 ml-5">
      <li className="m-1">Link: <Link className="text-blue-700" target="_blank" href="https://codebasics.io/challenge/codebasics-resume-project-challenge/7">https://codebasics.io/challenge/codebasics-resume-project-challenge/7</Link></li>
      <li className="m-1">These challenges help you improve technical skills, soft skills and business understanding.</li>
    </ul>
  </li>
  <li className="m-1">Make a LinkedIn post with a submission of your resume project challenge</li>
  <ul className="list-disc md:ml-10 ml-5">
    <li className="m-1">Sample post: <Link className="text-blue-700" target="_blank" href="https://bit.ly/48Bg5mB">https://bit.ly/48Bg5mB</Link></li>
    <li className="m-1">
      Codebasics is promoting winning entries to employers. This way you can get interview calls. We do this in two ways:
      <ul className="list-disc md:ml-10 ml-5">
        <li className="m-1">We have a database of employers hiring for data analyst positions. We send first 10 or 20 profiles based on their performance.</li>
        <li className="m-1">LinkedIn post by Dhaval (who has more than 100k followers and some of them are HR managers, data analytics senior managers): <Link className="text-blue-700" target="_blank" href="https://bit.ly/3jnni5c">https://bit.ly/3jnni5c</Link></li>
      </ul>
    </li>
  </ul>
</ul>
<Typography variant="h3">Week 11, 12, 13, 14, 15: Machine Learning</Typography>
<hr />
<Typography variant="h5">Machine Learning: Preprocessing</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">Handling NA values, outlier treatment, data normalization</li>
  <li className="m-1">One hot encoding, label encoding</li>
  <li className="m-1">Feature engineering</li>
  <li className="m-1">Train test split</li>
  <li className="m-1">Cross validation</li>
</ul>

<Typography variant="h5">Machine Learning: Model Building</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">Types of ML: Supervised, Unsupervised</li>
  <li className="m-1">Supervised: Regression vs Classification</li>
  <li className="m-1">Linear models
    <ul className="list-disc md:ml-10 ml-5">
      <li className="m-1">Linear regression, logistic regression</li>
      <li className="m-1">Gradient descent</li>
    </ul>
  </li>
  <li className="m-1">Nonlinear models (tree-based models)
    <ul className="list-disc md:ml-10 ml-5">
      <li className="m-1">Decision tree</li>
      <li className="m-1">Random forest</li>
      <li className="m-1">XGBoost</li>
    </ul>
  </li>
  <li className="m-1">Model evaluation
    <ul className="list-disc md:ml-10 ml-5">
      <li className="m-1">Regression: Mean Squared Error, Mean Absolute Error, MAPE</li>
      <li className="m-1">Classification: Accuracy, Precision-Recall, F1 Score, ROC Curve, Confusion matrix</li>
    </ul>
  </li>
  <li className="m-1">Hyperparameter tuning: GridSearchCV, RandomSearchCV</li>
  <li className="m-1">Unsupervised: K means, Hierarchical clustering, Dimensionality reduction (PCA)</li>
</ul>

<Typography variant="h5">Learning Resources</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">YouTube playlist (more than 2 million views): <Link className="text-blue-700" target="_blank" href="https://bit.ly/3io5qqX">https://bit.ly/3io5qqX</Link></li>
  <li className="m-1">Feature engineering playlist: <Link className="text-blue-700" target="_blank" href="https://bit.ly/3IFa3Yf">https://bit.ly/3IFa3Yf</Link></li>
</ul>

<Typography variant="h5">Core/Soft Skills</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">Project Management</li>
  <ul className="list-disc md:ml-10 ml-5">
    <li className="m-1">Scrum: <Link className="text-blue-700" target="_blank" href="https://scrumtrainingseries.com/">https://scrumtrainingseries.com/</Link></li>
    <li className="m-1">Kanban: <Link className="text-blue-700" target="_blank" href="https://youtu.be/jf0tlbt9lx0">https://youtu.be/jf0tlbt9lx0</Link></li>
    <li className="m-1">Tools: JIRA, Notion</li>
  </ul>
</ul>

<Typography variant="h5">Motivation</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">How Kaggle helped this person become ML engineer: <Link className="text-blue-700" target="_blank" href="https://bit.ly/3RFVruy">https://bit.ly/3RFVruy</Link></li>
</ul>

<Typography variant="h5">Assignment</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">Complete all exercises in ML playlist: <Link className="text-blue-700" target="_blank" href="https://bit.ly/3io5qqX">https://bit.ly/3io5qqX</Link></li>
  <li className="m-1">Work on 2 Kaggle ML notebooks</li>
  <li className="m-1">Write 2 LinkedIn posts on whatever you have learnt in ML</li>
  <li className="m-1">Discord: Help people with at least 10 answers</li>
</ul>
<Typography variant="h3">Week 16, 17, 18: Machine Learning Projects with Deployment</Typography>
<hr />
<Typography variant="h5">Regression Project: Bangalore Property Price Prediction</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">YouTube playlist link: <Link className="text-blue-700" target="_blank" href="https://bit.ly/3ivycWr">https://bit.ly/3ivycWr</Link></li>
  <li className="m-1">Project covers following:
    <ul className="list-disc md:ml-10 ml-5">
      <li className="m-1">Data cleaning</li>
      <li className="m-1">Feature engineering</li>
      <li className="m-1">Model building and hyperparameter tuning</li>
      <li className="m-1">Write FastAPI server as a web backend</li>
      <li className="m-1">Building website for price prediction</li>
      <li className="m-1">Deployment to AWS</li>
    </ul>
  </li>
</ul>

<Typography variant="h5">Classification Project: Sports Celebrity Image Classification</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">YouTube playlist link: <Link className="text-blue-700" target="_blank" href="https://bit.ly/3ioaMSU">https://bit.ly/3ioaMSU</Link></li>
  <li className="m-1">Project covers following:
    <ul className="list-disc md:ml-10 ml-5">
      <li className="m-1">Data collection and data cleaning</li>
      <li className="m-1">Feature engineering and model training</li>
      <li className="m-1">FastAPI server as a web backend</li>
      <li className="m-1">Building website and deployment</li>
    </ul>
  </li>
</ul>

<Typography variant="h5">ATS Resume Preparation</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">Resumes are dying but not dead yet. Focus more on online presence.</li>
  <li className="m-1">Resume tips video along with templates: <Link className="text-blue-700" target="_blank" href="https://www.youtube.com/watch?v=buQSI8NLOMw">https://www.youtube.com/watch?v=buQSI8NLOMw</Link></li>
  <li className="m-1">Checklist for ATS Resume: Check <Link className="text-blue-700" target="_blank" href="#">here</Link></li>
</ul>

<Typography variant="h5">Portfolio Building Resources</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">GitHub
    <ul className="list-disc md:ml-10 ml-5">
      <li className="m-1">Upload your projects with code on GitHub and use GitHub Pages to create a portfolio website</li>
      <li className="m-1">Sample portfolio website: <Link className="text-blue-700" target="_blank" href="http://rajag0pal.github.io/">http://rajag0pal.github.io/</Link></li>
    </ul>
  </li>
  <li className="m-1">Linktree: Helpful to add multiple links in one page.</li>
</ul>

<Typography variant="h5">Assignment</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">In the above two projects make following changes:
    <ul className="list-disc md:ml-10 ml-5">
      <li className="m-1">Use FastAPI instead of Flask. FastAPI tutorial: <Link className="text-blue-700" target="_blank" href="https://youtu.be/Wr1JjhTt1Xg">https://youtu.be/Wr1JjhTt1Xg</Link></li>
      <li className="m-1">Regression project: Instead of property prediction, take any other project of your interest from Kaggle for regression and build an end-to-end solution along with deployment to AWS or Azure</li>
      <li className="m-1">Classification project: Instead of sports celebrity classification, take any other project of your interest from Kaggle for classification and build an end-to-end solution along with deployment to AWS or Azure</li>
      <li className="m-1">Add a link of your projects in your resume and LinkedIn. (Tag Codebasics, Dhaval Patel and Hemanand Vadivel with the hashtag #dsroadmap24 so we can engage to increase your visibility)</li>
    </ul>
  </li>
</ul>
<Typography variant="h3">Week 19, 20, 21: Deep Learning</Typography>
<hr />

<Typography variant="h5">Topics</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">What is a neural network? Forward propagation, back propagation</li>
  <li className="m-1">Building multilayer perceptron</li>
  <li className="m-1">Special neural network architectures
    <ul className="list-disc md:ml-10 ml-5">
      <li className="m-1">Convolutional neural network (CNN)</li>
      <li className="m-1">Sequence models: RNN, LSTM</li>
    </ul>
  </li>
</ul>

<Typography variant="h5">Learning Resources</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">Deep Learning playlist (TensorFlow): <Link className="text-blue-700" target="_blank" href="https://bit.ly/3vOZ3zV">https://bit.ly/3vOZ3zV</Link></li>
  <li className="m-1">Deep Learning playlist (PyTorch): <Link className="text-blue-700" target="_blank" href="https://bit.ly/3TzDbWp">https://bit.ly/3TzDbWp</Link></li>
  <li className="m-1">End-to-end potato disease classification project: <Link className="text-blue-700" target="_blank" href="https://bit.ly/3QzkVJi">https://bit.ly/3QzkVJi</Link></li>
</ul>

<Typography variant="h5">Assignment</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">Instead of potato plant images, use tomato plant images or some other image classification dataset.</li>
  <li className="m-1">Deploy to Azure instead of GCP.</li>
  <li className="m-1">Create a presentation as if you are presenting to stakeholders and upload a video presentation on LinkedIn.</li>
</ul>
<Typography variant="h3">Week 22, 23, 24: NLP or Computer Vision 📃</Typography>
<hr />

<Typography variant="h5">Natural Language Processing (NLP)</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">Topics
    <ul className="list-disc md:ml-10 ml-5">
      <li className="m-1">Regex</li>
      <li className="m-1">Text presentation: Count vectorizer, TF-IDF, BOW, Word2Vec, Embeddings</li>
      <li className="m-1">Text classification: Naïve Bayes</li>
      <li className="m-1">Fundamentals of Spacy & NLTK library</li>
      <li className="m-1">One end-to-end project</li>
    </ul>
  </li>
  <li className="m-1">Learning Resources
    <ul className="list-disc md:ml-10 ml-5">
      <li className="m-1">NLP YouTube playlist: <Link className="text-blue-700" target="_blank" href="https://bit.ly/3XnjfEZ">https://bit.ly/3XnjfEZ</Link></li>
    </ul>
  </li>
</ul>

<Typography variant="h5">Assignment</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">NLP Track: Complete exercises in this playlist: <Link className="text-blue-700" target="_blank" href="https://bit.ly/3XnjfEZ">https://bit.ly/3XnjfEZ</Link></li>
</ul>
<Typography variant="h3">Week 25 onwards…</Typography>
<hr />

<Typography variant="h5">More projects</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">Continue working on diverse projects to strengthen skills and build your portfolio.</li>
</ul>

<Typography variant="h5">Online brand building through LinkedIn, Kaggle, Discord, Open-source contribution</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">Maintain and expand your online presence through regular engagement, posting, and networking on LinkedIn.</li>
  <li className="m-1">Participate actively in Kaggle competitions and discussions to showcase your skills.</li>
  <li className="m-1">Contribute to open-source projects to collaborate with others and gain practical experience.</li>
</ul>

<Typography variant="h5">Job application and Success Tips for effective learning</Typography>
<ul className="list-disc md:ml-10 ml-5">
  <li className="m-1">Tips for effective learning
    <ul className="list-disc md:ml-10 ml-5">
      <li className="m-1">Spend less time consuming information, more time digesting, implementing, and sharing.</li>
    </ul>
  </li>
  <li className="m-1">Group learning
    <ul className="list-disc md:ml-10 ml-5">
      <li className="m-1">Utilize the partner-and-group-finder channel on the Codebasics Discord server for group study and accountability: <Link className="text-blue-700" target="_blank" href="https://discord.gg/r42Kbuk">https://discord.gg/r42Kbuk</Link></li>
    </ul>
  </li>
</ul>

          </section>
        </div>
      </Container>
    </>
  );
}
