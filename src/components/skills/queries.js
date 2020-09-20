import { gql } from '@apollo/client'

export const FETCH_SKILLS=gql`
{
    getSkills{
      data{
        name
        desc
      }
    }
  }
`