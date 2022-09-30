import React, { useState } from "react";
import {
  Container,
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
  BlackOverlay,
} from "./Profile.styles";
import profilePic from "../../assets/profile-pic.jpg";
import {
  MdOutlineArrowForwardIos as Arrow,
  MdMyLocation as LocIcon,
} from "react-icons/md";
import { useSpring, animated } from "react-spring";
import { useBreakpoint } from "react-use-size";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BREAK_TIME = "break-time";
const EXERCISE_TIME = "exercise-time";

const Profile = ({ exerciseTime, setExerciseTime }) => {
  //geting breaktime from local storage
  const localBreakTime = parseInt(localStorage.getItem(BREAK_TIME));

  const isLarge = !useBreakpoint(1280);
  const isSmall = useBreakpoint(640);
  const [breakTime, setBreakTime] = useState(
    isNaN(localBreakTime) ? 0 : localBreakTime
  );
  const [open, setOpen] = useState(false);
  //spring animation start
  const breakApi = useSpring({
    value: breakTime,
    from: { value: 0 },
  });

  const exerciseTimeApi = useSpring({
    eTime: exerciseTime,
    from: { eTime: 0 },
  });
  //spring animation end

  const isOpen = isLarge || open;

  const updateBreakTime = (time) => {
    setBreakTime(time);
    localStorage.setItem(BREAK_TIME, time);
  };

  // Toast
  const notify = () => toast.success("Activity Completed!");

  const handleCompletedClick = () => {
    notify();
    setBreakTime(0);
    setExerciseTime(0);
    localStorage.removeItem(BREAK_TIME);
    localStorage.removeItem(EXERCISE_TIME);
  };

  return (
    <>
      <Container isopen={isOpen}>
        <ProfileContainer>
          <Button onClick={() => setOpen(true)} title="profile info">
            <Image src={profilePic} />
          </Button>
          <Info isopen={isOpen}>
            <Name>Prosenjit Singha</Name>
            <Location>
              <LocIcon
                style={{
                  marginRight: "0.5rem",
                }}
                color="white"
              />{" "}
              Juri, Sylhet
            </Location>
          </Info>
          <Button
            aria-label="close"
            title="close button"
            onClick={() => setOpen(false)}
            style={{ marginLeft: "auto", display: isLarge ? "none" : "block" }}
          >
            <Arrow size="1.5rem" />
          </Button>
        </ProfileContainer>

        <Section isopen={isOpen} style={{ marginTop: "2rem" }}>
          <Info isopen={isOpen}>
            <Value data-unit="kg">53</Value>
            <Prop>Weight</Prop>
          </Info>
          <Info isopen={isOpen}>
            <Value data-unit="ft">5.85</Value>
            <Prop>Height</Prop>
          </Info>
          <Info isopen={isOpen}>
            <Value data-unit="yrs">24</Value>
            <Prop>Age</Prop>
          </Info>
        </Section>

        <Heading isopen={isOpen}>Add a break</Heading>
        <Section isopen={isOpen}>
          <BreakBtn
            isactive={breakTime === 10 ? "true" : "false"}
            onClick={() => updateBreakTime(10)}
          >
            10s
          </BreakBtn>
          <BreakBtn
            isactive={breakTime === 20 ? "true" : "false"}
            onClick={() => updateBreakTime(20)}
          >
            20s
          </BreakBtn>
          <BreakBtn
            isactive={breakTime === 30 ? "true" : "false"}
            onClick={() => updateBreakTime(30)}
          >
            30s
          </BreakBtn>
          <BreakBtn
            isactive={breakTime === 40 ? "true" : "false"}
            onClick={() => updateBreakTime(40)}
          >
            40s
          </BreakBtn>
          <BreakBtn
            isactive={breakTime === 50 ? "true" : "false"}
            onClick={() => updateBreakTime(50)}
          >
            50s
          </BreakBtn>
        </Section>

        <Heading isopen={isOpen}>Exercise details</Heading>
        <Section
          isopen={isOpen}
          style={{ justifyContent: "space-between", marginBottom: "0.5rem" }}
        >
          <SubHeading>Exercise time</SubHeading>
          <Time>
            <animated.span>
              {exerciseTimeApi.eTime.to((t) => t.toFixed(0))}
            </animated.span>
            &thinsp;seconds
          </Time>
        </Section>

        <Section
          isopen={isOpen}
          style={{ justifyContent: "space-between", marginTop: "0.5rem" }}
        >
          <SubHeading>Break time</SubHeading>
          <Time>
            <animated.span>
              {breakApi.value.to((b) => b.toFixed(0))}
            </animated.span>
            &thinsp;seconds
          </Time>
        </Section>

        <CompletedBtn isopen={isOpen} onClick={handleCompletedClick}>
          Activity Completed
        </CompletedBtn>
        <ToastContainer
          position={isSmall ? "top-center" : "bottom-left"}
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Slide}
          theme="dark"
        />
      </Container>
      {/* this will not show on large device */}
      {!isLarge && <BlackOverlay isopen={isOpen} />}
    </>
  );
};

export default Profile;
