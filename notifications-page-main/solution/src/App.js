import NotificationPage from "./pages/NotificationPage";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: var(--neutral-light-grayish-blue-1);
  font-family: "Plus Jakarta Sans", sans-serif;
`;

function App() {
  return (
    <AppWrapper>
      <NotificationPage />
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/alamb0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Austin Lamb
        </a>
        .
      </div>
    </AppWrapper>
  );
}

export default App;
