//Change Browser Tab Title:
// Go to public folder -> index.html -> title span of head sections

export const userData = {
  firstName: "Hemesh",
  lastName: "Patel",
  location: "Austin, TX",
};

export const roles = ["Software Engineer", "Front-end Engineer"];

export const technologies = [
  "Javascript",
  "ReactJS",
    "TypeScript",
  "Node",
  "HTML",
  "CSS",
  "Ruby",
];

export const brandStatement =
  "I'm a software engineer passionate about building meaningful digital experiences.";

export const about = [
  "Passionate about how things work and how technology can help solve problems. My career has led me through roles in finance, operations, and most recently software engineering. I love getting to write code and work on projects as much as I can, leveling up my JavaScript and ReactJS skills.",
  "Currently, I work as a Front-end Engineer at Hotel Engine, the  world’s largest Lodging Performance Network, established to create a richer, more rewarding business travel experience by connecting a global network of businesses and lodging partners.",
  "When I’m not coding, you can find me reading articles from my favorite blogs (Engadget, Lifehacker) and watching car reviews on YouTube. Currently reading The Expanse series.",
];

//Order from most recent to oldest
export const workExperience = [
  {
    company: "Hotel Engine",
    companyUrl: "https://www.hotelengine.com/",
    location: "Remote",
    position: "Front-end Engineer",
    startDate: "12/1/2021",
    endDate: "Present",
    textDate: "December 2021 - Present",
    summary:
        "Tech Stack: React, Styled Components, AntD, and TypeScript",
    bullets: [
        "Converting SaSS components to Styled Components using AntD UI library",
        "Building features out designed in Figma",
        "Reviewing PRs for React, React Native, and Express apps",
    ],
  },
  {
    company: "Unhedged",
    companyUrl: "https://www.unhedged.com/",
    location: "Remote",
    position: "Full Stack Developer",
    startDate: "12/1/2020",
    endDate: "12/1/2021",
    textDate: "December 2020 - December 2021",
    summary:
      "Built React class and functional components (Ex: widgets, admin menus, forms) with Redux and Hooks , improving performance, functionality, and navigation across site",
    bullets: [
      "Collaborated with users, engineers, product management, and designers to translate business needs and build out new features",
      "Increased automated unit test coverage across core components on the platform from 5% to 25% by writing Cypress JS functional tests",
      "Worked with Node.js, Mongoose, and MongoDB to integrate and test for optimal data flow from dynamic front-end components",
      "Refactored dashboards and new user tutorial overlay to improve code readability and efficiency resulting in reduced front-end hours for upcoming roadmapped features",
    ],
  },
  {
    company: "Plivo",
    companyUrl: "https://www.plivo.com/",
    location: "Remote",
    position: "Technical Support Engineer",
    startDate: "3/1/2020",
    endDate: "1/01/2021",
    textDate: "March - January 2021",
    summary:
      "Maintained end to end knowledge of Plivo’s Voice API, Messaging API, SIP Trunking (ZenTrunk), Plivo High Level Objects (PHLO), Client SDKs (Browser, iOS, Android), and Server SDKs (PHP, Node, Ruby, Java, .NET, Python, Go)",
    bullets: [
      "Utilized Postman, Mocky.io, and Webhook.site for testing API requests and XML execution",
      "Led discussions with Engineering team to form solutions for production defects by reviewing logs, debugging client integrations, and providing in-depth technical analysis of issues using JIRA and Confluence",
      "Monitored and debugged issues through Kibana logs and ran SQL queries in Postgres for SMS and Voice statistics",
    ],
  },
  {
    company: "Murphy Adams Restaurant Group",
    companyUrl: "https://www.mamafus.com/",
    location: "Austin, TX",
    position: "Director of Logistics",
    startDate: "6/1/2018",
    endDate: "12/31/2018",
    textDate: "June - December 2018",
    summary:
      "Designed and built zone based delivery model to increase utilization of fleet vehicles and reduce costs across all brands",
    bullets: [
      "Managed API integration of new delivery management platform leading to greater efficiency, increased utilization of fleet vehicles, and automatic overflow dispatch through 3rd parties like Favor or Doordash",
      "Managed end-to-end delivery operations, including drivers, vehicles, logistics, and maintenance, for a fleet of 50+ vehicles across 7 Texas cities and all current restaurant brands (Mama Fu's, Austin's Pizza)",
      "Created and led 8-person Brand Support Team to manage customer support and escalations across multiple platforms like Facebook, Yelp, Google Reviews, GrubHub, while maintaining 24 hour response time SLA",
      "Led adoption of new outsourced model to scale order-taking and catering call center operations including SLA agreement, KPI alignment, and on boarding at vendor site in Mexico",
      "Managed all company contracts, pricing, and SLAs across all third party delivery apps such as Uber Eats, Grubhub, Doordash, Favor, Postmates, etc",
    ],
  },
  {
    company: "Instacart",
    companyUrl: "https://www.instacart.com/",
    location: "Austin, TX",
    position: "Area Manager",
    startDate: "7/1/2017",
    endDate: "6/31/2018",
    textDate: "July 2017 - June 2018",
    summary:
      "Quickly moved from managing 1 location and 30 In-store shoppers to 6 locations and 200+ In-store shoppers within 2 months. Responsibilities also included remote markets like Oklahoma and New Mexico",
    bullets: [
      "Created custom scalable training modules to improve Shift lead and shopper performance and enable growth",
      "Led new market launches by establishing and maintaining retail partner relationships to drive efficiency in operation",
      "Developed and tracked KPIs using SQL and Tableau while setting standards for service quality and efficiency",
      "Drove market research to understand optimal wage required to attract and retain talent in a gig economy while remaining profitable",
      "Created scalable hiring operations for recruiting, interviewing, on-boarding, training, that led to increased retention within Austin Market. Program Success in Austin led to broader adoption across company",
      "Collaborated with Operations Managers and General Managers on special projects for continued operating efficiency and growth including analysis of store metrics to provide insight on how to optimize goals for speed, quality, order issues, and refunds",
    ],
  },
];

