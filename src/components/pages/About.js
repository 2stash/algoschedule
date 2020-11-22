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
        Check out the github repo below, and feel free to reach out with any comments or suggestions.
      </p>
      <br />

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
