import React, {FC, ReactNode} from 'react'
import {StyledDiagramMetricCard, StyledDiagramMetricCardInner, StyledDiagramMetricCardTitle} from './styled'

type DiagramMetricCardProps = {
    title: string
    color: string
    diagram: ReactNode
}

const DiagramMetricCard: FC<DiagramMetricCardProps> = ({
    title,
    color,
    diagram
}) => {
    return (
        <StyledDiagramMetricCard $color={color}>
            <StyledDiagramMetricCardTitle>{title}</StyledDiagramMetricCardTitle>
            <StyledDiagramMetricCardInner>
                {diagram}
            </StyledDiagramMetricCardInner>
        </StyledDiagramMetricCard>
    )
}

DiagramMetricCard.displayName = 'DiagramMetricCard'

export default DiagramMetricCard
