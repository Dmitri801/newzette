const Navbar = ({ onBrandClick }) => {
  return (
    <div>
      <nav className="navbar navbar-expand fixed-top navbar-dark bg-primary mb-4">
        <a
          style={{ textAlign: "center", color: "#fff" }}
          className="navbar-brand"
          onClick={onBrandClick}
        >
          Newzette
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
