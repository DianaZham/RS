import React, {Children, FC, Fragment, ReactNode} from 'react'
import {StyledBreadcrumbs} from './styled'

type BreadcrumbsProps = {
    separator?: string,
    children: ReactNode | ReactNode[]
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({
    children,
    separator = '/'
}) => {

    const childs = Children.toArray(children).map((child, index, arr) => {
        return (
            <Fragment key={index}>
                {child}
                {index !== arr.length - 1 && <span>{separator}</span>}
            </Fragment>
        )
    })

    return (
        <StyledBreadcrumbs>
            {childs}
        </StyledBreadcrumbs>
    )
}

Breadcrumbs.displayName = 'Breadcrumbs'

export default Breadcrumbs
