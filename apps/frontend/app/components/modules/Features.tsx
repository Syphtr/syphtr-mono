export default function Features() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Who is Syphtr for?
          </h2>
          <p className="mb-4">
            Our specialism is GTM hiring (Sales, Pre-Sales, Business Development
            and Professional Services) in the following subcategories within
            Enterprise Software/SaaS:
          </p>
          <ul>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
            <li>- Data Quality</li>
            <li>- Data Preperation</li>
            <li>- Data Governance</li>
            <li>- Master Data Management</li>
            <li>- PIM</li>
            <li>- Data Science</li>
            <li>- Machine Learning</li>
            <li>- BI and Analytics</li>
            <li>- ERP - DBMS</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}