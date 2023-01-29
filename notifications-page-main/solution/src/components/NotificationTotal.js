import React, { useEffect, useState } from "react";
import styled from "styled-components";

const NotificationTotalWrapper = styled.div`
  background-color: ${(props) =>
    props.isActive ? `var(--primary-blue)` : `var(--neutral-grayish-blue)`};
  color: var(--neutral-white);
  padding: 5px 15px;
  border-radius: 20%;
  margin-left: 15px;
`;

export default function NotificationTotal(props) {
  const [isActive, setIsActive] = useState(false);
  const { total } = props;

  useEffect(() => {
    if (total > 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [total]);

  return (
    <NotificationTotalWrapper isActive={isActive}>
      {total}
    </NotificationTotalWrapper>
  );
}
