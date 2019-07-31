import { gql } from 'apollo-boost';

const GET_ACHIEVEMENTS = gql`
{
    allAchievements{
      id
      goal
      unlocked
    }
}`;

export default GET_ACHIEVEMENTS;
