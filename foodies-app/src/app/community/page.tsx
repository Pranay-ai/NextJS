import Image from 'next/image';

import mealIcon from '../../../assets/icons/meal.png';
import communityIcon from '../../../assets/icons/community.png';
import eventsIcon from '../../../assets/icons/events.png';


export default function CommunityPage() {
  return (
    <div className=' flex flex-col items-center bg-gray-800 h-full pb-7'>
      <header className='flex flex-col items-center pt-5'  >
        <h1 className='text-5xl text-slate-100 '>
          One shared passion: <span className='text-5xl text-orange-500' >Food</span>
        </h1>
        <p className='text-3xl text-slate-100 pt-4 '>Join our community and share your favorite recipes!</p>
      </header>
      <main className='flex flex-col items-center pt-5' >
        <h2 className='text-3xl text-slate-50'>Community Perks</h2>

        <ul  >
          <li className='flex flex-col items-center'>
            <Image src={mealIcon} alt="A delicious meal" className='w-2/3 h-auto'/>
            <p className='text-3xl text-slate-100 '>Share & discover recipes</p>
          </li>
          <li className='flex flex-col items-center'>
            <Image src={communityIcon} alt="A crowd of people, cooking" className='w-2/3 h-auto' />
            <p className='text-3xl text-slate-100 '>Find new friends & like-minded people</p>
          </li>
          <li className='flex flex-col items-center'>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p className='text-3xl text-slate-100 '>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </div>
  );
}