import { StringKeyValueType } from '../types';
import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  facebook: 'https://www.facebook.com/victor.queiroga.jp',
  instagram: 'https://www.instagram.com/queirogavictor',
  twitter: 'https://twitter.com/queirogajp',
  github: 'https://github.com/v1ct0rbr',
  linkedin: 'https://www.linkedin.com/in/victor-queiroga/',
};

export const author = {
  name: 'Victor Queiroiga',
  email: 'contato@victorqueiroga.com',
};

export const seoData = {
  title: 'Victor Queiroga | Full-Stack Developer',
  description:
    'Victor Queiroga is a front-end developer who specializes in building (and occasionally designing) exceptional visual interfaces.',
  author: author.name,
  image:
    'https://user-images.githubusercontent.com/68834718/217467445-0b0d2d63-f8ad-4702-8474-814eb2cbb3be.png',
  url: 'https://vatsalsinghkv.vercel.app/',
  keywords: [
    'Victor',
    'Victor Queiroga',
    '@queirogavictor',
    'victorqueiroga',
    'Portfolio',
    'Victor Portfolio ',
    'Vatsal Queiroga Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'victor queiroga.',
  tagline: 'I create web systems.',
  description:
    "I'm a passionate FullStack developer having an experience of web applications with Java Spring and AWS.",
  // description:
  //   "I'm a passionate Full Stack web developer having an experience of web  applications with React.js, Next.js and Blockchain development on Ethereum, Solidity and Web3.js.",
  specialText: 'Currently working for DER/PB',
  // either button or simple text (information)
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'AWS',
      'Java',
      'Spring',
      'React',
      'Javascript',
      'Relational DB',
    ],
  },
  img: '/victor-queiroga.jpeg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive WEB Systems using Java / Spring',
        'Implementing and optimizing cloud solutions.',
        'Building RESTful APIs in Java / Spring',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'java', icon: 'vscode-icons:file-type-java' },
        { name: 'spring', icon: 'logos:spring-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        // { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'chartjs', icon: 'file-icons:chartjs' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'aws', icon: 'skill-icons:aws-light' },
      ],
    },
    {
      id: getId(),
      title: 'UI/UX designing',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Experience in designing user-friendly interfaces with figma',
        'Experience in designing user-friendly interfaces with Bootstrap',
        'Providing user-friendly design solutions',
      ],
      softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'Bootstrap', icon: 'logos:bootstrap' },
        { name: 'responsive', icon: 'mdi:responsive' },
      ],
    },
    /* {
      id: getId(),
      title: 'blockchain development',
      lottie: {
        light: '/lotties/ethereum.json',
        dark: '/lotties/ethereum-dark.json',
      },
      points: [
        'Experience in developing Smart Contract using Solidity & Ethereum',
        'Developing NFT Smart Contracts using ERC-721 Token Standard',
        'Building Dapps with React.js & Solidity using Web3.js',
      ],
      softwareSkills: [
        { name: 'ethereum', icon: 'logos:ethereum' },
        { name: 'solidity', icon: 'logos:solidity' },
        { name: 'web3js', icon: 'logos:web3js' },
        { name: 'metamask', icon: 'logos:metamask-icon' },
      ],
    }, */
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [

    {
      company: 'DERPB',
      companyUrl: 'https://der.pb.gov.br',
      role: 'System Analist',
      started: 'january 2017',
      upto: 'present',
      tasks: [
        'build responsive web systems.',
        'Implementing and optimizing cloud solutions.',
        'Administer and configure the local network.',
      ],
    },
    {
      company: 'DERPB',
      companyUrl: 'https://der.pb.gov.br',
      role: 'Web developer / trainee',
      started: 'january 2015',
      upto: 'january 2017',
      tasks: [
        'build java applications.',
        'Perform internal software maintenance.',
        'Administer and configure the local network.',
      ],
    }

  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Water Pump Control - Arduino',
      url: 'https://victorqueiroga.com',
      repo: 'https://github.com/v1ct0rbr/arduinoprojects',
      img: 'https://firebasestorage.googleapis.com/v0/b/my-images-debc9.appspot.com/o/projetos%2Fimagens-projetos%2Fbomba_dagua01.png?alt=media&token=83092f63-0d10-4cc5-9a38-997b47e38fd7',
      year: 2016,
      tags: ['PHP', 'Bootstrap', 'Arduino'],
    },
    {
      id: getId(),
      name: 'VQ Licence Manager',
      url: '',
      repo: '',
      img: 'https://firebasestorage.googleapis.com/v0/b/my-images-debc9.appspot.com/o/projetos%2Fimagens-projetos%2Fvqlicencemanager01.png?alt=media&token=e8cbf31d-6aa0-4a45-8c67-c43c9801b92d',
      year: 2022,
      tags: ['Spring', 'Boostrap'],
    },
    {
      id: getId(),
      name: 'DEROS - Service Control',
      url: '',
      repo: '',
      img: 'https://firebasestorage.googleapis.com/v0/b/my-images-debc9.appspot.com/o/projetos%2Fimagens-projetos%2Fderos.png?alt=media&token=26d34074-8252-4f51-9429-08945402e057',
      year: 2017,
      tags: ['Java', 'Spring', 'Bootstrap'],
    },
    {
      id: getId(),
      name: 'Trainee Control',
      url: '',
      repo: '',
      img: 'https://firebasestorage.googleapis.com/v0/b/my-images-debc9.appspot.com/o/projetos%2Fimagens-projetos%2Festagiarioscontrole.png?alt=media&token=098e2e9f-41f3-4551-a9d5-0e2889462976',
      year: 2017,
      tags: ['Java', 'Spring', 'Bootstrap'],
    },
    {
      id: getId(),
      name: 'PontoSim - Sistema de ponto',
      url: '',
      repo: '',
      img: 'https://firebasestorage.googleapis.com/v0/b/my-images-debc9.appspot.com/o/projetos%2Fimagens-projetos%2Fpontosim02.png?alt=media&token=a6b78704-1b4d-4d9c-8e3f-f04326017b95',
      year: 2023,
      tags: ['Java', 'Spring', 'Boostrap'],
    },
    {
      id: getId(),
      name: 'dt money - financeiro',
      url: '',
      repo: 'https://github.com/v1ct0rbr/ignite-reactjs-dtmoney',
      img: 'https://firebasestorage.googleapis.com/v0/b/my-images-debc9.appspot.com/o/projetos%2Fimagens-projetos%2Fdtmoney01.png?alt=media&token=39735754-b91b-4188-84a1-f667def21ec0',
      year: 2022,
      tags: ['React', 'Sass'],
    },
    {
      id: getId(),
      name: 'Multi Timer',
      url: 'https://multitimer.vercel.app/',
      repo: 'https://github.com/v1ct0rbr/multitimer',
      img: 'https://firebasestorage.googleapis.com/v0/b/my-images-debc9.appspot.com/o/projetos%2Fimagens-projetos%2Fmultitimer01.png?alt=media&token=634782a6-8749-4853-b894-05966c76a5be',
      year: 2021,
      tags: ['React', 'Next'],
    },
    {
      id: getId(),
      name: 'ToDo App',
      url: '',
      repo: 'https://https://github.com/v1ct0rbr/todo-reactnative',
      img: 'https://firebasestorage.googleapis.com/v0/b/my-images-debc9.appspot.com/o/projetos%2Fimagens-projetos%2Ftodo01.png?alt=media&token=2339a5a1-6611-47e6-b213-f73a8e3e7660',
      year: 2021,
      tags: ['React Native', 'Expo'],
    },

    {
      id: getId(),
      name: 'Music Player',
      url: '',
      repo: 'https://github.com/v1ct0rbr/projeto_appmusicplayer_react-native',
      img: 'https://firebasestorage.googleapis.com/v0/b/my-images-debc9.appspot.com/o/projetos%2Fimagens-projetos%2Fappmusicplayer_01.png?alt=media&token=b002e761-7792-4c75-b438-4da9ba2026f2',
      year: 2021,
      tags: ['React Native', 'Expo'],
    },

    // {
    //   name: 'nexter',
    //   url: 'https://vatsalsinghkv.github.io/nexter/',
    //   repo: 'https://github.com/vatsalsinghkv/nexter',
    //   img: 'https://user-images.githubusercontent.com/68834718/210224671-5501c5d9-a8d2-4044-a14c-38fb7e46a113.png',
    //   year: 2021,
    //   tags: ['html', 'sass'],
    // },

    {
      id: getId(),
      name: 'calculator app',
      url: '',
      repo: 'https://github.com/v1ct0rbr/projeto-calculadora',
      img: 'https://firebasestorage.googleapis.com/v0/b/my-images-debc9.appspot.com/o/projetos%2Fimagens-projetos%2Fcalculadora01.png?alt=media&token=38c94719-740b-417d-8bd2-679b08ab4e8d',
      year: 2021,
      tags: ['html', 'CSS', 'JS'],
    },



  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m currently looking for new opportunities.',
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `https://tawk.to/vqsolucoesti`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    /*
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    */
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    {
      icon: 'lucide:facebook',
      url: socialLinks.facebook,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'By Victor Queiroga',
  link: 'https://linkedin.com/in/victor-queiroga',
};
