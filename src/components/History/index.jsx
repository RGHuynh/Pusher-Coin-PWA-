import React, {Component} from 'react';
import './index.css';
import axios from 'axios';
import moment from 'moment';

export default class History extends Component {
  constructor(props){
    super(props);
    this.state = {
      todayPrice: {},
      yesterayPrice: {},
      twoDaysPrice: {},
      threeDaysPrice: {},
      fourDaysPrice: {}
    }
  }

  getETHPrices(date) {
    return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=' + date);
  }

  getBTCPrices(date) {
    return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' + date);
  }

  getLTCPrices(date) {
    return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTC&tsyms=USD&ts=' + date);
  }

  getTodayPrice() {
    let today = moment().unix();
    axios.all([this.getETHPrices(today), this.getBTCPrices(today), this.getLTCPrices(today)])
      .then(axios.spread((eth, btc, ltc) => {
        let fetch = {
          date: moment.unix(today).format("MMMM Do YYYY"),
          eth: eth.data.ETH.USD,
          btc: btc.data.BTC.USD,
          ltc: ltc.data.LTC.USD
        }
        this.setState({todayPrice: fetch})
      }))
  }
  
  getYesterdayPrice() {
    let today = moment().subtract(1, 'days').unix();
    axios.all([this.getETHPrices(today), this.getBTCPrices(today), this.getLTCPrices(today)])
      .then(axios.spread((eth, btc, ltc) => {
        let fetch = {
          date: moment.unix(today).format("MMMM Do YYYY"),
          eth: eth.data.ETH.USD,
          btc: btc.data.BTC.USD,
          ltc: ltc.data.LTC.USD
        }
        this.setState({ yesterayPrice: fetch});
      }));
  }

  getTwoDaysPrice() {
    let today = moment().subtract(2, 'days').unix();
    axios.all([this.getETHPrices(today), this.getBTCPrices(today), this.getLTCPrices(today)])
      .then(axios.spread((eth, btc, ltc) => {
        let fetch = {
          date: moment.unix(today).format("MMMM Do YYYY"),
          eth: eth.data.ETH.USD,
          btc: btc.data.BTC.USD,
          ltc: ltc.data.LTC.USD
        }
        this.setState({ twoDaysPrice: fetch})
      }))
  }

  getThreeDaysPrice() {
    let today = moment().subtract(3, 'days').unix();
    axios.all([this.getETHPrices(today), this.getBTCPrices(today), this.getLTCPrices(today)])
      .then(axios.spread((eth, btc, ltc) => {
        let fetch = {
          date: moment.unix(today).format("MMMM Do YYYY"),
          eth: eth.data.ETH.USD,
          btc: btc.data.BTC.USD,
          ltc: ltc.data.LTC.USD
        }
        this.setState({ threeDaysPrice: fetch })
      }));
  }

  getFourDaysPrice() {
    let today = moment().subtract(4, 'days').unix();
    axios.all([this.getETHPrices(today), this.getBTCPrices(today), this.getLTCPrices(today)])
      .then(axios.spread((eth, btc, ltc) => {
        let fetch = {
          date: moment.unix(today).format("MMMM Do YYYY"),
          eth: eth.data.ETH.USD,
          btc: btc.data.BTC.USD,
          ltc: ltc.data.LTC.USD
        }
        this.setState({ fourDaysPrice: fetch })
      }));
  }

  componentWillMount() {
    this.getTodayPrice();
    this.getYesterdayPrice();
    this.getTwoDaysPrice();
    this.getThreeDaysPrice();
    // this.getFourDaysPrice();
  }

  render(){
    return(
      <div className="history--section">
        <h2>History (Past 5 days)</h2>
        <div className="history--section__box">
          <div className="history--section__box__inner">
            <h4>{this.state.todayPrice.date}</h4>
            <div className="columns">
              <div className="column">
                <p className="column-text__position">1 BTC = ${this.state.todayPrice.btc}</p>
              </div>
              <div className="column">
                <p className="column-text__position">1 ETH = ${this.state.todayPrice.ltc}</p> 
              </div>
              <div className="column">
                <p className="column-text__position">1 LTC = ${this.state.todayPrice.ltc}</p>
              </div>
            </div>
          </div>
          <div className="history--section__box__inner">
            <h4>{this.state.yesterayPrice.date}</h4>
            <div className="columns">
              <div className="column">
                <p className="column-text__position">1 BTC = ${this.state.yesterayPrice.btc}</p>
              </div>
              <div className="column">
                <p className="column-text__position">1 ETH = ${this.state.yesterayPrice.eth}</p>
              </div>
              <div className="column">
                <p className="column-text__position">1 LTC = ${this.state.yesterayPrice.ltc}</p>
              </div>
            </div>
          </div>
          <div className="history--section__box__inner">
            <h4>{this.state.twoDaysPrice.date}</h4>
            <div className="columns">
              <div className="column">
                <p className="column-text__position">1 BTC = ${this.state.twoDaysPrice.btc}</p>
              </div>
              <div className="column">
                <p className="column-text__position">1 ETH = ${this.state.twoDaysPrice.eth}</p>
              </div>
              <div className="column">
                <p className="column-text__position">1 LTC = ${this.state.twoDaysPrice.ltc}</p>
              </div>
            </div>
          </div>
          <div className="history--section__box__inner">
            <h4>{this.state.threeDaysPrice.date}</h4>
            <div className="columns">
              <div className="column">
                <p className="column-text__position">1 BTC = ${this.state.threeDaysPrice.btc}</p>
              </div>
              <div className="column">
                <p className="column-text__position">1 ETH = ${this.state.threeDaysPrice.eth}</p>
              </div>
              <div className="column">
                <p className="column-text__position">1 LTC = ${this.state.threeDaysPrice.ltc}</p>
              </div>
            </div>
          </div>
          <div className="history--section__box__inner">
            <h4>{this.state.fourDaysPrice.date}</h4>
            <div className="columns">
              <div className="column">
                <p className="column-text__position">1 BTC = ${this.state.fourDaysPrice.btc}</p>
              </div>
              <div className="column">
                <p className="column-text__position">1 ETH = ${this.state.fourDaysPrice.eth}</p>
              </div>
              <div className="column">
                <p className="column-text__position">1 LTC = ${this.state.fourDaysPrice.ltc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}