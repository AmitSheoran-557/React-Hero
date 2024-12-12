import { Bulb_Icon, BUNDLE_PACKAGES, GAS_PLAN, INTERNET_PLAN, UTILITIES_ICON_FIVE, UTILITIES_ICON_FOUR, UTILITIES_ICON_ONE, UTILITIES_ICON_THREE, UTILITIES_ICON_TWO } from "./Icons";

export const NAVBAR_LIST = [
    { tittle: "About", link: "/about" },
    { tittle: "How It Works", link: "/work" },
    { tittle: "Testimonials", link: "/testimonials" },
    { tittle: "Why Us", link: "/whyUs" },
    { tittle: "FAQ", link: "/faq" },
];
export const ENERGY_BENEFITS = [
    { tittle: "Save money by finding cheaper deals." },
    { tittle: "Get better customer service." },
    { tittle: "Explore greener, more sustainable energy options." },

];
export const SIMPLE_STEPS = [
    {
        bgImg: "./assets/image/png/step-sec-img-1.png ",
        heading: "1. Your Location",
        subHeading: "Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.",
        tittle: "1. Enter Your Location and Preferences",
    },
    {
        bgImg: "./assets/image/png/step-sec-img-2.png",
        heading: "2. Providers",
        subHeading: "Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.",
        tittle: " 2. Compare Providers",
    },
    {
        bgImg: "./assets/image/png/step-sec-img-3.png",
        heading: "3. Switch Easily",
        subHeading: "Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.",
        tittle: "3. Switch Easily",
    },
    {
        bgImg: "./assets/image/png/step-sec-img-4.png",
        heading: "4.Best Plan",
        subHeading: "Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.",
        tittle: "4. Choose the Best Plan",
    },
];
export const ACCORDION = [
    { id: 1, title: "Electricity Plan Comparisons", content: "Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider.", img: <Bulb_Icon />, },
    { id: 2, title: "Gas Plan Comparisons", content: "Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider.", img: <GAS_PLAN /> },
    { id: 3, title: "Internet Plan Comparisons", content: "Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider.", img: <INTERNET_PLAN /> },
    { id: 3, title: "Bundle Packages", content: "Whether you want renewable energy, low rates, or flexible contracts, we’ll help you find the best provider.", img: <BUNDLE_PACKAGES /> },
];
export const UTILITIES = [
    {
        icon: <UTILITIES_ICON_TWO />,
        heading: "Simplified Comparison Process",
        subHeading: "Our intuitive platform lets you compare the best utility providers in one place, helping you make a quick and informed decision."
    },
    {
        icon: <UTILITIES_ICON_THREE />,
        heading: "Save Time and Money",
        subHeading: "With up-to-date plans and pricing, you can be sure you’re getting the most competitive rates available."
    },
    {
        icon: <UTILITIES_ICON_FOUR />,
        heading: "No Service Interruptions",
        subHeading: "We take care of the entire switching process so you can enjoy a hassle-free experience with zero downtime."
    },
    {
        icon: <UTILITIES_ICON_FIVE />,
        heading: "Comprehensive Support",
        subHeading: "Whether you need assistance selecting a plan or during the switch, our dedicated support team is here to help every step of the way."
    }
]
export const TESTIMONIALS = [
    {
        profileImg: './assets/image/png/testimonials-card-one.png',
        name: 'Cameron',
        rating: './assets/image/png/rating-star-img.png',
        id: "@cameron",
        paragraph: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.',
    },
    {
        profileImg: './assets/image/png/testimonials-card-two.png',
        name: 'Ronald',
        rating: './assets/image/png/rating-star-img.png',
        id: "@ronald",
        paragraph: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.',
    },
    {
        profileImg: './assets/image/png/testimonials-card-three.png',
        name: 'Jay Shah',
        rating: './assets/image/png/rating-star-img.png',
        id: "@jayshah",
        paragraph: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.',
    },
    {
        profileImg: './assets/image/png/testimonials-card-one.png',
        name: 'Cameron',
        rating: './assets/image/png/rating-star-img.png',
        id: "@cameron",
        paragraph: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.',
    },
    {
        profileImg: './assets/image/png/testimonials-card-two.png',
        name: 'Ronald',
        rating: './assets/image/png/rating-star-img.png',
        id: "@ronald",
        paragraph: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.',
    },
    {
        profileImg: './assets/image/png/testimonials-card-three.png',
        name: 'Jay Shah',
        rating: './assets/image/png/rating-star-img.png',
        id: "@jayshah",
        paragraph: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio  adipiscing elit vitae vestibulum vestibulum.',
    },
];