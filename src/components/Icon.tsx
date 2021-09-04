import React from 'react'
import { useIcons } from '../lib/useIcons'

type IconProps = {
    name: string
    style: object
}

export const Icon: React.FC<IconProps> = (props) => {
    let {name, ...rest} = props
    let {SvgNameMap} = useIcons()
    let SvgPath = SvgNameMap[props.name]
    return (
        <img src={SvgPath} {...rest} alt={props.name} />
    )
}