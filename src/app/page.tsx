"use client";

import dynamic from "next/dynamic";
import Section from "./section";
import SocialLinks from "./socialLinks";
import ProfileHeader from "./profileHeader";

const MotionMain = dynamic(() => import("./MotionMain").then(mod => mod.MotionMain), {
  ssr: false,
});

export default function HomeClient() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-gray-100 to-white dark:from-blue-950 dark:via-black dark:to-gray-900 opacity-60 backdrop-blur-md z-0 transition-all duration-500" />

      <MotionMain>
        <ProfileHeader />
        <SocialLinks />

        <Section title="Sobre Mim">
          <p className="leading-relaxed text-gray-800 dark:text-gray-200">
            Sou Tech Lead com mais de 10 anos de experiência liderando times multidisciplinares e entregando soluções escaláveis e de alto impacto em grandes empresas. Tenho paixão por resolver desafios técnicos com eficiência, foco no negócio e inovação.
          </p>
        </Section>

        <Section title="Especialidades">
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li>Arquitetura de Sistemas (Monólitos → Microserviços, Micro Frontends)</li>
            <li>Cloud Computing (AWS: ECS, SQS, Lambda | Azure: AKS, Cosmos DB)</li>
            <li>Integrações com mensageria (Kafka, RabbitMQ)</li>
            <li>DevOps e Infra como Código (Terraform, CloudFormation, CI/CD)</li>
            <li>Liderança técnica, mentoria e gestão de times ágeis</li>
            <li>Entregas orientadas a produto e valor para o negócio</li>
          </ul>
        </Section>

        <Section title="Experiência">
          <p className="leading-relaxed text-gray-800 dark:text-gray-200">
            Itaú Unibanco, SX Group, Theòs Sistemas, Yankton Tech — liderando e desenvolvendo projetos de transformação digital, modernização de sistemas legados e implantação de soluções cloud-native.
          </p>
        </Section>

        <Section title="Stack Técnica">
          <p className="leading-relaxed text-gray-800 dark:text-gray-200">
            Java (Spring Boot), Node.js, .NET Core, SQL Server, Angular, HTML5, CSS/SCSS, GitHub, GitLab, Bamboo, Elasticsearch, Redis, Dynatrace.
          </p>
        </Section>

        <footer className="text-sm pt-10 border-t border-gray-200 dark:border-white/10 mt-16">
          <p className="text-center text-gray-600 dark:text-gray-400">
            #TechLead #Java #SpringBoot #Cloud #Microservices #DevOps
          </p>
        </footer>
      </MotionMain>
    </div>
  );
}
