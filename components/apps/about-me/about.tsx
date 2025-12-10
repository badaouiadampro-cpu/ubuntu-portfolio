import Image from 'next/image';

const About = () => {
  const yearsOfExperience = new Date().getFullYear() - 2021;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-4 w-20 md:w-28">
        <Image
          src="/myImage.jpeg"
          alt="Adam"
          className="w-full rounded-full"
          height={300}
          width={500}
        />
      </div>

      <div className="mb-6 mt-4 px-1 text-center text-lg md:mt-8 md:text-2xl">
        <div>
          Bonjour, moi c'est <span className="font-bold">Adam ! 👋</span>
        </div>

        <div className="ml-1 font-normal">
          Un passionné de{' '}
          <span className="font-bold text-orange-600">
            Systèmes, Réseaux & Sécurité 💻🔐
          </span>
        </div>
      </div>

      <ul className="emoji-list mt-4 w-5/6 text-sm leading-tight tracking-tight md:w-3/4 md:text-base">
        <li className="list-alumnus">
          Je suis{' '}
          <span className="font-medium">étudiant en BTS SIO option SISR</span>,{' '}
          spécialisé dans les{' '}
          <span className="font-medium">
            infrastructures, l'administration système et la gestion des réseaux
          </span>
          .
          <br />
          Je développe mes compétences pour résoudre
          <span className="text-orange-600">
            {' '}
            des problématiques concrètes avec des solutions techniques fiables
            et modernes 🌍.
          </span>
          <br />
          Voici mes principales spécialités :
          <ul className="mt-2 list-inside list-disc">
            <li>
              <span className="text-orange-600">Administration Système : </span>{' '}
              Gestion et configuration de serveurs Linux (Debian, Ubuntu),
              virtualisation et services réseau.
            </li>

            <li>
              <span className="text-orange-600">Réseaux & Sécurité :</span>{' '}
              Configuration LAN/WAN, VLAN, pare-feu, et bonnes pratiques de
              sécurisation.
            </li>

            <li>
              <span className="text-orange-600">Apprentissage Continu :</span>{' '}
              Toujours motivé pour améliorer mes compétences et découvrir de
              nouvelles technologies.
            </li>

            <li>
              <span className="text-orange-600">Résolution de Problèmes :</span>{' '}
              J’aime relever des défis techniques qui m’aident à progresser et à proposer
              des solutions efficaces 💪.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export { About };
