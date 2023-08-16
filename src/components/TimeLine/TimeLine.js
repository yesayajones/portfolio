import React from "react";
import { BoxWrapper, AboutMe, Group, Timeline, OverlapGroup, Rectangle, Ellipse, Div, Ellipse2, Ellipse3, TextWrapper, TextWrapper2, TextWrapper3, TextWrapper4, P, TextWrapper5, TextWrapper6, TextWrapper7, TextWrapper8 } from "./TimeLineStyles.js";

export const Box = () => {
  return (
    <BoxWrapper>
      <AboutMe>
        <Group>
          <Timeline>
            <OverlapGroup>
              <Rectangle />
              <Ellipse />
              <Div />
              <Ellipse2 />
              <Ellipse3 />
            </OverlapGroup>
          </Timeline>
          <TextWrapper>2018</TextWrapper>
          <TextWrapper2>2019</TextWrapper2>
          <TextWrapper3>2020</TextWrapper3>
          <TextWrapper4>2021</TextWrapper4>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </P>
          <TextWrapper5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </TextWrapper5>
          <TextWrapper6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </TextWrapper6>
          <TextWrapper7>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </TextWrapper7>
        </Group>
        <TextWrapper8>About me</TextWrapper8>
      </AboutMe>
    </BoxWrapper>
  );
};