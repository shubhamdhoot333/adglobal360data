import React from "react";
import { useForm } from "react-hook-form";
import Header from "../ams_dashboard/Header";
// import Setting from "./Setting";
import Sidebar from "../ams_dashboard/Sidebar";
import classNames from "classnames";
import { fileUpload } from "../../services/ams_dashboard/amsdashboard_api";
import { useCookies } from "react-cookie";
function Upload() {
  const [cookies, setCookie] = useCookies();
  let token = cookies.access_token;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const onSubmit = async (data) => {
    console.log(data);
    const response = await fileUpload(data, token);
    console.log(response);
  };
  return (
    <div className="container-scroller">
      <Header title="Pages" />
      <div className="container-fluid page-body-wrapper">
        {/* <Setting /> */}
        <Sidebar />

        <div className="row" style={{ margin: "38px auto" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Select your csv file and submit it ...</h2>
            <div className="input-group form">
              <div
                className="file-upload-wrapper"
                data-text="Select your file!"
                style={{ zIndex: 1 }}
              >
                <input
                  type="file"
                  name="datafile"
                  className={classNames("file-upload-field", {
                    "is-invalid": errors.datafile,
                  })}
                  {...register("picture", { required: true })}
                />
              </div>
              {errors.datafile && (
                <p className="text-danger">Please check the file</p>
              )}

              <button
                type="submit"
                className="btn btn-success "
                style={{ margin: "0 auto", fontSize: "18px" }}
              >
                Upload File
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Upload;
