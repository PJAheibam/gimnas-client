import React, { useState } from "react";
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
  Time,
  CompletedBtn,
} from "./Profile.styles";
import profilePic from "../../assets/profile-pic.jpg";
import { MdOutlineArrowForwardIos as Arrow } from "react-icons/md";
import { useSpring, animated } from "react-spring";

const Profile = ({ exerciseTime }) => {
  const [breakTime, setBreakTime] = useState(0);
  const [open, setOpen] = useState(false);
  const breakApi = useSpring({
    value: breakTime,
    from: { value: 0 },
  });
  return (
    <Container isopen={open}>
      <ProfileContainer>
        <Button onClick={() => setOpen(true)}>
          <Image src={profilePic} />
        </Button>
        <Info isopen={open}>
          <Name>Prosenjit Singha</Name>
          <Location>Juri, Sylhet</Location>
        </Info>
        <Button
          aria-label="close"
          title="close button"
          onClick={() => setOpen(false)}
          style={{ marginLeft: "auto" }}
        >
          <Arrow size="1.5rem" />
        </Button>
      </ProfileContainer>

      <Section isopen={open} style={{ marginTop: "2rem" }}>
        <Info isopen={open}>
          <Value data-unit="kg">53</Value>
          <Prop>Weight</Prop>
        </Info>
        <Info isopen={open}>
          <Value data-unit="ft">5.85</Value>
          <Prop>Height</Prop>
        </Info>
        <Info isopen={open}>
          <Value data-unit="yrs">24</Value>
          <Prop>Age</Prop>
        </Info>
      </Section>

      <Heading isopen={open}>Add a break</Heading>
      <Section isopen={open}>
        <BreakBtn
          isactive={breakTime === 10 ? "true" : "false"}
          onClick={() => setBreakTime(10)}
        >
          10s
        </BreakBtn>
        <BreakBtn
          isactive={breakTime === 20 ? "true" : "false"}
          onClick={() => setBreakTime(20)}
        >
          20s
        </BreakBtn>
        <BreakBtn
          isactive={breakTime === 30 ? "true" : "false"}
          onClick={() => setBreakTime(30)}
        >
          30s
        </BreakBtn>
        <BreakBtn
          isactive={breakTime === 40 ? "true" : "false"}
          onClick={() => setBreakTime(40)}
        >
          40s
        </BreakBtn>
        <BreakBtn
          isactive={breakTime === 50 ? "true" : "false"}
          onClick={() => setBreakTime(50)}
        >
          50s
        </BreakBtn>
      </Section>

      <Heading isopen={open}>Exercise details</Heading>
      <Section
        isopen={open}
        style={{ justifyContent: "space-between", marginBottom: "0.5rem" }}
      >
        <SubHeading>Exercise time</SubHeading>
        <Time>{exerciseTime}&thinsp;seconds</Time>
      </Section>

      <Section
        isopen={open}
        style={{ justifyContent: "space-between", marginTop: "0.5rem" }}
      >
        <SubHeading>Breaktime time</SubHeading>
        <Time>
          <animated.span>
            {breakApi.value.to((b) => b.toFixed(0))}
          </animated.span>
          &thinsp;seconds
        </Time>
      </Section>

      <CompletedBtn isopen={open}>Activity Completed</CompletedBtn>
    </Container>
  );
};

export default Profile;
