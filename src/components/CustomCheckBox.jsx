import React from "react";
import {
  Divider,
  Label,
} from "semantic-ui-react";
import { useField } from "formik";

const CustomCheckBox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
      <div>
        <label className="checkbox-input">
          <input
            type="checkbox"
            {...field}
            {...props}
            style={{ marginRight: "0.4em" }}
          />
          {children}
        </label>
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

  export default CustomCheckBox;