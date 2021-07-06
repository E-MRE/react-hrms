import React from "react";
import {
  Divider,
  Label,
  TextArea,
  Form as SemanticForm,
} from "semantic-ui-react";
import { useField } from "formik";

const CustomTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name} style={{ fontWeight: "bold" }}>
          {label}
        </label>
        <SemanticForm>
          <TextArea
            {...field}
            type="text"
            fluid={props.fluid}
            name={props.name}
            placeholder={props.placeholder}
            {...props}
          />
        </SemanticForm>
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

  export default CustomTextArea;