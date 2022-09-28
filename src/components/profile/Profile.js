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
  Prop,
  Value,
  Heading,
  SubHeading,
  BreakBtn,
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
        <Info>
          <Value data-unit="kg">53</Value>
          <Prop>Weight</Prop>
        </Info>
        <Info>
          <Value data-unit="ft">5.85</Value>
          <Prop>Height</Prop>
        </Info>
        <Info>
          <Value data-unit="yrs">24</Value>
          <Prop>Age</Prop>
        </Info>
      </Section>
      <Heading>Add a break</Heading>
      <Section>
        <BreakBtn>10s</BreakBtn>
        <BreakBtn>20s</BreakBtn>
        <BreakBtn>30s</BreakBtn>
        <BreakBtn>40s</BreakBtn>
        <BreakBtn>50s</BreakBtn>
      </Section>
    </Container>
  );
};

export default Profile;
