import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { Form, Formik } from "formik";
import FormikTextArea from "../Formik/FormikTextArea";
import FormikInput from "../Formik/FormikInput";
import { PiSketchLogoBold } from "react-icons/pi";

const ServiceContact = () => {
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
    <section className="pt-[8rem] px-2 md:px-4 xl:px-container 2xl:px-[15rem] flex flex-col md:flex-row justify-between gap-20">
      <div className="flex-1 ">
        <p className="font-bold uppercase mb-5">
          <PiSketchLogoBold className="text-xl" />
        </p>
        <h3 className="mb-8 text-transparent font-bold text-5xl bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text overflow-visible">
          Trusted by Education Leaders
        </h3>
        <div className="bg-[url(https://th.bing.com/th/id/OIP.sJQa4EnP4SQrh17g6nIiNgAAAA?rs=1&pid=ImgDetMain)] h-[90%] bg-cover rounded-3xl text-xl leading-loose p-10 flex flex-col justify-center ">
          Our experience with Rhombus has been excellent. They’re one of the
          most diligent teams in the whole Atlanta area. I have been in the
          technology industry for many years, and I like the way Rhombus does
          business. They genuinely care about creating a product and service
          that fits their users’ needs.
          <p className="font-semibold mt-5">Dr.Bo Tang</p>
          <p>Director</p>
        </div>
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
              <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-7 text-textLight text-lg">
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

                <div className="sm:col-span-2 md:col-span-1 xl:col-span-2">
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

                <div className="sm:col-span-2 md:col-span-1 xl:col-span-2 ">
                  {" "}
                  <FormikInput
                    name="country"
                    label="Country "
                    type="text"
                    className="block w-full border-b border-grayLine outline-none focus:border-primary pb-2"
                    // required={true}
                  ></FormikInput>
                </div>
                <div className="sm:col-span-2 md:col-span-1 xl:col-span-2">
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

export default ServiceContact;
