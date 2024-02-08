import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { MdDelete } from "react-icons/md";
import FormikImage from "../Formik/FormikImage";
// import FormikTextArea from "../Formik/FormikTextArea";
import FormikInput from "../Formik/FormikInput";
import FormikSelect from "../Formik/FormikSelect";
// import { sendMail } from "./Mail";

const JobForm = ({ setIsOpen, handleSubmit }) => {
  const [filename, setFilename] = useState(null);
  const [coverLetterFile, setCoverLetterFile] = useState(null);

  const initialValues = {
    firstName: "",
    lastName: "",
    contactNumber: "",
    experience: "",
    github: "",
    linkedIn: "",
    resume: "",
    protfolio: "",
    coverLetter: "",
  };

  const onSubmit = (value, other) => {
    // sendMail();

    console.log("on submit", value);
  };

  const handleError = (error) => {
    console.log(error);
  };

  const validationSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    contactNumber: yup.number().required(),
    experience: yup.string().required(),
    github: yup.string(),
    linkedIn: yup.string(),
    protfolio: yup.string(),
    resume: yup.string().required(),
    coverLetter: yup.string().required(),
  });

  return (
    <div className="px-2 md:px-4 xl:px-container mb-10">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        onError={handleError}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form className="flex flex-col gap-5 border border-primary rounded-md p-5 max-w-[40rem]">
              <div className="grid grid-cols-2 gap-7">
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
                  className="block w-full border-b border-grayLine outline-none hover:border-primary focus:border-primary pb-2"
                  required={true}
                ></FormikInput>

                {filename ? (
                  <div className="outline-none rounded-md border border-[#c3c3c3] hover:border-primary w-full sm:w-[95%] min-h-[5rem] lg:min-h-[5rem] max-w-[25rem] flex items-center justify-center">
                    <button className="flex items-center justify-center gap-3">
                      {filename}
                      <MdDelete
                        className="text-bold text-primary"
                        onClick={() => setFilename(null)}
                      />
                    </button>
                  </div>
                ) : (
                  <FormikImage
                    name="resume"
                    label="Upload resume"
                    setFilename={setFilename}
                  ></FormikImage>
                )}

                {coverLetterFile ? (
                  <div className="outline-none rounded-md border border-[#c3c3c3] hover:border-primary w-full sm:w-[95%] min-h-[5rem] lg:min-h-[5rem] max-w-[25rem] flex items-center justify-center">
                    <button className="flex items-center justify-center gap-3">
                      {filename}
                      <MdDelete
                        className="text-bold text-primary"
                        onClick={() => setCoverLetterFile(null)}
                      />
                    </button>
                  </div>
                ) : (
                  <FormikImage
                    name="coverLetter"
                    label="Upload Cover Letter"
                    setFilename={coverLetterFile}
                  ></FormikImage>
                )}

                <FormikSelect
                  name="experience"
                  label="Years of Experience:"
                  options={[
                    { value: "one", label: "1" },
                    { value: "two", label: "2" },
                    { value: "three", label: "3" },
                    { value: "more", label: "3+" },
                  ]}
                ></FormikSelect>

                <FormikInput
                  name="github"
                  label="Enter GitHub link: "
                  type="text"
                  className="block w-full border-b border-grayLine outline-none hover:border-primary focus:border-primary pb-2"
                  // required={true}
                ></FormikInput>

                <FormikInput
                  name="linkedIn"
                  label="Enter LinkedIn: "
                  type="text"
                  className="block w-full border-b border-grayLine outline-none hover:border-primary focus:border-primary pb-2"
                  // required={true}
                ></FormikInput>

                <FormikInput
                  name="protfolio"
                  label="Protfolio Link: "
                  type="text"
                  className="block w-full border-b border-grayLine outline-none hover:border-primary focus:border-primary pb-2"
                  // required={true}
                ></FormikInput>
              </div>

              <FormikInput
                name="contactNumber"
                label="Enter contact number: "
                className="block w-full border-b border-grayLine outline-none hover:border-primary focus:border-primary pb-2"
                type="number"
                required={true}
              ></FormikInput>

              {/* <FormikTextArea
                name="coverLetter"
                label="Cover Letter"
                type="text"
                className="p-2 min-h-[8rem] block w-full border rounded-md border-grayLine outline-none focus:border-primary"
                required={true}
              /> */}

              <button
                type="submit"
                className="w-full py-1 px-3 text-center font-medium text-white bg-gradient-to-r from-gradientStart to-gradientEnd  rounded-md mt-4"
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default JobForm;
