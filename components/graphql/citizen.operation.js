import { gql } from "@apollo/client";

export const SEARCH_CITIZEN_QUERY = gql`
  query SearchCitizen($data: SearchQuery!, $take: Int, $skip: Int) {
    searchCitizen(data: $data, take: $take, skip: $skip) {
      data {
        id
        last_name
        first_name
        middle_name
        dob
        pob
        delivery_place
        box
        packs
        status
      }
      count
    }
  }
`;

export const ALL_CITIZEN_QUERY = gql`
  query inventories {
    inventories {
      id
      last_name
      first_name
    }
  }
`;

export const CITIZEN_BY_ID_QUERY = gql`
  query searchCitizenID($id: String) {
    searchCitizenID(id: $id) {
      id
      last_name
      first_name
      middle_name
      dob
      pob
      reg_date
      box
      packs
    }
  }
`;
