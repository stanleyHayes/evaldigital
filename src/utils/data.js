import uiux from "./../assets/images/uiux.png";
import web from "./../assets/images/coding.png";
import visual from "./../assets/images/visual-design.png";
import branding from "./../assets/images/branding.png";

const REVIEWS = [];
const PORTFOLIO = [];
const SERVICES = [
    {
        title: 'UI/UX Design',
        description: 'Our UI/UX service is designed to enhance the overall user experience and user interface of your digital products, such as websites, mobile applications, and software platforms.',
        image: uiux
    },
    {
        title: 'Development',
        description: 'Our web and app development service is designed to bring your digital ideas to life by creating high-quality, custom websites and mobile applications.',
        image: web
    },
    {
        title: 'Visual Design',
        description: 'Our visual design service focuses on creating captivating and visually engaging designs that enhance the overall aesthetic appeal of your brand, website, or marketing materials. ',
        image: visual
    },
    {
        title: 'Branding',
        description: 'Our branding service is designed to help businesses establish a strong and memorable brand identity that resonates with their target audience. ',
        image: branding
    }
];
const REFERENCES = [];

export const EVAL_DIGITAL_DATA = {REVIEWS, PORTFOLIO, SERVICES, REFERENCES};

