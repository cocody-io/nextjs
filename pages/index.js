import Layout from "../components/Layout";
import Prices from "../components/Prices";
import Fetch from "isomorphic-unfetch";
const Index = props => (
  <Layout>
    <div>
      <h1>Welcome to Bitzprice </h1>
      <p>Check current Bitcoin rate</p>
      <Prices data={props.data} />
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const resPromise = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  const data = await resPromise.json();

  return { data };
};
export default Index;
