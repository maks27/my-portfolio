import React from 'react'
import { Divider, Header } from 'semantic-ui-react'
// @ts-ignore
import ListItem from './ListItem';

const Skills = () => {
   
    return (
    <div className="sections">
    <Header size='large'className="text-center">Umiejętności</Header>
      {// @ts-ignore
        <ListItem/>
      }
        <Divider />

    </div>
    )
}

export default Skills
