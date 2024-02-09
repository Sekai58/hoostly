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
    <div>
      <Field name={name}>
        {({ field, meta }) => {
          return (
            <div>
              <label htmlFor={name} className=" text-grayLine">
                {label}{" "}
                {required ? <span style={{ color: "red" }}>*</span> : null}
              </label>
              <select
                {...field}
                {...props}
                id={name}
                value={meta.value}
                onChange={onChange ? onChange : field.onChange}
                className="block py-1 outline-none rounded-md border border-[#c3c3c3] focus:border-primary w-full sm:w-[90%] md:w-[60%] xl:w-[50%] max-w-[16rem]"
              >
                {options.map((item, i) => {
                  return (
                    <option key={i} value={item.value}>
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
