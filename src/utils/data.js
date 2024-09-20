import {
    IoLogoJavascript,
    IoLogoHtml5,
    IoLogoReact,
    IoLogoCss3,
} from "react-icons/io5";
 import { RiTailwindCssFill } from "react-icons/ri";
 import { SiLaravel } from "react-icons/si";
 import { SiFlutter } from "react-icons/si";
 import { SiBootstrap } from "react-icons/si";
 import { SiPhp } from "react-icons/si";

export const PROFILE_DATA = {
    profilePicture: "https://via.placeholder.com/150",
    name: "Nurul Salsabila",
    tagLine: "I am a great interest in a career in technology, especially database/operator management, website and mobile application development. Doesn't give up easily and is always happy to learn new things, especially in the fields of mobile development.",
    jobTitle: "Developer",
    location: "Indonesia",
    yearsOfExperience: 2,
    skills: [
        "React.js",
        "JavaScript",
        "HTML",
        "CSS",
        "Git",
        "Bootstrap",
        "RESTful APIs",
        "Tailwindcss",
        "Laravel",
        "Flutter",
    ],
    email: "nrlsalsqbla@gmail.com",
    phone: "+62 81212369677",
    website: "https://cewektangguh.com/",
};

export const SKILLS = [
    {
        id: "01",
        icon: IoLogoJavascript,
        title: "JavaScript",
        comment: "Skilled in using JavaScript to add interactivity and functionality to web pages. Understands the basics of DOM manipulation, event handling, and is able to implement features such as form validation and animation.",
    },
    {
        id: "02",
        icon: IoLogoHtml5,
        title: "HTML",
        comment: "Experienced in using HTML to build semantic and organized web page structures. Able to create user-friendly and accessible layouts, and familiar with HTML5 elements.",
    },
    {
        id: "03",
        icon: RiTailwindCssFill,
        title: "Tailwindcss",
        comment: "Beginner to using Tailwind CSS for website styling. Familiar with this utility-first framework for creating fast, responsive web designs without having to write a lot of custom CSS. Understands basic concepts like responsive design, custom themes, and layout optimization.",
    },
    {
        id: "04",
        icon: IoLogoReact,
        title: "ReactJs",
        comment: "Currently learning and developing front-end applications using React. Able to understand basic concepts such as components, properties, state, and starting to explore the use of hooks and simple state management. Eager to continue improving skills in building dynamic and interactive user interfaces.",
    }, 
    {
        id: "05",
        icon: SiLaravel,
        title: "Laravel",
        comment: "Experienced in developing web applications using Laravel, a powerful and efficient PHP framework. Able to build authentication systems, RESTful APIs, database management with Eloquent ORM, and implement MVC architecture to ensure applications run optimally and scalably. Accustomed to optimizing the performance and security of web applications.",
    },
    {
        id: "06",
        icon: SiFlutter,
        title: "Flutter",
        comment: "Cross-platform mobile app development using Flutter. Able to build responsive Android and iOS apps with UI using Flutter widgets. Experienced in API integration, and app testing capabilities to deliver a smooth user experience.",
    },
    {
        id: "07",
        icon: IoLogoCss3,
        title: "CSS",
        comment: "Mastery of intermediate CSS to create responsive, modern and user-friendly web designs. Experienced in applying animations, transitions and advanced layout techniques such as Flexbox and Grid to produce dynamic and engaging interfaces.",
    },
    {
        id: "08",
        icon: SiBootstrap,
        title: "Bootstrap",
        comment: "Experienced in building responsive websites using Bootstrap. Able to integrate UI components, grid systems, and utility classes to speed up the development process and ensure a consistent appearance across all screen sizes.",
    },
    {
        id: "09",
        icon: SiPhp,
        title: "PHP",
        comment: "Skilled in back-end development using PHP. Experienced in building dynamic web applications with database management, form management, and server-side data processing, as well as developing RESTful APIs to support complex and secure application functionality.",
    },
];

export const WORK_EXPERIENCE = [
    {
        id: "01",
        company: "PT. ClientSolve Mitra Solusi",
        position: "Mobile Developer",
        duration: "2023 - Present",
        description: "Developing Android-based applications using Flutter, Collaborating with Backend and UI/UX Design in the development process, Performing maintenance and development on the system.",
    },
    {
        id: "02",
        company: "Youth Ranger Indonesia",
        position: "Head of Web Developer",
        duration: "2023 - Present",
        description: "Organize and manage all website needs, upload articles to the blog, implement new features, Manage web analytics with Google Search Console, Change programming language from Bootstrap + PHP to Tailwindcss + Laravel, Hold division meetings once a month, Help with server maintenance.",
    },
    {
        id: "03",
        company: "Fyp Media Corp",
        position: "Web Developer",
        duration: "2023 - Present",
        description: "Compiling and managing all website needs, changing the appearance according to request, implementing new features, managing Adsense using Google Adsense and monitoring web analytics using Google Analytics and Google search console, creating a special news website for the Java, Sumatra, Kalimantan and Sulawesi regional fyp, becoming a Mentor for interns who register at FYPMedia, helping with server maintenance, and debugging.",
    },
    {
        id: "04",
        company: "Youtz Media",
        position: "Backend Developer",
        duration: "Februari 2024 - Juli 2024",
        description: "Develop existing features, collaborate with FrontEnd and UI/UX on development.",
    },
    {
        id: "05",
        company: "Forlawtous Indonesia",
        position: "Web Developer",
        duration: "2023 - Present",
        description: "Create landing pages using odoo cms, Collaborate with team on landing pages, collaborate with other teams on article uploads.",
    },
    {
        id: "06",
        company: "Tempat Belajar",
        position: "WordPress Developer",
        duration: "Februari 2023 - Juni 2023",
        description: "Develop responsive WordPress design sites, Build and manage website architecture, Implement new features and functionality.",
    },
    {
        id: "07",
        company: "PT. Readerzen Tanggap Literasi",
        position: "Web Developer",
        duration: "Desember 2021 - Februari 2022",
        description: "Manage all website needs, Upload blog content to website.",
    },
    {
        id: "08",
        company: "KAP Haryono, Junianto & Asmoro",
        position: "Admin",
        duration: "Desember 2021 - Januari 2022",
        description: "Input recapitulation data, Recording incoming and outgoing letters, Summarizing assignment letters, Summarizing reports.",
    },
];

export const ABOUT_ME_DATA = {
    introduction: "nama ku adalah nurulsalsabila yang selalu tertarik di bidang web developer dan mobile developer. untuk itu jangan ragu untuk mengunjungi profile saya disini. terima kasih",
    background: "background saya adalah anak cantik, baik dan pintar dari jurusan teknik informatika",
    skills: "ReactJs, JavaScript, Flutter, Kotlin, Laravel, PHP, Bootstrap, Tailwindcss dan masih banyak lainnya",
    projects: "I ",
    interest: "Mobile Developer & Copywriting",
    careerGoals: "Software Engineer",

    stats: {
        yearsOfExperience: '2+',
        numberOfProjects: 7,
        certificationEarned: 3,
    },
};