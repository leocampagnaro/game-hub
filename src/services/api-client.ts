import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'f2ceda77e5074fc4970125e8a441b405'
  }
})
