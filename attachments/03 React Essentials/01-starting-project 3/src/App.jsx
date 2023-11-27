import { useState } from "react";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES, TOPIC } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectHandler = (topic) => {
    setSelectedTopic(topic);
    // console.log(topic);
    console.log(selectedTopic);
  };

  console.log("App executed");

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isActive={selectedTopic === TOPIC.COMPONENTS}
              onSelect={() => {
                selectHandler(TOPIC.COMPONENTS);
              }}
            >
              {CORE_CONCEPTS[0].title}
            </TabButton>
            <TabButton
              isActive={selectedTopic === TOPIC.JSX}
              onSelect={() => {
                selectHandler(TOPIC.JSX);
              }}
            >
              {CORE_CONCEPTS[1].title}
            </TabButton>
            <TabButton
              isActive={selectedTopic === TOPIC.PROPS}
              onSelect={() => {
                selectHandler(TOPIC.PROPS);
              }}
            >
              {CORE_CONCEPTS[2].title}
            </TabButton>
            <TabButton
              isActive={selectedTopic === TOPIC.STATE}
              onSelect={() => {
                selectHandler(TOPIC.STATE);
              }}
            >
              {CORE_CONCEPTS[3].title}
            </TabButton>
          </menu>
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : (
            "Please select a topic"
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
