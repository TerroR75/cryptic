function LandingPage() {
  return (
    <div className='LandingPage min-h-screen w-1/2 flex flex-col justify-start items-center gap-12'>
      <div>
        <h1 className='text-6xl font-bold'>
          A <span className='bg-gradient-text-primary'>New Era</span> Of Crypto Trading
        </h1>
      </div>
      <div className='w-4/6'>
        <span>
          At Cryptic, it's more than just buying and selling digital currencies - it's about being part of something bigger.
        </span>
      </div>
      <div>
        <form className='outline outline-1 outline-gray-500 px-1 py-1 flex gap-2 rounded'>
          <input type='email' name='email' id='email' placeholder='Email' className='bg-inherit px-2' />
          <button className='btn-primary bg-gradient-primary'>Get Started</button>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;
