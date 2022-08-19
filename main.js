import "./style.css";
import { useTheme } from "./utils";

document.querySelector("#app").innerHTML = `
<div id="container--main">
<div class="toggle--theme--btn" id="toggle">🌞</div>
<section id="wrapper--hero" class="section--page">

    <img id="profile-pic" src="./assets/ub-pic.jpeg">

    <div>
        <h1 id="user-name">Utkarsh Bharti</h1>
        <p id="bio">Software developer , worked with high growth startups like  <a href="https://upstox.com/" target="_blank">Upstox</a>,  <a href="https://leapscholar.com/" target="_blank">Leap Finance/Leap Scholar</a>, <a href="https://edulastic.com/" target="_blank">Snapwiz | Edulastic</a> ,<a href="https://www.mindtree.com/" target="_blank">Mindtree Ltd</a>.
        
        </p>
        <p id="email">👉 utkarsh.bharti30@gmail.com</p>
        <p id="email">👉 +91-8904274073</p>
    </div>  
</section>

<section class="section--page">

    <div id="socials--list">
        <a href="https://www.linkedin.com/in/utkarshbharti/" target="_blank">Linkedin</a>
        <a href="https://github.com/utk0730" target="_blank">Github</a>
        <a href="./assets/ub-resume.pdf" target="_blank">Download Resume</a>
    </div>
</section>

<h2>Tech stack</h2>

<div id="wrapper--techstack__items">
    <div class="card--techstack"><span>Javascript, Typescript, Node </span></div>
    <div class="card--techstack"><span>React, Next , Vue, Redux, Webpack </span></div>
    <div class="card--techstack"><span>Tailwind, Material UI, SASS </span></div>
    <div class="card--techstack"><span>Express, MongoDb, SQL</span></div>
    <div class="card--techstack"><span>Git, Jenkins, Bitbucket</span></div>
</div>
</section>

<section class="section--page">
    <h2>Skills & Qualifications</h2>
    <ul id="qualifications--list">
        <li>✔️ 5 years of experience with frontend development.</li>
        <li>✔️ Experience with api design and backend development.</li>
        <li>✔️ Experience leading/mentoring small teams. </li>
        <li>✔️ 3 years of experience with working in growth engineering team.</li>
    </ul>
</section>

<section class="section--page">


<section id="work-history-wrapper" class="section--page">
    <h2>Work History</h2>

    <div class="line-break"></div>
    <div class="card--work-history">
        <strong>🚧 SENIOR SOFTWARE ENGINEER - SDE2 | UPSTOX</strong>
        <p>10/2021 - Present</p>
        <p>Leading the User Onboarding Growth UI team.</p>
        <ul>
            <li>Migrated the UI from Angular 2 to React 17</li>
            <li>Achieved 2x growth in User Onboarding post new release from the very first month</li>
            <li>Improved Edit/Rejection flows in Onboarding journey, thus reducing the applicant verification process time from a week to 2-3 days </li>
        </ul>
    </div>

    <div class="line-break"></div>

    <div class="card--work-history">
        <strong>🚧 SENIOR SOFTWARE ENGINEER | LEAP FINANCE | LEAP SCHOLAR</strong>
        <p>02/2020 - 09/2021</p>
        <p>Founding member of engineering team, launched 2 products within a year :  Leap Finance, Leap Scholar</p>
        <ul>
            <li>Lead the UI team and build the foundations for products</li>
            <li>Worked closely with PMs in small teams and helped in initial descisions around project</li>
            <li>Validated and improved product experience with multiple iterations at 3x speed</li>
            <li>Contributed in building tech team and culture</li>
            <li>Built gamification features for user enagagement, and integrated analytics tools - GA, GTM, Hotjar etc</li>
           
        </ul>
    </div>

    <div class="line-break"></div>

    <div class="card--work-history">
        <strong>🚧 FREELANCE SOFTWARE DEVELOPER| SNAPWIZ | EDULASTIC</strong>
        <p>05/2019 - 11/2019</p>
        <p>Worked in Edulastic project (an online education assessment tool) as a freelancer in a contract of 7 months </p>
        <ul>
            <li>Build and extended pricing based features</li>
            <li>Worked in Internal applications to improve UI experience</li>
            <li>Supported in house engineering team with production bugs fixes </li>
        </ul>
    </div>

    <div class="line-break"></div>

    <div class="card--work-history">
        <strong>🚧 SENIOR SOFTWARE ENGINEER | MINDTREE</strong>
        <p>01/2017 - 04/2019</p>
        <p>Started my career with Mindtree Ltd as sofware engineer.</p>
        <ul>
            <li>Worked with largest FMCG brand in India. Build a process tracking platform using SAP fiori to improve their in house supply chain process by 2x</li>
            <li>Build and validated multiple POCS using web technologies - React, Node </li>
        </ul>
    </div>
</section>

<section class="section--page">
    <h2>Education</h2>

    <div class="card--project">
       <p>BE (2012-2016) </p>
       <p>Computer Science and Engineering , NMAMIT, VTU</p>
    </div>

    <div class="card--project">
    <p>XII (2012) CBSE  </p>
   
    </div>

    <div class="card--project">
    <p>X (2010) CBSE  </p>
   
    </div>

</section>

</div>
`;

useTheme(document.getElementById("toggle"));
