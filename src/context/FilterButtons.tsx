import { useFilter } from "../context/FilterContext";

const FilterButtons = () => {
    const { setFilter } = useFilter();

    console.log("FILTER BUTTONS RENDERED");

    return (
        <div>
            <button onClick={() => setFilter("all")}>
                All
            </button>

            <button onClick={() => setFilter("active")}>
                Active
            </button>

            <button onClick={() => setFilter("completed")}>
                Completed
            </button>
        </div>
    );
};

export default FilterButtons;