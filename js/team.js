let name = document.getElementById('team-name')
let position = document.getElementById('team-position')
let desc = document.getElementById('team-desc')


const showTeamInfo = (member) => {
  switch (member) {
    case 'salem':
      name.innerHTML = 'Salem Abderouf'
      position.innerHTML = 'Developer'
      desc.innerHTML = `Engineering student at the National Higher School of Biotechnology,<br> with high tendency towards
        technology.<br>
        Autodidact mobile developer and front end developer`
      break;
    case 'khaled':
      name.innerHTML = 'Khaled'
      position.innerHTML = 'English Instructor'
      desc.innerHTML = `Engineering student at the National Higher School of Biotechnology,<br> with high tendency towards
        technology.<br>
        Autodidact mobile developer and front end developer`
      break;
    case 'ahmed':
      name.innerHTML = 'Mohamed'
      position.innerHTML = 'UI and UX'
      desc.innerHTML = `Engineering student at the National Higher School of Biotechnology,<br> with high tendency towards
        technology.<br>
        Autodidact mobile developer and front end developer`
      break;
  }
}