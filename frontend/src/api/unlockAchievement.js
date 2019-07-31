import { gql } from 'apollo-boost';

const UNLOCK_ACHIEVEMENT = gql`
  mutation unlockAchievement($id: ID!) {
    unlockAchievement(id: $id) {
      id
      goal
      unlocked  
    }
  }
`;


export default UNLOCK_ACHIEVEMENT;
