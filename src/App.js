// import React from "react";
// //import { Comp1 } from './test/Comp1';
// //import { MainGrid, Chart, CountryPicker } from './components/index';
// import MainGrid from './components/MainGrid/MainGrid'
// import  styles from './App.module.css';
// import { fetchData } from './api'

// class App extends React.Component {
//   state = {
//     data: {},
//     country: '',
//   }

//   async componentDidMount() {
//     const fetchedData = await fetchData();
    
//     this.setState({ data: fetchedData })
//   }

//   handleCountryChange = async (country) => {
//     const fetchedData = await fetchData(country);

//     this.setState({ data: fetchedData, country: country });
//     console.log(fetchedData);
    
//   }


//   render() {
//     const { data } = this.state;
//   /*const ab = this.handleCountryChange*/
//     return (
//       <div className ={styles.container}>
//         {/*<Comp1 />*/}
//         {/*<Cards data = {data} />*/}
//         <MainGrid data = {data} /*handleCountryChange = {this.handleCountryChange} country = {country}*/ / >
//         {/*<CountryPicker />
//         <Chart />*/}
//       </div>
//     );
//   }
// }

// export default App;




import React from "react";
//import { Comp1 } from './test/Comp1';
//import { MainGrid, Chart, CountryPicker } from './components/index';
import MainGrid from './components/MainGrid/MainGrid'
import  styles from './App.module.css';
import { fetchData } from './api'

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }


  async componentDidMount() {
    const fetchedData = await fetchData();
    
    this.setState({ data: fetchedData })
  }


  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
    console.log(country);
  }



  render() {
    let a = this.handleCountryChange;
    console.log(a);
    const { data, country } = this.state;
    console.log(data);
  /*const ab = this.handleCountryChange*/
    return (
      <div className ={styles.container}>
        <MainGrid data = {data} handleCountryChange = {this.handleCountryChange} country = {country} />
      </div>
    );
  }
}

export default App;