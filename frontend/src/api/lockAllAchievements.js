import { gql } from 'apollo-boost';

const LOCK_ACHIEVEMENTS = gql`
mutation {
    lockAllAchievements{
      id
      goal
      unlocked
    }
  }
`;


export default LOCK_ACHIEVEMENTS;
