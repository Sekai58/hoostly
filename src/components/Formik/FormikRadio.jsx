/* eslint-disable react/prop-types */
import { Field } from "formik";

const FormikRadio = ({
  name,
  label,
  onChange,
  options,
  required,
  ...props
}) => {
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
              <br></br>
              {options.map((item, i) => {
                return (
                  <div key={i}>
                    <label htmlFor={name}>{item.label}</label>
                    <input
                      {...field}
                      {...props}
                      id={name}
                      type="radio"
                      value={item.value}
                      onChange={onChange ? onChange : field.onChange}
                      checked={meta.value === item.value}
                    ></input>
                    {meta.touched && meta.error ? (
                      <div style={{ color: "red" }}>{meta.error}</div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default FormikRadio;
