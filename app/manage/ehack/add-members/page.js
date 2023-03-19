import AddMember from "@/components/addMember";
import NotyNav from "@/components/notyNav";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

async function ehackRegistered(session) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/ehack/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.accessTokenBackend}`,
      "Access-Control-Allow-Origin": "*",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// async function checkRegistered(session, data) {
//   data?.map(async (user) => {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_SERVER}/api/ehack/user`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${session.accessTokenBackend}`,
//           "Access-Control-Allow-Origin": "*",
//         },
//         cache: "no-store",
//       }
//     );
//   });
// }

export default async function AddMembers() {
  const eventName = "eHack";
  const session = await getServerSession(authOptions);
  const data = await ehackRegistered(session);
  const users = data?.eHackMembers;
  console.log(data);
  return (
    <div>
      <NotyNav eventName={eventName} />
      <AddMember
        eventName={eventName}
        session={session}
        users={users}
        eventCode={1}
      />
    </div>
  );
}
