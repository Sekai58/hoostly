/* eslint-disable react/prop-types */
import { Field } from "formik";

const FormikCheckBox = ({ name, label, onChange, required, ...props }) => {
  return (
    <div>
      <Field name={name}>
        {({ field, meta }) => {
          return (
            <div>
              <label htmlFor={name}>
                {label}{" "}
                {required ? <span style={{ color: "red" }}>*</span> : null}
              </label>
              <input
                {...field}
                {...props}
                id={name}
                type="checkbox"
                onChange={onChange ? onChange : field.onChange}
                checked={meta.value}
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

export default FormikCheckBox;
