export default function Footer() {
  return (
    <section className="py-24">
      <div className="max-w-6xl px-4 text-center py-24 mx-auto">
        <footer className="bg-gray-900 flex flex-col gap-10 p-5 rounded-xl overflow-hidden">
          <div className="mt-2 grid grid-cols-1 gap-10 lg:gap-24 sm:grid-cols-2 lg:grid-cols-2">
         <div className="flex flex-col text-start mt-7">
          <h1 className="text-3xl font-semibold text-white">
              Secure Digital Banking              </h1>
              <p className="text-neutral-400 text-sm">
              We&apos;re redefining banking for the digital age. Our mission is to provide 
              simple, secure, and accessible financial services that put you in control. 
              No hidden fees, no paperwork - just modern banking that works for you.            
                </p>
          </div>
            <div className="grid grid-cols-1 lg:gap-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  
            <div className="flex flex-col text-start gap-1">
              <h3 className="text-xl text-white font-medium ">Bank</h3>
              <a href="#" className="text-neutral-400 text-sm transition-all ease-in hover:text-white">Grewx</a>
              <a href="#" className="text-neutral-400 text-sm transition-all ease-in hover:text-white">Pricing</a>
            </div>
            <div className="flex flex-col text-start gap-1">
              <h3 className="text-xl text-white font-medium ">Resourses</h3>
              <a href="#" className="text-neutral-400 text-sm transition-all ease-in hover:text-white">Blog</a>
              <a href="#" className="text-neutral-400 text-sm transition-all ease-in hover:text-white">Services</a>
              <a href="#" className="text-neutral-400 text-sm transition-all ease-in hover:text-white">Libary</a>
            </div>
            <div className="flex flex-col text-start gap-1">
              <h3 className="text-xl text-white font-medium ">Logal</h3>
              <a href="#" className="text-neutral-400 text-sm transition-all ease-in hover:text-white">Terms of use</a>
              <a href="#" className="text-neutral-400 text-sm transition-all ease-in hover:text-white">Privacy Policy</a>
            </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-52 bg-white p-4 rounded-lg">

          <div className="flex flex-col text-start gap-2 max-w-2xl">
              <h1 className="text-xl font-semibold text-black">
              Subscribe Now             </h1>
              <p className="text-sm text-gray-500 mt-3">
    We value your privacy. Your email will only be used to send you banking insights and updates. 
    You can unsubscribe at any time. View our <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
