import React, { Fragment } from 'react'
import { Header, List } from 'semantic-ui-react'
// @ts-ignore
import ListItem from './ListItem';

const Skills = () => {
   
    return (
    <Fragment>
    <Header size='large'className="text-center">Umiejętności</Header>
      {// @ts-ignore
        <ListItem/>
      }

    </Fragment>
    )
}

export default Skills
