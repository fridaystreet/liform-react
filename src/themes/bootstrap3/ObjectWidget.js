import React from 'react'
import renderFields from '../../renderFields'

const Widget = props =>  {
    return (
        <div>
        <label>{props.label}</label>
        {renderFields(props.schema, props.theme, props.fieldName && props.fieldName + '.')}
        </div>
    )
}

Widget.propTypes = { schema: React.PropTypes.object.isRequired }

export default Widget
