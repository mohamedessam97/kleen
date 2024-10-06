import { Scanner } from "@yudiel/react-qr-scanner";

export default function Qrpage() {
  return (
    <Scanner
      onScan={(result) => console.log(result)}
      styles={{
        container: {
          height: "100vh",
          top: "10%",
        },
        video: {
          objectFit: "cover",
          top: "10%",
        },
      }}
    />
  );
}
