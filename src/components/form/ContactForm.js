import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { Form, Formik } from "formik";
import FormikTextArea from "../Formik/FormikTextArea";
import FormikInput from "../Formik/FormikInput";

const ContactCard = ({ icon, title, subtitle }) => {
  return (
    <div className="flex items-center py-4 gap-4">
      {icon}
      <p className="text-primary font-bold text-xl">
        {title}
        <span className="text-textLight text-[14px] block ">{subtitle}</span>
      </p>
    </div>
  );
};

const ContactForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    jobTitle: "",
    company: "",
    employeeCount: "",
    country: "",
    message: "",
  };

  const onSubmit = (value, other) => {
    // sendMail();
    console.log("on submit", value);
  };
  return (
    <section className="pt-[8rem] px-2 md:px-4 xl:px-container 2xl:px-[15rem] flex flex-col md:flex-row justify-between mb-[8rem]">
      <div className="flex-1">
        <p className="font-bold uppercase mb-5">Contact Sales</p>
        <h3 className="mb-3 text-transparent font-bold text-5xl bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text overflow-visible">
          Chat with our Sales Team
        </h3>
        <div className="flex flex-col gap-2 text-lg text-textLight mb-5">
          <p>
            Fill out your information and a Rhombus representative will reach
            out to you.
          </p>
          <p>
            <span className="font-semibold">Have a simple question?</span>Check
            out our
            <span className="underline"> support resources.</span>
          </p>
          <p>
            <span className="font-semibold">
              Interested in becoming a partner?
            </span>
            Learn about our
            <span className="underline">Partner Program.</span>
          </p>
        </div>

        <ContactCard
          icon={
            <FiPhone className="text-6xl bg-backgroundTransSecondary p-4 rounded-full" />
          }
          title="+1(977)746-6988"
          subtitle="Sunday- Friday, 10AM-6PM"
        />
        <ContactCard
          icon={
            <TfiEmail className="text-6xl bg-backgroundTransSecondary p-4 rounded-full" />
          }
          title="sales@gmail.com"
        />
        <ContactCard
          icon={
            <GrLocation className="text-6xl bg-backgroundTransSecondary p-4 rounded-full" />
          }
          title="Gwarko,Lalitpur"
        />
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        // onError={handleError}
        // validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form className=" flex-[0.6] flex flex-col gap-5 border border-primary rounded-xl py-5 px-4">
              <section className="grid grid-cols-1 sm:grid-cols-2 gap-7 text-textLight text-lg">
                <FormikInput
                  name="firstName"
                  label="First Name"
                  type="text"
                  className="block w-full border-b border-grayLine outline-none hover:border-primary focus:border-primary pb-2"
                  required={true}
                ></FormikInput>

                <FormikInput
                  name="lastName"
                  label="Last Name"
                  type="text"
                  className="block w-full border-b border-grayLine outline-none focus:border-primary pb-2"
                  required={true}
                ></FormikInput>

                <div className="col-span-1 sm:col-span-2">
                  <FormikInput
                    name="email"
                    label="Email"
                    type="text"
                    className="block w-full border-b border-grayLine outline-none focus:border-primary pb-2"
                    required={true}
                  ></FormikInput>
                </div>

                <FormikInput
                  name="phoneNumber"
                  label="Phone Number "
                  type="text"
                  className="block w-full border-b border-grayLine outline-none focus:border-primary pb-2"
                  // required={true}
                ></FormikInput>

                <FormikInput
                  name="jobTitle"
                  label="Job Title "
                  type="text"
                  className="block w-full border-b border-grayLine outline-none focus:border-primary pb-2"
                  // required={true}
                ></FormikInput>

                <FormikInput
                  name="company"
                  label="Company "
                  type="text"
                  className="block w-full border-b border-grayLine outline-none focus:border-primary pb-2"
                  // required={true}
                ></FormikInput>

                <FormikInput
                  name="employeeCount"
                  label="Employee Count "
                  type="text"
                  className="block w-full border-b border-grayLine outline-none focus:border-primary pb-2"
                  // required={true}
                ></FormikInput>

                <div className="col-span-1 sm:col-span-2 ">
                  {" "}
                  <FormikInput
                    name="country"
                    label="Country "
                    type="text"
                    className="block w-full border-b border-grayLine outline-none focus:border-primary pb-2"
                    // required={true}
                  ></FormikInput>
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <FormikTextArea
                    name="message"
                    label="Send Message"
                    type="text"
                    className="p-2 min-h-[8rem] block w-full border rounded-md border-grayLine outline-none focus:border-primary"
                    required={true}
                  />
                </div>
              </section>

              <button
                type="submit"
                className="w-full  py-2 px-3 text-center font-medium text-white bg-gradient-to-r from-gradientStart to-gradientEnd rounded-md mt-4"
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default ContactForm;
