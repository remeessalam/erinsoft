import imageOne from "../assets/images/chooseus1.jpg";
import imageTwo from "../assets/images/chooseus2.jpg";
import imageThree from "../assets/images/chooseus3.jpg";
import customdevelopment from "../assets/images/png/cutomedevelopment.png";
import mobiledevelopment from "../assets/images/png/mobile-development.png";
import webdevelopment from "../assets/images/png/webdevelopment.png";
import artificila from "../assets/images/png/artificial-intelligence.png";
import cloudcomputing from "../assets/images/png/cloudcomputing.png";
import cybersecurity from "../assets/images/png/cybersecurity.png";
import uxdesign from "../assets/images/png/ux-design.png";
import ecommerce from "../assets/images/png/landingecommerce.png";
import socila from "../assets/images/png/landingsocial.png";
import landing from "../assets/images/png/landing.png";
import custom from "../assets/images/png/landingcustome.png";
import ios from "../assets/images/png/landingios.png";
import android from "../assets/images/png/landingandroin.png";
import flutter from "../assets/images/png/landingflutter.png";
import hybrid from "../assets/images/png/landingcloud.png";
import portfoliwebone from "../assets/images/portfolio/1-min.webp";
import portfoliwebtwo from "../assets/images/portfolio/2-min.webp";
import portfoliwebthree from "../assets/images/portfolio/3-min.webp";
import portfoliwebfour from "../assets/images/portfolio/4-min.webp";
import portfoliwebfive from "../assets/images/portfolio/5-min.webp";
import portfoliwebseven from "../assets/images/portfolio/6-min.webp";
import portfoliappone from "../assets/images/portfolio/1-appmin.webp";
import portfoliapptwo from "../assets/images/portfolio/2-appmin.webp";
import portfoliappthree from "../assets/images/portfolio/3-appmin.webp";
import portfoliappfour from "../assets/images/portfolio/4-appmin.webp";
import portfolisppsfive from "../assets/images/portfolio/5-appmin.webp";
const baseUrl = process.env.PUBLIC_URL;

export const portfolioDataApp = [
  {
    name: "Partex",
    description:
      "We developed the Partex app to streamline logistics operations, ensuring efficient tracking and management of packages. With real-time updates and a user-friendly interface, Partex enhances both operational efficiency and user satisfaction.",
    image: portfoliappone,
  },
  {
    name: "Find A Driver",
    description:
      "Driver is a comprehensive driver management platform that simplifies fleet operations, driver scheduling, and route optimization. The app is designed to maximize productivity and provide seamless navigation features.",
    image: portfoliapptwo,
  },
  {
    name: "Glowsy",
    description:
      "Glowsy is a beauty and wellness app offering personalized beauty care recommendations and virtual consultations. Our team developed this app to provide an engaging, user-centered experience with tailored beauty solutions.",
    image: portfoliappthree,
  },
  {
    name: "Artisan Express",
    description:
      "Artisan Express connects skilled artisans with clients, offering a platform for job booking, ratings, and secure payments. The app enhances user trust and accessibility, creating a dynamic marketplace for craft and trade services.",
    image: portfoliappfour,
  },
  {
    name: "House of Deliverance",
    description:
      "House of Deliverance is a wellness app designed to provide mental health resources, guided meditation, and daily motivational content. The app fosters a supportive community and offers tools for users to improve mental well-being.",
    image: portfolisppsfive,
  },
];

