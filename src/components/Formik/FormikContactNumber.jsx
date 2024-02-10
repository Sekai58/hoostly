/* eslint-disable react/prop-types */
import { Field } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const FormikContactNumber = ({
  name,
  label,
  type,
  setFieldValue,
  onChange,
  onBlur,
  required,
  className,
  ...props
}) => {
  const handleChange = (value) => {
    setFieldValue(name, value);
  };

  return (
    <div>
      <Field name={name}>
        {({ field, meta }) => {
          return (
            <div>
              <PhoneInput
                {...field}
                {...props}
                placeholder={label}
                type={type}
                id={name}
                country={"np"}
                enableAreaCodes={true}
                onlyCountries={["np"]}
                value={field.value}
                onChange={(value) => handleChange(value)}
                inputStyle={{
                  background: "white",
                }}
              />

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

export default FormikContactNumber;
