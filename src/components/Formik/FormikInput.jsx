/* eslint-disable react/prop-types */
import { Field } from "formik";

const FormikInput = ({
  name,
  label,
  type,
  onChange,
  required,
  className,
  ...props
}) => {
  return (
    <div>
      <Field name={name}>
        {({ field, meta }) => {
          return (
            <div>
              {/* <label htmlFor={name}>
                {label}{" "}
                {required ? <span style={{ color: "red" }}>*</span> : null}
              </label> */}
              <input
                {...field}
                {...props}
                placeholder={label}
                type={type}
                id={name}
                value={meta.value}
                onChange={onChange ? onChange : field.onChange}
                className={`${className}`}
              ></input>
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

export default FormikInput;
