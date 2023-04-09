import React, {FC, ReactNode} from 'react'
import {StyledMetricList, StyledMetricListInner, StyledMetricListRow, StyledMetricListTitle} from './styled'

type MetricListProps = {
    title: string
    metrics: {
        title: ReactNode
        value: string
    }[]
    color: string
}

const MetricList: FC<MetricListProps> = ({
    title,
    color,
    metrics
}) => {
    return (
        <StyledMetricList $color={color}>
            <StyledMetricListTitle>{title}</StyledMetricListTitle>
            <StyledMetricListInner>
                {metrics.map(({value, title}, index) => (
                    <StyledMetricListRow key={index}>
                        {title}
                        <span>
                            {value}
                        </span>
                    </StyledMetricListRow>
                ))}
            </StyledMetricListInner>
        </StyledMetricList>
    )
}

MetricList.displayName = 'MetricList'

export default MetricList
