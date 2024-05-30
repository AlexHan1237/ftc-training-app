/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTraineeCredit = /* GraphQL */ `
  mutation CreateTraineeCredit(
    $input: CreateTraineeCreditInput!
    $condition: ModelTraineeCreditConditionInput
  ) {
    createTraineeCredit(input: $input, condition: $condition) {
      id
      userName
      sectionTitle
      credit
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateTraineeCredit = /* GraphQL */ `
  mutation UpdateTraineeCredit(
    $input: UpdateTraineeCreditInput!
    $condition: ModelTraineeCreditConditionInput
  ) {
    updateTraineeCredit(input: $input, condition: $condition) {
      id
      userName
      sectionTitle
      credit
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteTraineeCredit = /* GraphQL */ `
  mutation DeleteTraineeCredit(
    $input: DeleteTraineeCreditInput!
    $condition: ModelTraineeCreditConditionInput
  ) {
    deleteTraineeCredit(input: $input, condition: $condition) {
      id
      userName
      sectionTitle
      credit
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
