import styled from "styled-components";

const TodoDashboard = () => {
  return (
    <DashboardSection>
      <DashboardHeader>
        <h1>Todo Dashboard</h1>
      </DashboardHeader>

      <DashboardCardList>
        <DashboardCard>
          16 <br /> All Task
        </DashboardCard>
        <DashboardCard>
          3 <br /> Completed
        </DashboardCard>
        <DashboardCard>
          13 <br /> Pending
        </DashboardCard>
      </DashboardCardList>
    </DashboardSection>
  );
};

export default TodoDashboard;

const DashboardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DashboardHeader = styled.div`
  h1 {
    font-size: 1.5rem;
  }
`;

const DashboardCardList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const DashboardCard = styled.div`
  background-color: orange;
  padding: 1rem;
  border-radius: 1rem;
  height: 120px;
  width: 120px;

  color: white;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: end;

  &:first-child {
    /* width: 240px; */
    flex-basis: 60%;
  }
`;
