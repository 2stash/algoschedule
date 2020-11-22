import React from "react";

const About = () => {
  return (
    <div className='about-container'>
      <p>
        Hi my name is Dan. I am really interested in any tool for schedules or
        project management so I wanted to create a simple schedule tool for
        studying algorithms, specifically for AlgoExpert.io.
      </p>

      <br />
      <p>
        I feel like there is potential for a tool like this to be used, or at
        the very least that the algo websites add some sort of study plan to
        their offerings. At least for me, places like leetcode are overwhelming;
        "here is a list of thousands of problems, do them in any order, good
        luck".
      </p>
      <br />

      <p>
        I have studied foreign languages a lot, and in foreign language study
        you are always trying to study N + 1. Meaning you want to be doing
        something a tiny bit out of your comfort zone. This is where algorithims
        training needs to get to.
      </p>
      <div style={styles}>
        <span>
          <a
            href='https://github.com/2stash/algoschedule'
            target='_blank'
            rel='noreferrer'
            className='btn link btn-success'
          >
            Github Repo
          </a>
        </span>
        <span>
          <a
            href='https://www.linkedin.com/in/daniel-westlund-a52a2b73/'
            target='_blank'
            rel='noreferrer'
            className='btn link btn-dark'
          >
            Linkedin
          </a>
        </span>
      </div>
    </div>
  );
};

const styles ={
  display: "flex",
  justifyContent: "center",
  margin: "10px",
}

export default About;
