import React from 'react';
import styled from 'styled-components';

const SkillsSection = () => {
  return (
    <SkillsContainer>
      <SkillsContent>
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsList>
          <SkillsListItem>Front-end Development</SkillsListItem>
          <SkillsListItem>UI/UX Design</SkillsListItem>
          <SkillsListItem>Responsive Web Design</SkillsListItem>
          <SkillsListItem>JavaScript</SkillsListItem>
          <SkillsListItem>Reactjs</SkillsListItem>
          <SkillsListItem>HTML5</SkillsListItem>
          <SkillsListItem>CSS3</SkillsListItem>
          <SkillsListItem>Git</SkillsListItem>
          <SkillsListItem>Agile/Scrum</SkillsListItem>
        </SkillsList>
      </SkillsContent>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.section`
  padding: 80px 0;
  background-color: #57C5B6;
`;

const SkillsContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SkillsTitle = styled.h2`
  font-size: 36px;
  color: #212121;
  text-align: center;
`;

const SkillsList = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillsListItem = styled.li`
  font-size: 18px;
  color: #757575;
  margin: 0 10px 20px;
  padding: 10px 20px;
  border-radius: 50%;
  background-color: #CEE5D0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  &:hover {
    background-color: #212121;
    color: #fff;
  }
`;

export default SkillsSection;
