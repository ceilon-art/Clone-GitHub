import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Topside,
  RepoIcon,
  Botside,
  StarIcon,
  ForkIcon,
} from "./styles";

interface Props {
  key: string;
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<Props> = ({
  key,
  username,
  reponame,
  description,
  language,
  stars,
  forks,
}) => {
  const languageClass = language ? language.toLowerCase() : "other";

  return (
    <Container>
      <div>
        <Topside>
          <header>
            <RepoIcon />
            <Link to={`/${username}/${reponame}`}>{reponame}</Link>
          </header>

          <p>{description}</p>
        </Topside>

        <Botside>
          <ul>
            <li>
              <div className={`language ${languageClass}`}></div>
              <span>{language}</span>
            </li>

            <li>
              <StarIcon />
              <span>{stars}</span>
            </li>

            <li>
              <ForkIcon />
              <span>{forks}</span>
            </li>
          </ul>
        </Botside>
      </div>
    </Container>
  );
};

export default RepoCard;
