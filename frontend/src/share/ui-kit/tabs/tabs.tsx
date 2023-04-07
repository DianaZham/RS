import React, {Children, FC, isValidElement, ReactElement, useState} from 'react'
import {
    StyledContent,
    StyledContentContainer,
    StyledLabel,
    StyledLabelWrapper,
    StyledTabs,
    StyledTabsHeader
} from './styled'
import {TabProps} from './tab'

type TabsProps = {
    children: JSX.Element[]
}

const isTabElement = (child: ReactElement<unknown>): child is ReactElement<TabProps> => {
    const {props} = child
    return typeof props === 'object' && props !== null && 'label' in props && 'children' in props
}

const Tabs: FC<TabsProps> = ({
    children
}) => {

    const childs = Children.map(children, (child, index) => {
        if (!isValidElement(child)) throw new Error('Not corrected react element')
        if (!isTabElement(child)) throw new Error('Children should be Tab component')
        return {
            id: index,
            label: child.props.label,
            children: child.props.children
        }
    })

    const [activeTab, setActiveTab] = useState(0)

    const clickLabelHandler = (id: number) => () => {
        setActiveTab(id)
    }

    return (
        <StyledTabs>
            <StyledTabsHeader>
                <StyledLabelWrapper>
                    {childs.map(({label, id}) => (
                        <StyledLabel
                            as='button'
                            onClick={clickLabelHandler(id)}
                            $isActive={id === activeTab}
                            key={id}
                        >
                            {label}
                        </StyledLabel>
                    ))}
                </StyledLabelWrapper>
            </StyledTabsHeader>
            <StyledContentContainer>
                {childs.map(({children, id}) => (
                    <StyledContent
                        key={id}
                        $isVisible={id === activeTab}
                    >
                        {children}
                    </StyledContent>
                ))}
            </StyledContentContainer>
        </StyledTabs>
    )
}

Tabs.displayName = 'Tabs'

export default Tabs
