import axios from "axios";

const ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthZmFrcHhtaW5ncmNmcXJva3Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyMzI2OTQsImV4cCI6MjA3MjgwODY5NH0.xDrL1KSQ2yRfTQHNwSFWJkWJ5KOQE0Rdl5zAZU4oeF0";

const BaseUrl = axios.create({
  baseURL: "https://kafakpxmingrcfqrokvv.supabase.co",
});

BaseUrl.interceptors.request.use((_config) => {
  _config.headers["Authorization"] = `Bearer ${ANON_KEY}`;
  _config.headers["apikey"] = ANON_KEY;

  return _config;
});

export default BaseUrl;
