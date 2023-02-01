import React from "react";
import styled from "styled-components";
import { NotificationTypes } from "../pages/NotificationPage";

const NotificationWrapper = styled.div`
  display: flex;
  color: var(--neutral-dark-grayish-blue);
  background-color: ${(props) =>
    props.isActive ? `var(--neutral-light-grayish-blue-2)` : `none`};
  border-radius: 10px;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Icon = styled.img`
  padding: 15px;
`;

const PrivateMessageContainer = styled.div`
  border: 1px solid var(--neutral-grayish-blue);
  border-radius: 5px;
  padding: 20px;
  margin-top: 10px;

  &:hover {
    background-color: var(--neutral-light-grayish-blue-2);
    cursor: pointer;
  }
`;

const ActiveIcon = styled.span`
  display: ${(props) => (props.isActive ? "inline-flex" : "none")};
  background-color: var(--primary-red);
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-left: 5px;
`;

// const NotificationContent = styled.div`
//   &:after {
//     content: "";
//     display: inline-flex;
//     background-color: var(--primary-red);
//     height: 10px;
//     width: 10px;
//     border-radius: 50%;
//     margin-left: 5px;
//   }
// `;

const Link = styled.a`
  color: var(--neutral-dark-grayish-blue);
  text-decoration: none;
  font-weight: 800;

  &:hover {
    color: var(--primary-blue);
  }

  /* &:visited {
    color: var(--neutral-dark-grayish-blue);
  } */
`;

const Name = styled.a`
  color: black;
  text-decoration: none;
  font-weight: 800;

  &:hover {
    color: var(--primary-blue);
  }
`;

function NotificationMessage(props) {
  const { icon, from, message, timestamp, isActive } = props;
  const { src, alt } = icon;

  const formatMessage = (message) => {
    if (props.links) {
      const {
        groups: { id },
      } = /{{(?<type>.*)::(?<id>.*)}}/gm.exec(message);

      return (
        <>
          {message.replace(new RegExp(/{{.*}}/), "")}
          {/* TODO: add null check */}
          <Link href={props.links[id].href}>{props.links[id].title}</Link>
        </>
      );
    } else {
      return message;
    }
  };

  return (
    <NotificationWrapper isActive={isActive}>
      <Icon src={require(`../assets/images/${src}`).default} alt={alt}></Icon>
      <Content>
        <div>
          <Name href="#">{from}</Name> {formatMessage(message)}
          <ActiveIcon isActive={isActive} />
        </div>
        <div>{timestamp}</div>
      </Content>
    </NotificationWrapper>
  );
}

function PrivateMessage(props) {
  const { icon, from, message, privateMessage, timestamp, isActive } = props;
  const { src, alt } = icon;

  return (
    <NotificationWrapper isActive={isActive}>
      <Icon src={require(`../assets/images/${src}`).default} alt={alt}></Icon>
      <Content>
        <div>
          <Name href="#">{from}</Name> {message}
          <ActiveIcon isActive={isActive} />
        </div>
        <div>{timestamp}</div>
        <PrivateMessageContainer>{privateMessage}</PrivateMessageContainer>
      </Content>
    </NotificationWrapper>
  );
}

function PictureComment(props) {
  const { icon, picture, from, message, timestamp, isActive } = props;
  const { src, alt } = icon;
  const { src: pictureSrc, alt: pictureAlt, href: pictureHref } = picture;

  return (
    <NotificationWrapper isActive={isActive}>
      <Icon src={require(`../assets/images/${src}`).default} alt={alt}></Icon>
      <Content>
        <div>
          <Name href="#">{from}</Name> {message}
          <ActiveIcon isActive={isActive} />
        </div>
        <div>{timestamp}</div>
      </Content>
      <a href={pictureHref}>
        <img
          src={require(`../assets/images/${pictureSrc}`).default}
          alt={pictureAlt}
        />
      </a>
    </NotificationWrapper>
  );
}

export default function Notification(props) {
  const { notification } = props;

  const types = {
    [NotificationTypes.NotificationMessage]: NotificationMessage,
    [NotificationTypes.PrivateMessage]: PrivateMessage,
    [NotificationTypes.PictureComment]: PictureComment,
    default: <></>,
  };

  const getNotificationTypes = (notification) => {
    const { type } = notification;
    const NotificationContainer = types[type] || types.default;
    return <NotificationContainer {...notification} />;
  };

  return <>{getNotificationTypes(notification)}</>;
}
