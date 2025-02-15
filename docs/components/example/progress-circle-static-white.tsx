import { ProgressCircle } from "seed-design/ui/progress-circle";

export default function ProgressCircleStaticWhite() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
      }}
    >
      <ProgressCircle tone="staticWhite" />
    </div>
  );
}
