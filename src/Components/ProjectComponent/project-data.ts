import "./project.component.css";
import Swisscom_Logo from "../../Images/Swisscom_Logo.png";
import NexCCLogo from "../../Images/NexCCLogo.png";
import TeamAnchorman from "../../Images/TeamAnchorman.png";
import AppsteamLogo from "../../Images/AppsteamLogo.png";
import { technologies } from "../TechnologyComponent/technology-data";

export const projects = [
  //First Steps
  {
    name: "NEX First Steps 2022",
    logo: Swisscom_Logo,
    description:
      "In meinen ersten beiden Wochen bei Swisscom verbrachte ich Zeit in den ersten Schritten von Team 31 und Team 14. Dort erhielt ich eine Einführung in die grundlegenden Abläufe und Strukturen des Unternehmens.",
    duration: "August 1, 2022 - August 12, 2022",
  },
  //NexCC
  {
    name: "Applikationsentwickler beim NexCC",
    logo: NexCCLogo,
    description:
      "Das NexCC-Projekt markierte meinen Einstieg bei Swisscom. Innerhalb von nur einem halben Jahr erwarb ich sämtliche grundlegenden Technologien und Fähigkeiten, die mir den Weg als Applikationsentwickler ebneten.",
    technologies: "TypeScript, JavaScript, Vue.js, HTML, CSS und MongoDB",
    duration: "August 15, 2022 - Februar 1, 2023",
  },
  //Team Anchorman
  {
    name: "Newsroom Team Anchorman - P2S",
    logo: TeamAnchorman,
    description:
      "Im Team Anchorman arbeitete ich an Frontend und Backend der Applikation Newsroom. Dazu teile ich die Rolle als Product Owner mit Sabira Shanmugalingam. Durch diese Erfahrung habe ich gelernt in einem Team agil zu arbeiten und dieses zu führen.",
    technologies:
      "TypeScript, Angular, SQL, MariaDB MongoDB, Jira, Docker, Python und Github",
  },
  //Apps Team
  {
    name: "Backend Entwickler im Apps Team",
    logo: AppsteamLogo,
    description:
      "Im Apps-Team erwarb ich fundierte Kenntnisse im Backend-Bereich. Nach meinem Einstieg in NestJs und TypeScript war ich schon bald in der Lage, aktiv an der Entwicklung von Anwendungen mitzuwirken.",
    technologies:
      "TypeScript, Nestjs, MariaDB, Github, GitLab, Rancher Desktop und React",
  },
  //Team Zeno
  {
    name: "Junior DevOps Engineer",
    logo: Swisscom_Logo,
    description:
      "Im Team Zeno war ich an der Entwicklung eines Incident Dashboards beteiligt. Dabei arbeitete ich sowohl im Frontend als auch im Backend und entwickelte die Applikation kontinuierlich weiter.",
    technologies: "NextJs, TypeScript, Java Springboot, MariaDB, GitLab, iAPC",
  },
  //CRM-Monitor
  {
    name: ".NET/C# and AWS Developer for Marketing Application",
    logo: Swisscom_Logo,
    description:
      "In diesem Team unterstützte ich beim Aufbau einer AWS-Infrastruktur und bei der Migration der Applikation von .NET 4 auf .NET 8. Dabei arbeitete ich an der Weiterentwicklung bestehender Funktionen und vertiefte meine Kenntnisse im Umgang mit AWS.",
    technologies:
      "C#, .NET, AWS, Blazor, MariaDB, SQL, Teradata, GitLab, Docker",
  },
];
