import fs from "node:fs";

const variables = [
  {
    id: "VariableID:1:128",
    name: "fg/static-white",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:93018",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:93018",
      },
    },
  },
  {
    id: "VariableID:1:129",
    name: "fg/neutral",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92920",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92920",
      },
    },
  },
  {
    id: "VariableID:1:130",
    name: "fg/neutral-muted",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92919",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92919",
      },
    },
  },
  {
    id: "VariableID:1:131",
    name: "fg/neutral-subtle",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92918",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92918",
      },
    },
  },
  {
    id: "VariableID:1:132",
    name: "fg/neutral-inverted",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92911",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92912",
      },
    },
  },
  {
    id: "VariableID:1:133",
    name: "fg/brand-contrast",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92927",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92930",
      },
    },
  },
  {
    id: "VariableID:1:134",
    name: "fg/danger",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92949",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92949",
      },
    },
  },
  {
    id: "VariableID:1:135",
    name: "fg/danger-contrast",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92952",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92952",
      },
    },
  },
  {
    id: "VariableID:1:136",
    name: "fg/positive",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92961",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92960",
      },
    },
  },
  {
    id: "VariableID:1:137",
    name: "fg/positive-contrast",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92963",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92963",
      },
    },
  },
  {
    id: "VariableID:1:138",
    name: "fg/warning-contrast",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92974",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92974",
      },
    },
  },
  {
    id: "VariableID:1:139",
    name: "fg/informative",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92939",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92939",
      },
    },
  },
  {
    id: "VariableID:1:140",
    name: "fg/informative-contrast",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92941",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92941",
      },
    },
  },
  {
    id: "VariableID:1:141",
    name: "fg/placeholder",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92917",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92917",
      },
    },
  },
  {
    id: "VariableID:1:142",
    name: "fg/disabled",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92916",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92916",
      },
    },
  },
  {
    id: "VariableID:1:143",
    name: "bg/positive-weak",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92955",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92955",
      },
    },
  },
  {
    id: "VariableID:1:144",
    name: "bg/positive-solid",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92960",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92960",
      },
    },
  },
  {
    id: "VariableID:1:145",
    name: "bg/warning-solid",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92969",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92972",
      },
    },
  },
  {
    id: "VariableID:1:146",
    name: "bg/warning-weak",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92966",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92966",
      },
    },
  },
  {
    id: "VariableID:1:147",
    name: "bg/danger-weak",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92944",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92944",
      },
    },
  },
  {
    id: "VariableID:1:148",
    name: "bg/danger-solid",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92950",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92949",
      },
    },
  },
  {
    id: "VariableID:1:149",
    name: "bg/danger-solid-pressed",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92951",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92950",
      },
    },
  },
  {
    id: "VariableID:1:150",
    name: "bg/brand-weak",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92921",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92922",
      },
    },
  },
  {
    id: "VariableID:1:151",
    name: "bg/brand-solid",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92926",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92927",
      },
    },
  },
  {
    id: "VariableID:1:152",
    name: "bg/brand-solid-pressed",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92927",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92928",
      },
    },
  },
  {
    id: "VariableID:1:154",
    name: "bg/brand-weak-pressed",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92922",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92923",
      },
    },
  },
  {
    id: "VariableID:1:155",
    name: "bg/layer-default",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92911",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92911",
      },
    },
  },
  {
    id: "VariableID:1:156",
    name: "bg/layer-default-pressed",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92912",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92913",
      },
    },
  },
  {
    id: "VariableID:1:157",
    name: "bg/layer-fill",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92912",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92912",
      },
    },
  },
  {
    id: "VariableID:1:158",
    name: "bg/neutral-weak",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92913",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92914",
      },
    },
  },
  {
    id: "VariableID:1:159",
    name: "bg/neutral-solid",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92920",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92920",
      },
    },
  },
  {
    id: "VariableID:1:161",
    name: "bg/neutral-weak-pressed",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92914",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92915",
      },
    },
  },
  {
    id: "VariableID:1:162",
    name: "bg/informative-weak",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92933",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92933",
      },
    },
  },
  {
    id: "VariableID:1:164",
    name: "bg/overlay",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:93031",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:93031",
      },
    },
  },
  {
    id: "VariableID:1:165",
    name: "bg/overlay-muted",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:93030",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:93030",
      },
    },
  },
  {
    id: "VariableID:1:166",
    name: "bg/text-selection",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92921",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92921",
      },
    },
  },
  {
    id: "VariableID:1:167",
    name: "stroke/neutral",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92914",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92914",
      },
    },
  },
  {
    id: "VariableID:1:169",
    name: "stroke/brand",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92925",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92926",
      },
    },
  },
  {
    id: "VariableID:1:170",
    name: "stroke/field",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92915",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92915",
      },
    },
  },
  {
    id: "VariableID:1:171",
    name: "stroke/field-focused",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92919",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92919",
      },
    },
  },
  {
    id: "VariableID:1:172",
    name: "stroke/control",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92915",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92915",
      },
    },
  },
  {
    id: "VariableID:1:175",
    name: "unit/x1",
    values: {
      "1:4": 4,
    },
  },
  {
    id: "VariableID:1:176",
    name: "unit/x2",
    values: {
      "1:4": 8,
    },
  },
  {
    id: "VariableID:1:177",
    name: "unit/x3",
    values: {
      "1:4": 12,
    },
  },
  {
    id: "VariableID:1:178",
    name: "unit/x4",
    values: {
      "1:4": 16,
    },
  },
  {
    id: "VariableID:1:179",
    name: "unit/x5",
    values: {
      "1:4": 20,
    },
  },
  {
    id: "VariableID:1:180",
    name: "unit/x6",
    values: {
      "1:4": 24,
    },
  },
  {
    id: "VariableID:1:181",
    name: "unit/x7",
    values: {
      "1:4": 28,
    },
  },
  {
    id: "VariableID:1:182",
    name: "unit/x8",
    values: {
      "1:4": 32,
    },
  },
  {
    id: "VariableID:1:183",
    name: "unit/x9",
    values: {
      "1:4": 36,
    },
  },
  {
    id: "VariableID:1:184",
    name: "unit/x10",
    values: {
      "1:4": 40,
    },
  },
  {
    id: "VariableID:1:185",
    name: "unit/x12",
    values: {
      "1:4": 48,
    },
  },
  {
    id: "VariableID:1:186",
    name: "unit/x13",
    values: {
      "1:4": 52,
    },
  },
  {
    id: "VariableID:1:187",
    name: "unit/x14",
    values: {
      "1:4": 56,
    },
  },
  {
    id: "VariableID:1:188",
    name: "unit/x16",
    values: {
      "1:4": 64,
    },
  },
  {
    id: "VariableID:1:189",
    name: "unit/x0,5",
    values: {
      "1:4": 2,
    },
  },
  {
    id: "VariableID:1:190",
    name: "unit/x1,5",
    values: {
      "1:4": 6,
    },
  },
  {
    id: "VariableID:1:191",
    name: "unit/x2,5",
    values: {
      "1:4": 10,
    },
  },
  {
    id: "VariableID:1:192",
    name: "radius/full",
    values: {
      "1:4": 9999,
    },
  },
  {
    id: "VariableID:1:196",
    name: "spacing-horizontal/global-gutter",
    values: {
      "1:4": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1:178",
      },
    },
  },
  {
    id: "VariableID:1:199",
    name: "OS",
    values: {
      "1:5": "iOS",
      "1:6": "iOS",
      "1:7": "iOS",
      "1:8": "Android",
    },
  },
  {
    id: "VariableID:1:200",
    name: "font-family/text",
    values: {
      "1:5": "Figma Only iOS Text",
      "1:6": "Figma Only iOS Text",
      "1:7": "Figma Only iOS Text",
      "1:8": "Roboto",
    },
  },
  {
    id: "VariableID:1:201",
    name: "font-family/display",
    values: {
      "1:5": "Figma Only iOS",
      "1:6": "Figma Only iOS",
      "1:7": "Figma Only iOS",
      "1:8": "Roboto",
    },
  },
  {
    id: "VariableID:1:202",
    name: "font-size/25",
    values: {
      "1:5": 11,
      "1:6": 17,
      "1:7": 8,
      "1:8": 11,
    },
  },
  {
    id: "VariableID:1:203",
    name: "font-size/50",
    values: {
      "1:5": 12,
      "1:6": 18,
      "1:7": 9,
      "1:8": 12,
    },
  },
  {
    id: "VariableID:1:204",
    name: "font-size/75",
    values: {
      "1:5": 13,
      "1:6": 19,
      "1:7": 10,
      "1:8": 13,
    },
  },
  {
    id: "VariableID:1:205",
    name: "font-size/100",
    values: {
      "1:5": 14,
      "1:6": 20,
      "1:7": 11,
      "1:8": 14,
    },
  },
  {
    id: "VariableID:1:206",
    name: "font-size/200",
    values: {
      "1:5": 16,
      "1:6": 22,
      "1:7": 13,
      "1:8": 16,
    },
  },
  {
    id: "VariableID:1:207",
    name: "font-size/300",
    values: {
      "1:5": 18,
      "1:6": 24,
      "1:7": 15,
      "1:8": 18,
    },
  },
  {
    id: "VariableID:1:208",
    name: "font-size/400",
    values: {
      "1:5": 20,
      "1:6": 26,
      "1:7": 17,
      "1:8": 20,
    },
  },
  {
    id: "VariableID:1:209",
    name: "font-size/500",
    values: {
      "1:5": 22,
      "1:6": 28,
      "1:7": 19,
      "1:8": 22,
    },
  },
  {
    id: "VariableID:1:210",
    name: "font-size/600",
    values: {
      "1:5": 24,
      "1:6": 30,
      "1:7": 21,
      "1:8": 24,
    },
  },
  {
    id: "VariableID:1:211",
    name: "line-height/25",
    values: {
      "1:5": 13,
      "1:6": 19,
      "1:7": 10,
      "1:8": 13,
    },
  },
  {
    id: "VariableID:1:212",
    name: "line-height/50",
    values: {
      "1:5": 16,
      "1:6": 22,
      "1:7": 13,
      "1:8": 16,
    },
  },
  {
    id: "VariableID:1:213",
    name: "line-height/75",
    values: {
      "1:5": 18,
      "1:6": 24,
      "1:7": 15,
      "1:8": 18,
    },
  },
  {
    id: "VariableID:1:214",
    name: "line-height/100",
    values: {
      "1:5": 19,
      "1:6": 25,
      "1:7": 16,
      "1:8": 19,
    },
  },
  {
    id: "VariableID:1:215",
    name: "line-height/200",
    values: {
      "1:5": 21,
      "1:6": 27,
      "1:7": 18,
      "1:8": 21,
    },
  },
  {
    id: "VariableID:1:216",
    name: "line-height/300",
    values: {
      "1:5": 24,
      "1:6": 29,
      "1:7": 20,
      "1:8": 24,
    },
  },
  {
    id: "VariableID:1:217",
    name: "line-height/400",
    values: {
      "1:5": 25,
      "1:6": 31,
      "1:7": 22,
      "1:8": 25,
    },
  },
  {
    id: "VariableID:1:218",
    name: "line-height/500",
    values: {
      "1:5": 30,
      "1:6": 34,
      "1:7": 25,
      "1:8": 30,
    },
  },
  {
    id: "VariableID:1:238",
    name: "radius/x0,5",
    values: {
      "1:4": 2,
    },
  },
  {
    id: "VariableID:1:247",
    name: "radius/x1",
    values: {
      "1:4": 4,
    },
  },
  {
    id: "VariableID:1:248",
    name: "radius/x1,5",
    values: {
      "1:4": 6,
    },
  },
  {
    id: "VariableID:1:249",
    name: "radius/x2",
    values: {
      "1:4": 8,
    },
  },
  {
    id: "VariableID:1:250",
    name: "radius/x2,5",
    values: {
      "1:4": 10,
    },
  },
  {
    id: "VariableID:1:251",
    name: "radius/x3",
    values: {
      "1:4": 12,
    },
  },
  {
    id: "VariableID:1:252",
    name: "radius/x4",
    values: {
      "1:4": 16,
    },
  },
  {
    id: "VariableID:1:253",
    name: "radius/x5",
    values: {
      "1:4": 20,
    },
  },
  {
    id: "VariableID:1:254",
    name: "radius/x6",
    values: {
      "1:4": 24,
    },
  },
  {
    id: "VariableID:190:8145",
    name: "font-size/static-25",
    values: {
      "1:5": 11,
      "1:6": 11,
      "1:7": 11,
      "1:8": 11,
    },
  },
  {
    id: "VariableID:190:8146",
    name: "font-size/static-50",
    values: {
      "1:5": 12,
      "1:6": 12,
      "1:7": 12,
      "1:8": 12,
    },
  },
  {
    id: "VariableID:190:8147",
    name: "font-size/static-75",
    values: {
      "1:5": 13,
      "1:6": 13,
      "1:7": 13,
      "1:8": 13,
    },
  },
  {
    id: "VariableID:190:8148",
    name: "font-size/static-100",
    values: {
      "1:5": 14,
      "1:6": 14,
      "1:7": 14,
      "1:8": 14,
    },
  },
  {
    id: "VariableID:190:8149",
    name: "font-size/static-200",
    values: {
      "1:5": 16,
      "1:6": 16,
      "1:7": 16,
      "1:8": 16,
    },
  },
  {
    id: "VariableID:190:8150",
    name: "font-size/static-300",
    values: {
      "1:5": 18,
      "1:6": 18,
      "1:7": 18,
      "1:8": 18,
    },
  },
  {
    id: "VariableID:190:8151",
    name: "font-size/static-400",
    values: {
      "1:5": 20,
      "1:6": 20,
      "1:7": 20,
      "1:8": 20,
    },
  },
  {
    id: "VariableID:190:8152",
    name: "font-size/static-500",
    values: {
      "1:5": 22,
      "1:6": 22,
      "1:7": 22,
      "1:8": 22,
    },
  },
  {
    id: "VariableID:190:8153",
    name: "font-size/static-600",
    values: {
      "1:5": 24,
      "1:6": 24,
      "1:7": 24,
      "1:8": 24,
    },
  },
  {
    id: "VariableID:190:8154",
    name: "line-height/static-25",
    values: {
      "1:5": 13,
      "1:6": 13,
      "1:7": 10,
      "1:8": 13,
    },
  },
  {
    id: "VariableID:190:8155",
    name: "line-height/static-50",
    values: {
      "1:5": 16,
      "1:6": 16,
      "1:7": 16,
      "1:8": 16,
    },
  },
  {
    id: "VariableID:190:8156",
    name: "line-height/static-75",
    values: {
      "1:5": 18,
      "1:6": 18,
      "1:7": 18,
      "1:8": 18,
    },
  },
  {
    id: "VariableID:190:8157",
    name: "line-height/static-100",
    values: {
      "1:5": 19,
      "1:6": 19,
      "1:7": 19,
      "1:8": 19,
    },
  },
  {
    id: "VariableID:190:8158",
    name: "line-height/static-200",
    values: {
      "1:5": 21,
      "1:6": 21,
      "1:7": 21,
      "1:8": 21,
    },
  },
  {
    id: "VariableID:190:8159",
    name: "line-height/static-300",
    values: {
      "1:5": 23,
      "1:6": 23,
      "1:7": 23,
      "1:8": 23,
    },
  },
  {
    id: "VariableID:190:8160",
    name: "line-height/static-400",
    values: {
      "1:5": 25,
      "1:6": 25,
      "1:7": 25,
      "1:8": 25,
    },
  },
  {
    id: "VariableID:190:8161",
    name: "line-height/static-500",
    values: {
      "1:5": 30,
      "1:6": 30,
      "1:7": 30,
      "1:8": 30,
    },
  },
  {
    id: "VariableID:190:8162",
    name: "line-height/static-600",
    values: {
      "1:5": 32,
      "1:6": 32,
      "1:7": 32,
      "1:8": 32,
    },
  },
  {
    id: "VariableID:211:7912",
    name: "fg/static-black",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:93017",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:93017",
      },
    },
  },
  {
    id: "VariableID:238:17661",
    name: "bg/layer-basement",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92913",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92912",
      },
    },
  },
  {
    id: "VariableID:238:17662",
    name: "bg/layer-floating",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92911",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92912",
      },
    },
  },
  {
    id: "VariableID:289:13772",
    name: "font-weight/regular",
    values: {
      "1:5": "regular",
      "1:6": "regular",
      "1:7": "regular",
      "1:8": "regular",
    },
  },
  {
    id: "VariableID:289:13773",
    name: "font-weight/bold",
    values: {
      "1:5": "bold",
      "1:6": "bold",
      "1:7": "bold",
      "1:8": "bold",
    },
  },
  {
    id: "VariableID:491:21540",
    name: "stroke-width/1",
    values: {
      "1:4": 1,
    },
  },
  {
    id: "VariableID:514:13178",
    name: "Component utility (Figma Only)/Radio/small-padding-top",
    values: {
      "1:5": 5,
      "1:6": 2,
      "1:7": 6.5,
      "1:8": 5,
    },
  },
  {
    id: "VariableID:535:1747",
    name: "Component utility (Figma Only)/Radio/medium-padding-top",
    values: {
      "1:5": 6.5,
      "1:6": 3.5,
      "1:7": 8,
      "1:8": 6.5,
    },
  },
  {
    id: "VariableID:535:1748",
    name: "Component utility (Figma Only)/Radio/large-padding-top",
    values: {
      "1:5": 7.5,
      "1:6": 4.5,
      "1:7": 9,
      "1:8": 7.5,
    },
  },
  {
    id: "VariableID:576:22878",
    name: "bg/neutral-solid-pressed",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92919",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92919",
      },
    },
  },
  {
    id: "VariableID:607:10228",
    name: "unit/x3,5",
    values: {
      "1:4": 14,
    },
  },
  {
    id: "VariableID:654:20851",
    name: "bg/disabled",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92913",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92913",
      },
    },
  },
  {
    id: "VariableID:670:2700",
    name: "bg/layer-floating-pressed",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92912",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92914",
      },
    },
  },
  {
    id: "VariableID:764:14294",
    name: "stroke/neutral-muted",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92913",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92913",
      },
    },
  },
  {
    id: "VariableID:796:4448",
    name: "Component utility (Figma Only)/Chip Radio Group/medium-height",
    values: {
      "1:5": 38,
      "1:6": 43,
      "1:7": 38,
      "1:8": 38,
    },
  },
  {
    id: "VariableID:882:7634",
    name: "bg/informative-weak-pressed",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92934",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92934",
      },
    },
  },
  {
    id: "VariableID:985:10672",
    name: "bg/static-white",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:93018",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:93018",
      },
    },
  },
  {
    id: "VariableID:985:16614",
    name: "bg/warning-weak-pressed",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92967",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92967",
      },
    },
  },
  {
    id: "VariableID:985:16616",
    name: "bg/danger-weak-pressed",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92945",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92945",
      },
    },
  },
  {
    id: "VariableID:1188:4255",
    name: "bg/informative-solid",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92938",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92938",
      },
    },
  },
  {
    id: "VariableID:1304:30176",
    name: "stroke/danger",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92950",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92949",
      },
    },
  },
  {
    id: "VariableID:1547:55736",
    name: "bg/positive-weak-pressed",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92956",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92956",
      },
    },
  },
  {
    id: "VariableID:1547:55737",
    name: "bg/informative-solid-pressed",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92939",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92939",
      },
    },
  },
  {
    id: "VariableID:1547:55738",
    name: "bg/positive-solid-pressed",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92961",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92959",
      },
    },
  },
  {
    id: "VariableID:1700:4280",
    name: "Component utility (Figma Only)/Checkbox/small-padding-top",
    values: {
      "1:5": 5,
      "1:6": 2,
      "1:7": 6.5,
      "1:8": 5,
    },
  },
  {
    id: "VariableID:1700:4281",
    name: "Component utility (Figma Only)/Checkbox/medium-padding-top",
    values: {
      "1:5": 6.5,
      "1:6": 3.5,
      "1:7": 8,
      "1:8": 6.5,
    },
  },
  {
    id: "VariableID:1700:4282",
    name: "Component utility (Figma Only)/Checkbox/large-padding-top",
    values: {
      "1:5": 7.5,
      "1:6": 4.5,
      "1:7": 9,
      "1:8": 7.5,
    },
  },
  {
    id: "VariableID:1883:92911",
    name: "palette/gray-00",
    values: {
      "1928:7": {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
      },
      "1928:8": {
        r: 0.07058823853731155,
        g: 0.07058823853731155,
        b: 0.07058823853731155,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92912",
    name: "palette/gray-100",
    values: {
      "1928:7": {
        r: 0.9686274528503418,
        g: 0.9725490212440491,
        b: 0.9764705896377563,
        a: 1,
      },
      "1928:8": {
        r: 0.10196078568696976,
        g: 0.10980392247438431,
        b: 0.125490203499794,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92913",
    name: "palette/gray-200",
    values: {
      "1928:7": {
        r: 0.9529411792755127,
        g: 0.95686274766922,
        b: 0.9607843160629272,
        a: 1,
      },
      "1928:8": {
        r: 0.1453428864479065,
        g: 0.15446904301643372,
        b: 0.17272135615348816,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92914",
    name: "palette/gray-300",
    values: {
      "1928:7": {
        r: 0.9333333373069763,
        g: 0.9372549057006836,
        b: 0.9450980424880981,
        a: 1,
      },
      "1928:8": {
        r: 0.17231644690036774,
        g: 0.18159319460391998,
        b: 0.20323893427848816,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92915",
    name: "palette/gray-400",
    values: {
      "1928:7": {
        r: 0.8627451062202454,
        g: 0.8705882430076599,
        b: 0.8901960849761963,
        a: 1,
      },
      "1928:8": {
        r: 0.24313725531101227,
        g: 0.2549019753932953,
        b: 0.2705882489681244,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92916",
    name: "palette/gray-500",
    values: {
      "1928:7": {
        r: 0.8196078538894653,
        g: 0.8274509906768799,
        b: 0.8470588326454163,
        a: 1,
      },
      "1928:8": {
        r: 0.35686275362968445,
        g: 0.3764705955982208,
        b: 0.4156862795352936,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92917",
    name: "palette/gray-600",
    values: {
      "1928:7": {
        r: 0.6901960968971252,
        g: 0.7019608020782471,
        b: 0.729411780834198,
        a: 1,
      },
      "1928:8": {
        r: 0.5254902243614197,
        g: 0.545098066329956,
        b: 0.5803921818733215,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92918",
    name: "palette/gray-700",
    values: {
      "1928:7": {
        r: 0.5254902243614197,
        g: 0.545098066329956,
        b: 0.5803921818733215,
        a: 1,
      },
      "1928:8": {
        r: 0.6901960968971252,
        g: 0.7019608020782471,
        b: 0.729411780834198,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92919",
    name: "palette/gray-800",
    values: {
      "1928:7": {
        r: 0.3450980484485626,
        g: 0.3764705955982208,
        b: 0.43921568989753723,
        a: 1,
      },
      "1928:8": {
        r: 0.8627451062202454,
        g: 0.8705882430076599,
        b: 0.8901960849761963,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92920",
    name: "palette/gray-900",
    values: {
      "1928:7": {
        r: 0.10196078568696976,
        g: 0.10980392247438431,
        b: 0.125490203499794,
        a: 1,
      },
      "1928:8": {
        r: 0.9529411792755127,
        g: 0.95686274766922,
        b: 0.9607843160629272,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92921",
    name: "palette/carrot-100",
    values: {
      "1928:7": {
        r: 1,
        g: 0.9490196108818054,
        b: 0.9254902005195618,
        a: 1,
      },
      "1928:8": {
        r: 0.1921568661928177,
        g: 0.1411764770746231,
        b: 0.12156862765550613,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92922",
    name: "palette/carrot-200",
    values: {
      "1928:7": {
        r: 1,
        g: 0.9098039269447327,
        b: 0.8588235378265381,
        a: 1,
      },
      "1928:8": {
        r: 0.29411765933036804,
        g: 0.16078431904315948,
        b: 0.10980392247438431,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92923",
    name: "palette/carrot-300",
    values: {
      "1928:7": {
        r: 1,
        g: 0.8352941274642944,
        b: 0.7529411911964417,
        a: 1,
      },
      "1928:8": {
        r: 0.41960784792900085,
        g: 0.1921568661928177,
        b: 0.10980392247438431,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92924",
    name: "palette/carrot-400",
    values: {
      "1928:7": {
        r: 1,
        g: 0.7254902124404907,
        b: 0.6000000238418579,
        a: 1,
      },
      "1928:8": {
        r: 0.5098039507865906,
        g: 0.18431372940540314,
        b: 0,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92925",
    name: "palette/carrot-500",
    values: {
      "1928:7": {
        r: 1,
        g: 0.5764706134796143,
        b: 0.3921568691730499,
        a: 1,
      },
      "1928:8": {
        r: 0.7686274647712708,
        g: 0.2705882489681244,
        b: 0.003921568859368563,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92926",
    name: "palette/carrot-600",
    values: {
      "1928:7": {
        r: 1,
        g: 0.4000000059604645,
        b: 0,
        a: 1,
      },
      "1928:8": {
        r: 0.9686274528503418,
        g: 0.3490196168422699,
        b: 0,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92927",
    name: "palette/carrot-700",
    values: {
      "1928:7": {
        r: 0.9098039269447327,
        g: 0.2705882489681244,
        b: 0,
        a: 1,
      },
      "1928:8": {
        r: 1,
        g: 0.4000000059604645,
        b: 0,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92928",
    name: "palette/carrot-800",
    values: {
      "1928:7": {
        r: 0.7254902124404907,
        g: 0.2235294133424759,
        b: 0.003921568859368563,
        a: 1,
      },
      "1928:8": {
        r: 1,
        g: 0.6196078658103943,
        b: 0.3960784375667572,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92929",
    name: "palette/carrot-900",
    values: {
      "1928:7": {
        r: 0.5254902243614197,
        g: 0.16862745583057404,
        b: 0,
        a: 1,
      },
      "1928:8": {
        r: 0.9333333373069763,
        g: 0.8078431487083435,
        b: 0.7372549176216125,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92930",
    name: "palette/carrot-1000",
    values: {
      "1928:7": {
        r: 0.27843138575553894,
        g: 0.08627451211214066,
        b: 0.003921568859368563,
        a: 1,
      },
      "1928:8": {
        r: 0.95686274766922,
        g: 0.9333333373069763,
        b: 0.9176470637321472,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92933",
    name: "palette/blue-100",
    values: {
      "1928:7": {
        r: 0.9372549057006836,
        g: 0.9647058844566345,
        b: 1,
        a: 1,
      },
      "1928:8": {
        r: 0.108431376516819,
        g: 0.14973855018615723,
        b: 0.20137256383895874,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92934",
    name: "palette/blue-200",
    values: {
      "1928:7": {
        r: 0.886274516582489,
        g: 0.929411768913269,
        b: 0.9882352948188782,
        a: 1,
      },
      "1928:8": {
        r: 0.13333334028720856,
        g: 0.20392157137393951,
        b: 0.2666666805744171,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92935",
    name: "palette/blue-300",
    values: {
      "1928:7": {
        r: 0.7960784435272217,
        g: 0.8745098114013672,
        b: 0.9803921580314636,
        a: 1,
      },
      "1928:8": {
        r: 0.0941176488995552,
        g: 0.2705882489681244,
        b: 0.3921568691730499,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92936",
    name: "palette/blue-400",
    values: {
      "1928:7": {
        r: 0.6705882549285889,
        g: 0.8078431487083435,
        b: 0.9921568632125854,
        a: 1,
      },
      "1928:8": {
        r: 0.0117647061124444,
        g: 0.3529411852359772,
        b: 0.529411792755127,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92937",
    name: "palette/blue-500",
    values: {
      "1928:7": {
        r: 0.5137255191802979,
        g: 0.7176470756530762,
        b: 0.9921568632125854,
        a: 1,
      },
      "1928:8": {
        r: 0.07058823853731155,
        g: 0.4313725531101227,
        b: 0.6823529601097107,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92938",
    name: "palette/blue-600",
    values: {
      "1928:7": {
        r: 0.15294118225574493,
        g: 0.529411792755127,
        b: 0.9960784316062927,
        a: 1,
      },
      "1928:8": {
        r: 0.0941176488995552,
        g: 0.5372549295425415,
        b: 0.7960784435272217,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92939",
    name: "palette/blue-700",
    values: {
      "1928:7": {
        r: 0.10196078568696976,
        g: 0.4313725531101227,
        b: 0.8745098114013672,
        a: 1,
      },
      "1928:8": {
        r: 0.1725490242242813,
        g: 0.6470588445663452,
        b: 0.9450980424880981,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92940",
    name: "palette/blue-800",
    values: {
      "1928:7": {
        r: 0.062745101749897,
        g: 0.33725491166114807,
        b: 0.7333333492279053,
        a: 1,
      },
      "1928:8": {
        r: 0.48235294222831726,
        g: 0.7411764860153198,
        b: 0.9764705896377563,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92941",
    name: "palette/blue-900",
    values: {
      "1928:7": {
        r: 0.0313725508749485,
        g: 0.23137255012989044,
        b: 0.5058823823928833,
        a: 1,
      },
      "1928:8": {
        r: 0.7215686440467834,
        g: 0.843137264251709,
        b: 0.9843137264251709,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92942",
    name: "palette/blue-1000",
    values: {
      "1928:7": {
        r: 0.007843137718737125,
        g: 0.12941177189350128,
        b: 0.29019609093666077,
        a: 1,
      },
      "1928:8": {
        r: 0.8980392217636108,
        g: 0.9411764740943909,
        b: 0.9960784316062927,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92944",
    name: "palette/red-100",
    values: {
      "1928:7": {
        r: 0.9921568632125854,
        g: 0.9490196108818054,
        b: 0.9490196108818054,
        a: 1,
      },
      "1928:8": {
        r: 0.19607843458652496,
        g: 0.13725490868091583,
        b: 0.13725490868091583,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92945",
    name: "palette/red-200",
    values: {
      "1928:7": {
        r: 0.9921568632125854,
        g: 0.8941176533699036,
        b: 0.8941176533699036,
        a: 1,
      },
      "1928:8": {
        r: 0.30980393290519714,
        g: 0.14901961386203766,
        b: 0.1411764770746231,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92946",
    name: "palette/red-300",
    values: {
      "1928:7": {
        r: 0.9960784316062927,
        g: 0.8078431487083435,
        b: 0.800000011920929,
        a: 1,
      },
      "1928:8": {
        r: 0.45490196347236633,
        g: 0.1568627506494522,
        b: 0.14901961386203766,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92947",
    name: "palette/red-400",
    values: {
      "1928:7": {
        r: 0.9960784316062927,
        g: 0.686274528503418,
        b: 0.6666666865348816,
        a: 1,
      },
      "1928:8": {
        r: 0.6313725709915161,
        g: 0.14901961386203766,
        b: 0.12941177189350128,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92948",
    name: "palette/red-500",
    values: {
      "1928:7": {
        r: 0.9960784316062927,
        g: 0.5098039507865906,
        b: 0.48235294222831726,
        a: 1,
      },
      "1928:8": {
        r: 0.8196078538894653,
        g: 0.11764705926179886,
        b: 0.07450980693101883,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92949",
    name: "palette/red-600",
    values: {
      "1928:7": {
        r: 1,
        g: 0.2549019753932953,
        b: 0.1764705926179886,
        a: 1,
      },
      "1928:8": {
        r: 0.9686274528503418,
        g: 0.2078431397676468,
        b: 0.14901961386203766,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92950",
    name: "palette/red-700",
    values: {
      "1928:7": {
        r: 0.9176470637321472,
        g: 0.13725490868091583,
        b: 0.054901961237192154,
        a: 1,
      },
      "1928:8": {
        r: 0.9490196108818054,
        g: 0.4745098054409027,
        b: 0.4274509847164154,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92951",
    name: "palette/red-800",
    values: {
      "1928:7": {
        r: 0.7843137383460999,
        g: 0.11372549086809158,
        b: 0.07450980693101883,
        a: 1,
      },
      "1928:8": {
        r: 0.9450980424880981,
        g: 0.6392157077789307,
        b: 0.6078431606292725,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92952",
    name: "palette/red-900",
    values: {
      "1928:7": {
        r: 0.5607843399047852,
        g: 0.11764705926179886,
        b: 0.062745101749897,
        a: 1,
      },
      "1928:8": {
        r: 0.9490196108818054,
        g: 0.7960784435272217,
        b: 0.7882353067398071,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92953",
    name: "palette/red-1000",
    values: {
      "1928:7": {
        r: 0.29019609093666077,
        g: 0.07058823853731155,
        b: 0.03529411926865578,
        a: 1,
      },
      "1928:8": {
        r: 0.9529411792755127,
        g: 0.7960784435272217,
        b: 0.7843137383460999,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92955",
    name: "palette/green-100",
    values: {
      "1928:7": {
        r: 0.9058823585510254,
        g: 0.9764705896377563,
        b: 0.9529411792755127,
        a: 1,
      },
      "1928:8": {
        r: 0.125490203499794,
        g: 0.16078431904315948,
        b: 0.14901961386203766,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92956",
    name: "palette/green-200",
    values: {
      "1928:7": {
        r: 0.8196078538894653,
        g: 0.95686274766922,
        b: 0.8980392217636108,
        a: 1,
      },
      "1928:8": {
        r: 0.125490203499794,
        g: 0.21176470816135406,
        b: 0.18039216101169586,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92957",
    name: "palette/green-300",
    values: {
      "1928:7": {
        r: 0.5607843399047852,
        g: 0.9450980424880981,
        b: 0.7647058963775635,
        a: 1,
      },
      "1928:8": {
        r: 0.125490203499794,
        g: 0.2862745225429535,
        b: 0.23137255012989044,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92958",
    name: "palette/green-400",
    values: {
      "1928:7": {
        r: 0.41960784792900085,
        g: 0.8823529481887817,
        b: 0.6901960968971252,
        a: 1,
      },
      "1928:8": {
        r: 0.09803921729326248,
        g: 0.3764705955982208,
        b: 0.2980392277240753,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92959",
    name: "palette/green-500",
    values: {
      "1928:7": {
        r: 0.18039216101169586,
        g: 0.8039215803146362,
        b: 0.5843137502670288,
        a: 1,
      },
      "1928:8": {
        r: 0.06666667014360428,
        g: 0.4745098054409027,
        b: 0.33725491166114807,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92960",
    name: "palette/green-600",
    values: {
      "1928:7": {
        r: 0.062745101749897,
        g: 0.6784313917160034,
        b: 0.4941176474094391,
        a: 1,
      },
      "1928:8": {
        r: 0.10588235408067703,
        g: 0.5803921818733215,
        b: 0.4274509847164154,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92961",
    name: "palette/green-700",
    values: {
      "1928:7": {
        r: 0.0235294122248888,
        g: 0.5490196347236633,
        b: 0.4274509847164154,
        a: 1,
      },
      "1928:8": {
        r: 0.13333334028720856,
        g: 0.6980392336845398,
        b: 0.49803921580314636,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92962",
    name: "palette/green-800",
    values: {
      "1928:7": {
        r: 0,
        g: 0.41960784792900085,
        b: 0.3450980484485626,
        a: 1,
      },
      "1928:8": {
        r: 0.2078431397676468,
        g: 0.8078431487083435,
        b: 0.6039215922355652,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92963",
    name: "palette/green-900",
    values: {
      "1928:7": {
        r: 0.019607843831181526,
        g: 0.29019609093666077,
        b: 0.239215686917305,
        a: 1,
      },
      "1928:8": {
        r: 0.5764706134796143,
        g: 0.8980392217636108,
        b: 0.7529411911964417,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92964",
    name: "palette/green-1000",
    values: {
      "1928:7": {
        r: 0.03921568766236305,
        g: 0.16862745583057404,
        b: 0.1411764770746231,
        a: 1,
      },
      "1928:8": {
        r: 0.8313725590705872,
        g: 0.9647058844566345,
        b: 0.9372549057006836,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92966",
    name: "palette/yellow-100",
    values: {
      "1928:7": {
        r: 1,
        g: 0.9764705896377563,
        b: 0.9019607901573181,
        a: 1,
      },
      "1928:8": {
        r: 0.16568627953529358,
        g: 0.1442745178937912,
        b: 0.08921568840742111,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92967",
    name: "palette/yellow-200",
    values: {
      "1928:7": {
        r: 0.991304337978363,
        g: 0.9521738886833191,
        b: 0.8086956739425659,
        a: 1,
      },
      "1928:8": {
        r: 0.239215686917305,
        g: 0.1882352977991104,
        b: 0.08627451211214066,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92968",
    name: "palette/yellow-300",
    values: {
      "1928:7": {
        r: 0.9843137264251709,
        g: 0.8941176533699036,
        b: 0.6039215922355652,
        a: 1,
      },
      "1928:8": {
        r: 0.3176470696926117,
        g: 0.24705882370471954,
        b: 0.08235294371843338,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92969",
    name: "palette/yellow-400",
    values: {
      "1928:7": {
        r: 0.9686274528503418,
        g: 0.8235294222831726,
        b: 0.2980392277240753,
        a: 1,
      },
      "1928:8": {
        r: 0.4117647111415863,
        g: 0.3176470696926117,
        b: 0.08235294371843338,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92970",
    name: "palette/yellow-500",
    values: {
      "1928:7": {
        r: 0.8901960849761963,
        g: 0.7215686440467834,
        b: 0.1725490242242813,
        a: 1,
      },
      "1928:8": {
        r: 0.5137255191802979,
        g: 0.4000000059604645,
        b: 0.10588235408067703,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92971",
    name: "palette/yellow-600",
    values: {
      "1928:7": {
        r: 0.7686274647712708,
        g: 0.5921568870544434,
        b: 0.14509804546833038,
        a: 1,
      },
      "1928:8": {
        r: 0.6117647290229797,
        g: 0.49803921580314636,
        b: 0.14509804546833038,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92972",
    name: "palette/yellow-700",
    values: {
      "1928:7": {
        r: 0.6078431606292725,
        g: 0.47058823704719543,
        b: 0.12941177189350128,
        a: 1,
      },
      "1928:8": {
        r: 0.7098039388656616,
        g: 0.6078431606292725,
        b: 0.21176470816135406,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92973",
    name: "palette/yellow-800",
    values: {
      "1928:7": {
        r: 0.4588235318660736,
        g: 0.35686275362968445,
        b: 0.13333334028720856,
        a: 1,
      },
      "1928:8": {
        r: 0.8039215803146362,
        g: 0.7137255072593689,
        b: 0.33725491166114807,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92974",
    name: "palette/yellow-900",
    values: {
      "1928:7": {
        r: 0.30980393290519714,
        g: 0.24313725531101227,
        b: 0.12156862765550613,
        a: 1,
      },
      "1928:8": {
        r: 0.8901960849761963,
        g: 0.8549019694328308,
        b: 0.5882353186607361,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:92975",
    name: "palette/yellow-1000",
    values: {
      "1928:7": {
        r: 0.1725490242242813,
        g: 0.14509804546833038,
        b: 0.07058823853731155,
        a: 1,
      },
      "1928:8": {
        r: 0.9686274528503418,
        g: 0.9411764740943909,
        b: 0.8078431487083435,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:93017",
    name: "palette/static-black",
    values: {
      "1928:7": {
        r: 0,
        g: 0,
        b: 0,
        a: 1,
      },
      "1928:8": {
        r: 0,
        g: 0,
        b: 0,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:93018",
    name: "palette/static-white",
    values: {
      "1928:7": {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
      },
      "1928:8": {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:1883:93030",
    name: "palette/static-black-alpha-200",
    values: {
      "1928:7": {
        r: 0,
        g: 0,
        b: 0,
        a: 0.20000000298023224,
      },
      "1928:8": {
        r: 0,
        g: 0,
        b: 0,
        a: 0.20000000298023224,
      },
    },
  },
  {
    id: "VariableID:1883:93031",
    name: "palette/static-black-alpha-500",
    values: {
      "1928:7": {
        r: 0,
        g: 0,
        b: 0,
        a: 0.5,
      },
      "1928:8": {
        r: 0,
        g: 0,
        b: 0,
        a: 0.5,
      },
    },
  },
  {
    id: "VariableID:1884:93034",
    name: "palette/static-black-alpha-50",
    values: {
      "1928:7": {
        r: 0,
        g: 0,
        b: 0,
        a: 0.05000000074505806,
      },
      "1928:8": {
        r: 0,
        g: 0,
        b: 0,
        a: 0.05000000074505806,
      },
    },
  },
  {
    id: "VariableID:1886:93035",
    name: "font-size/700",
    values: {
      "1:5": 26,
      "1:6": 32,
      "1:7": 23,
      "1:8": 26,
    },
  },
  {
    id: "VariableID:1886:93036",
    name: "line-height/600",
    values: {
      "1:5": 32,
      "1:6": 38,
      "1:7": 29,
      "1:8": 32,
    },
  },
  {
    id: "VariableID:1886:93038",
    name: "font-weight/medium",
    values: {
      "1:5": "medium",
      "1:6": "medium",
      "1:7": "medium",
      "1:8": "medium",
    },
  },
  {
    id: "VariableID:1971:524",
    name: "line-height/700",
    values: {
      "1:5": 34,
      "1:6": 40,
      "1:7": 31,
      "1:8": 34,
    },
  },
  {
    id: "VariableID:2381:78698",
    name: "palette/purple-100",
    values: {
      "1928:7": {
        r: 0.9647058844566345,
        g: 0.95686274766922,
        b: 0.9960784316062927,
        a: 1,
      },
      "1928:8": {
        r: 0.19648709893226624,
        g: 0.12590409815311432,
        b: 0.3947916626930237,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:2381:78699",
    name: "palette/purple-200",
    values: {
      "1928:7": {
        r: 0.9372549057006836,
        g: 0.9176470637321472,
        b: 0.9960784316062927,
        a: 1,
      },
      "1928:8": {
        r: 0.23226696252822876,
        g: 0.15530513226985931,
        b: 0.45032551884651184,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:2381:78700",
    name: "palette/purple-300",
    values: {
      "1928:7": {
        r: 0.8823529481887817,
        g: 0.8470588326454163,
        b: 1,
        a: 1,
      },
      "1928:8": {
        r: 0.2679543197154999,
        g: 0.18735800683498383,
        b: 0.5055013298988342,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:2381:78701",
    name: "palette/purple-400",
    values: {
      "1928:7": {
        r: 0.8235294222831726,
        g: 0.7647058963775635,
        b: 1,
        a: 1,
      },
      "1928:8": {
        r: 0.3524117171764374,
        g: 0.23197387158870697,
        b: 0.693652331829071,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:2381:78702",
    name: "palette/purple-500",
    values: {
      "1928:7": {
        r: 0.7411764860153198,
        g: 0.658823549747467,
        b: 1,
        a: 1,
      },
      "1928:8": {
        r: 0.4627451002597809,
        g: 0.30980393290519714,
        b: 0.8509804010391235,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:2381:78703",
    name: "palette/purple-600",
    values: {
      "1928:7": {
        r: 0.6313725709915161,
        g: 0.5254902243614197,
        b: 0.9843137264251709,
        a: 1,
      },
      "1928:8": {
        r: 0.5568627715110779,
        g: 0.41960784792900085,
        b: 0.9333333373069763,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:2381:78704",
    name: "palette/purple-700",
    values: {
      "1928:7": {
        r: 0.5215686559677124,
        g: 0.3921568691730499,
        b: 0.9137254953384399,
        a: 1,
      },
      "1928:8": {
        r: 0.6549019813537598,
        g: 0.5529412031173706,
        b: 0.9411764740943909,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:2381:78705",
    name: "palette/purple-800",
    values: {
      "1928:7": {
        r: 0.4000000059604645,
        g: 0.27450981736183167,
        b: 0.7764706015586853,
        a: 1,
      },
      "1928:8": {
        r: 0.7450980544090271,
        g: 0.6784313917160034,
        b: 0.9490196108818054,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:2381:78706",
    name: "palette/purple-900",
    values: {
      "1928:7": {
        r: 0.27450981736183167,
        g: 0.1882352977991104,
        b: 0.5411764979362488,
        a: 1,
      },
      "1928:8": {
        r: 0.8509804010391235,
        g: 0.8078431487083435,
        b: 0.9803921580314636,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:2381:78707",
    name: "palette/purple-1000",
    values: {
      "1928:7": {
        r: 0.16078431904315948,
        g: 0.09019608050584793,
        b: 0.364705890417099,
        a: 1,
      },
      "1928:8": {
        r: 0.9411764740943909,
        g: 0.929411768913269,
        b: 0.9882352948188782,
        a: 1,
      },
    },
  },
  {
    id: "VariableID:6075:34488",
    name: "preview-width",
    values: {
      "6075:1": 390,
      "6075:2": 320,
    },
  },
  {
    id: "VariableID:6075:34489",
    name: "preview-height",
    values: {
      "6075:1": 844,
      "6075:2": 568,
    },
  },
  {
    id: "VariableID:6421:24605",
    name: "spacing-horizontal/between-chips",
    values: {
      "1:4": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1:176",
      },
    },
  },
  {
    id: "VariableID:6782:76317",
    name: "fg/brand",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92926",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92926",
      },
    },
  },
  {
    id: "VariableID:7178:424",
    name: "fg/magic",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:2381:78704",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:2381:78704",
      },
    },
  },
  {
    id: "VariableID:7178:425",
    name: "fg/magic-contrast",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:2381:78706",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:2381:78706",
      },
    },
  },
  {
    id: "VariableID:8175:21473",
    name: "stroke/positive",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92960",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92960",
      },
    },
  },
  {
    id: "VariableID:8482:98909",
    name: "bg/magic-solid",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:2381:78703",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:2381:78703",
      },
    },
  },
  {
    id: "VariableID:8482:98910",
    name: "bg/magic-solid-pressed",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:2381:78704",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:2381:78704",
      },
    },
  },
  {
    id: "VariableID:8482:98911",
    name: "bg/magic-weak",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:2381:78698",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:2381:78698",
      },
    },
  },
  {
    id: "VariableID:8482:98912",
    name: "bg/magic-weak-pressed",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:2381:78699",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:2381:78699",
      },
    },
  },
  {
    id: "VariableID:10181:8465",
    name: "bg/neutral-muted",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92919",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92915",
      },
    },
  },
  {
    id: "VariableID:10181:32557",
    name: "bg/floating-solid",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92920",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92914",
      },
    },
  },
  {
    id: "VariableID:10181:34417",
    name: "palette/static-white-alpha-800",
    values: {
      "1928:7": {
        r: 1,
        g: 1,
        b: 1,
        a: 0.800000011920929,
      },
      "1928:8": {
        r: 1,
        g: 1,
        b: 1,
        a: 0.800000011920929,
      },
    },
  },
  {
    id: "VariableID:10181:35817",
    name: "bg/neutral-muted-pressed",
    values: {
      "1928:7": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92918",
      },
      "1928:8": {
        type: "VARIABLE_ALIAS",
        id: "VariableID:1883:92916",
      },
    },
  },
];

function rgbaToHex(r, g, b, a) {
  // Convert r, g, b from range [0, 1] to [0, 255]
  const red = Math.round(r * 255);
  const green = Math.round(g * 255);
  const blue = Math.round(b * 255);

  // Convert to hex string with padding
  const hexRed = red.toString(16).padStart(2, "0");
  const hexGreen = green.toString(16).padStart(2, "0");
  const hexBlue = blue.toString(16).padStart(2, "0");

  if (a === 1) {
    // Return #RRGGBB if alpha is 1
    return `#${hexRed}${hexGreen}${hexBlue}`;
  } else {
    // Convert alpha from range [0, 1] to [0, 255]
    const alpha = Math.round(a * 255);
    const hexAlpha = alpha.toString(16).padStart(2, "0");
    // Return #RRGGBBAA
    return `#${hexRed}${hexGreen}${hexBlue}${hexAlpha}`;
  }
}

function transformName(str) {
  return `$color.${str.split("/").join(".")}`;
}

const palettes = variables.filter((variable) => variable.name.startsWith("palette/"));

const paletteColors = Object.fromEntries(
  palettes.map((palette) => {
    return [
      transformName(palette.name),
      {
        values: {
          "theme-light": rgbaToHex(
            palette.values["1928:7"].r,
            palette.values["1928:7"].g,
            palette.values["1928:7"].b,
            palette.values["1928:7"].a,
          ),
          "theme-dark": rgbaToHex(
            palette.values["1928:8"].r,
            palette.values["1928:8"].g,
            palette.values["1928:8"].b,
            palette.values["1928:8"].a,
          ),
        },
      },
    ];
  }),
);

const fgs = variables.filter((variable) => variable.name.startsWith("fg/"));

const fgColors = Object.fromEntries(
  fgs.map((fg) => {
    return [
      `$color.${fg.name.split("/").join(".")}`,
      {
        values: {
          "theme-light": transformName(palettes.find((x) => x.id === fg.values["1928:7"].id).name),
          "theme-dark": transformName(palettes.find((x) => x.id === fg.values["1928:8"].id).name),
        },
      },
    ];
  }),
);

const bgs = variables.filter((variable) => variable.name.startsWith("bg/"));

const bgColors = Object.fromEntries(
  bgs.map((bg) => {
    return [
      `$color.${bg.name.split("/").join(".")}`,
      {
        values: {
          "theme-light": transformName(palettes.find((x) => x.id === bg.values["1928:7"].id).name),
          "theme-dark": transformName(palettes.find((x) => x.id === bg.values["1928:8"].id).name),
        },
      },
    ];
  }),
);

const strokes = variables.filter((variable) => variable.name.startsWith("stroke/"));

const strokeColors = Object.fromEntries(
  strokes.map((stroke) => {
    return [
      `$color.${stroke.name.split("/").join(".")}`,
      {
        values: {
          "theme-light": transformName(
            palettes.find((x) => x.id === stroke.values["1928:7"].id).name,
          ),
          "theme-dark": transformName(
            palettes.find((x) => x.id === stroke.values["1928:8"].id).name,
          ),
        },
      },
    ];
  }),
);

fs.writeFileSync("paletteColors.json", JSON.stringify(paletteColors, null, 2));
fs.writeFileSync("fgColors.json", JSON.stringify(fgColors, null, 2));
fs.writeFileSync("bgColors.json", JSON.stringify(bgColors, null, 2));
fs.writeFileSync("strokeColors.json", JSON.stringify(strokeColors, null, 2));
