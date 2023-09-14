import Food from "./Food.js";

export default function Gallery() {
  return (
    <div>
      <section>
        <h1>Delicious Food</h1>
      </section>
      <Food
        foodName={"Tofu"}
        size={100}
        recipt={
          "Cut the tofu into large cubes and pat it dry with a towel. Add the olive oil to a non-stick pan and add the tofu cubes and a few pinches kosher salt. Turn on the heat to medium-high."
        }
      />
    </div>
  );
}
