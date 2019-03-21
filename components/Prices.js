class Prices extends React.Component {
  state = {
    currency: "USD"
  };

  renderList = bpi => {
    const { currency } = this.state;
    return (
      <li className="list-group-item">
        Bitcoin rate for {bpi[currency].description} :
        <span class="badge badge-primary">{bpi[currency].code}</span>
        <strong>{bpi[currency].rate}</strong>
      </li>
    );
  };
  render() {
    const {
      data: { bpi }
    } = this.props;

    console.log("bpi", bpi);
    return (
      bpi && (
        <div>
          <ul className="list-group">{this.renderList(bpi)}</ul>
          <br />
          <select
            onChange={e => this.setState({ currency: e.target.value })}
            className="form-control"
          >
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      )
    );
  }
}

export default Prices;
