import styled from "styled-components";
import { useUser } from "./useUser";

function UserAvatar() {
  const { user } = useUser();

  return (
    <StyledUserAvatar>
      <Avatar
        src={user?.manager?.avatar ? user.manager.avatar : "default-user.jpg"}
        alt="Avatar"
      />
      <span>
        {user?.manager?.manager_name ? user.manager.manager_name : ""}
      </span>
    </StyledUserAvatar>
  );
}

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

export default UserAvatar;
