const JobDescription = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between w-full gap-10">
      <div className="flex-[0.8] flex flex-col gap-7">
        <h4 className="text-xl font-semibold">Job description</h4>
        <div>
          <p className="text-lg font-medium">About Hoostly</p>
          <p className="text-textLight">
            Since 2010, we have relentlessly worked on crafting better digital
            products with our team of superior engineers. We’re a full-stack
            company specializing in SaaS products and have served over 100
            clients with our mastery of emerging technologies.
          </p>
          <p className="text-textLight">
            Since 2010, we have relentlessly worked on crafting better digital
            products with our team of superior engineers. We’re a full-stack
            company specializing in SaaS products and have served over 100
            clients with our mastery of emerging technologies.
          </p>
        </div>

        <div>
          <p className="text-lg font-medium">About Role</p>
          <p className="text-textLight">
            We’re a full-stack company specializing in SaaS products and have
            served over 100 clients with our mastery of emerging technologies.
          </p>
        </div>

        <div>
          <p className="text-lg font-medium">Responsibility</p>
          <p className="font-medium"> Team Leadership</p>
          <ul className="mb-7">
            <li>
              - Provide technical leadership and guidance to the Magento
              development team, leveraging your extensive experience in software
              engineering.
            </li>
            <li>
              - Architect scalable and robust solutions that meet business
              objectives and industry best practices.
            </li>
            <li>
              - Mentor and coach junior and mid-level engineers, fostering a
              culture of continuous learning and development.
            </li>
          </ul>
          <p className="font-medium"> Team Leadership</p>
          <ul className="mb-7">
            <li>
              - Provide technical leadership and guidance to the Magento
              development team, leveraging your extensive experience in software
              engineering.
            </li>
            <li>
              - Architect scalable and robust solutions that meet business
              objectives and industry best practices.
            </li>
            <li>
              - Mentor and coach junior and mid-level engineers, fostering a
              culture of continuous learning and development.
            </li>
          </ul>
          <p className="font-medium"> Team Leadership</p>
          <ul>
            <li>
              - Provide technical leadership and guidance to the Magento
              development team, leveraging your extensive experience in software
              engineering.
            </li>
            <li>
              - Architect scalable and robust solutions that meet business
              objectives and industry best practices.
            </li>
            <li>
              - Mentor and coach junior and mid-level engineers, fostering a
              culture of continuous learning and development.
            </li>
          </ul>
        </div>

        <div>
          <p className="text-lg font-medium">Job Requirements</p>
          <ul className="mb-7 text-textLight">
            <li>
              - Provide technical leadership and guidance to the Magento
              development team, leveraging your extensive experience in software
              engineering.
            </li>
            <li>
              - Architect scalable and robust solutions that meet business
              objectives and industry best practices.
            </li>
            <li>
              - Mentor and coach junior and mid-level engineers, fostering a
              culture of continuous learning and development.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[18rem]">
        <button className="w-full flex justify-center py-3 bg-primary text-white hover:bg-opacity-75 rounded-md">
          Apply
        </button>
      </div>
    </section>
  );
};

export default JobDescription;
