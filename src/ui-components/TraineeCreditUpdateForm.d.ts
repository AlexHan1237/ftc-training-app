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
export declare type TraineeCreditUpdateFormInputValues = {
    userName?: string;
    sectionTitle?: string;
    credit?: string;
};
export declare type TraineeCreditUpdateFormValidationValues = {
    userName?: ValidationFunction<string>;
    sectionTitle?: ValidationFunction<string>;
    credit?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TraineeCreditUpdateFormOverridesProps = {
    TraineeCreditUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    sectionTitle?: PrimitiveOverrideProps<TextFieldProps>;
    credit?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type TraineeCreditUpdateFormProps = React.PropsWithChildren<{
    overrides?: TraineeCreditUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    traineeCredit?: any;
    onSubmit?: (fields: TraineeCreditUpdateFormInputValues) => TraineeCreditUpdateFormInputValues;
    onSuccess?: (fields: TraineeCreditUpdateFormInputValues) => void;
    onError?: (fields: TraineeCreditUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TraineeCreditUpdateFormInputValues) => TraineeCreditUpdateFormInputValues;
    onValidate?: TraineeCreditUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TraineeCreditUpdateForm(props: TraineeCreditUpdateFormProps): React.ReactElement;
