import { useRouter } from "next/router";
import PropTypes from "prop-types";

function AppLink({ children, href, ...rest }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.pathname === href ? "red" : "black",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

AppLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AppLink;
