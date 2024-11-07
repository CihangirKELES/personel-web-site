import jslogo from '../assets/logo-js.png'
import reactlogo from '../assets/logo-react.png'
import reduxlogo from '../assets/logo-redux.png'
import vscodelogo from '../assets/logo-vscode.png'
import nodejslogo from '../assets/logo-nodejs.png'
import figmalogo from '../assets/logo-figma.png'
import project1 from '../assets/project-1.png'
import project2 from '../assets/project-2.png'

const data = {
  projects: [
    {
      name: 'Tech Pizza',

      text: {
        en: 'It is designed for the food industry to provide a great experience in the pizza ordering and delivery process. An interactive structure is provided for user interaction.',
        tr: 'Gıda sektörüne yönelik olarak pizza siparişi ve teslimat sürecine harika bir deneyim sunmak amacıyla tasarlanmıştır. Kullanıcı etkileşimi adına interaktif bir yapı sağlanmıştır.',
      },

      skills: ['react', 'cypress', 'vercel', 'tailwind', 'router', 'toastify', 'axios'],
      website: 'https://fsweb-s4-bonus-challenge-html-pizza.vercel.app/',
      git: 'https://github.com/CihangirKELES/fsweb-s8-challenge-pizza',
      image: project1,
    },

    {
      name: 'Portfolio',

      text: {
        en: 'It is a platform created to showcase the developers talents and projects.',
        tr: 'Geliştiricinin, kullanıcılara yetenek ve projelerini sergilemek amacı ile oluşturulmuş bir platformdur.',
      },
      skills: ['react', 'tailwind', 'vercel'],
      website: '',
      git: 'https://github.com/CihangirKELES/personel-web-site',
      image: project2,
    },
  ],
  skills: [
    { name: 'Java Script', logo: jslogo },
    { name: 'Node', logo: nodejslogo },
    { name: 'React', logo: reactlogo },
    { name: 'VS Code', logo: vscodelogo },
    { name: 'Redux', logo: reduxlogo },
    { name: 'Figma', logo: figmalogo },
  ],
}

export default data