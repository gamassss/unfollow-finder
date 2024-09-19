import Link from "next/link";

interface UserListItemProps {
  href: string;
  label: string;
}

const UserListItem: React.FC<UserListItemProps> = ({href, label}) => {
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  );
}

export default UserListItem;