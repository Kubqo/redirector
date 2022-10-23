import "./App.css";

function App() {
  const pathname = window.location.pathname;
  let hrefUrl;

  if (pathname !== "/") {
    const arr = pathname.split("/");
    if (arr.length === 4) {
      const screen = arr[1];
      const source = arr[2];
      const id = arr[3];

      const url = `com.inqool.mojeolomouc://${screen}/${source}/${id}`;
      hrefUrl = url;
    }
  }

  return (
    <main>
      <a
        href={hrefUrl}
        style={{
          border: "1px solid #ee2e24",
          padding: "5px",
          borderRadius: "10px",
          textDecoration: "none",
          color: "#ee2e24",
        }}
      >
        Zobrazit detail aktuality v aplikaci{" "}
      </a>
    </main>
  );
}

export default App;
