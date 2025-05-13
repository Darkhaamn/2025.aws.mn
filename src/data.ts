export type Speaker = {
  name: string;
  position: string;
  image: string;
  description: string;
  link: string;
};

export type Sponsor = {
  name: string;
  logo: string;
  link: string;
};

export type Schedule = {
  title: string;
  start: string;
  end: string;
  location: string;
  detail?: {
    lang: string;
    about: string;
    speaker_names: string[];
  };
};

export type FAQItemType = {
  question: string;
  answer?: string;
  answerList?: string[];
};

export const speakers: Speaker[] = [
  {
    name: "Jane Doe",
    position: "Cloud Architect",
    image: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
    description:
      "Jane is an experienced cloud architect who loves designing scalable solutions on AWS.",
    link: "https://www.linkedin.com/in/janedoe/",
  },
  {
    name: "John Smith",
    position: "DevOps Engineer",
    image: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
    description:
      "John specializes in CI/CD pipelines and infrastructure automation with AWS.",
    link: "https://www.linkedin.com/in/johnsmith/",
  },
  {
    name: "Emily Chen",
    position: "Solutions Architect",
    image: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
    description:
      "Emily designs cloud solutions for enterprises and helps them migrate to AWS.",
    link: "https://www.linkedin.com/in/emilychen/",
  },
];

export const gameDay: Schedule[] = [
  {
    title: "Game Day Kickoff",
    start: "09:20 AM",
    end: "10:00 AM",
    location: "MUIS 4 Main Hall",
  },
  {
    title: "Team Formation",
    start: "10:00 AM",
    end: "05:45 PM",
    location: "MUIS 4 Main Hall",
  },
  {
    title: "Game Challenges Overview",
    start: "05:45 PM",
    end: "06:00 PM",
    location: "MUIS 4 Main Hall",
  },
];

export const speakerDay: Schedule[] = [
  {
    title: "Registration",
    start: "09:20 AM",
    end: "10:00 AM",
    location: "Library Spearker Room",
  },
  {
    title: "Keynote Speech",
    start: "10:00 AM",
    end: "10:15 AM",
    detail: {
      lang: "en",
      about: "An inspiring talk about the future of cloud computing.",
      speaker_names: ["Jane Doe", "John Smith"],
    },
    location: "Library Spearker Room",
  },
  {
    title: "Lunch Break & Networking",
    start: "10:15 AM",
    end: "10:30 AM",
    location: "Library Spearker Room",
  },
  {
    title: "Workshop: Building Serverless Applications",
    start: "10:30 AM",
    end: "11:00 AM",
    detail: {
      lang: "en",
      about:
        "Learn how to build scalable serverless applications using AWS Lambda and API Gateway.",
      speaker_names: ["Emily Chen"],
    },
    location: "Library Spearker Room",
  },
  {
    title: "Quiz",
    start: "05:00 PM",
    end: "05:30 PM",
    location: "Library Spearker Room",
  },
  {
    title: "Closing Speech",
    start: "05:30 PM",
    end: "05:45 PM",
    location: "Library Spearker Room",
  },
];

export const sponsors: Sponsor[] = [
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",
    link: "https://aws.amazon.com/",
  },
];

export const organizers: Speaker[] = [
  {
    name: "Jiguur Na",
    position: "Co-Founder, CEO at Sky Whale Labs",
    image: "https://www.aws.mn/jiguur.webp",
    description: "Community Leader at AWS User Group Ulaanbaatar.",
    link: "https://www.linkedin.com/in/jiguurn/",
  },
  {
    name: "Tuguldur Demberel",
    position: "Technology Architect At Khan Bank",
    image: "https://www.aws.mn/tuguldur.jpg",
    description: "Community Leader at AWS User Group Ulaanbaatar.",
    link: "https://www.linkedin.com/in/tuguldur-dev/",
  },
  {
    name: "Darkhanbayar Erdenebat",
    position: "-",
    image: "https://www.aws.mn/suga.jpg",
    description: "Community Leader at AWS User Group Ulaanbaatar.",
    link: "https://www.linkedin.com/in/darkhanbayar-erdenebat/",
  },
  {
    name: "Khongorzul Purev",
    position: "Senior system engineer At FIBO CLOUD",
    image: "https://www.aws.mn/hoko.jpeg",
    description: "Community Leader at AWS User Group Ulaanbaatar.",
    link: "https://www.linkedin.com/in/khongorzul-purev-bb1233159/",
  },
  {
    name: "Bat-Orgil Davaajantsan",
    position: "Technology Architect At Khan Bank",
    image: "https://www.aws.mn/batorgil.jpeg",
    description: "Community Leader at AWS User Group Ulaanbaatar.",
    link: "https://www.linkedin.com/in/batorgil-it/",
  },
  {
    name: "Uurtsaikh Nyambat",
    position: "Senior Software Engineer At Zerotech",
    image: "https://www.aws.mn/uurtsaikh.jpg",
    description: "Community Leader at AWS User Group Ulaanbaatar.",
    link: "https://www.linkedin.com/in/uurtsaikh-nyambat/",
  },
];

export const faqsData: FAQItemType[] = [
  {
    question: "Who can participate?",
    answerList: [
      "Anyone working with AWS or engineers in Software, Network, DevOps, Cloud, Security, and related fields.",
      "DevOps, Cloud, Software, Security, and Network engineers are all welcome!",
    ],
  },
  {
    question: "How to participate?",
    answerList: [
      "Register at https://lu.ma/1tuehhqq and enable the Gameday participation option.",
      "Each participant must belong to a team. If you already have one, mention the team name in the registration form.",
      "Organizers will confirm team registration the day before the competition and notify you by phone.",
      "If you don’t have a team, organizers will assign you to one based on your skills.",
      "Don’t worry about not having a team — feel free to join; it’s really fun!",
      "Bring your own laptop on the competition day.",
      "The competition runs from 12 PM to 5 PM.",
      "Coffee and snacks will be provided during the competition.",
    ],
  },
  {
    question: "What if I'm not experienced?",
    answerList: [
      "AWS is beginner-friendly with abundant guides and documentation.",
      "Instructions will appear as you complete tasks.",
      "You can use Amazon Q AI assistant or ChatGPT for help.",
      "If you have technical thinking and courage, you have a great chance to compete!",
      "Organizers will provide subtle guidance throughout the competition.",
    ],
  },
  {
    question: "What are the prizes?",
    answerList: [
      "The winning team will receive 1 million MNT and AWS merch.",
      "Runner-up teams will receive smaller cash prizes and gifts.",
      "Each participant will receive a gift.",
    ],
  },
  {
    question: "Which AWS services will be used in the competition?",
    answerList: [
      "S3",
      "S3 Static Website",
      "EC2",
      "Auto Scaling Group",
      "Elastic Load Balancer",
      "Code Pipeline, Code Build, Code Commit & Code Deploy",
      "SQS",
      "Lambda",
      "AWS Glue",
      "AWS Athena",
      "Rekognition",
    ],
  },
];
