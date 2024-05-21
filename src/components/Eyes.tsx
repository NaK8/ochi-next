import Eye from "./Eye";

function Eyes() {
  return (
    <section className="h-screen w-full overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative size-full bg-[url('/bg.jpg')] bg-cover bg-center"
      >
        <Eye />
      </div>
    </section>
  );
}

export default Eyes;
