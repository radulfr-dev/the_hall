import './styles/Footer.scss';

function Footer() {
  return (
    <div className="Footer">
        <p>&copy; Runeweaver Development {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;
