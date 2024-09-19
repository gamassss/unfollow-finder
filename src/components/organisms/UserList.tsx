import UserListItem from "../atoms/UserListItem";

const UserList: React.FC = () => {
  return (
    <div>
      <h4>Users:</h4>
      <ol>
        <UserListItem
          href="https://www.instagram.com/dqwisdjha21"
          label="xxx123asdqqq"
        />
      </ol>
    </div>
  );
}

export default UserList;