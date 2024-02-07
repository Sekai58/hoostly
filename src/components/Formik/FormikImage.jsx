/* eslint-disable react/prop-types */
import { Field } from "formik";
const FormikImage = ({
  name,
  label,
  type,
  onChange,
  onWheel,
  required,
  setFieldValue,
  setFilename,
  formik,
  ...props
}) => {
  // edit handleFile by self
  const handleFile = async (e, form) => {
    console.log(e.target.files[0].name);
    setFilename(e.target.files[0].name);
    const formData = new FormData();
    let images = [...e.target.files];
    images.forEach((file, index) => {
      formData.append(`files`, file);
    });
    try {
      // let result = await axios({
      //   url: "http://localhost:8000/files",
      //   method: "POST",
      //   data: formData,
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });

      // form.setFieldValue("profileImage", result.data.result[0]);
      console.log(formData);
      // form.setFieldValue("image")
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Field name={name}>
        {({ field, form, meta }) => {
          return (
            <div className="mb-4">
              <label
                htmlFor={name}
                className="cursor-pointer outline-none rounded-md border border-[#c3c3c3] hover:border-primary w-full sm:w-[95%] min-h-[5rem] lg:min-h-[5rem] max-w-[25rem] flex items-center justify-center"
              >
                <span className="text-bold text-primary">{label}</span>
              </label>
              <input
                {...field}
                {...props}
                type="file"
                value=""
                id={name}
                onChange={(e) => handleFile(e, form)}
                className="hidden"
              ></input>
              {meta.touched && meta.error ? (
                <div className="text-red-600 text-sm">{meta.error}</div>
              ) : null}
            </div>
          );
        }}
      </Field>
    </div>
  );
};
export default FormikImage;
