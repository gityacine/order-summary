

export default function Card() {
    return (
        <div className="flex flex-col bg-white mx-7 rounded-3xl shadow-2xl shadow-[#3829e0]/20 overflow-hidden">
            <img className="w-full" src="illustration-hero.svg" alt="background-img" />
            <div className="flex flex-col items-center px-7 pt-8 pb-9 space-y-6">
                <h1 className="font-redhat font-black text-2xl text-[#1f2f56]">Order Summary</h1>
                <p className="font-redhat font-medium text-base text-center text-[#7280a7] px-3">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                <div className="flex w-full items-center justify-between bg-[#f5f7ff] rounded-xl py-4 px-4">
                    <div className="flex space-x-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#DFE6FB" /><path fill="#717FA6" fill-rule="nonzero" d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z" /></g></svg>
                        <div className="flex flex-col">
                            <h2 className="font-redhat font-black text-base text-[#1f2f56]">Annual Plan</h2>
                            <span className="font-redhat font-medium text-base text-[#7280a7]">$59.99/year</span>
                        </div>
                    </div>
                    <a className="font-redhat font-bold text-base text-[#3829e0] sm:hover:text-[#3829e0]/50 sm:hover:no-underline active:text-[#3829e0]/50 active:no-underline underline" href="#">Change</a>
                </div>
                <button className="w-full font-redhat font-black text-base bg-[#3829e0] sm:hover:bg-[#3829e0]/50 active:bg-[#3829e0]/50 text-white shadow-lg shadow-[#3829e0]/30 rounded-xl py-3">Proceed to Payment</button>
                <button className="font-redhat font-black text-base text-[#7280a7] sm:hover:text-[#1f2f56] active:text-[#1f2f56]">Cancel Order</button>
            </div>
        </div>
    );
}