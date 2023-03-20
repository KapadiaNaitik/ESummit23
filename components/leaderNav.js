import React from "react";
import { usePathname, useRouter } from "next/navigation";

function LeaderNav({ eventName }) {
  eventName = eventName.toLowerCase();
  const router = useRouter();
  return (
    <>
      {/* {" "}
      <div class="create_cont">
        <div class="subnav">
          <div class="left_sub">
            <a href="#" class="managebtn w-button">
              Back
            </a>
            <h1 class="subnav_h1">Innoventure</h1>
          </div>
          <div class="right_subnav">
            <a href="#" class="send w-button">
              Sent
            </a>
            <a href="#" class="recieved w-button">
              Recieved
            </a>
          </div>
        </div>
        <div class="ehack_cont">
          <h1 class="join_h1">Join a Team</h1>
          <a href="#" class="handleteam w-button">
            Find Team
          </a>
          <h1 class="join_h1 bold">Or</h1>
          <h1 class="join_h1">Create Your Team</h1>
          <div class="w-form">
            <input
              type="text"
              class="team w-input"
              maxlength="256"
              name="name"
              data-name="Name"
              placeholder=""
              id="name"
            />
          </div>
          <a href="#" class="handleteam w-button">
            Create Team
          </a>
        </div>
      </div>
      {/*
       */}{" "}
      <div>
        <div>
          <nav
            className="flex-no-wrap sticky top-0 flex w-full bg-neutral-300 py-4 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-end  "
            data-te-navbar-ref
          >
            <div className="flex w-full">
              <div className="flex ml-5">
                {
                  <button
                    onClick={() => {
                      router.push(`/manage/${eventName}`);
                    }}
                    className="flex bg-[#53B3B9] items-center rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  >
                    Back
                  </button>
                }
              </div>
              <div className="flex-1 ml-[37vw] text-xl font-semibold">
                {eventName.toUpperCase()}
              </div>
              <div className="relative flex justify-end pr-10">
                <div className="flex justify-center space-x-2 ml-2 ">
                  <div>
                    <button
                      onClick={(e) =>
                        router.push(`/manage/${eventName}/leader-sent`)
                      }
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="flex bg-[#53B3B9] items-center rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {/* <span className="absolute -mt-2.5 ml-2 rounded-full bg-red-700 py-0 px-1.5 text-xs text-white">
                    1
                  </span> */}
                      <div className="ml-2 text-white">Sent</div>
                    </button>
                  </div>
                </div>
                <div className="flex justify-center space-x-2 ml-2">
                  <div>
                    <button
                      onClick={(e) =>
                        router.push(
                          `/manage/${eventName}/received-join-request`
                        )
                      }
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="flex bg-[#53B3B9] items-center rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="ml-2 text-white">Received</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default LeaderNav;
