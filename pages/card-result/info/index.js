import dynamic from "next/dynamic";

const CardInfo = dynamic(() => import("components/ui/card-result/info"), {
  ssr: false,
});
export default () => {
  return <CardInfo />;
};
