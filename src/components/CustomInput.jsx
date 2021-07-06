import React from "react";
import { Input, Icon, Divider, Label } from "semantic-ui-react";
import { useField } from "formik";

const CustomInput = ({ label, icon, iconPosition, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} style={{ fontWeight: "bold" }}>
        {label}
      </label>
      <Input
        fluid = {props.fluid}
        iconPosition={iconPosition == null ? "left" : iconPosition}
        placeholder={props.placeholder}
      >
        <Icon name={icon} />
        <input className="text-input" {...props} {...field} />
      </Input>
      {meta.touched && meta.error ? (
        <div className="error">
          <Label basic color="red" pointing>
            {meta.error}
          </Label>
          <Divider />
        </div>
      ) : null}
    </>
  );
};

export default CustomInput;
