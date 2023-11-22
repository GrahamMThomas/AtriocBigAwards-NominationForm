import { getServerSession } from "next-auth";
import LoginWidget from "../components/LoginWidget";

export default async function LoginPage() {
  const session = await getServerSession();

  console.log(session);
  return <LoginWidget />;
}
