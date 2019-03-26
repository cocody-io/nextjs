import Layout from "../components/Layout";

const about = () => (
  <Layout>
    <div>
      <h1>Test appolo</h1>
      <p> application to view bitcoin prices</p>
    </div>
  </Layout>
);

const restLink = new RestLink({
	uri: 'https://reqres.in', // this is your API base url
	credentials: 'same-origin',
});

export default about;
