import { useState } from "react";

const tabsData = [
  {
    title: "Software Development",
    description:
      "We provide end-to-end software development solutions tailored to your business needs. From custom software applications to mobile apps and web solutions, we ensure scalability, security, and efficiency.",
    content: [
      {
        summary: "Custom Software Development",
        details:
          "Building bespoke software solutions designed to meet your unique requirements.",
      },

      {
        summary: "Mobile App Development",
        details:
          "Developing intuitive and high-performing mobile apps for Android and iOS.",
      },
      {
        summary: "Web Design & Development",
        details:
          "Creating user-friendly and responsive websites that enhance your online presence.",
      },
    ],
  },
  {
    title: "IT Consulting & Strategy",
    description:
      "Our IT consulting services help businesses optimize their technology infrastructure and create strategic roadmaps for growth. We focus on aligning IT initiatives with your business objectives for long-term success.",
    content: [
      {
        summary: "IT Infrastructure Consulting",
        details:
          "Tailored strategies to optimize your IT systems and networks.",
      },

      {
        summary: "Technology Roadmaps",
        details:
          "Crafting detailed plans for future-proofing your technology investments.",
      },
      {
        summary: "Process Automation & Optimization",
        details:
          "Streamlining operations through automation to enhance productivity.",
      },
    ],
  },
  {
    title: "Cybersecurity Services",
    description:
      "Protect your business from evolving digital threats with our cybersecurity services. We provide thorough risk assessments, proactive monitoring, and responsive solutions to safeguard your digital assets.",
    content: [
      {
        summary: "Security Audits & Risk Assessment",
        details:
          "Comprehensive audits to identify vulnerabilities and mitigate risks.",
      },

      {
        summary: "Threat Monitoring & Incident Response",
        details:
          "Real-time monitoring and rapid response to security incidents.",
      },
      {
        summary: "Firewall & VPN Management",
        details:
          "Configuring secure firewalls and VPNs to protect sensitive data.",
      },
    ],
  },
  {
    title: "IT Infrastructure Services",
    description:
      "Our IT infrastructure services ensure that your organization's hardware, software, and networks are running smoothly and efficiently. We focus on reliability, performance, and scalability.",
    content: [
      {
        summary: "Server Management",
        details:
          "Ensuring optimal performance, security, and maintenance of your servers.",
      },

      {
        summary: "Database Management",
        details:
          "Managing and securing databases to ensure data integrity and accessibility.",
      },
    ],
  },

  {
    title: "Digital Marketing Services",
    description:
      "Unlock your brand’s potential with our digital marketing expertise. From SEO to PPC and social media, we create tailored strategies to help you grow your online presence and reach your target audience.",
    content: [
      {
        summary: "Search Engine Optimization (SEO)",
        details:
          "Optimizing your website to rank higher on search engines and drive organic traffic.",
      },

      {
        summary: "Pay-Per-Click Advertising (PPC)",
        details:
          "Creating effective PPC campaigns to generate immediate and measurable results.",
      },
      {
        summary: "Social Media Management",
        details:
          "Building and managing your brand presence on key social platforms.",
      },
      {
        summary: "Email Marketing",
        details: "Designing email campaigns that engage and convert customers.",
      },
      {
        summary: "E-commerce Solutions",
        details:
          "End-to-end e-commerce services to help you sell online efficiently.",
      },
      {
        summary: "Branding & Creative Services",
        details:
          "Developing compelling brand identities and creative assets that resonate with your audience.",
      },
    ],
  },
];

const ServiceDetails = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="">
      <section
        className="ezy__sheader6 light py-14 md:py-12 text-zinc-700 dark:text-white  overflow-hidden relative z-[1] rounded-2xl"
        style={{
          backgroundImage:
            "url(https://cdn.easyfrontend.com/pictures/background/abstract-background2.jpg)",
        }}
      >
        <div className="container px-4">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-30 -z-[1] bg-white dark:bg-[#0b1727]"></div>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-8">
              <h1 className="text-[35px] leading-snug font-bold md:text-6xl mb-2">
                Our Services
              </h1>
              <p className="text-xl leading-snug opacity-75 mt-6">
                <a href="/">Home</a> {">"} Services
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className=" flex md:flex-row flex-col justify-center md:items-start items-center my-8">
        {/* Vertical Tabs */}

        <div className="md:w-1/4  md:sticky md:top-24  bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center  gap-4 rounded-lg shadow-md  p-8">
          <nav className="flex flex-col gap-2 items-end">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                className={` font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white hover:text-gray-800 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-4 overflow-hidden border-2 hover:border-black rounded-lg group w-80 ${
                  activeTab === index
                    ? "bg-emerald-500 text-white"
                    : "text-white "
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-50 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-50 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}

        <div className="md:w-2/4 w-full px-8 md:py-0 py-4">
          <div className={`transition-opacity duration-300 ease-in-out`}>
            <h1 className=" font-bold mb-4">{tabsData[activeTab].title}</h1>
            <p className="p-4">{tabsData[activeTab].description}</p>
            <div className="space-y-4">
              {tabsData[activeTab].content.map((subService, index) => (
                <details
                  key={index}
                  className="group border-s-4 border-green-500 bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                    <h3 className="text-lg font-medium text-gray-900">
                      {subService.summary}
                    </h3>

                    <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    {subService.details}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
