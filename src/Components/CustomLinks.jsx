import Link from 'next/link';
import React from 'react';



export default function CustomLink({ label, href }) {
return (
  <Link href={href}>
      {/* link container */ }
      <div className='group h-[40px] p-4 overflow-hidden'>
          {/* labels container */}
          <div className='flex flex-col items-center justify-center group-hover:-translate-y-10 transition duration-700'>
              <span className='text-base font-light '>{label}</span>
              <span className='text-base font-light '>{label}</span>
          </div>
      </div>
  </Link>
)
}
