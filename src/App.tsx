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
      window.location.replace(url);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <a
        href={`com.inqool.mojeolomouc${hrefUrl}`}
        style={{
          border: "1px solid #ee2e24",
          padding: "5px",
          borderRadius: "10px",
          textDecoration: "none",
          color: "#ee2e24",
          margin: 10,
        }}
      >
        Zobrazit detail aktuality v aplikaci (Android)
      </a>
      <a
        href={`cityapp.com.statutarnimestoolomouc${hrefUrl}`}
        style={{
          border: "1px solid #ee2e24",
          padding: "5px",
          borderRadius: "10px",
          textDecoration: "none",
          color: "#ee2e24",
          margin: 10,
        }}
      >
        Zobrazit detail aktuality v aplikaci (IOS)
      </a>
      <a
        href={`moje-olomouc${hrefUrl}`}
        style={{
          border: "1px solid #ee2e24",
          padding: "5px",
          borderRadius: "10px",
          textDecoration: "none",
          color: "#ee2e24",
          margin: 10,
        }}
      >
        Zobrazit detail aktuality v aplikaci (Nezalezi na platforme)
      </a>
    </div>
  );
}

export default App;
