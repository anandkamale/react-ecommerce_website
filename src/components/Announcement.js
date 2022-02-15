import styled from "styled-components";
import Marquee from "react-fast-marquee";

const Container = styled.div`
  height: 30px;
  background-color: #FDD4F7;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  margin-top:10px;
  padding: 10px;
`;

const Announcement = () => {
  return <Container><Marquee speed="100" direction="right" delay={1} gradient={false}>Super Deal! Free Shipping on Orders Over 1000/-</Marquee></Container>;
};

export default Announcement;
