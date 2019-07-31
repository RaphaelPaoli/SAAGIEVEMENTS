import { gql } from 'apollo-boost';

const ADD_ACHIEVEMENT = gql`
  mutation addAchievement($achievement: AchievementInput!) {
    addAchievement(achievement: $achievement) {
      id
      goal
      unlocked    
    }
  }
`;


export default ADD_ACHIEVEMENT;
