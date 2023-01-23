import React, { useState, useEffect } from "react";
// import Camp_header from "./Camp_header";
import Header from "./Header";
import Camp_sidebar from "./Camp_sidebar";
// import Setting from "./Setting.js";
import { useCookies } from "react-cookie";
import { fileShow } from "../../services/ams_dashboard/amsdashboard_api";
import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import COLUMNS from "./Campaign_column";
import Breadcrumb from "react-bootstrap/Breadcrumb";
// import TableHeader from "./TableHeader";
function Campaign_dashboard() {
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["user"]);
  const [showdata, setShowdata] = useState([]);

  let token = cookies.access_token;
  // console.log(token);

  useEffect(() => {
    dataShow();
  }, []);

  const dataShow = async () => {
    const res = await fileShow(token);
    console.log(res.data.data);
    setShowdata(res.data.data);
  };

  return (
    <>
      <div className="container-scroller">
        {/* <Camp_header title="Ams Dashboard" /> */}
        <Header />
        <div className="container-fluid page-body-wrapper">
          {/* <Setting /> */}
          <Camp_sidebar />
          <div className="container">
            <div className="row">
              <Breadcrumb>
                <Breadcrumb.Item
                  href="#"
                  // style={{ fontSize: "1rem", textDecoration: "none" }}
                >
                  Dashboard
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">Ams Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item active>Campaign Data</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div id="toolbar">
              <MaterialTable
                columns={COLUMNS}
                data={showdata}
                options={{
                  search: true,
                  searchFieldAlignment: "right",
                  searchAutoFocus: true,
                  searchFieldVariant: "standard",

                  paging: true,
                  pageSizeOptions: [5, 10, 20, 25, 50, 100],
                  pageSize: 5,
                  paginationType: "stepped",
                  showFirstLastPageButtons: false,

                  paginationPosition: "bottom",
                  dataCardView: "true",
                  dataHeight: "460",

                  exportButton: {
                    csv: true,
                    pdf: true,
                  },
                  exportMenu: [
                    {
                      label: "Export PDF",
                      exportFunc: (cols, datas) =>
                        ExportPdf(cols, datas, "myPdfFileName"),
                    },
                    {
                      label: "Export CSV",
                      exportFunc: (cols, datas) =>
                        ExportCsv(cols, datas, "myCsvFileName"),
                    },
                  ],
                  hover: true,
                  exportAllData: true,
                  exportFileName: "TableData",
                  addRowPosition: "first",
                  actionsColumnIndex: -1,

                  // grouping: true,
                  columnsButton: true,
                  rowStyle: (data, index) =>
                    index % 2 === 0 ? { background: "#f5f5f5" } : null,
                  rowStyle: {
                    border: "1px solid black",
                  },
                  cellStyle: {
                    border: "1px solid black",
                  },
                  headerStyle: {
                    background: "rgb(77 171 151)",
                    color: "#fff",
                    fontSize: "1.2rem",
                    lineHeight: "2.5rem",
                    padding: "10px 15px",
                    border: "1px solid black",
                  },
                }}
                title="Campaign Information"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Campaign_dashboard;
