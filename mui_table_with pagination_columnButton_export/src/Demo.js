import React, { useState } from "react";
import "./App.css";
import MaterialTable from "@material-table/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";

function Demo() {
  const [tableData, setTableData] = useState([
    {
      name: "Raj",
      email: "Raj@gmail.com",
      phone: 7894561230,
      age: null,
      gender: "M",
      city: "Chennai",
      fee: 78456,
      school_name: "sss",
    },
    {
      name: "Mohan",
      email: "mohan@gmail.com",
      phone: 7845621590,
      age: 35,
      gender: "M",
      city: "Delhi",
      fee: 456125,
      school_name: "sss",
    },
    {
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      age: 17,
      gender: "F",
      city: "Noida",
      fee: 458796,
      school_name: "sss",
    },
    {
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: 9876543210,
      age: 20,
      gender: "M",
      city: "Mumbai",
      fee: 874569,
      school_name: "sss",
    },
    {
      name: "Neha",
      email: "neha@gmail.com",
      phone: 7845621301,
      age: 25,
      gender: "F",
      city: "Patna",
      fee: 748521,
      school_name: "sss",
    },
  ]);
  const columns = [
    {
      title: "name",
      field: "name",
      hidden: true,
    },
    { title: "email", field: "email" },
    { title: "Phone", field: "Phone" },
    {
      title: "age",
      field: "age",
    },
    { title: "gender", field: "gender" },
    { title: "city", field: "city" },
  ];
  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align="center">Crash Course on Material Table </h4>
      <MaterialTable
        columns={columns}
        data={tableData}
        options={{
          sorting: true,
          search: true,
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          searchFieldVariant: "standard",
          filtering: true,
          paging: true,
          pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
          pageSize: 5,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          paginationPosition: "both",
          exportButton: true,
          exportAllData: true,
          exportFileName: "TableData",
          addRowPosition: "first",
          actionsColumnIndex: -1,
          selection: true,
          showSelectAllCheckbox: false,
          showTextRowsSelected: false,
          selectionProps: (rowData) => ({
            disabled: rowData.age == null,
            // color:"primary"
          }),
          grouping: true,
          columnsButton: true,
          rowStyle: (data, index) =>
            index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: { background: "#f44336", color: "#fff" },
        }}
        title="Student Information"
        icons={{ Add: () => <AddIcon /> }}
      />
    </div>
  );
}

export default Demo;
