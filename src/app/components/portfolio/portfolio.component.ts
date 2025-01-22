import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  AllProjects: any[] = [
    [
      {
        category: 'Frontend',
        name: 'Drivers Applications',
        imgs: [
          'assets/projects/login_conductores.png',
          'assets/projects/2_conductores.png',
          'assets/projects/3_conductores.png',
          'assets/projects/4_conductores.png',
          'assets/projects/5_conductores.png',
        ],
        p: [
          'I developed an application aimed at the drivers of my company, which specializes in the manufacturing of SAS tanks. Given that these drivers operate tractor-trailers to transport liquid cargo products, they are commonly granted advances. These advances are intended to cover expenses that arise during their journeys, such as accommodations, parking, and other related costs.',
          "The primary functionality of the app allows drivers, through their mobile devices, to view the advances they've received. Moreover, it enables them to identify which have been legalized. This legalization refers to the submission of documents and invoices produced during the trip, which serves to verify the expenses they've incurred.",
          'Additionally, the platform offers the option to view a detailed breakdown of submitted expenses, the legalizations made, and it allows users to download certificates from previous months and see their personal profiles. The purpose of this tool is to provide relevant information to the drivers without the need to visit the offices or directly communicate with the administrative staff.',
          "Lastly, one of the advantages of this application is its adaptability. It's designed to accommodate future updates, ensuring its relevance and utility in the long run.",
        ],
        showed: false,
      },
      {
        category: 'Frontend',
        name: 'Web page',
        imgs: [
          'assets/projects/1_web.png',
          'assets/projects/2_web.png',
          'assets/projects/3_web.png',
          'assets/projects/4_web.png',
        ],
        p: [
          'Through our new web application, built using Angular, we aim to offer a refreshed image for our company. We strive to present a brand that inspires trust, with up-to-date company data and a modern, aesthetically pleasing design. Furthermore, the platform provides us with the flexibility to incorporate various functionalities, which we will evaluate and add over time. This enhances our image for both potential clients and those who have previously engaged with us.',
          'Our website will not only serve as a showcase of our brand but also as an efficient access point for our clients. Through it, they can request quotes, review frequently asked questions, and access relevant information without the need to directly contact our customer service team.',
          'This approach offers multiple benefits: we streamline internal processes, reduce the workload of the customer service team, and, simultaneously, provide our clients with a swift and efficient means to interact and gather information about our company.',
        ],
        showed: false,
      },
      {
        category: 'Fullstack',
        name: 'Travel Coster',
        imgs: [
          'assets/projects/login_costeador.png',
          'assets/projects/2_costeador.png',
          'assets/projects/3_costeador.png',
        ],
        p: [
          'The primary motivation behind this application is to provide the sales team with a tool where they can access a costing system. At present, the costing process is more manual due to the extensive data required for its generation.',
          'The application, built using Angular for the frontend and Node.js for the backend, employs advanced techniques to streamline the costing process. We utilize web scraping to obtain real-time data, such as the current fuel price. Additionally, we integrate various APIs, providing us with vital information like the current dollar value, distances between routes, details about intermediate tolls, and other pertinent factors such as the chosen vehicle type.',
          "Another feature worth noting is the cost estimator's flexibility. While the tool can calculate the full costing considering all variables, it also allows users to obtain specific details, such as the distance of a route or the tolls along it, independently. This modularity proves especially useful as these functions can be utilized separately in different sections of the sidebar.",
          'The ultimate goal of this tool is to expedite and optimize the negotiation process for the sales team. This approach ensures the avoidance of unnecessary expenses and guarantees a swift and accurate response to customer inquiries.',
        ],
        showed: false,
      },
      {
        category: 'Fullstack',
        name: 'Collaborators Portal',
        imgs: [
          'assets/projects/colaboradores1.png',
          'assets/projects/colaboradores2.png',
          'assets/projects/colaboradores3.png',
          'assets/projects/colaboradores4.png',
        ],
        p: [
          'This Fullstack project was created using Angular on the frontend and Node.js on the backend, leveraging JWT for user authentication and consumption of various APIs. We also implemented a role-based access control system to ensure that each collaborator or user has the appropriate permissions within the platform.',
          "The central idea is to unify multiple company functionalities in a single application: from mandatory trainings for drivers (including attendance records and assessments) to internal blogs, data registration, active users management, and more. In this way, it becomes a 'hub' or a single portal for the entire organization.",
          "Thanks to Angular, users enjoy a dynamic and responsive experience, while Node.js handles data processing and business logic in the backend. JWT ensures secure login, controlling access to each route and section of the platform depending on the user's role. Meanwhile, the integration of external and internal APIs allows for process automation and real-time information centralization.",
          "In short, this Collaborators Portal merges internal communication, training management, blog publishing, and user administration in one secure, scalable, and easy-to-maintain environment. The goal is to continually add modules as each department's needs evolve, making this application a strategic tool for the company's efficiency.",
        ],
        showed: false,
      },
    ],
    [
      {
        category: 'Frontend',
        name: 'Aplicación Conductores',
        imgs: [
          'assets/projects/login_conductores.png',
          'assets/projects/2_conductores.png',
          'assets/projects/3_conductores.png',
          'assets/projects/4_conductores.png',
          'assets/projects/5_conductores.png',
        ],
        p: [
          'Desarrollé una aplicación dirigida a los conductores de mi empresa, que se especializa en la fabricación de tanques SAS. Dado que estos conductores operan tractomulas para transportar productos de carga líquida, comúnmente se les otorgan anticipos. Estos anticipos están destinados a cubrir gastos que surgen durante sus viajes, como alojamiento, estacionamiento y otros costos relacionados.',
          'La funcionalidad principal de la aplicación permite a los conductores, a través de sus dispositivos móviles, ver los anticipos que han recibido. Además, les permite identificar cuáles han sido legalizados. Esta legalización se refiere a la presentación de documentos y facturas producidas durante el viaje, lo que sirve para verificar los gastos en que han incurrido.',
          'Adicionalmente, la plataforma ofrece la opción de ver un desglose detallado de los gastos presentados, las legalizaciones realizadas, y permite a los usuarios descargar certificados de meses anteriores y ver sus perfiles personales. El propósito de esta herramienta es proporcionar información relevante a los conductores sin la necesidad de visitar las oficinas o comunicarse directamente con el personal administrativo.',
          'Por último, una de las ventajas de esta aplicación es su adaptabilidad. Está diseñada para acomodar actualizaciones futuras, asegurando su relevancia y utilidad a largo plazo.',
        ],
        showed: false,
      },
      {
        category: 'Frontend',
        name: 'Página Web',
        imgs: [
          'assets/projects/1_web.png',
          'assets/projects/2_web.png',
          'assets/projects/3_web.png',
          'assets/projects/4_web.png',
        ],
        p: [
          'A través de nuestra nueva aplicación web, construida usando Angular, buscamos ofrecer una imagen renovada de nuestra empresa. Nos esforzamos por presentar una marca que inspire confianza, con datos actualizados de la empresa y un diseño moderno y estéticamente agradable. Además, la plataforma nos proporciona la flexibilidad para incorporar diversas funcionalidades, las cuales evaluaremos y agregaremos con el tiempo. Esto mejora nuestra imagen tanto para los clientes potenciales como para aquellos que ya han interactuado con nosotros.',
          'Nuestro sitio web no solo servirá como escaparate de nuestra marca, sino también como un punto de acceso eficiente para nuestros clientes. A través de él, pueden solicitar cotizaciones, revisar preguntas frecuentes y acceder a información relevante sin necesidad de contactar directamente a nuestro equipo de atención al cliente.',
          'Este enfoque ofrece múltiples beneficios: optimizamos los procesos internos, reducimos la carga de trabajo del equipo de atención al cliente y, simultáneamente, proporcionamos a nuestros clientes un medio rápido y eficiente para interactuar y recopilar información sobre nuestra empresa.',
        ],
        showed: false,
      },
      {
        category: 'Fullstack',
        name: 'Costeador de Viajes',
        imgs: [
          'assets/projects/login_costeador.png',
          'assets/projects/2_costeador.png',
          'assets/projects/3_costeador.png',
        ],
        p: [
          'La motivación principal detrás de esta aplicación es proporcionar al equipo de ventas una herramienta donde puedan acceder a un sistema de costos. Actualmente, el proceso de costeo es más manual debido a la extensa cantidad de datos requeridos para su generación.',
          'La aplicación, construida usando Angular para el frontend y Node.js para el backend, emplea técnicas avanzadas para agilizar el proceso de costeo. Utilizamos web scraping para obtener datos en tiempo real, como el precio actual del combustible. Además, integramos diversas API, que nos proporcionan información vital como el valor actual del dólar, las distancias entre rutas, detalles sobre peajes intermedios y otros factores pertinentes como el tipo de vehículo elegido.',
          'Otra característica digna de mencionar es la flexibilidad del estimador de costos. Mientras que la herramienta puede calcular el costo completo considerando todas las variables, también permite a los usuarios obtener detalles específicos, como la distancia de una ruta o los peajes a lo largo de ella, de manera independiente. Esta modularidad resulta especialmente útil ya que estas funciones pueden ser utilizadas por separado en diferentes secciones de la barra lateral.',
          'El objetivo final de esta herramienta es acelerar y optimizar el proceso de negociación para el equipo de ventas. Este enfoque asegura la evitación de gastos innecesarios y garantiza una respuesta rápida y precisa a las consultas de los clientes.',
        ],
        showed: false,
      },
      {
        category: 'Fullstack',
        name: 'Portal de Colaboradores',
        imgs: [
          'assets/projects/colaboradores1.png',
          'assets/projects/colaboradores2.png',
          'assets/projects/colaboradores3.png',
          'assets/projects/colaboradores4.png',
        ],
        p: [
          'Este proyecto de tipo Fullstack fue creado con Angular en el frontend y Node.js en el backend, utilizando JWT para la autenticación de usuarios y consumo de distintas APIs. Se implementó además un sistema de control de roles, garantizando que cada colaborador o usuario cuente con los permisos adecuados dentro de la plataforma.',
          "La idea central es unificar varias funcionalidades de la empresa en una sola aplicación: desde capacitaciones obligatorias para conductores (con registros de asistencia y evaluaciones), hasta la creación de blogs internos, registros de datos de personal, seguimiento de usuarios activos y mucho más. De esta forma, se convierte en un 'hub' o un portal único para toda la organización.",
          'Gracias al uso de Angular, se logra una experiencia de usuario ágil y dinámica, mientras que la lógica y la gestión de datos se procesan en el backend con Node.js. JWT garantiza la seguridad en el inicio de sesión, controlando el acceso a cada ruta y sección de la plataforma dependiendo del rol del usuario. Por su parte, la integración de APIs externas y servicios internos permite automatizar procesos y centralizar la información en tiempo real.',
          'En conjunto, este Portal de Colaboradores unifica la comunicación interna, la administración de capacitaciones, la publicación de novedades en el blog y la gestión de usuarios, brindando un entorno seguro, escalable y de fácil mantenimiento. El objetivo es seguir añadiendo módulos conforme evolucionen las necesidades de cada área, haciendo de esta aplicación una herramienta estratégica para la eficiencia de la empresa.',
        ],
        showed: false,
      },
    ],
  ];

  projects: any[] = this.AllProjects[0];

  constructor(private themeService: ThemeService) {
    this.themeService.language$.subscribe((lang) => {
      this.projects = this.AllProjects[lang];
    });
  }

  showDetails(event: MouseEvent, i: number, n: number): void {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (n === 0) {
      this.projects[i].showed = false;
    } else {
      this.projects[i].showed = true;
    }
  }
}
