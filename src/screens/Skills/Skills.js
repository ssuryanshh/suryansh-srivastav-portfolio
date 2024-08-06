import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Animate } from "react-simple-animate";
import styled from "styled-components";
import skills from "../../utils/Skills";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  margin: 1.5rem;
  padding: 2rem;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 3rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Desc = styled.div`
  font-size: 2rem;
  text-align: center;
  max-width: 600px;
  color: var(--red-theme-text-color);
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid var(--red-theme-main-color);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: var(--red-theme-main-color);
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: var(--red-theme-text-color);
  border: 1px solid var(--red-theme-main-color);
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

function Skills() {
  const positions = [
    "translateY(-100px)",
    "translateY(100px)",
    "translateX(-100px)",
    "translateX(100px)"
  ];

  return (
    <div>
      <PageHeader headerText="My Skill Set" />
      <Container id="skills">
        <Wrapper>
          <Desc>
            Here are some of my technical skills on which I have been working on for the past 4 years.
          </Desc>
          <Animate 
          play
          duration={1}
          delay={0}
          start={{
            transform:"translateY(900px)"
          }}
          end={{
            transform: "translateY(0px)"
          }}>
            <SkillsContainer>
            {skills.map((skill, skillIndex) => (
              <Skill key={skillIndex}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, itemIndex) => (
                    <Animate
                      key={itemIndex}
                      play
                      duration={1.4}
                      delay={0.4}
                      start={{
                        transform: positions[itemIndex % positions.length]
                      }}
                      end={{
                        transform: "translateY(0)"
                      }}
                    >
                      <SkillItem>
                        <SkillImage src={item.image} alt={item.name} />
                        {item.name}
                      </SkillItem>
                    </Animate>
                  ))}
                </SkillList>
              </Skill>
            ))}
          </SkillsContainer>
          </Animate>
        </Wrapper>
      </Container>
    </div>
  );
}

export default Skills;
