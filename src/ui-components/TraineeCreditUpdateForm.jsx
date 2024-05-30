/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getTraineeCredit } from "../graphql/queries";
import { updateTraineeCredit } from "../graphql/mutations";
const client = generateClient();
export default function TraineeCreditUpdateForm(props) {
  const {
    id: idProp,
    traineeCredit: traineeCreditModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userName: "",
    sectionTitle: "",
    credit: "",
  };
  const [userName, setUserName] = React.useState(initialValues.userName);
  const [sectionTitle, setSectionTitle] = React.useState(
    initialValues.sectionTitle
  );
  const [credit, setCredit] = React.useState(initialValues.credit);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = traineeCreditRecord
      ? { ...initialValues, ...traineeCreditRecord }
      : initialValues;
    setUserName(cleanValues.userName);
    setSectionTitle(cleanValues.sectionTitle);
    setCredit(cleanValues.credit);
    setErrors({});
  };
  const [traineeCreditRecord, setTraineeCreditRecord] = React.useState(
    traineeCreditModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTraineeCredit.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTraineeCredit
        : traineeCreditModelProp;
      setTraineeCreditRecord(record);
    };
    queryData();
  }, [idProp, traineeCreditModelProp]);
  React.useEffect(resetStateValues, [traineeCreditRecord]);
  const validations = {
    userName: [{ type: "Required" }],
    sectionTitle: [{ type: "Required" }],
    credit: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userName,
          sectionTitle,
          credit,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateTraineeCredit.replaceAll("__typename", ""),
            variables: {
              input: {
                id: traineeCreditRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TraineeCreditUpdateForm")}
      {...rest}
    >
      <TextField
        label="User name"
        isRequired={true}
        isReadOnly={false}
        value={userName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName: value,
              sectionTitle,
              credit,
            };
            const result = onChange(modelFields);
            value = result?.userName ?? value;
          }
          if (errors.userName?.hasError) {
            runValidationTasks("userName", value);
          }
          setUserName(value);
        }}
        onBlur={() => runValidationTasks("userName", userName)}
        errorMessage={errors.userName?.errorMessage}
        hasError={errors.userName?.hasError}
        {...getOverrideProps(overrides, "userName")}
      ></TextField>
      <TextField
        label="Section title"
        isRequired={true}
        isReadOnly={false}
        value={sectionTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              sectionTitle: value,
              credit,
            };
            const result = onChange(modelFields);
            value = result?.sectionTitle ?? value;
          }
          if (errors.sectionTitle?.hasError) {
            runValidationTasks("sectionTitle", value);
          }
          setSectionTitle(value);
        }}
        onBlur={() => runValidationTasks("sectionTitle", sectionTitle)}
        errorMessage={errors.sectionTitle?.errorMessage}
        hasError={errors.sectionTitle?.hasError}
        {...getOverrideProps(overrides, "sectionTitle")}
      ></TextField>
      <SelectField
        label="Credit"
        placeholder="Please select an option"
        isDisabled={false}
        value={credit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userName,
              sectionTitle,
              credit: value,
            };
            const result = onChange(modelFields);
            value = result?.credit ?? value;
          }
          if (errors.credit?.hasError) {
            runValidationTasks("credit", value);
          }
          setCredit(value);
        }}
        onBlur={() => runValidationTasks("credit", credit)}
        errorMessage={errors.credit?.errorMessage}
        hasError={errors.credit?.hasError}
        {...getOverrideProps(overrides, "credit")}
      >
        <option
          children="None"
          value="NONE"
          {...getOverrideProps(overrides, "creditoption0")}
        ></option>
        <option
          children="Half"
          value="HALF"
          {...getOverrideProps(overrides, "creditoption1")}
        ></option>
        <option
          children="Full"
          value="FULL"
          {...getOverrideProps(overrides, "creditoption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || traineeCreditModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || traineeCreditModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
