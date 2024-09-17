interface UsageItemProps {
  title: string;
  desc: string;
  link?: {href: string; text: string};
}

const UsageItem: React.FC<UsageItemProps> = ({title, desc, link}) => {
  return (
    <li className="mb-4">
      <span className="font-semibold">{title}:</span> {desc}
      {link && (
        <a href={link.href} className="text-blue-500 underline ml-1">
          {link.text}
        </a>
      )}
    </li>
  );
}

export default UsageItem;