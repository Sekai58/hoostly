/* eslint-disable react/prop-types */
import { Field } from "formik";

const FormikTextArea = ({
  name,
  label,
  type,
  onChange,
  required,
  ...props
}) => {
  return (
    <div>
      <Field name={name}>
        {({ field, meta }) => {
          return (
            <div>
              <label htmlFor={name} className="block">
                {label}{" "}
                {required ? <span style={{ color: "red" }}>*</span> : null}
              </label>
              <textarea
                className="outline-none rounded-md border border-[#c3c3c3] focus:border-primary w-full min-h-[5rem] lg:min-h-[7rem] sm:w-[90%] md:w-[60%] xl:w-[50%] max-w-[32rem]"
                {...field}
                {...props}
                type={type}
                id={name}
                value={meta.value}
                onChange={onChange ? onChange : field.onChange}
              ></textarea>
              {meta.touched && meta.error ? (
                <div style={{ color: "red" }}>{meta.error}</div>
              ) : null}
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default FormikTextArea;
