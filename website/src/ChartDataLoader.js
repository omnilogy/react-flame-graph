
import React, { Component } from 'react';
import AutoSizedFlameGraph from './AutoSizedFlameGraph';

import styles from './ChartDataLoader.module.css';

export default class ChartDataLoader extends Component {
  state= {
    data: null,
  };

  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      });
  }

  render() {
    const { data } = this.state;

    if (data === null) {
      return <p className={styles.loading}>Loading chart data...</p>;
    } else {
      return <AutoSizedFlameGraph data={data} height={this.props.height} />;
    }
  }
}
