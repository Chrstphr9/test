const footerData = {
  marquee: {
    text: "work with us",
    repeatCount: 4,
    link: "/contact",
  },

  centerContent: {
    footerWrapperBg: "./assets/images/footer-area/footer-3-bg.png",
    subHeading: "Lagos, Nigeria.",
    email: "hello@ucheokpagu.com",
    socialLinks: [
      {
        name: "Linkedin",
        url: " https://www.linkedin.com/in/uokpagu/",
        id: "linkedin",
      },
      {
        name: "Twitter",
        url: "#",
        id: "twitter",
      },
      {
        name: "Instagram",
        url: "#",
        id: "instagram",
      },
      {
        name: "Tiktok",
        url: "#",
        id: "tiktok",
      },
    ],
    contactButton: {
      text: "Let`s Connect",
      link: "/contact",
    },
  },

  bottomContent: {
    copyright: {
      symbol: "©",
      year: new Date().getFullYear(),
      text: ". All rights reserved uchokpagu",
    },
    backToTop: {
      text: "Back To Top",
      target: "#header",
    },
    footerNav: [
      {
        text: "Terms & Condition",
        url: "#",
        id: "terms",
      },
      {
        text: "Privacy Policy",
        url: "#",
        id: "privacy",
      },
    ],
  },
};

export default footerData;
