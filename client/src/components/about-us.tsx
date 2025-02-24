export function AboutUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">About TechEdu Institute</h2>
          <p className="text-lg text-gray-600 mb-8">
            TechEdu Institute has been at the forefront of computer education since its inception. 
            We pride ourselves on delivering high-quality technical education that prepares our students 
            for the ever-evolving digital world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-primary text-2xl font-bold mb-2">10+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-primary text-2xl font-bold mb-2">1000+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-primary text-2xl font-bold mb-2">100%</div>
              <div className="text-gray-600">Job Assistance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
