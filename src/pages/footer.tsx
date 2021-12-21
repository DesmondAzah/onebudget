import React  from "react";

const Footer = () => {
  return (
     <><br/>
    <footer className="footer" style={ { 'position': 'fixed', 'bottom': 0, 'width': '100%', 'height': '50px', 'backgroundColor': '#f5f5f5' }}>
      <div className="container">
        <div className="content has-text-centered">
          <p style={{font: 'small'}}>
            <strong>one-Budget</strong> by <a href="#" target="_blank">@oneBudget</a>. The source code is licensed
            <a href="#">oneBudget</a>.
          </p>
        </div>
      </div>
    </footer>
     </>
  );
};
export default Footer;
