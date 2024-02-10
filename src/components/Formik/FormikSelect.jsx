/* eslint-disable react/prop-types */
import { Field } from "formik";

const FormikSelect = ({
  name,
  label,
  onChange,
  required,
  options,
  ...props
}) => {
  return (
    <div className="w-full">
      <Field name={name} className="w-full">
        {({ field, meta }) => {
          return (
            <div>
              {/* <label htmlFor={name} className=" text-grayLine">
                {label}{" "}
                {required ? <span style={{ color: "red" }}>*</span> : null}
              </label> */}
              <select
                {...field}
                {...props}
                id={name}
                value={meta.value}
                place
                onChange={onChange ? onChange : field.onChange}
                className={`block py-1 outline-none ${
                  meta.value === "" ? "text-lightGray" : ""
                } border-b border-[#c3c3c3] focus:border-primary w-full `}
              >
                {options.map((item, i) => {
                  return (
                    <option
                      key={i}
                      value={item.value}
                      disabled={i === 0 ? true : false}
                      className={`${i === 0 ? "hidden" : "text-[#232323]"}`}
                    >
                      {item.label}
                    </option>
                  );
                })}
              </select>
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

export default FormikSelect;
