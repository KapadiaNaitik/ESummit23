"use client";
import LeaderNav from "./leaderNav";
import LeaderSentReqCard from "./LeaderSentReqCard";
import { useRouter } from "next/navigation";
import styles from "../styles/joinTeams.module.css";

function LeaderSentReq({ eventName, session, requests }) {
  const router = useRouter();
  return (
    <div>
      <LeaderNav eventName={eventName} />
      <button
        onClick={() => router.back()}
        className="fixed bottom-2 left-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Go Back
      </button>
      {requests.length ? (
        <div className={styles.Teams}>
          {requests.map((x) => {
            return (
              <LeaderSentReqCard
                request={x.userId}
                key={x.userId._id}
                eventName={eventName}
                session={session}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center mt-64">No Requests Sent</div>
      )}
    </div>
  );
}

export default LeaderSentReq;
