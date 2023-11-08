import React from "react";

const CallToAction = () => {
  const bg = {
    backgroundImage:
      'url("https://i.ibb.co/w6fCg2B/woman-asian-happy-her-using-computer-laptop-sitting-white-chair-drinking-coffee-1.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className="hero min-h-screen md:min-h-screen lg:min-h-screen xl:min-h-screen bg-center"
      style={bg}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" md:max-w-2xl lg:max-w-4xl xl:max-w-6xl space-y-6">
          <h1 className="mb-5 text-3xl md:text-6xl lg:text-6xl xl:text-6xl font-bold ">Your One-Stop Destination for Job Creation.</h1>
          <p className="mb-5 tracking-wider">
          Discover your path to professional success with our comprehensive platform for creating, finding, and applying for jobs. Whether you're a job seeker, a recruiter, or an employer, we have the resources and tools to help you achieve your career goals.
          </p>
          <button className="px-5 py-2 rounded-md border-none bg-[#0146B1]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
