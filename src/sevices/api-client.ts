import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e134cbef49b6447dbf924c3d714fe496",
  },
});
