import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import ErrorMessage from "../components/ErrorMessage";
import Row from "react-bootstrap/Row";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Row xs="2" md="3" lg="5" className="justify-content-center">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        products.map((product) => (
          <Product key={product._id} product={product} />
        ))
      )}
    </Row>
  );
}
