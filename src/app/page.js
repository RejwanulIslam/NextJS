import Image from "next/image";
import UserInfo from "./component/UserInfo";
import { getServerSession } from "next-auth";
import { authOption } from "@/lib/authOption";
import Logout from "./component/Logout";

export default async function Home() {
  const seation = await getServerSession(authOption)
  return (
    <div>
      <div className="font-bold flex flex-col items-center  ">MD REJWANUL ISLAM NISHAT</div>


      <div>
        <div>
          {seation?.user && (<Logout></Logout>)}
        </div>
        <UserInfo></UserInfo>
        <p>server</p>
        {JSON.stringify(seation)}
      </div>
    </div>
  );
}
