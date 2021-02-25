import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
export default function FiveOhOh() {
  const { t } = useTranslation("common");
  return (
    <>
      <h1>500 - Internal Server Error</h1>
      <Link href="/">
        <a>{t("home")}</a>
      </Link>
    </>
  );
}
