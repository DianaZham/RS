import React, {DetailedHTMLProps, forwardRef} from 'react'

export type TabProps = {
    label: string
} & DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>


const Tab = forwardRef<HTMLDivElement, TabProps>((props, ref) => (
    <div ref={ref} {...props}/>
))

Tab.displayName = 'Tab'

export default Tab
