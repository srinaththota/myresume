import { gql } from '@apollo/client'

export const FETCH_CERTIFICATIONS=gql`
{
    getCertifications{
      data{
        name
        desc
      }
    }
  }
`