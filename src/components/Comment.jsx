import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar />
      <Details>
        <Name>
          Johnny <Date>1day ago</Date>
        </Name>
        <Text>
          dgf dsgfdsfhsuy fysfu sgfuysbf sdgufndsufhs udhfuydsfd udsfuds gfyds
          gfdsy fgdsyfyd fdsgfuyds fytds gf
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
