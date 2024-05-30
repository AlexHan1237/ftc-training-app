/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TraineeCreditCreateFormInputValues = {
    userName?: string;
    sectionTitle?: string;
    credit?: string;
};
export declare type TraineeCreditCreateFormValidationValues = {
    userName?: ValidationFunction<string>;
    sectionTitle?: ValidationFunction<string>;
    credit?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TraineeCreditCreateFormOverridesProps = {
    TraineeCreditCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    sectionTitle?: PrimitiveOverrideProps<TextFieldProps>;
    credit?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type TraineeCreditCreateFormProps = React.PropsWithChildren<{
    overrides?: TraineeCreditCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TraineeCreditCreateFormInputValues) => TraineeCreditCreateFormInputValues;
    onSuccess?: (fields: TraineeCreditCreateFormInputValues) => void;
    onError?: (fields: TraineeCreditCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TraineeCreditCreateFormInputValues) => TraineeCreditCreateFormInputValues;
    onValidate?: TraineeCreditCreateFormValidationValues;
} & React.CSSProperties>;
export default function TraineeCreditCreateForm(props: TraineeCreditCreateFormProps): React.ReactElement;
