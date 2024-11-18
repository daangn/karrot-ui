type VariantMap = Record<string, string[]>;

interface Props {
  variantMap: VariantMap;
  Component: React.ComponentType;
}

const generateCombinations = (variantMap: VariantMap) => {
  const keys = Object.keys(variantMap);
  let combinations: Record<string, string>[] = [{}];

  for (const key of keys) {
    const values = variantMap[key];
    const temp: Record<string, string>[] = [];

    for (const combo of combinations) {
      for (const value of values) {
        temp.push({
          ...combo,
          [key]: value,
        });
      }
    }

    combinations = temp;
  }

  return combinations;
};

export const VariantTable = (props: Props) => {
  const { variantMap, Component, ...rest } = props;
  const combinations = generateCombinations(variantMap);
  const variantKeys = Object.keys(variantMap);

  return (
    <div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {variantKeys.map((key) => (
              <th key={key}>{key}</th>
            ))}
            <th>Component</th>
          </tr>
        </thead>
        <tbody>
          {combinations.map((combination) => {
            const combinationKey = Object.values(combination).join("-");
            return (
              <tr key={combinationKey}>
                {variantKeys.map((key) => (
                  <td key={key}>
                    <span
                      style={{
                        fontSize: "0.6rem",
                        paddingRight: "2px",
                        color: "var(--seed-v3-color-fg-placeholder)",
                      }}
                    >
                      {key}:
                    </span>
                    <code>{combination[key]}</code>
                  </td>
                ))}
                <td
                  style={{
                    display: "flex",
                    padding: 16,
                  }}
                >
                  <Component {...combination} {...rest} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        style={{
          marginTop: 16,
        }}
      >
        총 {combinations.length}개의 조합이 있습니다.
      </div>
    </div>
  );
};
