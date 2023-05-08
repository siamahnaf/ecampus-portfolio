import { gql } from "urql";

export const GET_NOTICE_LIST = gql`
query getNotices($searchInput: SearchInput!) {
    getNotices(searchInput: $searchInput) {
      id
      title
      description
      pdf
      createdBy {
        name
        phone
      }
      created_at
    }
}
`;