import React from 'react'
import Icon1 from '../../images/flask.svg'
import Icon2 from '../../images/github.svg'
import Icon3 from '../../images/googlecloud.svg'

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP
 } from './ServicesElements'

export const Services = () => {
  return (
    <>
        <ServicesContainer id="services">
            <ServicesH1>
                Frameworks of choice.
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-plain.svg'} />
                    
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"} />
                    
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg"} />
                    
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"} />
                    
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"} />
                    
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} />
                    
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"} />
                    
                </ServicesCard>

                
                

                
            </ServicesWrapper>
        </ServicesContainer>
    </>
  )
}

export default Services