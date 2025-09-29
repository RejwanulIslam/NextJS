import Image from "next/image";
import Login from "./component/Login";
import UserInfo from "./component/UserInfo";
import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const seation=await getServerSession(authOption)
  return (
    <div>
      <div className="font-bold flex flex-col items-center  ">MD REJWANUL ISLAM NISHAT</div>

      <div>
        <Login></Login></div>
        <div>
          <UserInfo></UserInfo>
          <p>server</p>
          {JSON.stringify(seation)}
        </div>
    </div>
  );
}
