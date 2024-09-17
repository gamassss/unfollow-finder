interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({title, className}) => {
  return (
    <h1
      className={`font-semibold text-xl md:text-2xl pb-1 mb-4 italic border-b-2 border-black ${className}`}
    >
      {title}
    </h1>
  );
}

export default SectionTitle;