export const portfolioDataWeb = [
  {
    name: "FE Finance",
    description:
      "We collaborated with FE Finance to create a user-friendly platform that offers tailored financial solutions, allowing users to access resources and manage their finances effectively. The site features a responsive design and an intuitive interface to enhance user engagement.",
    image: portfoliwebone,
    link: "https://www.fe-finance.de",
  },
  {
    name: "OCXEE",
    description:
      "For OCXEE, we developed a global platform that supports students in their international study journey. The website offers a variety of services, from accommodation assistance to banking, providing a seamless experience tailored to users' specific needs.",
    image: portfoliwebtwo,
    link: "https://www.ocxee.com",
  },
  {
    name: "Leaderbridge",
    description:
      "Leaderbridge connects leaders and professionals across industries, fostering collaboration and knowledge sharing. Our team crafted a dynamic platform that emphasizes seamless networking and user experience.",
    image: portfoliwebthree,
    link: "https://www.leaderbridge.com",
  },
  {
    name: "Gigzio",
    description:
      "Gigzio is a job search platform we helped bring to life, designed to connect job seekers with employers efficiently. With a focus on user-centered design, the platform simplifies the job search process and enhances accessibility across devices.",
    image: portfoliwebfour,
    link: "http://www.gigzio.com",
  },

  {
    name: "FE Group",
    description:
      "FE Group's platform offers comprehensive solutions in finance and consultancy. We developed a robust website that reflects the company’s professional approach, enhancing client interaction and support.",
    image: portfoliwebfive,
    link: "https://www.fe.group",
  },
  {
    name: "VTalks",
    description:
      "VTalks provides a platform for virtual talks and webinars. We created a highly responsive website to support interactive sessions, allowing users to join, share, and engage with industry experts worldwide.",
    image: portfoliwebseven,
    link: "https://www.vtalkz.com",
  },
];

export function publicUrlFor(path) {
  return baseUrl + "/assets/" + path;
}

export const companyDetails = {
  name: "Erinsoft",
  number: "+91 9041174022",
  address:
    " Plot 26, Siva Sai Nagar, Vizianagaram, Andhra Pradesh, PIN - 535004",
  website: "erinsoft.com",
  email: "abs@example.com",
};

export function loadScript(src, fromPublic) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");

    script.src =
      fromPublic === undefined || fromPublic == null || fromPublic
        ? publicUrlFor(src)
        : src;

    script.addEventListener("load", function () {
      resolve();
    });
    script.addEventListener("error", function (e) {
      reject(e);
    });
    document.body.appendChild(script);
    document.body.removeChild(script);
  });
}

