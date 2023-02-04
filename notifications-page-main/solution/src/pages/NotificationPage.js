import React, { useEffect, useState } from "react";
import Notification from "../components/Notification";
import NotificationTotal from "../components/NotificationTotal";
import styled from "styled-components";

const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--neutral-white);
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  min-width: 50%;
  max-width: 50%;
`;

const NotificationHeader = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center */
  width: 100%;
`;

const ReadAllButton = styled.button`
  margin-left: auto;
  border: none;
  text-decoration: none;
  background: none;
  color: var(--neutral-grayish-blue);
  font-family: "Plus Jakarta Sans", sans-serif;
  cursor: pointer;

  &:hover {
    color: var(--neutral-very-dark-blue);
  }

  &:focus {
    color: var(--neutral-very-dark-blue);
  }
`;

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// constants
// notification
export const NotificationTypes = {
  NotificationMessage: "NotificationMessage",
  PrivateMessage: "PrivateMessage",
  PictureComment: "PictureComment",
};

// notification subtype
export const NotificationSubTypes = {
  PostReaction: "PostReaction",
  Follow: "Follow",
  GroupJoin: "GroupJoin",
};

export default function NotificationPage() {
  const [totalActiveNotifications, setTotalActiveNotifications] = useState(0);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // TODO: - Add from profile link
    // - convert timestamp to formatted date
    const notifications = [
      {
        id: 1,
        isActive: true,
        type: NotificationTypes.NotificationMessage,
        from: "Mark Webber",
        icon: {
          src: "avatar-mark-webber.webp",
          alt: "User icon",
        },
        timestamp: "1m ago",
        message: `reacted to your recent post {{link::123}}`,
        links: {
          123: {
            href: `#`,
            title: `My first tournament today!`,
          },
        },
      },
      {
        id: 2,
        isActive: true,
        type: NotificationTypes.NotificationMessage,
        from: "Angela Gray",
        icon: {
          src: "avatar-angela-gray.webp",
          alt: "User icon",
        },
        timestamp: "5m ago",
        message: `followed you`,
      },
      {
        id: 3,
        isActive: true,
        type: NotificationTypes.NotificationMessage,
        from: "Jacob Thompson",
        icon: {
          src: "avatar-jacob-thompson.webp",
          alt: "User icon",
        },
        timestamp: "1 day ago",
        message: `has joined your group {{link::456}}`,
        links: {
          456: {
            href: `#`,
            title: `Chess Club`,
          },
        },
      },
      {
        id: 4,
        isActive: false,
        type: NotificationTypes.PrivateMessage,
        from: "Rizky Hasanuddin",
        icon: {
          src: "avatar-rizky-hasanuddin.webp",
          alt: "User icon",
        },
        timestamp: "1 day ago",
        message: `sent you a private message`,
        privateMessage: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
        I'm already having lots of fun and improving my game.`,
      },
      {
        id: 5,
        isActive: false,
        type: NotificationTypes.PictureComment,
        from: "Kimberly Smith",
        icon: {
          src: "avatar-kimberly-smith.webp",
          alt: "User icon",
        },
        timestamp: "1 day ago",
        message: `commented on your picture`,
        picture: {
          src: "image-chess.webp",
          alt: "Your photo",
          href: "#",
          linkTitle: "",
        },
      },
      {
        id: 6,
        isActive: false,
        type: NotificationTypes.NotificationMessage,
        from: "Nathan Peterson",
        icon: {
          src: "avatar-nathan-peterson.webp",
          alt: "User icon",
        },
        timestamp: "2 weeks ago",
        message: `reacted to your recent post {{link::789}}`,
        links: {
          789: {
            href: `#`,
            title: `5 end-game strategies to increase your win rate`,
          },
        },
      },
      {
        id: 7,
        isActive: false,
        type: NotificationTypes.NotificationMessage,
        from: "Anna Kim",
        icon: {
          src: "avatar-anna-kim.webp",
          alt: "User icon",
        },
        timestamp: "2 weeks ago",
        message: `left the group {{link::010}}`,
        links: {
          "010": {
            href: `#`,
            title: `Chess Club`,
          },
        },
      },
    ];

    document.title = "Notifications";
    setNotifications(notifications);
    setTotalActiveNotifications(notifications.filter((n) => n.isActive).length);
  }, []);

  const handleReadAll = () => {
    const nextNotifications = notifications.map((n) =>
      n.isActive ? { ...n, isActive: false } : n
    );

    setNotifications(nextNotifications);
    setTotalActiveNotifications(0);
  };

  return (
    <NotificationWrapper>
      <NotificationHeader>
        <h1>Notifications</h1>
        <NotificationTotal total={totalActiveNotifications} />
        <ReadAllButton onClick={handleReadAll}>Mark all as read</ReadAllButton>
      </NotificationHeader>
      <NotificationContainer>
        {notifications &&
          notifications.map((notification) => {
            return (
              <Notification notification={notification} key={notification.id} />
            );
          })}
      </NotificationContainer>
    </NotificationWrapper>
  );
}
