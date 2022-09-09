import Header from "../components/Header";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  data: state.cartItem,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
