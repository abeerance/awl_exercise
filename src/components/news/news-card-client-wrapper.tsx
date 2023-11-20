"use client";

import { NewsInfo } from "@/types/data";
import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { useWindowSize } from "react-use";

type NewsCardClientWrapperProps = {
  children: ReactNode;
  setSelectedNews?: Dispatch<SetStateAction<NewsInfo | null>>;
  onClick: () => void;
};

const NewsCardClientWrapper: FC<NewsCardClientWrapperProps> = ({
  children,
  setSelectedNews,
  onClick,
}) => {
  const { width } = useWindowSize();

  return (
    <div
      className={`shadow-lg ${
        width < 768 ? "news--grid-item_sm" : "news--grid-item"
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default NewsCardClientWrapper;
