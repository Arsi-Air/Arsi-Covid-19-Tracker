import React from "react";
//import { Comp1 } from './test/Comp1';
import { Cards, Chart, CountryPicker } from './components/index';
import  styles from './App.module.css';
import { fetchData } from './api'

class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    
    this.setState({ data: fetchedData })
  }
  render() {
const { data } = this.state;

    return (
      <div className ={styles.container}>
        {/*<Comp1 />*/}
        <Cards data = {data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
