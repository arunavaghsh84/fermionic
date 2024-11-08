const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "40px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""} section-title`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-2 sm:mb-4 text-2xl font-semibold text-dark dark:text-white sm:2xl md:text-3xl">
          {title}
        </h2>
        <p className="text-sm text-black md:text-base">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
