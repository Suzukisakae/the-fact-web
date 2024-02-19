import "./style.css";
function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img
            src="logo.png"
            height="68"
            width="68"
            alt="Today I Learned Logo"
          />
          <h1>Today I Learned</h1>
        </div>

        <button className="btn btn-large btn-open">Share a fact</button>
      </header>
      <NewFactForm />

      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}
function NewFactForm() {
  return <form className="fact-form">Fact Form</form>;
}

function CategoryFilter() {
  return (
    <aside>
      <ul>
        <li className="category">
          <button className="btn btn-all-categories">All</button>
        </li>
        <li className="category">
          <button className="btn btn-category">Technology</button>
        </li>
        <li className="category">
          <button className="btn btn-category">Science</button>
        </li>
      </ul>
    </aside>
  );
}

function FactList() {
  return <section className="fact-list">Facts List</section>;
}

export default App;
