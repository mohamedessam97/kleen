import { Scanner } from "@yudiel/react-qr-scanner";
import { useNavigate } from "react-router-dom";

export default function Qrpage() {
  const navigate = useNavigate();
  const handleScan = (result?: unknown) => {
    if (result) {
      navigate("/dropoff");
    }
  };

  return (
    <Scanner
      onScan={handleScan}
      styles={{
        container: {
          margin: "43% 0",
        },
        video: {
          objectFit: "cover",
          top: "10%",
        },
      }}
    />
  );
}
