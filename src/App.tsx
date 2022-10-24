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

      const url = `://${screen}/${source}/${id}`;
      hrefUrl = url;
    }
  }

  return (
    <main>
      <a
        href={`com.inqool.mojeolomouc${hrefUrl}`}
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
      <a
        href={`moje-olomouc${hrefUrl}`}
        style={{
          border: "1px solid #ee2e24",
          padding: "5px",
          borderRadius: "10px",
          textDecoration: "none",
          color: "#ee2e24",
        }}
      >
        moje-olomouc
      </a>
    </main>
  );
}

export default App;
