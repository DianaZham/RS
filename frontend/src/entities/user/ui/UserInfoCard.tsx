import React, {FC} from 'react'
import {StyledUserInfoCard, StyledUserInfoCardImage} from './styled'
import {Text} from '../../../share'
import profile from '/assets/profile.png'

type UserInfoCardProps = {
    firstName: string
    lastName: string
}

const UserInfoCard: FC<UserInfoCardProps> = ({
    firstName,
    lastName,
}) => {
    return (
        <StyledUserInfoCard>
            <StyledUserInfoCardImage src={profile} alt="profile"/>
            <Text>{`${firstName} ${lastName}`}</Text>
        </StyledUserInfoCard>
    )
}

UserInfoCard.displayName = 'UserInfoCard'

export default UserInfoCard
