/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTraineeCredit = /* GraphQL */ `
  query GetTraineeCredit($id: ID!) {
    getTraineeCredit(id: $id) {
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
export const listTraineeCredits = /* GraphQL */ `
  query ListTraineeCredits(
    $filter: ModelTraineeCreditFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTraineeCredits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userName
        sectionTitle
        credit
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
