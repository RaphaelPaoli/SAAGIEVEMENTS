import React from 'react';
import { Query } from 'react-apollo';
import GET_ACHIEVEMENTS from '../api/getAchievements';
import Page from '../components/structure/Page';
import Header from '../components/structure/Header';
import ErrorMessage from '../components/structure/error/ErrorMessage';
import LoadingMessage from '../components/structure/loading/LoadingMessage';
import AchievementList from '../components/achievement/AchievementList';
import AchievementFooter from '../components/achievement/AchievementFooter';


const HomeAchievement = () => (
  <>
    <Page>
      <Header
        title="SaagieVements"
        buttonTitle="New achievement"
        link="/new-achievement"
      />
      <div className="sui-g-grid__item">
        <div className="sui-g-grid__item">
          <Query query={GET_ACHIEVEMENTS} fetchPolicy="cache-and-network">
            {({ loading, error, data }) => {
              if (loading) return <LoadingMessage />;
              if (error) return <ErrorMessage error={error} />;

              return (
                <div>
                  <h3 className="sui-h-mb-md">
                    Have fun to unlock the following achievements
                  </h3>

                  <AchievementList achievements={data.allAchievements} />
                  <AchievementFooter achievements={data.allAchievements} />
                </div>
              );
            }}
          </Query>
        </div>
      </div>
    </Page>
  </>
);

export default HomeAchievement;
