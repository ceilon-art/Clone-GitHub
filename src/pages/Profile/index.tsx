import React from "react";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={"ceilon-art"}
            name={"André Luiz"}
            avatarUrl={"https://avatars1.githubusercontent.com/u/61718915?v=4"}
            followers={405}
            following={35}
            company={"Fab"}
            location={"São Paulo, Brazil"}
            email={"andreluizkanaan222@gmail.com"}
            blog={undefined}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"ceilon-art"}
                  reponame={"FlexMovie"}
                  description={"Clone of Netflix"}
                  language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent de actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
