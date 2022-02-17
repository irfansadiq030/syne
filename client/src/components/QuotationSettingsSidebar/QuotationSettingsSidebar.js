import React from "react";
import "./QuotationSettingsSidebar.css";
import { Link } from "react-router-dom";
const QuotationSettingSidebar = () => {
  return <div>

        <div className="w3-sidebar w3-bar-block w-25 bg-blue p-5">
            <h3 className="white-heading">Quotation Settings</h3>
        <Link to="#" className="w3-bar-item w3-button link-sidebar">Quotation Defaults</Link>
        <Link to="#" className="w3-bar-item w3-button link-sidebar">Custom Quotation Fields</Link>
        <Link to="#" className="w3-bar-item w3-button link-sidebar">Custom Edit Fields</Link>
        <Link to="#" className="w3-bar-item w3-button link-sidebar">Quotation Defaults</Link>
        <Link to="#" className="w3-bar-item w3-button link-sidebar">Custom Quotation Fields</Link>
        <Link to="#" className="w3-bar-item w3-button link-sidebar">Custom Edit Fields</Link>
        </div>
        <div className="ml-25">
            ... page content ...
        </div>
  </div>;
};

export default QuotationSettingSidebar;
