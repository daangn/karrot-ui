import * as React from "react";
import { Switch } from "../design-system/ui/switch";
import { usePreference } from "../hooks/usePreference";
import * as styles from "./ControlPanel.css";

interface ControlPanelProps {
  variantMap: Record<string, string[]>;
  value: Record<string, string>;
  onValueChange?: (variant: string, value: string) => void;
  measurements?: Record<string, DOMRect | undefined>;
  highlightedSlot: string | null;
  onSlotHighlight?: (slot: string | null) => void;
}

export const ControlPanel = React.forwardRef<HTMLDivElement, ControlPanelProps>((props, ref) => {
  const { preferences, updatePreferences } = usePreference();
  const { variantMap, value, onValueChange, measurements, highlightedSlot, onSlotHighlight } =
    props;

  return (
    <div ref={ref} className={styles.root}>
      <div className={styles.item}>
        <span className={styles.title}>그리드 표시</span>
        <Switch
          size="medium"
          checked={preferences.showGrid}
          onCheckedChange={(checked) => updatePreferences({ showGrid: checked })}
        />
      </div>

      <div className={styles.item}>
        <span className={styles.title}>슬롯 하이라이트</span>
        <select value={highlightedSlot ?? ""} onChange={(e) => onSlotHighlight?.(e.target.value)}>
          <option value="">None</option>
          {Object.entries(measurements ?? {}).map(([slot, rect]) =>
            rect ? (
              <option key={slot} value={slot}>
                {slot} ({Math.round(rect.width)} x {Math.round(rect.height)})
              </option>
            ) : null,
          )}
        </select>
      </div>

      {Object.entries(variantMap).map(([variant, values]) => (
        <div key={variant} className={styles.item}>
          <span className={styles.title}>{variant}</span>
          <select value={value[variant]} onChange={(e) => onValueChange?.(variant, e.target.value)}>
            {values.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
            <option value="ALL">All</option>
          </select>
        </div>
      ))}
    </div>
  );
});

ControlPanel.displayName = "ControlPanel";

export default ControlPanel;
