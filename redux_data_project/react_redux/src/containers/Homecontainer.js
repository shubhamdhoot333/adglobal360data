import Home from "../components/Home";
import { connect } from "react-redux";
import { AddTocart, RemoveTocart } from "../Services/Actions/index";

const mapStateToProps = (state) => ({
  data: state.cartItem,
});
const mapDispatchToProps = (dispatch) => ({
  AddTocartHandler: (data) => dispatch(AddTocart(data)),
  RemoveTocartHandler: (data) => dispatch(RemoveTocart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
