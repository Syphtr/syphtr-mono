export default function Hero() {
  return (
    <section className="bg-green-500">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-left lg:w-1/2">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Let Syphtr take care of your talent pipelines
            </h1>
            <p className="mb-8 text-lg font-bold text-white lg:text-xl px-4 sm:px-8 xl:px-16">
              Syphtr is a true pay-as-you-go recruiting service for hiring your GTM/Revenue Generating teams - Utilising the most
              advanced sourcing software available - Set up talent pipelines that guarantee a healthy flow of well-matched candidates for your recruitment team to engage with or use our full recruitment services for a low risk, great value solution to your recruitment needs. 
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="/"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
              >
                Get in touch
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                >
                  {/* SVG content */}
                </svg>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="/logos/heropic.png" alt="Hero" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}