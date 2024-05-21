type HoverLink = {
  items: string[];
  color: "black" | "white";
  heading?: string;
};

const btnColor = {
  black: "link-underline-black",
  white: "link-underline-white",
};

function HoverLinks({ items, color, heading }: HoverLink) {
  return (
    <div className="py-4">
      {heading && <h3 className="pb-4">{heading}</h3>}
      <ul>
        {items.map((item, index) => (
          <li key={index} className={`mb-2 w-fit font-neue`}>
            <a href="" className={`link-underline ${btnColor[color]}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HoverLinks;
