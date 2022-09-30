import styled from "styled-components";
import { device } from "../utils/device";

export const Wrapper = styled.div`
  padding-inline: max(1.5rem, calc(100vw - 1280px));
  @media ${device.xl} {
    padding-left: max(1.5rem, calc(100vw - 1280px) / 2);
  }
`;
