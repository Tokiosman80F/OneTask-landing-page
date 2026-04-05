import EcosystemIcon from '../assets/icons/ecosystem.svg'
const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return <div className=" sm:py-24| bg-black text-white py-[72px] ">
    <div className="container">
      <h2 className=' sm:text-6xl | text-5xl font-bold text-center tracking-tighter ' >Everything you need</h2>
     <div className='max-w-xl mx-auto'>
       <p className='mt-5 text-xl text-white/70 text-center' >Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
     </div>
      <div className=' sm:flex-row | mt-16 flex flex-col gap-4 ' >
        {features.map(({title,description})=>(
          <div key={title} className=' sm:flex-1  | py-10 px-5 border border-white/30 rounded-lg text-center'>
            <div className='inline-flex justify-center items-center h-14 w-14 bg-white text-black rounded-lg'><EcosystemIcon/></div>
            <h4 className='mt-6 font-bold '>{title}</h4>
            <p className='mt-2 text-white/70'>{description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
};
