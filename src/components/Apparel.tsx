import React, {useState} from 'react'


const Apparel: React.FC = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      setError('Please enter a valid email address.')
    } else {
      setTimeout(() => {
        setSuccess(`Thank you. We'll notify you at ${email} when the website is live.`)
        setEmail('')
        setError('')
      }, 1000);
    }
  }

  return (
    <>
      <div className='head-logo px-4 py-3 md:hidden'>
        <img src="vite.svg" alt="" className='logo h-9 max-w-full' />
      </div>
      <main className='main-container flex flex-col-reverse md:flex-row md:justify-center md:items-center min-h-full'>

        <section className='info-section relative py-4 px-2 gap-4 '>
         <img src="vite.svg" alt="" className='logo h-9 max-w-full hidden md:block md:px-8' />
          <div className='text-section text-center md:text-start md:px-5 max-w-[550px] flex flex-col'>
            <header className='font-semibold text-5xl uppercase py-6 '><span className='text-[#ce9797] font-light'>we're</span> coming soon</header>
            <p className='relative text-[#ce9797] pt-[0.6rem] px-[16px] text-xs md:max-w-[330px]'>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up to date with announcements and our launch date.</p>
           
            <form onSubmit={formSubmitHandler} className='input-section  relative'>
              <input type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email Address' className='input-field' />
              <button type='submit' className='btn absolute'>
                <div className='arrow'>{">"}</div>
              </button>
            </form>
           
            {error && <p className='text-red-500 p-5 '>{error}</p>}
            {success && !error && <p className='text-lime-400 pt-8 md:px-[40px]'>{ success}</p> }
          
          </div>
        </section>

        <section className='image-section'>
          <img src="image.jpg" alt=""  />
        </section>

        </main>
    </>
  )
}

export default Apparel