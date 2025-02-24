import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
              Why Choose Us
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Excellence in Computer Education
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Expert Instructors
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Modern Facilities
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Practical Training
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
