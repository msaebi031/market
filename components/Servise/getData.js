import http from "../utils/httpServise";
// import config from "./config.json";

// export const getProduct = () => {
//   return http.post({
//     url: "https://api.target-designer.com/api/?",
//     data: {
//       key: "m4]LmH%5Ek0N=@",
//       action: "showProduct",
//     },
//   });
// };

export const getProduct = () => {
  return http.get("http://localhost:3000/api/product/select");
};
