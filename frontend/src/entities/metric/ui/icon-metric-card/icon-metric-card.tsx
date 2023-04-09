import React, {FC, ReactNode} from 'react'
import {
    StyledIconMetricCard,
    StyledIconMetricCardIconWrapper,
    StyledIconMetricCardText,
    StyledIconMetricCardTextWrapper,
    StyledIconMetricCardTitle
} from './styled'

type IconMetricCardProps = {
    icon: ReactNode
    color: string
    title: string
    metric: number
}

const IconMetricCard: FC<IconMetricCardProps> = ({
    icon,
    metric,
    title,
    color
}) => {
    return (
        <StyledIconMetricCard $color={color}>
            <StyledIconMetricCardIconWrapper>
                {icon}
            </StyledIconMetricCardIconWrapper>
            <StyledIconMetricCardTextWrapper>
                <StyledIconMetricCardTitle $size="large">{title}</StyledIconMetricCardTitle>
                <StyledIconMetricCardText>{metric}</StyledIconMetricCardText>
            </StyledIconMetricCardTextWrapper>
        </StyledIconMetricCard>
    )
}

IconMetricCard.displayName = 'IconMetricCard'

export default IconMetricCard
