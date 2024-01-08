import axios from "axios"

const BASE_URL = "http://192.168.177.210:1337/api/"

const API_KEY = "d2630dedb29f0fd859336c60a61a2e8f46620154c4cda92a0eef58290214d8b266557527aeb910b2ebf2de03446264db2c761c8c06936f830373c78604bb8995b1740b0e6e154faca960d0874ca2fc0abe5ca563ddbab86a13f6ee98204efd4dc049b67a85c401c4265ee5f28391c863e906dcbb9661c0aa15baec5777def08e"

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers:{
    'Authorization': "Bearer"+ API_KEY
  }
})

const getSlider = () =>  AxiosInstance.get("/sliders?populate=*");

export default{
  getSlider
}