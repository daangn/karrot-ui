import * as React from "react";
import { Switch } from "../design-system/ui/switch";
import { usePreference } from "../hooks/usePreference";
import * as styles from "./ControlPanel.css";

interface ControlPanelProps {
  variantMap: Record<string, string[]>;
  value: Record<string, string>;
  onChange?: (variant: string, value: string) => void;
}

export const ControlPanel = React.forwardRef<HTMLDivElement, ControlPanelProps>((props, ref) => {
  const { preferences, updatePreferences } = usePreference();
  const { variantMap } = props;

  return (
    <div ref={ref} className={styles.root}>
      <div className={styles.item}>
        <span className={styles.title}>Show Grid</span>
        <Switch
          size="medium"
          checked={preferences.showGrid}
          onCheckedChange={(checked) => updatePreferences({ showGrid: checked })}
        />
      </div>

      {Object.entries(variantMap).map(([variant, values]) => (
        <div key={variant} className={styles.item}>
          <span className={styles.title}>{variant}</span>
          <select onChange={(e) => props.onChange?.(variant, e.target.value)}>
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
