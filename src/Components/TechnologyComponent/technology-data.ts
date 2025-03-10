import angular from "../../Images/technology/angular.svg";
import vue from "../../Images/technology/vue.png";
import nestjs from "../../Images/technology/NestJS.svg.png";
import mariadb from "../../Images/technology/mariaDB.svg";
import mongodb from "../../Images/technology/mongoDB.png";
import python from "../../Images/technology/python.png";
import HTML from "../../Images/technology/HTML5.png";
import CSS from "../../Images/technology/CSS.png";
import javascript from "../../Images/technology/JavaScript.png";
import TypeScript from "../../Images/technology/Typescript_logo_2020.svg.png";
import github from "../../Images/technology/github.png";
import gitlab from "../../Images/technology/gitlab.svg";
import docker from "../../Images/technology/docker.svg";
import rancherDesktop from "../../Images/technology/rancherDesktop.png";
import jira from "../../Images/technology/jira.svg";
import react from "../../Images/technology/React-icon.svg.png";
import Csharp from "../../Images/technology/Csharp.png";
import Blazor from "../../Images/technology/Blazor.png";
import Nextjs from "../../Images/technology/Nextjs.png";
import AWS from "../../Images/technology/AWS.png";
import SpringBoot from "../../Images/technology/SpringBoot.png";
export const technologies = [
  {
    name: "Angular",
    logo: angular,
    description:
      "Angular ist eine Plattform und ein Framework zum Erstellen von einseitigen Client-Anwendungen mit HTML und TypeScript.",
    category: "frontend",
    link: "https://angular.io/",
  },
  {
    name: "Vue",
    logo: vue,
    description:
      "Vue.js ist ein progressives Framework zur Erstellung von Benutzeroberflächen.",
    category: "frontend",
    link: "https://vuejs.org",
  },
  {
    name: "React",
    logo: react,
    description:
      "React ist eine JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen.",
    category: "frontend",
    link: "https://react.dev",
  },
  {
    name: "NestJS",
    logo: nestjs,
    description:
      "NestJS ist ein Framework für die Entwicklung effizienter, zuverlässiger und skalierbarer serverseitiger Anwendungen.",
    category: "backend",
    link: "https://nestjs.com",
  },
  {
    name: "MariaDB",
    logo: mariadb,
    description:
      "MariaDB ist ein open-source relationales Datenbankmanagementsystem, abwärtskompatibel und ein binärer Ersatz für MySQL.",
    category: "backend",
    link: "https://mariadb.com",
  },
  {
    name: "MongoDB",
    logo: mongodb,
    description:
      "MongoDB ist eine dokumentenorientierte NoSQL-Datenbank, die für die Speicherung grosser Datenmengen verwendet wird.",
    category: "backend",
    link: "https://www.mongodb.com",
  },
  {
    name: "Python",
    logo: python,
    description:
      "Python ist eine interpretierte, objektorientierte, hoch-niveau Programmiersprache mit dynamischer Semantik.",
    category: "backend",
    link: "https://www.python.org",
  },
  {
    name: "HTML",
    logo: HTML,
    description:
      "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.",
    category: "frontend",
    link: "https://de.wikipedia.org/wiki/Hypertext_Markup_Language",
  },
  {
    name: "CSS/SCSS",
    logo: CSS,
    description:
      "CSS (Cascading Style Sheets) ist eine Stylesheet-Sprache, mit der die Darstellung eines in HTML geschriebenen Dokuments beschrieben werden kann.",
    category: "frontend",
    link: "https://de.wikipedia.org/wiki/Cascading_Style_Sheets",
  },
  {
    name: "JavaScript",
    logo: javascript,
    description:
      "JavaScript ist eine Programmiersprache, die es Ihnen ermöglicht, dynamisch aktualisierte Inhalte zu erstellen, Multimedia zu steuern, Bilder zu animieren und so ziemlich alles andere.",
    category: "frontend",
    link: "https://de.wikipedia.org/wiki/JavaScript#:~:text=JavaScript%20(kurz%20JS)%20ist%20eine,Möglichkeiten%20von%20HTML%20zu%20erweitern.",
  },
  {
    name: "TypeScript",
    logo: TypeScript,
    description:
      "TypeScript ist eine typisierte Obermenge von JavaScript, die sich zu einfachem JavaScript kompilieren lässt.",
    category: "backend",
    link: "https://www.typescriptlang.org",
  },
  {
    name: "TypeScript",
    logo: TypeScript,
    description:
      "TypeScript ist eine typisierte Obermenge von JavaScript, die sich zu einfachem JavaScript kompilieren lässt.",
    category: "frontend",
    link: "https://www.typescriptlang.org",
  },
  {
    name: "GitHub",
    logo: github,
    description:
      "GitHub ist eine Plattform für das Hosting und die Zusammenarbeit an Git-Repositories.",
    category: "tools",
    link: "https://github.com",
  },
  {
    name: "GitLab",
    logo: gitlab,
    description:
      "GitLab ist ein webbasiertes DevOps-Lifecycle-Tool, das einen Git-Repository-Manager mit Wiki, Issue-Tracking und CI/CD-Pipeline-Funktionen unter einer Open-Source-Lizenz bietet.",
    category: "tools",
    link: "https://about.gitlab.com",
  },
  {
    name: "Docker",
    logo: docker,
    description:
      "Docker ist eine Reihe von Platform-as-a-Service (PaaS)-Produkten, die Virtualisierung auf Betriebssystemebene nutzen, um Software in Paketen, sogenannten Containern, bereitzustellen.",
    category: "tools",
    link: "https://www.docker.com",
  },
  {
    name: "Rancher Desktop",
    logo: rancherDesktop,
    description:
      "Rancher Desktop ist ein Open-Source-Tool zum Erstellen, Bereitstellen und Verwalten von Containern direkt auf Ihrem Desktop.",
    category: "tools",
    link: "https://rancherdesktop.io",
  },
  {
    name: "Jira",
    logo: jira,
    description:
      "Jira ist ein von Atlassian entwickeltes, proprietäres Produkt zur Fehlerverfolgung, das Bugtracking und agiles Projektmanagement ermöglicht.",
    category: "tools",
    link: "https://jira.swisscom.com/secure/Dashboard.jspa",
  },
  //New stuff
  {
    name: "C# / .NET",
    logo: Csharp, // Beispiel: Pfad zu deinem Logo oder Icon-Komponente
    description:
      "C# ist eine objektorientierte Programmiersprache von Microsoft. In Kombination mit dem .NET Framework oder .NET Core ermöglicht sie die Entwicklung moderner Anwendungen für Web, Desktop, Cloud und mehr.",
    category: "backend",
    link: "https://learn.microsoft.com/de-de/dotnet/csharp/",
  },
  {
    name: "Blazor",
    logo: Blazor,
    description:
      "Blazor ist ein Webframework von Microsoft, mit dem interaktive Web-UIs mithilfe von C# statt JavaScript entwickelt werden können – sowohl auf dem Server als auch clientseitig mit WebAssembly.",
    category: "frontend",
    link: "https://learn.microsoft.com/de-de/aspnet/core/blazor/",
  },
  {
    name: "AWS",
    logo: AWS,
    description:
      "Amazon Web Services (AWS) ist eine umfassende Cloud-Plattform, die über 200 Dienste wie Rechenleistung, Speicher, Datenbanken, Machine Learning und mehr bereitstellt.",
    category: "tools",
    link: "https://aws.amazon.com/de/",
  },
  {
    name: "NextJS",
    logo: Nextjs,
    description:
      "Next.js ist ein React-Framework, das serverseitiges Rendering, statische Seitengenerierung und eine hervorragende Entwicklererfahrung für moderne Webanwendungen bietet.",
    category: "frontend",
    link: "https://nextjs.org/",
  },
  {
    name: "Java Springboot",
    logo: SpringBoot,
    description:
      "Spring Boot ist ein Java-Framework, das die Entwicklung von produktionsreifen, eigenständigen Anwendungen erleichtert – mit Fokus auf Konvention statt Konfiguration.",
    category: "backend",
    link: "https://spring.io/projects/spring-boot",
  },
];
