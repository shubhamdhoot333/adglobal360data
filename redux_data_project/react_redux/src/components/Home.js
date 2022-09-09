import React from "react";

function Home(props) {
  console.log("home props", props.data);
  return (
    <>
      <h1>Home Component </h1>

      <div className="row">
        <div className="col-lg-6">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
              className="card-img-top"
              alt="img not found"
              height="200px"
              width="200px"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button
                onClick={() =>
                  props.AddTocartHandler({ price: 1000, name: "book" })
                }
              >
                Add To cart
              </button>
              <button onClick={() => props.RemoveTocartHandler({})}>
                Remove To cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