export const ourServices = [
  {
    image: customdevelopment,
    heading: " Custom Software Development",
    shortDescription:
      " At ErinSoft Technologies, we specialize in custom software development that transforms businesses by driving efficiency and enhancing competitiveness. Our tailored solutions meet your unique challenges and goals, ensuring alignment with your operational needs. With a dedicated team focused on understanding your workflows, we create solutions suited to your business objectives.",
    description:
      "At ErinSoft Technologies, we believe that the right software can transform your business, drive efficiency, and elevate your competitive edge. Our custom software development services are meticulously designed to address the unique challenges and goals of your organization, providing solutions that align perfectly with your operational needs.Unlock the power of tailored technology with our custom software development services. Every business is unique, and so are its challenges and aspirations. Our dedicated team of experts takes the time to understand your specific requirements, industry nuances, and operational workflows. By engaging in detailed discussions and thorough analysis, we gain insights that inform the design and development process, ensuring the final product is perfectly suited to your objectives.",
  },
  {
    image: mobiledevelopment,
    heading: "Mobile App Development",
    shortDescription:
      "In today’s mobile world, connecting with customers is                         key. Our mobile app development focuses on                          high-performance apps with seamless user experiences.                          We prioritize intuitive design, robust functionality,                          and engaging interfaces to exceed expectations.                          Whether expanding your reach or boosting engagement,                          our solutions make a lasting impact while improving                          productivity and performance.",
    description:
      "In today's mobile-driven world, connecting with your customers is essential. Our mobile app development services focus on creating high-performance applications that provide seamless user experiences across various platforms. We prioritize intuitive design, robust functionality, and engaging interfaces to ensure your app not only meets but exceeds user expectations. Whether you're looking to extend your business reach or enhance customer engagement, our mobile solutions are designed to make a lasting impact. We emphasise the consumer's experience initially, ensure that the apps we develop not solely retain users intrigued but also streamline workflows and maximise performance. Each application we develop is a potent tool intended to improve productivity and foster greater engagement, encouraging your company to thrive in a world that is getting more and more mobile-focused.",
  },
  {
    image: webdevelopment,
    heading: "Web Development",
    shortDescription:
      "Your website is the digital face of your business. At                         ErinSoft, we specialize in creating dynamic,                         responsive websites that drive digital transformation.                         Our team uses the latest technologies to build                         user-friendly, high-performance sites that convert                         visitors into loyal customers. From e-commerce to                         corporate platforms, we offer full-stack web                         development services, ensuring secure, scalable, and                         reliable applications across all platforms.",
    description:
      "Your website is the digital face of your business. At ErinSoft, we specialize in crafting dynamic and responsive websites that drive digital transformation. Our web development team employs the latest technologies and best practices to create user-friendly designs optimized for performance, speed, and scalability. From e-commerce platforms to corporate sites, we build websites that not only attract visitors but also convert them into loyal customers, ensuring a strong online presence for your brand. We provide full-stack web development services, that involve back-end infrastructure and front-end user interfaces. Our area of expertise is developing safe, scalable, and reliable online application that work flawlessly across all platforms.",
  },
  {
    image: artificila,
    heading: "Artificial Intelligence & Machine Learning Solutions",
    shortDescription:
      "Harness AI and machine learning to automate processes,                         analyze data, and provide insights for informed                         decisions. Our solutions enhance efficiency,                         personalize experiences, and predict trends, keeping                         you ahead in a competitive digital landscape. From                         machine learning models to AI chatbots, we help you                         automate, improve experiences, and make smarter,                         data-driven decisions.",
    description:
      "Harness the transformative power of AI and machine learning with our advanced solutions. We develop intelligent systems that automate processes, analyze data, and provide actionable insights to help you make informed, data-driven decisions. Our AI solutions empower your organization to enhance operational efficiency, personalize customer experiences, and predict market trends, ensuring you stay ahead of the competition in a fast-paced digital landscape. From developing machine learning models to creating AI-powered chatbots, we help you automate processes, enhance customer experiences, and gain deeper insights into your operations. Let AI take your business to the next level with smarter, data-driven decisions.",
  },
  {
    image: cloudcomputing,
    heading: " Cloud Computing & Cloud Migration Services",
    shortDescription:
      "  In today’s digital landscape, adapting quickly is key to success. At ErinSoft Technologies, we provide cloud computing services that offer flexibility, scalability, and cost-effectiveness to help your business thrive. Our solutions allow you to focus on growth and innovation, with seamless cloud migration, IT optimization, and enhanced collaboration.",
    description:
      " In today's digital landscape, the ability to adapt quickly to changing business needs is crucial for success. At ErinSoft Technologies, we offer comprehensive cloud computing services designed to empower your organization with the flexibility, scalability, and cost-effectiveness required to thrive. Our cloud solutions are not just a service—they're a strategic advantage that enables your business to focus on growth and innovation. Embrace the future of IT with our comprehensive cloud computing services. We offer scalable cloud infrastructure solutions that adapt to your business needs, allowing for enhanced flexibility and cost-effectiveness. Our expert team guides you through the entire cloud migration process, ensuring a smooth transition with minimal disruption. By leveraging cloud technologies, we help you optimize your IT environment, improve collaboration, and drive innovation.",
  },
  {
    image: cybersecurity,
    heading: "Cybersecurity Services",
    shortDescription:
      "  In today's digital age, safeguarding your data is essential. Our cybersecurity solutions protect your systems and sensitive information with advanced security measures, including firewalls, intrusion detection, and secure VPNs. With 24/7 threat monitoring and encryption, we detect and respond to breaches swiftly, minimizing downtime and ensuring compliance with security protocols.",
    description:
      " In an age of increasing cyber threats, protecting your data is paramount. Our robust cybersecurity solutions are designed to safeguard your systems, networks, and sensitive information from potential attacks. We implement industry best practices and advanced security measures to ensure compliance and protect your business from risks. With our proactive approach to cybersecurity, you can focus on your core operations, knowing that your digital assets are secure. We implement advanced network security measures, including firewall management, intrusion detection, and secure VPNs, to protect against unauthorized access and data breaches while optimizing performance. With our 24/7 threat monitoring services, we provide real-time surveillance of your systems, swiftly detecting anomalies and responding to potential breaches to minimize downtime and data loss. Data security is paramount, and we use advanced encryption techniques to safeguard sensitive information both in transit and at rest, ensuring compliance with the latest security protocols.",
  },
  {
    image: uxdesign,
    heading: "UX/UI Design",
    shortDescription:
      " Create engaging experiences with our expert UX/UI                          design services. We prioritize intuitive, visually                       appealing designs that enhance usability and drive                         conversions. By understanding your audience’s                         behaviors and needs, we tailor designs to ensure                         satisfaction and meet expectations. Through user                         research and testing, we deliver seamless interactions                         with your brand.",
    description:
      "Create engaging user experiences with our expert UX/UI design services. We understand that a well-designed interface is crucial for user satisfaction and engagement. Our team focuses on developing intuitive and visually appealing designs that enhance usability and drive conversions. By gathering insights into your target audience's behaviors, preferences, and pain points, we create user personas that guide our design decisions. This ensures that our designs are not just visually appealing but also tailored to meet the specific needs and expectations of your users. By conducting thorough user research and testing, we ensure that every design decision aligns with your users’ needs and expectations, resulting in a seamless interaction with your brand.",
  },
];

