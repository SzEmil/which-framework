import { ContentSchema } from "../schema";

export const english: ContentSchema = {
  header: {
    nav: {
      whatCanWeOffer: "What can we offer",
      caseStudies: "Case studies",
    },
    btn: "Grow your idea",
  },
  home: {
    bannerHero: {
      slogan1: "We Are MinfDev",
      slogan2: "Empowering digital product design, develop, and growth",
      btn: "Chcek out our newest project",
    },
    aboutUs: {
      slogan1:
        "We are an emerging software house dedicated to designing websites that cater to our clients specific needs, focusing on speed and the use of cutting-edge technologies.",
      slogan2:
        "Our goal is to deliver high-performance web solutions that combine innovation with user-centric design.",
    },
    caseStudies: {
      title: "Case studies",
      btn: "See all case studies",
    },
    ourServices: {
      title: "Our Services",
      btn: "Learn more",
    },
  },
  offer: {
    slogan:
      "We tailor our process and methods to fit your idea. While our main focus is on designing and developing e-commerce websites, we're not afraid of tackling other challenges.",
    ourProcess: {
      title: "Our Process",
      timeline: {
        recogniseProblem: {
          name: "Recognize the problem",
          description:
            "We heed your ideas and requirements, then present our plan for crafting the digital product. Through research, we uncover the needs of prospective users and the business.",
          category: "Descovery",
          btn: "Read more",
        },
        provideSolution: {
          name: "Provide Solution",
          description:
            "After providing insights and recomendations, we craft screen designs, which we merge into a functional prototype, while consistently inviting you to monitor our progress.",
          category: "Design",
          btn: "Read more",
        },
        deliverProduct: {
          name: "Deliver a product",
          description:
            "During the development phase, we translate the designed solutions into functional code. We test and deploy it to create a version of the product that meets the previously established requirements and expectations.",
          category: "Develop",
          btn: "Read more",
        },
        maintainSolution: {
          name: "Maintain the solution",
          description:
            "After the product is launched, we focus on keeping it running smoothly by monitoring its performance, fixing any issues, and updating it as needed to ensure it continues to work well for users.",
          category: "Growth",
          btn: "Read more",
        },
      },
    },
  },
  footer: {
    nav: {
      offer: {
        title: "What we can offer",
        whatWeCanDo: "What can we do for you",
        ourProcess: "Our process",
      },
      caseStudies: {
        title: "Case studies",
      },
    },
    newsLetterForm: {
      title: "Join our newsletter!",
      form: {
        error: "Incorrect email",
        placeholder: "Type your email",
        btn: "Join our Newsletter",
      },
    },
  },
  projectCard: {
    btn: "See more",
  },
  contactForm: {
    title: "Tell us how we can help you",
    description:
      "Please fill out the form or reach out to us at hello@minfdev.com, and we'll get back to you as soon as possible.",
    form: {
      name: {
        error: "Your name is incorrect",
        label: "name",
        placeholder: "Your name",
      },
      email: {
        error: "Your email is incorrect",
        label: "email",
        placeholder: "Your name",
      },
      message: {
        error: "Your message is incorrect",
        label: "message",
        placeholder: "Your name",
      },
      optional: "Optional",
      submitBtn: "Upload file",
      declaration: "We care about your privacy and automatically agree to the following NDA.",
      uploadBtn: "Submit",
    },
  },
};
