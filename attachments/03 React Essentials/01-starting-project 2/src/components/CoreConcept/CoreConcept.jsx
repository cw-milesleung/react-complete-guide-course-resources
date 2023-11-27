import { CORE_CONCEPTS } from "../../data";
import CoreConcepts from "./CoreConcepts";

const CoreConcept = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcepts key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
};
export default CoreConcept;
