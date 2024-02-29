export default function Features() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl">
        <div className="grid gap-16 items-center lg:grid-cols-2 lg:py-16 lg:px-6">
          {/* First Feature */}
          <div className="lg:col-span-3">
            <div className="font-bold text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-400 dark:text-gray-200">
                Who is Syphtr for?
              </h2>
              <p className="mb-4 text-gray-200">
                Our specialism is GTM hiring (Sales, Pre-Sales, Business Development
                and Professional Services) in the following subcategories within
                Enterprise Software/SaaS:
              </p>
              <ul className="text-gray-400">
                <li className="text-gray-300">- Data Quality</li>
                <li className="text-gray-300">- Data Preparation</li>
                <li className="text-gray-300">- Data Governance</li>
                <li className="text-gray-300">- Master Data Management</li>
                <li className="text-gray-300">- PIM</li>
                <li className="text-gray-300">- Data Science</li>
                <li className="text-gray-300">- Machine Learning</li>
                <li className="text-gray-300">- BI and Analytics</li>
                <li className="text-gray-300">- Database Management Systems (DBMS)</li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <img
                className="w-full rounded-lg"
                src="/logos/dannypic.png"
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src="/logos/dannypic.png"
                alt="office content 2"
              />
            </div>
          </div>
          {/* Second Feature */}
          <div className="lg:col-span-3">
            <div className="font-bold text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-400 dark:text-gray-300">
                Why use Syphtr if I already have an internal TA team with sourcing tools?
              </h2>
              <p className="mb-4 text-gray-200">
                In short, we can do 7 days worth of sourcing in about 7 hours. We have access to the most powerful sourcing tools available and we have a team of sourcing experts who are trained to use these tools to their full potential.
                Depending on your use case, using Syphtr for Talent Pipelines could offer you a 10X return when compared with the cost of hiring a full-time sourcer.
                Alternatively, If your end-to-end recruiters are spending more than 20% of their time sourcing, you should consider using Syphtr to free up their time to focus on the most important part of their role - engaging with candidates and hiring managers.
                In addition to the above, being a member means you have access to our Talent Pool SaaS tool which means you can not only keep all of your sourced candidates in one place, but you can also use our advanced filtering and matching tools to really keep track of your talent.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <img src="/logos/newimageforweb.png" alt="Image placeholder" style={{ objectFit: 'contain', width: '100%', height: 'auto' }} />
          </div>
          {/* Third Feature */}
          <div className="lg:col-span-3">
            <div className="font-bold text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-400 dark:text-gray-300">
                How do you quantify the quality of your candidates?
              </h2>
              <p className="mb-4 text-gray-200">
                We are lucky enough to have access to the most advanced sourcing tools available for GTM hiring. These tools are developed and created by Syphtr, and they allow us to not only filter and find candidates but also extract data points to provide a report card for every candidate we source. These report cards contain data points relating to things like the total percentage of career spent in competitive companies, the percentage of career spent in stable/successful roles (Stable/successful tenure defined by you), and an overall score based on combinations of these.
                Remember, these scores are based on face-value and you never really know until you speak with a candidate, but we can dramatically increase the chances of you speaking with a candidate who is a good fit for your role.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <img src="/logos/newimageforweb.png" alt="Image placeholder" style={{ objectFit: 'contain', width: '100%', height: 'auto' }} />
          </div>
          {/* Fourth Feature */}
          <div className="lg:col-span-3">
            <div className="font-bold text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-400 dark:text-gray-300">
                Where do you get your candidate data from?
              </h2>
              <p className="mb-4 text-gray-200">
                Our candidate data is sourced from a number of different places. We have access to over 55m candidate records across the UK and many European countries. We have a number of different partnerships public data providers and we combine this with proprietary data sets that we have manually created.
                We comply strictly with all data protection laws and we are fully GDPR compliant. Data privacy laws are very important to us and we take them very seriously. Please read our privacy policy for more information.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <img src="/logos/168109404_padded_logo.png" alt="Image placeholder" style={{ objectFit: 'contain', width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
