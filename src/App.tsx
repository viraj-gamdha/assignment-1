import { useState } from "react";
import "./App.css";
import Checkbox from "./components/checkbox";
import Button from "./components/button";

const pageLabels = ["Page 1", "Page 2", "Page 3", "Page 4"];

function App() {
  const [checkedPages, setCheckedPages] = useState<boolean[]>(
    Array(pageLabels.length).fill(false)
  );

  const allChecked = checkedPages.every(Boolean);

  const handleAllToggle = (checked: boolean) => {
    setCheckedPages(Array(pageLabels.length).fill(checked));
  };

  const handlePageToggle = (index: number, checked: boolean) => {
    const updated = [...checkedPages];
    updated[index] = checked;
    setCheckedPages(updated);
  };

  return (
    <main className="app-main">
      <div className="container">
        <div className="checkbox-item">
          <Checkbox
            label="All pages"
            checked={allChecked}
            onChange={handleAllToggle}
          />
        </div>

        <div className="wrapper">
          <div className="separator" />
        </div>

        <div className="checkbox-item">
          {pageLabels.map((label, index) => (
            <Checkbox
              key={label}
              label={label}
              checked={checkedPages[index]}
              onChange={(checked) => handlePageToggle(index, checked)}
            />
          ))}
        </div>

        <div className="wrapper">
          <div className="separator" />
        </div>

        <div className="wrapper">
          <div className="button">
            <Button>Done</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
