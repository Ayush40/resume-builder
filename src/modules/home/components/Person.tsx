import Image from 'next/image';

const persons = [
  {
    name: 'Ayush Aggarwal',
    role: 'Frontend developer',
    avatar: 'https://avatars.githubusercontent.com/u/100126332',
    github: 'https://github.com/Ayush40',
    linkedin: 'https://www.linkedin.com/in/ayush-aggarwal-b005a7198?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'Kartik Kaushik',
    role: 'MERN developer',
    avatar: 'https://avatars.githubusercontent.com/u/116940711?v=4',
    github: 'https://github.com/kartikKaushik7497',
    linkedin: 'http://www.linkedin.com/in/kartik-kaushik-b73795218',
  },
  {
    name: 'Mhd. Anas',
    role: 'JS Developer',
    avatar: 'https://avatars.githubusercontent.com/u/26523871?v=4',
    github: 'https://github.com/1mdanas1',
    linkedin: 'https://www.linkedin.com/in/mohd-anas-siddique?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
];

const PersonCard = ({ children }: { children: React.ReactNode }) => (
  <div className="transition ease-in-out delay-100 duration-300 px-6 py-8 flex flex-col items-center text-center shadow hover:shadow-xl rounded-xl border-2 border-resume-50 hover:border-resume-100">
    {children}
  </div>
);

const ProfileSocial = ({ github, linkedin }: { github: string; linkedin: string }) => (
  <div className="flex gap-4">
    <a href={github} target="_blank" rel="noreferrer">
      <Image src="/icons/github.svg" alt="github" width="24" height="24" />
    </a>
    <a href={linkedin} target="_blank" rel="noreferrer">
      <Image src="/icons/linkedin.svg" alt="linkedin" width="24" height="24" />
    </a>
  </div>
);

export default function Person() {
  return (
    <>
      {persons.map((person) => (
        <PersonCard key={person.name}>
          <Image
            src={person.avatar}
            alt={person.name}
            className="rounded-full"
            height="96"
            width="96"
          />
          <p className="text-resume-800 mt-4 font-bold">{person.name}</p>
          <p className="text-resume-400 mb-6">{person.role}</p>
          <ProfileSocial github={person.github} linkedin={person.linkedin} />
        </PersonCard>
      ))}
    </>
  );
}
