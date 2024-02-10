import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { MdDelete } from "react-icons/md";
import FormikImage from "../Formik/FormikImage";
import FormikInput from "../Formik/FormikInput";
import FormikSelect from "../Formik/FormikSelect";
import FormikContactNumber from "../Formik/FormikContactNumber";

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
    console.log("on submit", value);
  };

  const validationSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    contactNumber: yup.string().required(),
    experience: yup.string().required(),
    github: yup.string(),
    linkedIn: yup.string(),
    protfolio: yup.string(),
    // resume: yup.string().required(),
    // coverLetter: yup.string().required(),
  });

  return (
    <div className="mb-10">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form className="flex flex-col gap-8 xxl:w-[40rem]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <FormikInput
                  name="firstName"
                  label="First Name"
                  type="text"
                  className="block w-full border-b border-lightGray outline-none hover:border-primary focus:border-primary pb-2"
                  required={true}
                ></FormikInput>

                <FormikInput
                  name="lastName"
                  label="Last Name"
                  type="text"
                  className="block w-full border-b border-lightGray outline-none hover:border-primary focus:border-primary pb-2"
                  required={true}
                ></FormikInput>

                <div className="sm:col-span-2">
                  <FormikSelect
                    name="experience"
                    label="Years of Experience:"
                    options={[
                      { value: "", label: "Experience" },
                      { value: "one", label: "1" },
                      { value: "two", label: "2" },
                      { value: "three", label: "3" },
                      { value: "more", label: "3+" },
                    ]}
                  ></FormikSelect>
                </div>

                <FormikContactNumber
                  name="contactNumber"
                  label="Enter contact number: "
                  className="block w-full border-b border-lightGray outline-none hover:border-primary focus:border-primary pb-2"
                  type="text"
                  required={true}
                  setFieldValue={formik.setFieldValue}
                  // setPhone={setPhone}
                />

                <FormikInput
                  name="github"
                  label="Enter GitHub link: "
                  type="text"
                  className="block w-full border-b border-lightGray outline-none hover:border-primary focus:border-primary pb-2"
                  // required={true}
                ></FormikInput>

                <FormikInput
                  name="linkedIn"
                  label="Enter LinkedIn: "
                  type="text"
                  className="block w-full border-b border-lightGray outline-none hover:border-primary focus:border-primary pb-2"
                  // required={true}
                ></FormikInput>

                <FormikInput
                  name="protfolio"
                  label="Protfolio Link: "
                  type="text"
                  className="block w-full border-b border-lightGray outline-none hover:border-primary focus:border-primary pb-2"
                  // required={true}
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
              </div>

              <button
                type="submit"
                className="w-fit py-2 px-5 text-center font-medium text-white bg-gradient-to-r from-gradientStart to-gradientEnd  rounded-md"
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
