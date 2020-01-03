const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod
    ? "https://mikebutts.herokuapp.com"
    : "http://localhost:3000",
  "process.env.NAMESPACE": "https://mikebutts.herokuapp.com",
  "process.env.CLIENT_ID": "KZPUGL773Ja4e7nHz0gB1bgBeF0f2XAj"
};
