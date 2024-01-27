// section.js
import React from 'react';
import './section.css';

const Section = () => {

  const downloadResume = () => {
   
    const resumeUrl = 'https://drive.google.com/file/d/1IyxN4vkDvAkw8yeSJ4bLrGhslGgt7eYx/view?usp=drive_link'; 
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <section>
        <div className='sec1'>ABOUT ME</div>
        <div className='sec1' style={{textAlign:'center'}}> Good Knowledge in Core Java, HTML, CSS, JavaScript, React, and more. Experienced in real-world projects, including E-Commerce website ,Movie website . Currently expanding skills through a Full Stack Java Development course at QSpiders. Eager to contribute innovative solutions to a dynamic software development team.</div>
        <div className='sec1'>
          <button className="download-button"  onClick={downloadResume}>
            Download Resume
          </button>
        </div>
      </section>
    </div>
  );
}

export default Section;
