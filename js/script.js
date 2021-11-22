let container = document.querySelector('.team-container')
const team = 
[
  {
    teamMember: 'Wayne',
    lastName:' Barnett',
    position:'Founder & CEO',
    image:'img/wayne-barnett-founder-ceo.jpg'
  },
  {
    teamMember:'Angela',
    lastName:' Carroll',
    position:'Chief Editor',
    image:'img/angela-caroll-chief-editor.jpg'
  },  {
    teamMember:'Walter',
    lastName:' Gordon',
    position:'Office Manager',
    image:'img/walter-gordon-office-manager.jpg'
    
  },  {
    teamMember:'Angela',
    lastName:' Lopez',
    position:'Social Media Manager',
    image:'img/angela-lopez-social-media-manager.jpg'
    
  },  {
    teamMember: 'Scott',
    lastName:' Estrada',
    position:'Developer',
    image:'img/scott-estrada-developer.jpg'
    
  },  {
    teamMember:'Barbara',
    lastName:' Ramos',
    position:'Grapshic Designer',
    image:'img/barbara-ramos-graphic-designer.jpg'
    
  }
]

addCard()

function addCard(){
  
  let card = '';
  for(let i = 0; i < team.length; i++ ){
    card += 
    `<div class="team-card">
        <div class="card-image">
            <img id="output "src="${team[i].image}"alt="${team[i].TeamMember + team[i].lastName}"/>
        </div>
        <div class="card-text">
            <h3>${team[i].teamMember + team[i].lastName}</h3>
            <p>${team[i].position}</p>                
        </div>
     </div>`
    }

     container = document.querySelector('.team-container').innerHTML = card;
  }
  
  const loadFile = function(event) {
    let image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
      console.log(image)
  }
  

  document.getElementById('addMemberButton').addEventListener('click', function () {
  
      container.innerHTML = ''; 
      const image = document.getElementById('image-input').value;
      console.log(image);
      const teamMember = document.getElementById('name').value;
      const lastName = document.getElementById('last-name').value;
      const position = document.getElementById('role').value;
      
      const newMember = {
        image,
        teamMember,
        lastName,
        position
    }
    
    console.log(image);
    
    
    
    
    
    
    team.push(newMember);

    // questo mi permette di svuotare il campo di input 

    document.getElementById('image-input').value = '';
    document.getElementById('name').value = '';
    document.getElementById('last-name').value ='';
    document.getElementById('role').value = '';
    console.log(team);
    
    addCard()

})
