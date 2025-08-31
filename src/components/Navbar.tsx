import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className='fixed w-full bg-gray-800/50 backdrop-blur-md z-50 shadow-lg'
    >
      <div className='max-w-6xl mx-auto flex justify-between items-center py-4 px-6'>
        <h1 className='text-2xl font-bold text-cyan-800'>SIEAM</h1>
        <ul className='hidden md:flex gap-6 text-lg'>
          {['home', 'about', 'skills', 'projects', 'contact'].map((link) => (
            <li key={link}>
              <a href={`#${link}`} className='hover:text-cyan-400 transition'>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar
