import './footer.css'
const Footer = () => {
  const year = new Date().getFullYear();
  return <footer>{`Copyright © a.nayak ${year}`}</footer>;
};

export default Footer;