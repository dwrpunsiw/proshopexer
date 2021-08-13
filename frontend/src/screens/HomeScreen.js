import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import products from "../products";
// import axios from "axios";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    //
    // const fetchProducts = async () => {
    //   const { data } = await axios.get("/api/products");
    //   setProducts(data);
    // };
    // fetchProducts();
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
