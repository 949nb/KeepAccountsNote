
import { Route, Switch } from 'react-router-dom'
import React from 'react'
import TagDetail from './TagDetail'
import { TagsList, TagsParamsProps } from './TagsList'


const Tags: React.FC<TagsParamsProps> = ({match}) => {
    return (
        <Switch>
            <Route exact={ true } path={ match.path + '/:tagId' } component={TagDetail}/>
            <Route path={match.path} component={ TagsList }/>
        </Switch>
    )
}

export default Tags