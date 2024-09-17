import UsageItem from "../atoms/UsageItem";

const UsageSection: React.FC = () => {
  return (
    <div className="pb-16">
      <h1 className="font-semibold text-xl md:text-2xl pb-1 mb-4 italic border-b-2 border-black">
        Usage
      </h1>
      <ol className="list-decimal ml-8">
        <UsageItem
          title="Download Your Instagram Data"
          desc="Go to your Instagram account settings and request to download your data. Instagram will prepare the data file and send it to your registered email. Once you receive it, download the file."
          link={{
            href: "/",
            text: "click here",
          }}
        />
        <UsageItem
          title="Extract the Required Data"
          desc="Open the downloaded data file and locate the specific file(s) required for the 'unfollow finder'. Make sure these files are easily accessible on your device."
        />
        <UsageItem
          title="Upload the Data"
          desc="Scroll down to the upload section below. Click on the 'Upload' button and select the file(s) you extracted in the previous step. The website will then process the data to identify users who have unfollowed you."
        />
      </ol>
    </div>
  );
}

export default UsageSection;