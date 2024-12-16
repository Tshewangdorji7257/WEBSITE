const Features = () => (
  <div className="hidden md:block text-white py-4 px-6 bg-[#124143]">
    <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
      <div className="flex items-center space-x-2 col-span-1 justify-center ">
        <h1 className="text-4xl font-bold text-center text-[#5AC994] ml-0 md:ml-4">
          5 Features
        </h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-auto md:h-[30px] text-[#5AC994]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap items-center space-x-4 col-span-3 text-center ">
        <a
          href="https://www.bhutanndi.com/feature#authenticates-users"
          className="text-sm font-light hover:text-[#5AC994]"
        >
          Authenticates Users
        </a>
        <a
          href="https://www.bhutanndi.com/feature#sends-verified-proofs"
          className="text-sm font-light hover:text-[#5AC994]"
        >
          Sends Verified Proof
        </a>
        <a
          href="https://www.bhutanndi.com/feature#accepts-stores-and-verifies-credentials"
          className="text-sm font-light hover:text-[#5AC994]"
        >
          Accepts, Verifies, & Stores
        </a>
        <a
          href="https://www.bhutanndi.com/feature#enables-secure-peer-to-peer-connection"
          className="text-sm font-light hover:text-[#5AC994]"
        >
          Enables Secure P2P Connections
        </a>
        <a
          href="https://www.bhutanndi.com/feature#includes-back-up-recovery"
          className="text-sm font-light hover:text-[#5AC994]"
        >
          Includes Backup & Recovery
        </a>
      </div>
    </div>
  </div>
)

export default Features
