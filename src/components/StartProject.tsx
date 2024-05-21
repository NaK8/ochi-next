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
        <Eye size="small" />
        {["Ready", "To Start", "The Project"].map((head, index) => (
          <div
            key={index}
            className="text-center font-founder text-[17vw] font-semibold uppercase leading-[.75] text-black"
          >
            {head}
          </div>
        ))}
      </div>
      <div className="flex justify-center py-8">
        <Button variant="primary">Start The Project</Button>
      </div>
      <p className="text-center font-neue font-light text-black">OR</p>
      <div className="flex justify-center py-8">
        <Button variant="secondary">Start The Project</Button>
      </div>
    </section>
  );
}

export default StartProject;
