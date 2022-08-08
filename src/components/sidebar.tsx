const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="section">
        <div className="avatar">
          <img alt="avatar" src="/default-avatar.jpg" />
          <span className="status" />
        </div>
        <div className="username">UanNguyen</div>
      </div>
      <div className="section">
        <div className="avatar">
          <img alt="avatar" src="/default-avatar.jpg" />
          <span className="status"></span>
        </div>
        <div className="username">UanNguyen</div>
      </div>
      <div className="section">
        <div className="avatar">
          <img alt="avatar" src="/default-avatar.jpg" />
          <span className="status online"></span>
        </div>
        <div className="username">UanNguyen</div>
      </div>
    </div>
  );
};

export default Sidebar;
