import React from "react";
import {
  Container,
  Wrapper,
  Button,
  Image,
  ProfileContainer,
  Info,
  Name,
  Location,
  Section,
} from "./Profile.styles";
import profilePic from "../../assets/profile-pic.jpg";
import { MdOutlineArrowForwardIos as Arrow } from "react-icons/md";

const Profile = () => {
  return (
    <Container>
      <ProfileContainer>
        <Button>
          <Image src={profilePic} />
        </Button>
        <Info>
          <Name>Prosenjit Singha</Name>
          <Location>Juri, Sylhet</Location>
        </Info>
        <Button style={{ marginLeft: "auto" }}>
          <Arrow size="1.5rem" />
        </Button>
      </ProfileContainer>
      <Section>
        <Info></Info>
      </Section>
    </Container>
  );
};

export default Profile;
