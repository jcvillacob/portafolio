import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  projects: any[] = [
    { category: 'Frontend',
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
        "Additionally, the platform offers the option to view a detailed breakdown of submitted expenses, the legalizations made, and it allows users to download certificates from previous months and see their personal profiles. The purpose of this tool is to provide relevant information to the drivers without the need to visit the offices or directly communicate with the administrative staff.",
        "Lastly, one of the advantages of this application is its adaptability. It's designed to accommodate future updates, ensuring its relevance and utility in the long run.",
      ],
      showed: false
    },
    { category: 'Frontend',
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
      showed: false
    },
    { category: 'Fullstack',
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
        "The ultimate goal of this tool is to expedite and optimize the negotiation process for the sales team. This approach ensures the avoidance of unnecessary expenses and guarantees a swift and accurate response to customer inquiries.",
      ],
      showed: false
    },
    { category: 'Fullstack',
      name: 'Video Repository',
      imgs: [
        'assets/projects/1_videos.png',
        'assets/projects/2_videos.png',
        'assets/projects/3_videos.png',
        'assets/projects/4_videos.png',
      ],
      p: [
        "The video application, serving as a video repository, is designed to centralize all of the company's videos and training materials. This platform can host both videos and PDFs, allowing employees to access and undergo necessary training sessions or watch vital videos to stay updated on everything the company wishes to convey. By centralizing access to these training evaluations, we significantly enhance the training process. The ultimate goal is to foster better learning among internal collaborators or employees within the company and to achieve greater organizational efficiency.",
        "Technically, the project utilizes Angular for the frontend and Node.js for the backend. Although the initial database used was MongoDB, there's a possibility of migrating to a relational database like SQL in the future. Additionally, the platform leverages cloud storage functionalities, specifically Google Cloud Storage, to store all forms of content, be it videos, images, or PDFs, ensuring their optimal display and accessibility."
      ],
      showed: false
    },
  ];

  showDetails(event: MouseEvent, i: number, n: number): void {
    // Si el click no provino directamente del elemento principal, salimos.
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
