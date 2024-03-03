import { Link } from "@remix-run/react";

export default function Features() {
  return (
    //   <section className="bg-white dark:bg-gray-900">
    //   <div className="py-8 px-4 mx-auto max-w-screen-xl">
    //     <div className="grid gap-16 items-center lg:grid-cols-2 lg:py-16 lg:px-6">
    //       {/* First Feature */}
    //       <div className="lg:col-span-3">
    //         <div className="font-bold text-gray-500 sm:text-lg dark:text-gray-400">
    //           <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-400 dark:text-gray-200">
    //             Who is Syphtr for?
    //           </h2>
    //           <p className="mb-4 text-gray-400">
    //             Our specialism is sourcing/hiring GTM/Revenue generating teams
    //             (Sales, Pre-Sales, Business Development and Professional
    //             Services) in the following subcategories within Enterprise
    //             Software/SaaS:
    //           </p>
    //           <ul className="text-gray-400">
    //             <li className="text-gray-400">- Data Quality</li>
    //             <li className="text-gray-400">- Data Preparation</li>
    //             <li className="text-gray-400">- Data Governance</li>
    //             <li className="text-gray-400">- Master Data Management</li>
    //             <li className="text-gray-400">- PIM</li>
    //             <li className="text-gray-400">- Data Science</li>
    //             <li className="text-gray-400">- Machine Learning</li>
    //             <li className="text-gray-400">- BI and Analytics</li>
    //             <li className="text-gray-400">
    //               - Database Management Systems (DBMS)
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="lg:col-span-2">
    //         <div className="grid grid-cols-2 gap-4">
    //           <img
    //             className="w-full rounded-lg"
    //             src="/logos/dannypic.png"
    //             alt="office content 1"
    //           />
    //           <img
    //             className="mt-4 w-full lg:mt-10 rounded-lg"
    //             src="/logos/dannypic.png"
    //             alt="office content 2"
    //           />
    //         </div>
    //       </div>
    //       {/* Second Feature */}
    //       <div className="lg:col-span-3">
    //         <div className="font-bold text-gray-500 sm:text-lg dark:text-gray-400">
    //           <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-400 dark:text-gray-300">
    //             Why use Syphtr if I already have an internal TA team with
    //             sourcing tools?
    //           </h2>
    //           <p className="mb-4 text-gray-400">
    //             Syphtr's proprietary sourcing/filtering/scoring software can
    //             do 7 days worth of sourcing in roughly 3 hours. With access to
    //             the most powerful sourcing tools available, and a team of
    //             sourcing/research experts who are trained to use these tools
    //             to their full potential, Syphtr will provide you with a
    //             constant flow of well-matched candidates on autopilot.
    //             Depending on your use case, using Syphtr for Talent Pipelines
    //             could offer you a 10X return when compared with the cost of
    //             hiring a full-time sourcer. Alternatively, If your end-to-end
    //             recruiters are spending more than 20% of their time sourcing,
    //             you should consider using Syphtr to free up their time to
    //             focus on the most important part of their role - engaging with
    //             candidates and hiring managers. Being a member also means you
    //             have access to our Talent Pool SaaS (coming soon) - meaning
    //             you can keep all of your sourced candidates in one place and
    //             use our advanced filtering and matching tools to keep track of
    //             your talent for the long term.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="lg:col-span-2">
    //         <img
    //           src="/logos/newimageforweb.png"
    //           alt="Image placeholder"
    //           style={{ objectFit: "contain", width: "100%", height: "auto" }}
    //         />
    //       </div>
    //       {/* Third Feature */}
    //       <div className="lg:col-span-3">
    //         <div className="font-bold text-gray-500 sm:text-lg dark:text-gray-400">
    //           <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-400 dark:text-gray-300">
    //             How do you quantify the quality of your candidates and how can
    //             you find/provide so many per month?
    //           </h2>
    //           <p className="mb-4 text-gray-400">
    // We are lucky enough to have access to the most advanced
    // sourcing tools available for GTM hiring. These tools are
    // developed and created by Syphtr and they allow us to
    // accurately filter/find candidates whilst also extracting vital
    // data points to provide a report card for every candidate we
    // source for you. These report cards contain data points
    // relating to things like the total percentage of career spent
    // in competitive companies, the percentage of career spent in
    // stable/successful roles (Stable/successful tenure defined by
    // you), and an overall score based on combinations of these.
    // Remember, these scores are based on face-value and you never
    // really know until you speak with a candidate, but we can
    // dramatically increase the chances of you speaking with a
    // candidate who is a good fit for your role.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="lg:col-span-2">
    //         <img
    //           src="/logos/newimageforweb.png"
    //           alt="Image placeholder"
    //           style={{ objectFit: "contain", width: "100%", height: "auto" }}
    //         />
    //       </div>
    //       {/* Fourth Feature */}
    //       <div className="lg:col-span-3">
    //         <div className="font-bold text-gray-500 sm:text-lg dark:text-gray-400">
    //           <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-400 dark:text-gray-300">
    //             Where do you get your candidate data from?
    //           </h2>
    //           <p className="mb-4 text-gray-400">
    //             Our candidate data is sourced from multiple ptoviders. We have
    //             access to over 55m candidate records across the UK and many
    //             European countries. We have partnerships with public data
    //             providers and we combine this with proprietary data sets that
    //             we have manually created. We comply strictly with all data
    //             protection laws and we are fully GDPR compliant. Data privacy
    //             laws are very important to us and we take them very seriously.
    //             Please read our privacy policy for more information.
    //           </p>
    //         </div>
    //       </div>

    //       <div className="lg:col-span-2">
    //         <img
    //           src="/logos/168109404_padded_logo.png"
    //           alt="Image placeholder"
    //           style={{ objectFit: "contain", width: "100%", height: "auto" }}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
      {/* FEATURE 1 */}
      <section className="bg-white dark:bg-gray-900 pt-32 pb-56">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard"
          />
          <img
            className="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Who is Syphtr for?
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Our specialism is sourcing/hiring GTM/Revenue generating teams
              (Sales, Pre-Sales, Business Development and Professional Services)
              in the following subcategories within Enterprise Software/SaaS:
            </p>
            <ul className="text-gray-400">
              <li className="text-gray-400 flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Data Quality
              </li>
              <li className="text-gray-400">- Data Preparation</li>
              <li className="text-gray-400">- Data Governance</li>
              <li className="text-gray-400">- Master Data Management</li>
              <li className="text-gray-400">- PIM</li>
              <li className="text-gray-400">- Data Science</li>
              <li className="text-gray-400">- Machine Learning</li>
              <li className="text-gray-400">- BI and Analytics</li>
              <li className="text-gray-400">
                - Database Management Systems (DBMS)
              </li>
            </ul>
          </div>
        </div>

        {/* FEATURE 2 */}

        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard"
          />
          <img
            className="w-full hidden dark:block order-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Why use Syphtr if I already have an internal TA team with sourcing
              tools?
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              We are lucky enough to have access to the most advanced sourcing
              tools available for GTM hiring. These tools are developed and
              created by Syphtr and they allow us to accurately filter/find
              candidates whilst also extracting vital data points to provide a
              report card for every candidate we source for you. These report
              cards contain data points relating to things like the total
              percentage of career spent in competitive companies, the
              percentage of career spent in stable/successful roles
              (Stable/successful tenure defined by you), and an overall score
              based on combinations of these. Remember, these scores are based
              on face-value and you never really know until you speak with a
              candidate, but we can dramatically increase the chances of you
              speaking with a candidate who is a good fit for your role.
            </p>
          </div>
        </div>

        {/* FEATURE 3 */}

        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard"
          />
          <img
            className="w-full hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Where do you get your candidate data from?
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Our candidate data is sourced from multiple providers. We have
              access to over 55m candidate records across the UK and many
              European countries. We have partnerships with public data
              providers and we combine this with proprietary data sets that we
              have manually created. We comply strictly with all data protection
              laws and we are fully GDPR compliant. Data privacy laws are very
              important to us and we take them very seriously. Please read our
              privacy policy for more information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
