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
const baseUrl = process.env.PUBLIC_URL;

export function publicUrlFor(path) {
  return baseUrl + "/assets/" + path;
}

export const companyDetails = {
  name: "Erinsoft",
  number: "+91 9041174022",
  address:
    " Plot 26, Siva Sai Nagar, Vizianagaram, Andhra Pradesh, PIN - 535004",
  website: "erinsoft.com",
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
