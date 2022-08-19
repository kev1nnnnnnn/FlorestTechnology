/* This example requires Tailwind CSS v2.0+ */
import * as C from './styles';
import { Container } from 'react-bootstrap';

const features = [
    { name: 'Front End', description: 'ReactJS, React-native, Bootstrap, Tailwind, Styled components, core-js' },
    { name: 'Back End', description: "NodeJS, MySQL, Firebase, MongoDB, Express, API'S " },
    { name: 'UI/UX', description: 'Figma, Adobe Photoshop, Ilustrator' },
    { name: 'Infraestrutura de redes', description: 'Sites e sistemas hospedados na AWS.' },
    { name: 'Marketing Digital', description: 'Instagram, Facebook' },
    // { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
  ]
  
  export function Technologies() {
    return (
      <Container>

  
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <C.Title className="text-3xl font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-4xl">
              Profissionais preparados e qualificados
            </C.Title>
            <C.Text>
            Somos uma empresa de desenvolvimento, com diversos projetos no ar, com diversas qualificações, e que possuí o desejo de ajudar pessoas por meio da tecnologia da informação. Desejamos impactar o mundo com a área de desenvolvimento de software!
            </C.Text>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <C.Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className=" rounded-lg"
            />
            <C.Image
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg"
            />
            <C.Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className=" rounded-lg"
            />
           
            <C.Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className=" rounded-lg"
            />
            <C.Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className=" rounded-lg"
            />
            <C.Image
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className=" rounded-lg"
            />
            <C.Image
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className=" rounded-lg"
            />
            <C.Image
             src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className=" rounded-lg"
            />
            <C.Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className=" rounded-lg"
            />
            <C.Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className=" rounded-lg"
            />
          </div>
        </div>
      </div>
      </Container>
    )
  }
  