import React from "react";
import { Divider, Dropdown, Label } from "semantic-ui-react";
import { useField } from "formik";

const CustomDropdown = ({ label, ...props }) => {
  const [meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name} style={{ fontWeight: "bold" }}>
        {label}
      </label>
      <Dropdown
        fluid = {props.fluid}
        selection
        clearable
        options={props.options}
        placeholder={props.placeholder}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">
          <Label basic color="red" pointing>
            {meta.error}
          </Label>
          <Divider />
        </div>
      ) : null}
    </div>
  );
};

export default CustomDropdown;
