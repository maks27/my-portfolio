import React from 'react'
import { Divider, Header } from 'semantic-ui-react'
import ListItem from './ListItem';

const Skills = () => {
   
    return (
    <div className="sections">
    <Header size='large'className="text-center">Umiejętności</Header>
      {
        <ListItem/>
      }
        <Divider />

    </div>
    )
}

export default Skills
