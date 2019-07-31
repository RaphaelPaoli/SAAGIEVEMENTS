import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { Redirect } from 'react-router';
import ADD_ACHIEVEMENT from '../api/addAchievement';
import AchievementInput from '../models/AchievementInput';
import Page from '../components/structure/Page';
import Header from '../components/structure/Header';
import AchievementForm from '../components/achievement/AchievementForm';


const NewAchievement = () => {
  const [redirect, setRedirect] = useState(false);
  const [achievement, setAchievement] = useState(new AchievementInput(''));

  return (
    <Page>
      <Header title="SaagieVements" buttonTitle="Back To List" link="/" />
      <div className="sui-g-grid__item">
        <h3 className="sui-h-mb-md">
          Would you create us a new achievement ? :D
        </h3>
        <>
          {redirect ? (
            <Redirect to="/" />
          ) : (
            <Mutation
              mutation={ADD_ACHIEVEMENT}
              variables={{ achievement }}
              onCompleted={(data) => {
                if (achievement !== data) {
                  setRedirect(true);
                }
              }}
            >
              {(handlePostMutation, { loading, error }) => (
                <AchievementForm
                  handleClick={handlePostMutation}
                  setAchievement={setAchievement}
                  loading={loading}
                  error={error}
                />
              )}
            </Mutation>
          )}
        </>
      </div>
    </Page>
  );
};

export default NewAchievement;