export const whyChooseUs = {
  mainHeading:
    "At ErinSoft Technologies, we understand that choosing the right technology partner is crucial for your business's success. Here’s why we stand out in a crowded marketplace",
  details: [
    {
      iamge: imageOne,
      heading: "Tailored Solutions",
      description:
        "We believe that one size does not fit all. Our custom solutions are meticulously crafted to align with your specific business needs and objectives. Whether you require bespoke software, mobile applications, or comprehensive cloud services, we work closely with you to ensure our offerings are tailored to meet your unique challenges and goals. This personalized approach ensures that you receive the most effective solutions that drive meaningful results.",
    },
    {
      iamge: imageTwo,
      heading: "Expert Team",
      description:
        "Our interdisciplinary team comprises seasoned professionals with diverse expertise across various domains. From software developers and UX/UI designers to data scientists and cybersecurity specialists, our collective knowledge ensures that you receive the best guidance and support at every stage of your project. We are committed to leveraging our experience to help you navigate the complexities of technology and achieve your desired outcomes.",
    },
    {
      iamge: imageThree,
      heading: "Commitment to Innovation",
      description:
        "In today’s fast-paced digital landscape, staying ahead of the curve is essential. At ErinSoft Technologies, we are dedicated to continual innovation. We adopt the latest technologies and industry best practices to provide you with solutions that not only meet your current needs but also anticipate future trends. Our forward-thinking approach allows your business to remain agile and responsive to market changes.",
    },
  ],
};

