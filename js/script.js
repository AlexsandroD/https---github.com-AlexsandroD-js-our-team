const team = 
[
    {
        TeamMember: 'Wayne',
        lastName:' Barnett',
        position:'Founder & CEO',
        image:'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        TeamMember:'Angela',
        lastName:' Carroll',
        position:'Chief Editor',
        image:'img/angela-caroll-chief-editor.jpg'
    },  {
        TeamMember:'Walter',
        lastName:' Gordon',
        position:'Office Manager',
        image:'img/walter-gordon-office-manager.jpg'

    },  {
        TeamMember:'Angela',
        lastName:' Lopez',
        position:'Social Media Manager',
        image:'img/angela-lopez-social-media-manager.jpg'

    },  {
        TeamMember: 'Scott',
        lastName:' Estrada',
        position:'Developer',
        image:'img/scott-estrada-developer.jpg'

    },  {
        TeamMember:'Barbara',
        lastName:' Ramos',
        position:'Grapshic Designer',
        image:'img/barbara-ramos-graphic-designer.jpg'

    }
]

console.log(team)

let card = '';
for(i = 0; i < team.length; i++ ){
   card += ` <div class="team-card">
   <div class="card-image">
     <img
       src="${team[i].image}"
       alt="Wayne Barnett"
     />
   </div>
   <div class="card-text">
     <h3>${team[i].TeamMember + team[i].lastName}</h3>
     <p>${team[i].position}</p>
   </div>
 </div>`
}

const container = document.querySelector('.team-container').innerHTML = card;