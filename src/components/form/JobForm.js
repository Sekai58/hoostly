import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { MdDelete } from "react-icons/md";
import FormikImage from "../Formik/FormikImage";
import FormikTextArea from "../Formik/FormikTextArea";
import FormikInput from "../Formik/FormikInput";
import FormikSelect from "../Formik/FormikSelect";

const JobForm = ({ setIsOpen, handleSubmit }) => {
  const [filename, setFilename] = useState(null);

  const initialValues = {
    name: "",
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

  const handleError = (error) => {
    console.log(error);
  };

  const validationSchema = yup.object({
    name: yup.string().required(),
    contactNumber: yup.number().required(),
    experience: yup.string().required(),
    github: yup.string(),
    linkedIn: yup.string(),
    resume: yup.string().required(),
    protfolio: yup.string(),
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
            <Form className="flex flex-col gap-5">
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

              <FormikInput
                name="name"
                label="Full Name: "
                type="text"
                required={true}
              ></FormikInput>

              <FormikInput
                name="contactNumber"
                label="Enter contact number: "
                type="number"
                required={true}
              ></FormikInput>

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
                // required={true}
              ></FormikInput>

              <FormikInput
                name="linkedIn"
                label="Enter LinkedIn: "
                type="text"
                // required={true}
              ></FormikInput>

              <FormikInput
                name="protfolio"
                label="Protfolio Link: "
                type="text"
                // required={true}
              ></FormikInput>

              <FormikTextArea
                name="coverLetter"
                label="Cover Letter"
                type="text"
                required={true}
              />

              <button
                type="submit"
                className="py-1 px-3 text-center font-medium w-fit text-white bg-primary rounded-md mt-4"
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
