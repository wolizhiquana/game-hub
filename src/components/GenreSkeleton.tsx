import { HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack>
      <SkeletonCircle />
      <SkeletonText noOfLines={1} flex={1} />
    </HStack>
  );
};

export default GenreSkeleton;
