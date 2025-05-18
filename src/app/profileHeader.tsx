import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
      <Image
        className="rounded-full border-4 border-blue-500 shadow-xl mb-6"
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/profile.jpg`}
        alt="Foto de perfil"
        width={120}
        height={120}
      />
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
        Paulo Eduardo
      </h1>
      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mt-3 leading-relaxed">
        Tech Lead | Software Architect | +10 anos em Desenvolvimento de Sistemas | Cloud (AWS, Azure) | Microservices | Java | Spring Boot | Angular | Kafka | DevOps
      </p>
    </div>
  );
}
