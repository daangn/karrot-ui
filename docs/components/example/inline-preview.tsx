import { Box, Inline } from "seed-design/ui/layout";

export default function InlinePreview() {
  return (
    <Inline background="bg.layerDefault" gap="s2" width="full" borderRadius="s2">
      <Box background="bg.brandSolid" paddingX="s4" paddingY="s3" borderRadius="s2">
        1
      </Box>
      <Box background="bg.brandSolid" paddingX="s4" paddingY="s3" borderRadius="s2">
        2
      </Box>
      <Box background="bg.brandSolid" paddingX="s4" paddingY="s3" borderRadius="s2">
        3
      </Box>
    </Inline>
  );
}
