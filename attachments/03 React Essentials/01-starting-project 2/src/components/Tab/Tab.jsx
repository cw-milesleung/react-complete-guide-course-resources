import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "./TabButton";
import Tabs from "./Tabs";
import Section from "./Section";

const Tab = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  const selectionHandler = (topic) => {
    console.log(topic);
    setSelectedTopic(topic);
    console.log(topic);
  };
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => selectionHandler("components")}
            >
              Componenets
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => selectionHandler("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => selectionHandler("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => selectionHandler("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {!selectedTopic ? (
          <p>Please select a topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
};
export default Tab;
