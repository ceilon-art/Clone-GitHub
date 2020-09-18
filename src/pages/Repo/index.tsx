import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Breadcrum,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrum>
        <RepoIcon />
        <Link className={"username"} to={"/ceilon-art"}>
          ceilon-art
        </Link>
        <span>/</span>
        <Link className={"reponame"} to={"/ceilon-art/Flex-Movie"}>
          Flex-Movie
        </Link>
      </Breadcrum>

      <p>Clone of Netflix</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>

        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/ceilon-art/Flex-Movie"}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
