import React, { useEffect } from "react";

const FilterBtns = ({ setActiveGenre, activeGenre, setFiltered, project }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(project);
      return;
    }
    const Filtered = project.filter((element) =>
      element.categoryId.includes(activeGenre)
    );
    setFiltered(Filtered);
  }, [activeGenre]);
  return (
    <div className="margin_btn">
      <div className="isotope_btns">
        <button
          className={activeGenre === 0 ? "activefilter" : ""}
          onClick={() => setActiveGenre(0)}
        >
          ALL<sup>11</sup>
        </button>
        <button
          className={activeGenre === 1 ? "activefilter" : ""}
          onClick={() => setActiveGenre(1)}
        >
          EXTERIOR<sup>3</sup>
        </button>
        <button
          className={activeGenre === 2 ? "activefilter" : ""}
          onClick={() => setActiveGenre(2)}
        >
          RESIDENCES<sup>3</sup>
        </button>
        <button
          className={activeGenre === 3 ? "activefilter" : ""}
          onClick={() => setActiveGenre(3)}
        >
          INTERIORS<sup>4</sup>
        </button>
        <button
          className={activeGenre === 4 ? "activefilter" : ""}
          onClick={() => setActiveGenre(4)}
        >
          LANDSCAPE<sup>2</sup>
        </button>
      </div>
    </div>
  );
};

export default FilterBtns;
