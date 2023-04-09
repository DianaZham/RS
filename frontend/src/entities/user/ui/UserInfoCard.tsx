import React, {FC} from 'react'
import {StyledUserInfoCard, StyledUserInfoCardImage} from './styled'
import {Text} from '../../../share'
import profile from '/assets/profile.png'

type UserInfoCardProps = {
    firstName: string
    lastName: string
    email: string
    avatarURL?: string
}

const UserInfoCard: FC<UserInfoCardProps> = ({
    firstName,
    lastName,
    email,
    avatarURL,
}) => {
    return (
        <StyledUserInfoCard>
            <StyledUserInfoCardImage src={profile} alt="profile"/>
            <Text>{`${firstName} ${lastName}`}</Text>
            <Text>{email}</Text>
        </StyledUserInfoCard>
    )
}

UserInfoCard.displayName = 'UserInfoCard'

export default UserInfoCard
