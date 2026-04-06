import EcosystemIcon from "../assets/icons/ecosystem.svg";
export const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div
      key={title}
      className=" sm:flex-1  | py-10 px-5 border border-white/30 rounded-lg text-center"
    >
      <div className="inline-flex justify-center items-center h-14 w-14 bg-white text-black rounded-lg">
        <EcosystemIcon />
      </div>
      <h4 className="mt-6 font-bold ">{title}</h4>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  );
};
