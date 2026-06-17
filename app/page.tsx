import { redirect } from "next/navigation";

const Home = async () => {
  redirect("/weather");
};

export default Home;
