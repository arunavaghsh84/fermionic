import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "60px",
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
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        {/* <ScrollAnimation animateIn="animate__zoomIn"> */}
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            {title}
          </h2>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn="animate__zoomIn" delay={200}> */}
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {paragraph}
          </p>
        {/* </ScrollAnimation> */}
      </div>
    </>
  );
};

export default SectionTitle;
