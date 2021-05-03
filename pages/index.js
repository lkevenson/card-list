import dynamic from "next/dynamic";

const Main = dynamic(() => import("components/ui/home"), {
  ssr: false,
});

export default () => {
  return <Main />;
};