//For technologies section: Javascript, NodeJS, ReactJS, Ruby, Python, Java, Typescript, AWS, Netlify, Heroku

export const projects = [
  {
    title: "React Portfolio",
    description:
      "A resposive portfolio built with React and STyled Components (with a Star Wars theme)",
    repositoryUrl: "https://github.com/hemeshvpatel/CSS-Color-Picker",
    hostedUrl: "https://hemesh-css-color-picker.netlify.app/",
    technologies: { ReactJS: true, Javascript: true, Netlify: true },
    imageUrl: "./starwars.jpeg",
  },
  {
    title: "CSS Color Picker",
    description:
      "A simple CSS Color Picker built with ReactJS to help me with palette options when styling",
    repositoryUrl: "https://github.com/hemeshvpatel/CSS-Color-Picker",
    hostedUrl: "https://hemesh-css-color-picker.netlify.app/",
    technologies: { ReactJS: true, Javascript: true, Netlify: true },
    imageUrl: "./csscolorpicker.png",
  },
  {
    title: "Travel Website V2",
    description:
      "A fully responsive Travel website (version 2) built with React, Gatsby, and GraphQL",
    repositoryUrl: "https://github.com/hemeshvpatel/travel-website-v2",
    hostedUrl: "https://travel-website-v2.netlify.app/",
    technologies: { ReactJS: true, Javascript: true, Netlify: true },
    imageUrl: "./travelwebsite.png",
  },
  {
    title: "Travel Website V1",
    description: "A fully responsive Travel website built with React.",
    repositoryUrl: "https://github.com/hemeshvpatel/travel-website-v1",
    hostedUrl: "https://travel-website-172f7.web.app/",
    technologies: { ReactJS: true, Javascript: true, Netlify: true },
    imageUrl: "./travelwebsite.png",
  },
  {
    title: "Firegram",
    description: "Instagram-like photo gallery app with React & Firebase",
    repositoryUrl: "https://github.com/hemeshvpatel/firegram",
    hostedUrl: "https://firegram-bd7b3.web.app/",
    technologies: { ReactJS: true, Javascript: true },
    imageUrl: "./firegram.png",
  },
  {
    title: "Covid 19 Tracker",
    description:
      "Covid-19 Tracker that pulls live data from disease.sh. Built with React, chart-js, and hosted using firebase",
    repositoryUrl: "https://github.com/hemeshvpatel/covid-19-tracker",
    hostedUrl: "https://covid-19-tracker-55325.web.app/",
    technologies: { ReactJS: true, Javascript: true },
    imageUrl: "./covid19tracker.png",
  },
  {
    title: "Twitter Clone",
    description: "Twitter Clone built with ReactJS and Firebase (datebase)",
    repositoryUrl: "https://github.com/hemeshvpatel/twitter-clone",
    hostedUrl: "https://twitter-clone-a690d.web.app/",
    technologies: { ReactJS: true, Javascript: true },
    imageUrl: "./twitter.png",
  },
  {
    title: "Amazon Clone",
    description:
      "Amazon Frontend Clone using ReactJS + ReactRouter + Firebase (authentication)",
    repositoryUrl: "https://github.com/hemeshvpatel/amazon-clone",
    hostedUrl: "https://clone-be1ec.firebaseapp.com/",
    technologies: { ReactJS: true, Javascript: true },
    imageUrl: "./amazon.jpeg",
  },
  {
    title: "Grocery Store",
    description:
      "Built grocery store delivery app with product categories, shopping cart, checkout, order history, and user accounts",
    repositoryUrl:
      "https://github.com/hemeshvpatel/Grocery-Delivery-App-Frontend",
    hostedUrl: "https://grocery-delivery-frontend.herokuapp.com/",
    technologies: { ReactJS: true, Javascript: true },
    imageUrl: "./grocerystore.png",
  },
];
