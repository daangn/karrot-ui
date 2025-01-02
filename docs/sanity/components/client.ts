import { createClient } from "@sanity/client";

import { projectId, dataset } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2023-05-03", // 현재 날짜 사용
  useCdn: true, // 프로덕션에서는 true로 설정
});
