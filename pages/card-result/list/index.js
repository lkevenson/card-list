import dynamic from "next/dynamic";

const CardResultList = dynamic(() => import("components/ui/card-result/list"), {
  ssr: false,
});

export default () => {
  return <CardResultList />;
};
