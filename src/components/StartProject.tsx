import Button from "./Button";
import Eye from "./Eye";

function StartProject() {
  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.07"
      className="min-h-fit rounded-t-3xl bg-ochiGreen py-20"
    >
      <div className="relative px-20">
        <span className="hidden md:block">
          <Eye size="small" />
        </span>
        {["Ready", "To Start", "The Project"].map((head, index) => (
          <div
            key={index}
            className="text-center font-founder text-[16vw] font-semibold uppercase leading-[.75] text-black md:text-[17vw]"
          >
            {head}
          </div>
        ))}
      </div>
      <div className="relative my-3 h-32 md:hidden">
        <Eye size="small" />
      </div>
      <div className="flex justify-center py-4 md:py-8">
        <Button variant="primary">Start The Project</Button>
      </div>
      <p className="text-center font-neue font-light text-black">OR</p>
      <div className="flex justify-center py-4 md:py-8">
        <Button variant="secondary">hello@ochi.design</Button>
      </div>
    </section>
  );
}

export default StartProject;
