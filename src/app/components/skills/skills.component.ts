import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  experiences: any[] = [
    { name: 'Web Development', showed: false, img: 'https://th.bing.com/th/id/OIG.wGMwfHYNqOKz.L9NXL38?pid=ImgGn', 
        text: [
          {name: 'Front-End Development', description: 'Experience in HTML, CSS, JS, and Angular, with a passion for design and usability.'},
          {name: 'Full-Stack Development', description: 'Experience in Full-Stack projects using NodeJS, MongoDB, and MySQL.'},
          {name: 'Version Control with GIT', description: 'Efficient version handling and collaboration on team projects.'},
          {name: 'Data Analysis with Python', description: 'Utilization of Python for data analysis and process automation.'},
          {name: 'Business Intelligence Tools', description: 'Proficiency in Excel and PowerBi for data visualization and analysis.'}
        ]
    },
    { name: 'Complementary Skills', showed: false, img: 'https://th.bing.com/th/id/OIG.nrUQY0RGmrcoDwQQxk5W?pid=ImgGn', 
        text: [
          {name: 'SCRUM Methodology', description: 'Application of the SCRUM methodology in project development, focusing on collaboration and continuous delivery.'},
          {name: 'Working in Multidisciplinary Teams', description: 'Experience in the innovation area, working with diverse teams, and adapting to different roles and responsibilities.'},
          {name: 'Version Control with GIT', description: 'Efficient version handling and collaboration on team projects.'},
          {name: 'Continuous Learning', description: 'Commitment to professional growth through courses and self-learning.'}
        ]
    },
    { name: 'Soft Skills', showed: false, img: 'https://th.bing.com/th/id/OIG.dQLikSoSM6eyNOeWkp9h?pid=ImgGn', 
        text: [
          {name: 'Effective Communication', description: 'Ability to communicate ideas and collaborate effectively with multidisciplinary teams.'},
          {name: 'Adaptability', description: 'Flexibility to adapt to different environments and challenges, especially in the area of innovation.'},
          {name: 'Problem-Solving', description: 'Creative and analytical approach to problem-solving and process improvement.'},
          {name: 'Self-Management and Organization', description: 'Skill in managing time and priorities, maintaining focus on goals and deadlines.'}
        ]
    },
  ];

  showExp(i: number): void {
    this.experiences[i].showed = !this.experiences[i].showed;
  }

}