export const ourlandingServices = {
  webServices: [
    {
      image: ecommerce,
      heading: "E-commerce Websites",
      shortDescription:
        "Empowering your online business with custom e-commerce websites. Our solutions enhance user experience, optimize conversions, and support scalable growth.",
      description:
        "At ErinSoft Technologies, we specialize in building custom e-commerce websites that not only meet your business needs but also create seamless shopping experiences. Our solutions are designed to enhance customer engagement, streamline operations, and drive revenue growth. Whether you're launching a new online store or looking to upgrade an existing platform, our team crafts e-commerce websites tailored to your specific goals. We ensure that your site is user-friendly, mobile-responsive, and optimized for performance to help your business thrive in the digital marketplace.",
    },
    {
      image: socila,
      heading: "Social Media Websites",
      shortDescription:
        "Empowering your brand with custom social media websites. Our solutions enhance user interaction, foster community engagement, and drive growth.",
      description:
        "At ErinSoft Technologies, we specialize in creating custom social media websites that foster meaningful connections and vibrant communities. Our solutions are designed to enhance user experience, promote content sharing, and optimize interactions. Whether you're building a platform for social networking, content creation, or community engagement, our team crafts social media websites tailored to your unique needs. We ensure that your site is scalable, user-friendly, and optimized for performance, helping you build a strong online presence and create lasting connections.",
    },
    {
      image: landing,
      heading: "Landing Websites",
      shortDescription:
        "Empowering your brand with custom social media websites. Our solutions enhance user interaction, foster community engagement, and drive growth.",
      description:
        "At ErinSoft Technologies, we specialize in creating custom social media websites that foster meaningful connections and vibrant communities. Our solutions are designed to enhance user experience, promote content sharing, and optimize interactions. Whether you're building a platform for social networking, content creation, or community engagement, our team crafts social media websites tailored to your unique needs. We ensure that your site is scalable, user-friendly, and optimized for performance, helping you build a strong online presence and create lasting connections.",
    },
    {
      image: custom,
      heading: "Custom Websites",
      shortDescription:
        "Empowering your brand with custom websites. Our solutions are designed to reflect your unique identity, boost engagement, and drive long-term success.",
      description:
        "At ErinSoft Technologies, we specialize in creating custom websites that are tailored to meet the specific needs of your business. Whether you need a simple informational site or a complex platform with advanced functionality, our team designs solutions that align perfectly with your goals. We focus on delivering an intuitive user experience, seamless navigation, and mobile optimization, ensuring that your website stands out and performs exceptionally across all devices. Partner with us to build a website that not only enhances your online presence but also drives measurable results.",
    },
  ],
  appServices: [
    {
      image: ios,
      heading: "iOS Development",
      shortDescription:
        "Build and optimize custom iOS apps to deliver seamless user experiences, enhance performance, and drive engagement on Apple devices.",
      description:
        "At ErinSoft Technologies, we specialize in creating custom iOS apps tailored to your business needs. Whether you're developing a new app or optimizing an existing one, our solutions are designed to provide exceptional performance, intuitive interfaces, and seamless integration with Apple’s ecosystem. We focus on crafting apps that engage users, streamline processes, and deliver measurable results. Our team ensures that your app is user-friendly, scalable, and optimized for performance across all iOS devices, helping you achieve success in the competitive mobile market.",
    },
    {
      image: android,
      heading: "Android App Development",
      shortDescription:
        "Create powerful and intuitive Android applications that offer smooth performance, engaging user experiences, and drive business growth.",
      description:
        "At ErinSoft Technologies, we specialize in developing custom Android apps tailored to meet your business goals. Our apps are designed to provide a seamless user experience, intuitive interfaces, and high-performance functionality. Whether you need a consumer-facing app or an enterprise solution, our team focuses on delivering mobile apps that offer value to your users and align with your business objectives. We ensure that your app is scalable, secure, and optimized for the best performance on Android devices.",
    },
    {
      image: flutter,
      heading: "Flutter App Development",
      shortDescription:
        "Develop cross-platform mobile apps using Flutter, ensuring consistent performance, rich user experiences, and rapid deployment.",
      description:
        "At ErinSoft Technologies, we specialize in Flutter app development to create high-quality, cross-platform mobile applications that work seamlessly on both iOS and Android devices. Our team leverages Flutter's powerful features to build fast, responsive, and visually appealing apps that provide an exceptional user experience. Whether you're launching a new app or need to enhance an existing one, we ensure your app is scalable, easy to maintain, and optimized for performance across platforms.",
    },
    {
      image: hybrid,
      heading: "Hybrid App Development",
      shortDescription:
        "Build cost-effective hybrid mobile apps that deliver native-like performance on both iOS and Android, with quicker time-to-market.",
      description:
        "At ErinSoft Technologies, we offer hybrid app development services that combine the best of both web and native apps to provide high-quality, cost-effective solutions. Our hybrid apps are designed to run seamlessly across iOS and Android devices, offering native-like performance and user experience. Whether you need a simple informational app or a feature-rich application, our team ensures fast development, seamless integration, and optimized performance, all while keeping costs down and reducing time-to-market.",
    },
  ],
};
